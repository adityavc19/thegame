// ========================================
// AURORA LABS - Google Apps Script
// Handles event ingestion + dashboard data serving
// ========================================

// Sheet name where events are logged
const SHEET_NAME = 'Events';

function doGet(e) {
  const action = e.parameter.action;

  // Dashboard data request
  if (action === 'dashboard') {
    return serveDashboardData();
  }

  // Default: log event
  return logEvent(e);
}

function doPost(e) {
  return logEvent(e);
}

// ── Event Logging ──────────────────────────────────────────────────────────
function logEvent(e) {
  try {
    const dataStr = e.parameter.data;
    if (!dataStr) {
      return ContentService.createTextOutput('No data').setMimeType(ContentService.MimeType.TEXT);
    }

    const data = JSON.parse(dataStr);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
                  || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

    // Create headers if first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'timestamp', 'sessionId', 'userId', 'playCount', 'event',
        'currentStage', 'currentScreen', 'decisionsCount', 'data'
      ]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.sessionId || '',
      data.userId || '',
      data.playCount || 0,
      data.event || '',
      data.currentStage || '',
      data.currentScreen || '',
      data.decisionsCount || 0,
      JSON.stringify(data.data || {})
    ]);

    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + err.message).setMimeType(ContentService.MimeType.TEXT);
  }
}

// ── Dashboard Data Serving ─────────────────────────────────────────────────
function serveDashboardData() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) {
      return _jsonResponse({ events: [], summary: {} });
    }

    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);

    // Convert to array of objects
    const events = rows.map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        if (h === 'data') {
          try { obj[h] = JSON.parse(row[i]); } catch { obj[h] = {}; }
        } else {
          obj[h] = row[i];
        }
      });
      return obj;
    });

    // Pre-compute summary stats server-side to reduce payload
    const summary = computeSummary(events);

    return _jsonResponse({ events: events, summary: summary });
  } catch (err) {
    return _jsonResponse({ error: err.message });
  }
}

function computeSummary(events) {
  const sessions = {};
  const decisions = {};
  const infoCardTypes = {};
  const screenViews = {};

  events.forEach(e => {
    const sid = e.sessionId;
    if (!sessions[sid]) {
      sessions[sid] = { events: [], startTime: null, endTime: null, completed: false, decisions: [] };
    }
    sessions[sid].events.push(e);

    if (e.event === 'session_start') sessions[sid].startTime = e.timestamp;
    if (e.event === 'session_end') {
      sessions[sid].endTime = e.timestamp;
      if (e.data && e.data.gameCompleted) sessions[sid].completed = true;
    }
    if (e.event === 'game_complete') sessions[sid].completed = true;

    // Aggregate decisions
    if (e.event === 'decision_made' && e.data) {
      const key = e.data.stage + ':' + e.data.optionId;
      decisions[key] = (decisions[key] || 0) + 1;
      sessions[sid].decisions.push(e.data);
    }

    // Aggregate info card types
    if (e.event === 'info_card_viewed' && e.data) {
      const type = e.data.cardType || 'unknown';
      infoCardTypes[type] = (infoCardTypes[type] || 0) + 1;
    }

    // Aggregate screen views
    if (e.event === 'screen_view' && e.data) {
      const screen = e.data.screen || 'unknown';
      screenViews[screen] = (screenViews[screen] || 0) + 1;
    }
  });

  // Completion times
  const completionTimes = [];
  Object.values(sessions).forEach(s => {
    if (s.completed) {
      const completeEvent = s.events.find(e => e.event === 'game_complete');
      if (completeEvent && completeEvent.data && completeEvent.data.totalTime) {
        completionTimes.push(completeEvent.data.totalTime);
      }
    }
  });

  const totalSessions = Object.keys(sessions).length;
  const gameStarts = events.filter(e => e.event === 'game_start').length;
  const gameCompletes = events.filter(e => e.event === 'game_complete').length;
  const muteEvents = events.filter(e => e.event === 'mute_toggle');
  const audioSkips = events.filter(e => e.event === 'audio_skip');
  const backstoryStarts = events.filter(e => e.event === 'backstory_started');
  const backstoryCompletes = events.filter(e => e.event === 'backstory_complete');

  return {
    totalSessions,
    gameStarts,
    gameCompletes,
    completionRate: gameStarts > 0 ? ((gameCompletes / gameStarts) * 100).toFixed(1) : 0,
    avgCompletionTime: completionTimes.length > 0 ? Math.round(completionTimes.reduce((a,b) => a+b, 0) / completionTimes.length) : 0,
    completionTimeDistribution: completionTimes.sort((a,b) => a - b),
    decisions,
    infoCardTypes,
    screenViews,
    muteCount: muteEvents.length,
    mutedTrue: muteEvents.filter(e => e.data && e.data.muted).length,
    audioSkipCount: audioSkips.length,
    backstoryStarted: backstoryStarts.length,
    backstoryCompleted: backstoryCompletes.length
  };
}

function _jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
