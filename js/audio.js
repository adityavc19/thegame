// ─────────────────────────────────────────────────────────────────────────────
// Mobile Wars — Audio Engine
// Executive drama BGM inspired by Succession / Nicholas Britell
// Warm piano ostinatos, lush string pads, dignified bass
// 3 phases: disruption → boardroom → pivot
// ─────────────────────────────────────────────────────────────────────────────

const AudioEngine = (() => {
    let _started = false;
    let _muted = false;
    let _currentPhase = null;
    let _phaseToken = 0;

    // Audio graph nodes
    let _master = null;
    let _reverbSend = null;
    let _bassGain, _pianoGain, _stringsGain, _melodyGain;

    // Synthesizers
    let _bassSynth   = null;  // Warm sub — the weight of empire
    let _pianoSynth  = null;  // Felt piano ostinato — Succession's heartbeat
    let _stringsSynth = null; // Lush pad — boardroom gravitas
    let _melodySynth = null;  // Solo voice — power and melancholy

    // Sequencers / Loops
    let _pianoSeq  = null;
    let _bassSeq   = null;
    let _melodySeq = null;
    let _stringsLoop = null;

    // ── Phase definitions ─────────────────────────────────────────────────────
    // Think: piano-driven, slow, dignified, with undercurrents of tension
    const PHASES = {
        // D1: iPhone launches. Unease beneath confidence. Slow piano with dissonant undertow.
        disruption: {
            bpm: 72,
            bass:    { notes: ['D2', null, null, null, 'A1', null, null, null], subdiv: '4n', db: -14 },
            piano:   { notes: ['D4', 'F#4', 'A4', null, 'D4', 'G4', 'Bb4', null, 'D4', 'F#4', 'A4', 'D5', 'A4', 'F#4', null, null], subdiv: '8n', db: -10 },
            strings: { chord: ['D3', 'F#3', 'A3'], attack: 4, db: -18 },
            melody:  { notes: ['A5', null, null, null, 'G5', null, 'F#5', null, null, null, null, null, 'E5', null, 'D5', null], subdiv: '4n', db: -20 },
        },
        // D2–D4: Boardroom strategy. Regal, measured, the weight of decisions.
        boardroom: {
            bpm: 66,
            bass:    { notes: ['G2', null, null, null, 'D2', null, null, null, 'C2', null, null, null, 'D2', null, null, null], subdiv: '4n', db: -12 },
            piano:   { notes: ['G3', 'B3', 'D4', null, 'G3', 'C4', 'E4', null, 'G3', 'B3', 'D4', 'G4', 'D4', 'B3', null, null], subdiv: '8n', db: -9 },
            strings: { chord: ['G2', 'B2', 'D3', 'G3'], attack: 5, db: -16 },
            melody:  { notes: ['D5', null, null, null, 'E5', null, null, null, 'G5', null, 'F#5', null, 'D5', null, null, null], subdiv: '4n', db: -22 },
        },
        // D5: Nadella era. Clarity, acceptance, a bittersweet resolution.
        pivot: {
            bpm: 60,
            bass:    { notes: ['C2', null, null, null, null, null, 'G1', null, null, null, null, null, null, null, null, null], subdiv: '4n', db: -16 },
            piano:   { notes: ['C4', 'E4', 'G4', null, 'C4', 'F4', 'A4', null, 'C4', 'E4', 'G4', 'C5', 'G4', 'E4', null, null], subdiv: '8n', db: -8 },
            strings: { chord: ['C3', 'E3', 'G3', 'C4'], attack: 6, db: -14 },
            melody:  { notes: ['G5', null, null, null, null, null, 'E5', null, null, null, 'C5', null, null, null, null, null], subdiv: '4n', db: -24 },
        },
    };

    function _dbToGain(db) {
        return Math.pow(10, db / 20);
    }

    // ── Build the synth chain ─────────────────────────────────────────────────
    function _buildChain() {
        _master = new Tone.Gain(0.7).toDestination();

        // Reverb for concert-hall warmth
        _reverbSend = new Tone.Reverb({ decay: 3.5, wet: 0.3 }).connect(_master);
        _reverbSend.generate();

        _bassGain    = new Tone.Gain(0).connect(_master);
        _pianoGain   = new Tone.Gain(0).connect(_reverbSend);
        _stringsGain = new Tone.Gain(0).connect(_reverbSend);
        _melodyGain  = new Tone.Gain(0).connect(_reverbSend);

        // Bass: warm FM sine — the foundation, felt more than heard
        _bassSynth = new Tone.FMSynth({
            harmonicity: 1,
            modulationIndex: 0.5,
            oscillator: { type: 'sine' },
            modulation: { type: 'sine' },
            envelope: { attack: 0.3, decay: 0.8, sustain: 0.6, release: 1.5 },
            modulationEnvelope: { attack: 0.5, decay: 0.3, sustain: 0.4, release: 1 },
        }).connect(_bassGain);

        // Piano: sine + triangle layered — warm felt piano character
        // (Real piano sample would be ideal, but this gets close with synthesis)
        _pianoSynth = new Tone.Synth({
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.005, decay: 0.6, sustain: 0.1, release: 1.2 },
        }).connect(_pianoGain);

        // Strings: filtered sawtooth poly — lush, warm, cinematic
        const _stringsFilter = new Tone.Filter({
            type: 'lowpass',
            frequency: 1800,
            Q: 0.5,
        }).connect(_stringsGain);

        _stringsSynth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'sawtooth' },
            envelope: { attack: 4, decay: 2, sustain: 0.7, release: 5 },
            volume: -6,
        }).connect(_stringsFilter);

        // Melody: soft sine voice — solo cello / oboe feel
        _melodySynth = new Tone.Synth({
            oscillator: { type: 'sine' },
            envelope: { attack: 0.2, decay: 0.4, sustain: 0.5, release: 1.5 },
        }).connect(_melodyGain);
    }

    // ── Clear all running sequencers ──────────────────────────────────────────
    function _clearLoops() {
        if (_pianoSeq)    { _pianoSeq.dispose();    _pianoSeq    = null; }
        if (_bassSeq)     { _bassSeq.dispose();     _bassSeq     = null; }
        if (_melodySeq)   { _melodySeq.dispose();   _melodySeq   = null; }
        if (_stringsLoop) { _stringsLoop.dispose();  _stringsLoop = null; }
        try { _stringsSynth.releaseAll(); } catch(e) {}
    }

    // ── Start all layers for a phase ──────────────────────────────────────────
    function _launchPhase(name, token) {
        const p = PHASES[name];

        Tone.Transport.bpm.rampTo(p.bpm, 2);

        // Strings pad — slow swell
        setTimeout(() => {
            if (_phaseToken !== token) return;
            _stringsSynth.set({ envelope: { attack: p.strings.attack } });
            _stringsSynth.triggerAttack(p.strings.chord);
            _stringsGain.gain.rampTo(_dbToGain(p.strings.db), p.strings.attack);
        }, 200);

        // Strings retrigger every 4 bars
        _stringsLoop = new Tone.Loop(time => {
            _stringsSynth.releaseAll(time);
            _stringsSynth.triggerAttack(p.strings.chord, '+0.4');
        }, '4m');
        _stringsLoop.start('4m');

        // Bass — slow walking line
        _bassSeq = new Tone.Sequence((time, note) => {
            if (note) _bassSynth.triggerAttackRelease(note, '2n', time);
        }, p.bass.notes, p.bass.subdiv);
        _bassGain.gain.rampTo(_dbToGain(p.bass.db), 1.5);
        _bassSeq.start(0);

        // Piano ostinato — the Succession heartbeat
        _pianoSeq = new Tone.Sequence((time, note) => {
            if (note) _pianoSynth.triggerAttackRelease(note, '8n', time);
        }, p.piano.notes, p.piano.subdiv);
        _pianoGain.gain.rampTo(_dbToGain(p.piano.db), 1);
        _pianoSeq.start(0);

        // Melody — sparse, haunting solo line
        _melodySeq = new Tone.Sequence((time, note) => {
            if (note) _melodySynth.triggerAttackRelease(note, '2n', time);
        }, p.melody.notes, p.melody.subdiv);
        _melodyGain.gain.rampTo(_dbToGain(p.melody.db), 2);
        _melodySeq.start('1m'); // Enters after 1 bar

        if (Tone.Transport.state !== 'started') {
            Tone.Transport.start();
        }
    }

    // ── Public API ────────────────────────────────────────────────────────────

    async function init() {
        if (_started) return;
        await Tone.start();
        _buildChain();
        _started = true;
        // Respect mute state if user toggled before init
        if (_muted && _master) {
            _master.gain.value = 0;
        }
    }

    function setPhase(name) {
        if (!_started || !PHASES[name]) return;
        if (name === _currentPhase) return;

        _currentPhase = name;
        const token = ++_phaseToken;

        // Graceful crossfade (skip if muted — keep gain at 0)
        if (!_muted) {
            _master.gain.rampTo(0.12, 0.8);
        }

        setTimeout(() => {
            if (_phaseToken !== token) return;
            _clearLoops();
            _launchPhase(name, token);
            if (!_muted) _master.gain.rampTo(0.7, 1.5);
        }, 900);
    }

    function toggleMute() {
        _muted = !_muted;
        if (_started && _master) {
            _master.gain.rampTo(_muted ? 0 : 0.7, 0.4);
        }
        return _muted;
    }

    function duckVolume(duck) {
        if (!_started || _muted) return;
        _master.gain.rampTo(duck ? 0.15 : 0.7, 0.6);
    }

    // ── SFX Engine ────────────────────────────────────────────────────────────
    let _sfxSynth = null;
    let _sfxNoise = null;
    let _sfxGain  = null;

    function _buildSfx() {
        if (_sfxGain) return;
        _sfxGain = new Tone.Gain(0.5).toDestination();
        _sfxSynth = new Tone.Synth({
            oscillator: { type: 'sine' },
            envelope: { attack: 0.005, decay: 0.2, sustain: 0, release: 0.15 },
        }).connect(_sfxGain);
        _sfxNoise = new Tone.NoiseSynth({
            noise: { type: 'white' },
            envelope: { attack: 0.001, decay: 0.04, sustain: 0, release: 0.02 },
        }).connect(new Tone.Gain(0.1).connect(_sfxGain));
    }

    function playSfx(type) {
        if (!_started || _muted || !type) return;
        _buildSfx();
        const now = Tone.now();
        switch (type) {
            case 'cardArrive':
                _sfxSynth.triggerAttackRelease('G5', '32n', now);
                break;
            case 'cardOpen':
                _sfxSynth.triggerAttackRelease('C5', '16n', now);
                setTimeout(() => _sfxSynth.triggerAttackRelease('E5', '16n'), 100);
                break;
            case 'decisionConfirm':
                // Regal ascending triad
                _sfxSynth.triggerAttackRelease('G4', '8n', now);
                setTimeout(() => _sfxSynth.triggerAttackRelease('B4', '8n'), 120);
                setTimeout(() => _sfxSynth.triggerAttackRelease('D5', '8n'), 240);
                break;
            case 'metricUp':
                _sfxSynth.triggerAttackRelease('C5', '16n', now);
                setTimeout(() => _sfxSynth.triggerAttackRelease('E5', '16n'), 80);
                break;
            case 'metricDown':
                _sfxSynth.triggerAttackRelease('Eb4', '16n', now);
                setTimeout(() => _sfxSynth.triggerAttackRelease('C4', '16n'), 80);
                break;
            case 'timelineTick':
                // Subtle low tick — clock ticking forward through months
                _sfxSynth.triggerAttackRelease('A3', '64n', now);
                break;
            case 'timelineStart':
                // Soft descending chime — time compression beginning
                _sfxSynth.triggerAttackRelease('E4', '32n', now);
                setTimeout(() => _sfxSynth.triggerAttackRelease('C4', '32n'), 150);
                setTimeout(() => _sfxSynth.triggerAttackRelease('A3', '16n'), 300);
                break;
        }
    }

    return {
        init,
        setPhase,
        toggleMute,
        duckVolume,
        playSfx,
        isStarted: () => _started,
        isMuted:   () => _muted,
    };
})();
