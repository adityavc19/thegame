# Decision Tree Audit — Microsoft Mobile Wars

**Generated:** 2026-03-16 | **Source:** `js/data.js`

## Initial State
| Metric | Value |
|--------|-------|
| Market Share | 42% |
| Cash | $34B |
| Market Cap | $250B |
| Mobile Revenue | $0.8B |
| Mobile Costs | $0.4B |
| Apple Share | 0% |
| Google Share | 0% |
| Nokia Share | 49% |
| BlackBerry Share | 9% |

---

## D1: "The iPhone Moment" — JAN 2007

| # | Option | Description | Immediate mktShare | Delayed mktShare | Revenue | Costs | Competitor Δ | Threat / Emerging | Routes to |
|---|--------|-------------|-------------------|-----------------|---------|-------|-------------|-------------------|-----------|
| 1 | **Reinforce Enterprise** | Double down on enterprise moats. Hold the fortress. | **0** | **-14** | +0.1 | 0 | Apple +3, Nokia -2, BB +2 | "The enterprise fortress holds, for now." | D2-A |
| 2 | **Launch Consumer Offensive** | $3B war chest. Build consumer phone. Project Pink. | 0 | -20 | 0 / -0.2 | +0.3 / +0.4 | Apple +5, Google +2, Nokia -3 | Zune Phone prototypes not inspiring | D2-B |
| 3 | **Acquire Nokia** | Hostile $25B acquisition of Nokia. Own hardware+software. | 0 | **+25** | 0 / +3.0 | +0.1 / +2.5 | Apple +3, Google +1, Nokia→owned, BB -1 | First mover on hardware integration | D2-C |
| 4 | **Wait and Watch** | Hold position. Let market reveal if iPhone is real. | **-3** | **-7** | -0.05 / -0.15 | +0.05 / +0.1 | Apple +3, Google +1, Nokia -1 | Google drops the real bomb (Android) | D2-D |

### ⚠️ Issues Found
- **Option 1 (Enterprise):** `immediate.marketShare: 0` — choosing to reinforce enterprise should show *some* change. Even defending position successfully = slight erosion as market expands. Recommend: `-2` immediate.
- **Option 1 (Enterprise):** `delayed.marketShare: -14` — still aggressive for 6 months. The metrics audit suggested `-5 to -8`.
- **Option 3 (Nokia):** `delayed.marketShare: +25` — conflates Symbian feature phone share with smartphone share. Real smartphone share gain would be +8 to +12.
- **Option 2 (Consumer):** `delayed.marketShare: -20` — very harsh. Consumer pivot takes time but -20 in 6 months is extreme. Recommend: `-8 to -10`.

---

## D2-A: "The BYOD Breach" — SEP 2009 (Enterprise Path)

| # | Option | Description | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------|-------------------|-----------------|---------|-------|-----------|
| 1 | **Deepen Enterprise Moats** | Double down on security, MDM, compliance. | -5 | -7 | +0.15 / +0.1 | +0.05 / +0.05 | D3-E |
| 2 | **Enterprise + Consumer Hybrid** | Build WP7 while maintaining enterprise. | -3 | -5 | +0.05 / -0.1 | +0.15 / +0.2 | D3-P-Standard |
| 3 | **Acquire BlackBerry** | Buy BB for $12B. Own enterprise mobile. | **+8** | -3 | +1.0 / +0.3 | +0.8 / +0.6 | D3-I-BB |
| 4 | **Concede Mobile, Pivot to Services** | Give up platform ambitions. Build apps for iOS/Android. | -3 | -5 | -0.1 / -0.2 | -0.1 / -0.05 | D3-P-Standard |

### ⚠️ Issues Found
- **Option 1 (Deepen Enterprise):** Combined D1+D2 enterprise path = 0 + (-5) + (-14) + (-7) = -26 market share. From 42% → 16%. This is plausible for 2007-2009 but the D1 delayed -14 is the main problem.
- **Option 4 (Concede):** Routes to D3-P-Standard (platform builder) which is odd for a "concede mobile" choice. Should arguably be an early exit or services-focused variant.

---

## D2-B: "The Free Problem" — SEP 2009 (Consumer Path)

| # | Option | Description | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------|-------------------|-----------------|---------|-------|-----------|
| 1 | **Match Free: Give Away Windows** | Free licensing to compete with Android. | -2 | -3 | -0.3 / -0.15 | +0.2 / +0.1 | D3-P-Standard |
| 2 | **Vertical Integration: Build the Phone** | Microsoft-branded hardware. Surface Phone concept. | -3 | -4 | -0.1 / 0 | +0.3 / +0.25 | D3-P-Vertical |
| 3 | **Premium Positioning** | Quality over free. Differentiated experience. | -5 | -7 | +0.05 / -0.05 | +0.1 / +0.05 | D3-P-Standard |
| 4 | **Ship KIN/Pink Early** | Rush consumer phone to market. | -2 | -5 | 0 / -0.15 | +0.2 / +0.15 | D3-P-Standard |

### ⚠️ Issues Found
- **All options:** Combined with D1 consumer (-20 delayed), total share loss is severe. D1+D2 consumer path: 0 + (-20) + (-2 to -5) + (-3 to -7) = -25 to -32. From 42% → 10-17%.
- **Option 3 (Premium):** Loses the most share (-12 combined) despite being a "hold position" strategy. The "do nothing" tax seems too high.

---

## D2-C: "The Platform War Within" — SEP 2009 (Nokia Acquisition Path)

| # | Option | Description | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------|-------------------|-----------------|---------|-------|-----------|
| 1 | **Force Windows Phone on Nokia** | Kill Symbian immediately. All-Windows. | -8 | -5 | -0.5 / +0.1 | +0.2 / +0.3 | D3-I-Force-Windows |
| 2 | **Dual Platform Strategy** | Run Symbian + WP simultaneously. | -3 | -5 | 0 / -0.1 | +0.4 / +0.3 | D3-I-Dual |
| 3 | **Let Nokia Lead** | Nokia keeps MeeGo/Symbian, Microsoft provides services. | -2 | -4 | +0.2 / +0.1 | +0.15 / +0.2 | D3-I-Nokia-Leads |
| 4 | **Nokia Android** | Put Android on Nokia hardware with Microsoft services. | -5 | **+2** | -0.2 / +0.3 | +0.25 / +0.15 | D3-A-Nokia-Android |

### ⚠️ Issues Found
- **Option 1 (Force Windows):** With D1's +25 delayed share, player starts D2-C around 67%. Then -8 and -5 = 54%. Still unrealistically high if the +25 isn't fixed.
- **Option 4 (Nokia Android):** Only D2-C option with positive delayed share. Makes sense — Android is the winning platform.

---

## D2-D: "The Reckoning" — SEP 2009 (Wait Path)

| # | Option | Description | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------|-------------------|-----------------|---------|-------|-----------|
| 1 | **Acquire Nokia Now (Cheaper)** | Buy Nokia at $15B (discounted). | 0 | +5 | +0.5 / +1.0 | +1.0 / +0.8 | D3-I-Nokia |
| 2 | **Commit to Own Platform (WP7)** | Build from scratch. Go it alone. | -5 | -3 | -0.1 / +0.05 | +0.3 / +0.2 | D3-P-Already-Building |
| 3 | **Fork Android** | Microsoft's own Android fork. | -3 | -2 | -0.1 / +0.1 | +0.2 / +0.15 | D3-A-Fork-No-Hardware |
| 4 | **Concede Mobile, Pivot to Services** | Exit mobile. Build apps for others' platforms. | -5 | -5 | -0.2 / +0.3 | -0.15 / +0.1 | **EARLY ENDING** → "Services Pivot" |

---

## D3 Variants — JAN 2011 (11 variants, 27 options total)

### D3-P-Standard: "The Nokia Bet"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Full Nokia Partnership | -3 | -3 | **4** | D4-Still-Fighting |
| 2 | Go It Alone | -5 | -3 | **2** | D4-Still-Fighting |
| 3 | Nokia + Differentiation | -2 | -2 | **5** | D4-Differentiated |

### D3-P-Vertical: "The Surface Phone Gambit"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Double Down on Surface Phone | -3 | -2 | **5** | D4-Differentiated |
| 2 | Add Nokia Partnership | -4 | -3 | **3** | D4-Still-Fighting |
| 3 | Pivot to Services Layer | -5 | -3 | **2** | D4-Still-Fighting |

### D3-P-Already-Building: "The Late Start"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Nokia Alliance | -4 | -3 | **3** | D4-Crisis-Mode |
| 2 | Solo Mission | -5 | -3 | **2** | D4-Still-Fighting |
| 3 | Accelerate with Nokia | -3 | -2 | **3** | D4-Still-Fighting |

### D3-E: "Enterprise's Last Stand"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Enterprise Fortress 2.0 | -3 | -5 | **5** | D4-Still-Fighting |
| 2 | Enterprise + Consumer Bridge | -2 | -3 | **3** | D4-Still-Fighting |
| 3 | Nokia Enterprise Alliance | -2 | -2 | **6** | D4-Differentiated |

### D3-I-BB: "The BlackBerry Integration"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Full Integration | -3 | -5 | **4** | D4-Crisis-Mode |
| 2 | Spin Off BlackBerry | -5 | -3 | **3** | D4-Still-Fighting |

### D3-I-Force-Windows: "The Osborne Effect"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Accelerate Windows: Ship Now | -5 | -4 | **2** | D4-Crisis-Mode-Nokia-Owned |
| 2 | Build the Bridge: Symbian Lives | -3 | -2 | **3** | D4-Still-Fighting |

### D3-I-Dual: "The Decision That Never Came"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Kill Symbian: All Windows | -4 | -3 | **3** | D4-Still-Fighting |
| 2 | Keep Both: Managed Decline | -3 | -5 | **2** | D4-Crisis-Mode-Nokia-Owned |

### D3-I-Nokia-Leads: "The MeeGo Moment"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Full MeeGo Commitment | -2 | -1 | **7** | D4-Differentiated |
| 2 | Redirect to Windows Phone | -3 | -3 | **3** | D4-Still-Fighting |

### D3-I-Nokia (Late Acquisition): "The Bargain Price"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Aggressive Integration | -4 | -4 | **2** | D4-Crisis-Mode-Nokia-Owned |
| 2 | Gradual Merge | -2 | -2 | **3** | D4-Still-Fighting |

### D3-A-Nokia-Android: "The Android Paradox"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Commit Fully to Nokia Android | -1 | -2 | **12** ⚠️ | D4-Differentiated |
| 2 | Keep Windows Phone Alive | -2 | -3 | **3** | D4-Still-Fighting |

### D3-A-Fork-No-Hardware: "The Amazon Problem"
| # | Option | Immediate mktShare | Delayed mktShare | mktShareOverride | Routes to |
|---|--------|-------------------|-----------------|-----------------|-----------|
| 1 | Build Microsoft App Store | -2 | -2 | **6** | D4-Differentiated |
| 2 | Accept Services Focus | -1 | -2 | **3** | D4-Still-Fighting |

### ⚠️ D3 Issues
- **marketShareOverride** resets the running total. A player at 42-14-5-7 = 16% gets overridden to 2-7%. This is the mechanism that normalizes wildly different D1/D2 paths.
- **D3-A-Nokia-Android Option 1:** `marketShareOverride: 12` — real Windows Phone peak was 3.6%. Even Nokia Android wouldn't hit 12%. Recommend: **5-6%**.
- **D3-I-Nokia-Leads Option 1 (MeeGo):** `marketShareOverride: 7` — optimistic but possible in alternate history (MeeGo N9 was well-received).
- **Most "still-fighting" paths override to 2-3%** — this is historically accurate for Windows Phone.

---

## D4 Variants — JAN 2013 (4 variants, 8 options)

### D4-Still-Fighting: "The 3% Question"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------------|-----------------|---------|-------|-----------|
| 1 | Double Down: Acquire Nokia | 0 | +3 | +0.3/+0.4 | +0.5/+0.4 | D5-Platform-Contender |
| 2 | Managed Retreat | -2 | -1 | -0.1/+0.05 | -0.1/+0.03 | D5-Niche-Survivor |

### D4-Crisis-Mode: "The Write-Down"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------------|-----------------|---------|-------|-----------|
| 1 | Fight Through | -1 | -1 | +0.05/+0.1 | +0.3/+0.2 | D5-Last-Stand |
| 2 | Strategic Exit | -3 | -2 | -0.2/+0.1 | -0.15/+0.05 | **ENDING: strategic-exit** |

### D4-Crisis-Mode-Nokia-Owned: "The Nokia Write-Down"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------------|-----------------|---------|-------|-----------|
| 1 | Fight Through | -1 | -1 | +0.05/+0.08 | +0.35/+0.2 | D5-Last-Stand |
| 2 | Strategic Exit | -3 | -2 | -0.2/+0.1 | -0.2/+0.05 | **ENDING: strategic-exit** |

### D4-Differentiated: "The Differentiation Dividend"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Routes to |
|---|--------|-------------------|-----------------|---------|-------|-----------|
| 1 | Press the Advantage | **+1** | **+2** | +0.3/+0.4 | +0.25/+0.25 | D5-Platform-Contender |
| 2 | Harvest the Niche | 0 | 0 | +0.2/+0.15 | +0.1/+0.05 | D5-Niche-Survivor |

### ⚠️ D4 Issues
- **D4-Differentiated** is the only path with positive share growth. All others are declining or flat. This feels right — differentiation is the only way to grow in a duopoly.
- **D4-Still-Fighting Option 1:** Acquiring Nokia at D4 gives 0 immediate + 3 delayed share. Starting from ~3%, ending at ~6%. Reasonable.

---

## D5 Variants — JAN 2015 (3 variants, 6 options)

### D5-Last-Stand: "The $7.6B Write-Down"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Ending |
|---|--------|-------------------|-----------------|---------|-------|--------|
| 1 | Fight to the End: W10 Mobile | -1 | -2 | +0.05/-0.3 | +0.4/+0.2 | fought-to-end |
| 2 | Graceful Exit: Embrace Services | -3 | -3 | -0.2/+0.2 | -0.15/+0.1 | graceful-exit |

### D5-Niche-Survivor: "The Profitable Third"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Ending |
|---|--------|-------------------|-----------------|---------|-------|--------|
| 1 | Defend the Niche | -1 | -1 | +0.08/+0.1 | +0.04/+0.03 | sustainable-niche |
| 2 | Sell the Division | -3 | -5 | -0.3/+0.05 | -0.25/+0.02 | sold-division |

### D5-Platform-Contender: "The Third Ecosystem"
| # | Option | Immediate mktShare | Delayed mktShare | Revenue | Costs | Ending |
|---|--------|-------------------|-----------------|---------|-------|--------|
| 1 | Sustain and Solidify | **+1** | **+2** | +0.35/+0.5 | +0.25/+0.3 | sustainable-third |
| 2 | Push for Second: Challenge iOS | **+2** | **+1** | +0.4/+0.45 | +0.8/+0.35 | pushed-for-second |

---

## 8 Endings

| Ending | Title | Achievement | Best Path Example |
|--------|-------|-------------|-------------------|
| sustainable-third | The Sustainable Third | Platform Pioneer | D1→Nokia → D2-C→Nokia-Leads → D3→MeeGo → D4→Press Advantage → D5→Sustain |
| pushed-for-second | The Push | Ambitious Leader | Any path → D4-Differentiated → D5-Contender → Push for Second |
| sustainable-niche | Niche Master | Niche Commander | Most paths → D4-Still-Fighting/Differentiated → D5→Defend Niche |
| graceful-exit | Graceful Exit | Strategic Wisdom | Crisis paths → D5-Last-Stand → Graceful Exit |
| fought-to-end | Fought to the End | Never Surrender | Crisis paths → D5-Last-Stand → Fight to End |
| sold-division | Strategic Sale | Business Acumen | Niche paths → D5-Niche → Sell Division |
| strategic-exit | Strategic Exit | Pragmatic Leader | Crisis paths → D4 exit (early ending) |
| early-exit-services | Services Pivot | Pivot Master | D2-D Option 4 (early ending) |

---

## Key Metric Trajectories (Sample Paths)

### Path A: Enterprise → Enterprise → Enterprise Fortress → Still-Fighting → Niche
`42 → 42(+0) → 28(-14) → 23(-5) → 16(-7) → 5(override) → 0(-5) → 3(-2+override) → 2(-1) → 1(-1)`

### Path B: Nokia D1 → Force Windows → Accelerate → Crisis-Nokia → Fight → Fought-to-End
`42 → 42(+0) → 67(+25) → 59(-8) → 54(-5) → 2(override) → -3(-5) → 2(override) → 1(-1) → 0(-1) → -2(-2)`

### Path C: Wait → WP7 → Nokia Alliance → Crisis → Fight → Last-Stand → Graceful Exit
`42 → 39(-3) → 32(-7) → 27(-5) → 24(-3) → 3(override) → 0(-3) → 3(override) → 2(-1) → 1(-1) → -2(-3) → -5(-3)`

### ⚠️ Negative market share problem
Several paths can go negative. The code clamps to 0 (`if (this.metrics.marketShare < 0) this.metrics.marketShare = 0;`) but the trajectory shows the game is subtracting past zero before clamping.

---

## Summary of Issues — RESOLVED 2026-03-16

| Issue | Fix Applied |
|-------|-------------|
| D1 Enterprise `immediate.marketShare: 0` | → `-2` |
| D1 Enterprise `delayed.marketShare: -14` | → `-6` (+ added competitor share deltas) |
| D1 Consumer `delayed.marketShare: -20` | → `-8` (+ added competitor share deltas) |
| D1 Nokia `delayed.marketShare: +25` | → `+10` (+ reduced revenue/costs) |
| D3 Nokia-Android `marketShareOverride: 12` | → `5` |
| D4-Still-Fighting Nokia acquisition override 12 | → `5` |
| D4-Differentiated Scale override 12 | → `8` |
| All downstream narrative % references | Updated (12%→8%, 14%→10%, 18%→12%, 180M→120M users, etc.) |
| D2 playerPosition stats | Updated to match new D1 trajectories |

### Remaining (not yet addressed)
| Priority | Issue | Location |
|----------|-------|----------|
| 🟡 Medium | Negative market share on several paths | Multiple — code clamps to 0 |
| 🟢 Low | D2-A Option 4 "Concede" routes to platform-builder | D2-A opt 4 |
