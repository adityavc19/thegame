// ─────────────────────────────────────────────────────────────────────────────
// Mobile Wars — Narration Engine
// Star Wars opening crawl style text scroll with TTS audio
// Uses pre-generated audio from assets/audio/
// ─────────────────────────────────────────────────────────────────────────────

const Narration = (() => {
    let _audio = null;
    let _container = null;
    let _crawlEl = null;
    let _playing = false;
    let _loading = false;
    let _updateInterval = null;
    let _onEndCallback = null;
    let _audioDuration = 0;

    // Build the crawl container — replaces the story text area
    function _renderCrawl(text, targetEl) {
        // Split into paragraphs
        const paragraphs = text.replace(/<[^>]+>/g, '').split(/\n\n+/).filter(p => p.trim());

        const card = document.createElement('div');
        card.className = 'narration-crawl-wrapper';
        card.id = 'narration-card';
        card.innerHTML = `
            <div class="narration-crawl-viewport">
                <div class="narration-crawl-fade narration-crawl-fade--top"></div>
                <div class="narration-crawl-perspective">
                    <div class="narration-crawl-text" id="narration-crawl-text">
                        ${paragraphs.map(p => `<p>${p.trim()}</p>`).join('')}
                    </div>
                </div>
                <div class="narration-crawl-fade narration-crawl-fade--bottom"></div>
                <div class="narration-controls">
                    <button class="narration-btn" id="narration-play-btn" aria-label="Play/Pause">
                        <i class="ph ph-pause" id="narration-play-icon"></i>
                    </button>
                    <div class="narration-progress-bar" id="narration-progress-bar">
                        <div class="narration-progress-fill" id="narration-progress-fill"></div>
                    </div>
                </div>
            </div>
        `;

        targetEl.after(card);
        _container = card;
        _crawlEl = document.getElementById('narration-crawl-text');

        // Wire play/pause
        document.getElementById('narration-play-btn').addEventListener('click', () => {
            if (_loading) return;
            if (_playing) pause();
            else resume();
        });

        return card;
    }

    // Sync crawl scroll position to audio progress
    function _syncCrawl() {
        if (!_audio || !_audio.duration || isNaN(_audio.duration)) return;

        const progress = _audio.currentTime / _audio.duration;

        // Update progress bar
        const fill = document.getElementById('narration-progress-fill');
        if (fill) fill.style.width = `${progress * 100}%`;

        // Scroll the crawl text — starts at bottom of viewport, scrolls up
        if (_crawlEl) {
            const viewport = _crawlEl.parentElement;
            const vpHeight = viewport ? viewport.clientHeight : 400;
            // Start position: text begins near bottom of viewport (80% down)
            const startOffset = vpHeight * 0.8;
            // End position: text scrolled fully past top
            const totalTravel = startOffset + _crawlEl.scrollHeight;
            const offset = startOffset - (progress * totalTravel);
            _crawlEl.style.transform = `translateY(${offset}px)`;
        }
    }

    function _setIcon(name) {
        const icon = document.getElementById('narration-play-icon');
        if (icon) icon.className = `ph ph-${name}`;
    }

    // ── Public API ───────────────────────────────────────────────────────────

    function start(text, audioSrc, targetEl, onEnd) {
        stop();

        _onEndCallback = onEnd || null;

        // Render the crawl UI
        _renderCrawl(text, targetEl);
        _loading = true;
        _setIcon('spinner');

        // Duck BGM
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
            AudioEngine.duckVolume(true);
        }

        _audio = new Audio(audioSrc);

        _audio.addEventListener('canplaythrough', () => {
            if (!_loading) return;
            _loading = false;
            _playing = true;
            _audioDuration = _audio.duration;
            _setIcon('pause');

            // Position crawl text at bottom of viewport initially (80% down)
            if (_crawlEl) {
                const viewport = _crawlEl.parentElement;
                const vpHeight = viewport ? viewport.clientHeight : 400;
                _crawlEl.style.transform = `translateY(${vpHeight * 0.8}px)`;
            }

            _audio.play();
            _updateInterval = setInterval(_syncCrawl, 40);
        }, { once: true });

        _audio.addEventListener('ended', () => {
            _playing = false;
            _setIcon('play');
            clearInterval(_updateInterval);
            _updateInterval = null;
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
                AudioEngine.duckVolume(false);
            }
            if (_onEndCallback) _onEndCallback();
        });

        _audio.addEventListener('error', (e) => {
            console.error('Narration audio error:', e);
            _loading = false;
            _setIcon('play');
            if (_container) {
                _container.remove();
                _container = null;
            }
        });

        _audio.load();
    }

    function pause() {
        if (_audio && _playing) {
            _audio.pause();
            _playing = false;
            _setIcon('play');
        }
    }

    function resume() {
        if (_audio && !_playing) {
            _audio.play();
            _playing = true;
            _setIcon('pause');
            if (!_updateInterval) {
                _updateInterval = setInterval(_syncCrawl, 40);
            }
        }
    }

    function stop() {
        if (_audio) {
            _audio.pause();
            _audio.removeAttribute('src');
            _audio = null;
        }
        _playing = false;
        _loading = false;
        _audioDuration = 0;
        _crawlEl = null;
        clearInterval(_updateInterval);
        _updateInterval = null;

        const existing = document.getElementById('narration-card');
        if (existing) existing.remove();
        _container = null;

        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
            AudioEngine.duckVolume(false);
        }
    }

    function isPlaying() { return _playing; }

    // MD5 hash to match pre-generated audio filenames (browser-compatible)
    function textHash(rawText) {
        const clean = rawText.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        return _md5(clean).substring(0, 10);
    }

    // Minimal MD5 implementation for hash matching with Node's crypto
    function _md5(string) {
        function md5cycle(x, k) {
            var a = x[0], b = x[1], c = x[2], d = x[3];
            a = ff(a, b, c, d, k[0], 7, -680876936); d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819); b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897); d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341); b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416); d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063); b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682); d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290); b = ff(b, c, d, a, k[15], 22, 1236535329);
            a = gg(a, b, c, d, k[1], 5, -165796510); d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713); b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691); d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335); b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438); d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961); b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467); d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473); b = gg(b, c, d, a, k[12], 20, -1926607734);
            a = hh(a, b, c, d, k[5], 4, -378558); d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562); b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060); d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632); b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174); d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979); b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487); d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520); b = hh(b, c, d, a, k[2], 23, -995338651);
            a = ii(a, b, c, d, k[0], 6, -198630844); d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905); b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571); d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523); b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359); d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380); b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070); d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259); b = ii(b, c, d, a, k[9], 21, -343485551);
            x[0] = add32(a, x[0]); x[1] = add32(b, x[1]); x[2] = add32(c, x[2]); x[3] = add32(d, x[3]);
        }
        function cmn(q, a, b, x, s, t) { a = add32(add32(a, q), add32(x, t)); return add32((a << s) | (a >>> (32 - s)), b); }
        function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); }
        function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); }
        function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
        function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); }
        function md5blk(s) {
            var md5blks = [], i;
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        }
        function md5blk_array(a) {
            var md5blks = [], i;
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        }
        function add32(a, b) { return (a + b) & 0xFFFFFFFF; }
        function hex(x) {
            var res = '';
            for (var i = 0; i < 4; i++) res += ('0' + ((x >> (i * 8)) & 0xFF).toString(16)).slice(-2);
            return res;
        }

        var n = string.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
        var buf = [];
        for (i = 0; i < n; i++) {
            var code = string.charCodeAt(i);
            if (code < 128) buf.push(code);
            else if (code < 2048) { buf.push(192 | (code >> 6)); buf.push(128 | (code & 63)); }
            else { buf.push(224 | (code >> 12)); buf.push(128 | ((code >> 6) & 63)); buf.push(128 | (code & 63)); }
        }
        var length = buf.length;
        buf.push(128);
        while (buf.length % 64 !== 56) buf.push(0);
        var bits = length * 8;
        buf.push(bits & 0xff); buf.push((bits >> 8) & 0xff); buf.push((bits >> 16) & 0xff); buf.push((bits >> 24) & 0xff);
        buf.push(0); buf.push(0); buf.push(0); buf.push(0);

        for (i = 0; i < buf.length; i += 64) {
            md5cycle(state, md5blk_array(buf.slice(i, i + 64)));
        }
        return hex(state[0]) + hex(state[1]) + hex(state[2]) + hex(state[3]);
    }

    return { start, pause, resume, stop, isPlaying, textHash };
})();
