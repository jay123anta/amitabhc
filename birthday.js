/**
 * AmitabhC Janamdin Edition
 * Amitabh Bachchan's birthday is 11 October. On that day (India time), or on
 * any day when the page URL carries ?janamdin=1, the site shows a birthday
 * banner and opens with a birthday wish written in AmitabhC.
 *
 * This file holds the date gate, the wish program, the share text, and the
 * banner + confetti. It is loaded by index.html, editor.html and pro.html and
 * is also require()-able from Node (tests/birthday.test.js); the DOM helpers
 * are only touched in a browser.
 */

const AmitabhCBirthday = (function () {
    'use strict';

    const BIRTH_YEAR = 1942;
    const BIRTH_MONTH = 10;
    const BIRTH_DAY = 11;
    const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000; // India has no daylight saving
    const PREVIEW_PARAM = /[?&]janamdin=1(?:&|$)/;
    const WISH_MARKER = 'Janamdin Mubarak';
    const FAN_LINE = /(VIJAY\s+fan\s*=\s*")[^"\n]*(")/;
    const DEFAULT_FAN = 'AmitabhC';
    const NAME_MAX = 40;
    const HASHTAG = '#HappyBirthdayAmitabhBachchan';
    const DISMISS_KEY = 'amitabhc_janamdin_dismissed';
    const CONFETTI_KEY = 'amitabhc_janamdin_confetti';

    // Kept identical to examples/janamdin.amitabhc (a test enforces this).
    const PROGRAM = [
        'LIGHTS',
        'CAMERA',
        '    // Janamdin Mubarak! A birthday wish for Amitabh Bachchan,',
        '    // born 11 October 1942, written in the language made from his films.',
        '    // Put your name here, press Run, then post your wish:',
        '    VIJAY fan = "AmitabhC"',
        '',
        '    DON JANAM_SAAL = 1942',
        '    VIJAY umar = NASEEB.saal() - JANAM_SAAL',
        '',
        '    DEVIYON_AUR_SAJJANO',
        '    BOLO "🎂 Janamdin Mubarak, Amitabh Bachchan! 🎂"',
        '    BOLO "${umar} saal, aur aaj bhi Shahenshah!"',
        '    BOLO ""',
        '',
        '    VIJAY films[] = {"Zanjeer", "Deewar", "Sholay", "Don", "Agneepath"}',
        '    HAR EK film MEIN films',
        '        BOLO "Shukriya for " + film + "!"',
        '    KHATAM',
        '    BOLO ""',
        '',
        '    BOLO "Rishtey mein toh hum aapke fan lagte hain,"',
        '    BOLO "naam hai " + fan + "!"',
        'ACTION'
    ].join('\n');

    // ===== Date gate =====

    function istParts(date) {
        const ist = new Date(date.getTime() + IST_OFFSET_MS);
        return {
            year: ist.getUTCFullYear(),
            month: ist.getUTCMonth() + 1,
            day: ist.getUTCDate()
        };
    }

    function currentSearch() {
        return typeof location !== 'undefined' ? location.search : '';
    }

    function isBirthday(date = new Date()) {
        const { month, day } = istParts(date);
        return month === BIRTH_MONTH && day === BIRTH_DAY;
    }

    function isActive(date = new Date(), search = currentSearch()) {
        return isBirthday(date) || PREVIEW_PARAM.test(search || '');
    }

    // The age he turns on this (India-time) year's birthday.
    function age(date = new Date()) {
        return istParts(date).year - BIRTH_YEAR;
    }

    function ordinal(n) {
        const lastTwo = n % 100;
        if (lastTwo >= 11 && lastTwo <= 13) return n + 'th';
        switch (n % 10) {
            case 1: return n + 'st';
            case 2: return n + 'nd';
            case 3: return n + 'rd';
            default: return n + 'th';
        }
    }

    // ===== Wish + sharing =====

    function isWish(code) {
        return String(code || '').includes(WISH_MARKER);
    }

    // Names are typed by visitors and end up inside a string in the program, so
    // keep only letters (any script), digits, spaces and . , & ' - plus the
    // zero-width joiners some scripts need between letters.
    function cleanName(name) {
        const kept = String(name || '')
            .replace(/[\uFE00-\uFE0F]/g, '')
            .replace(/[^\p{L}\p{M}\p{N}\s.,&'’\u200C\u200D-]/gu, '')
            // marks and joiners that lost their letter (left behind by a removed emoji)
            .replace(/(^|[^\p{L}\p{M}\u200C\u200D])[\p{M}\u200C\u200D]+/gu, '$1')
            .replace(/[\u200C\u200D]+(?![\p{L}\p{M}])/gu, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (!/[\p{L}\p{N}]/u.test(kept)) return '';
        return Array.from(kept).slice(0, NAME_MAX).join('').trim();
    }

    // Put a name on the wish's fan line; a blank name leaves the code as it is.
    function signWish(code, name) {
        const clean = cleanName(name);
        if (!clean) return code;
        return String(code).replace(FAN_LINE, (match, open, close) => open + clean + close);
    }

    // True when the editor holds something the visitor would mind losing:
    // not blank, not a wish, and not one of the page's own samples.
    function isOwnWork(code, samples = []) {
        const tidy = text => String(text || '').replace(/\r\n/g, '\n').trim();
        const current = tidy(code);
        if (!current || isWish(current)) return false;
        return !samples.some(sample => tidy(sample) === current);
    }

    function shareText(date = new Date()) {
        return `Happy ${ordinal(age(date))} Birthday, Amitabh Bachchan! 🎂 My wish, written in AmitabhC — ` +
            `the programming language made from his films. Run it in your browser 🎬 ${HASHTAG}`;
    }

    // Birthday wording for the Post-on-X button, or null to keep the usual text.
    // A banner already on screen keeps the edition on past midnight.
    function shareTextFor(code, date = new Date(), search = currentSearch()) {
        return (banner || isActive(date, search)) && isWish(code) ? shareText(date) : null;
    }

    // ===== Banner (browser only) =====

    const STYLES = `
.jd-banner {
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 18px 60px 18px 20px;
    border-radius: 14px;
    border: 1px solid rgba(246, 196, 83, 0.55);
    background:
        radial-gradient(90% 160% at 0% 0%, rgba(255, 153, 51, 0.34), transparent 60%),
        radial-gradient(90% 160% at 100% 100%, rgba(19, 136, 8, 0.30), transparent 60%),
        linear-gradient(135deg, #1c2533 0%, #2c3e50 100%);
    box-shadow: 0 8px 24px rgba(28, 37, 51, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.08);
    color: #f5f7fa;
    font-family: inherit;
    line-height: 1.45;
    text-align: left;
    box-sizing: border-box;
    max-width: 100vw; /* the Pro IDE grid can be wider than a tablet screen */
    animation: jd-rise 0.5s ease-out both;
}
.jd-badge {
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid rgba(246, 196, 83, 0.5);
    background: rgba(246, 196, 83, 0.16);
    font-size: 28px;
    line-height: 1;
    animation: jd-bob 3s ease-in-out infinite;
}
.jd-copy {
    flex: 1 1 280px;
    min-width: 0;
}
.jd-banner .jd-eyebrow,
.jd-banner .jd-title,
.jd-banner .jd-text {
    margin: 0;
    padding: 0;
    font-style: normal;
    text-shadow: none;
    opacity: 1;
}
.jd-banner .jd-eyebrow {
    color: #f6c453;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}
.jd-banner .jd-title {
    margin: 2px 0 4px;
    color: #ffe3a1;
    font-size: 1.3em;
    font-weight: 800;
    line-height: 1.25;
    background: linear-gradient(90deg, #ffe3a1 0%, #f6c453 35%, #fff6dc 50%, #f6c453 65%, #ffe3a1 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: jd-shimmer 6s linear infinite;
}
.jd-banner .jd-text {
    color: rgba(245, 247, 250, 0.9);
    font-size: 0.95em;
}
.jd .jd-input {
    flex: 0 0 170px;
    width: 170px;
    min-width: 0;
    min-height: 44px;
    margin: 0;
    padding: 0 14px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.10);
    box-shadow: none;
    color: #fff;
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
}
.jd .jd-input::placeholder {
    color: rgba(255, 255, 255, 0.62);
    font-weight: 400;
}
.jd .jd-input:focus {
    border-color: #f6c453;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 0 0 3px rgba(246, 196, 83, 0.35);
    outline: none;
}
.jd-actions {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.jd .jd-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: none;
    color: #fff;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transform: none;
    transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.jd .jd-btn:hover,
.jd .jd-btn:focus {
    background: rgba(255, 255, 255, 0.18);
    box-shadow: none;
    outline: none;
    transform: translateY(-1px);
}
.jd .jd-btn--primary {
    border-color: transparent;
    background: linear-gradient(135deg, #ffd978 0%, #f6c453 55%, #e0a526 100%);
    box-shadow: 0 4px 14px rgba(246, 196, 83, 0.35);
    color: #1c2533;
}
.jd .jd-btn--primary:hover,
.jd .jd-btn--primary:focus {
    background: linear-gradient(135deg, #ffe39a 0%, #ffd062 55%, #eab238 100%);
    box-shadow: 0 6px 18px rgba(246, 196, 83, 0.5);
}
.jd .jd-btn:focus-visible,
.jd .jd-close:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
}
.jd .jd-close {
    position: absolute;
    top: 8px;
    right: 8px;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    min-height: 0;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    box-shadow: none;
    color: rgba(255, 255, 255, 0.75);
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    cursor: pointer;
    transform: none;
}
.jd .jd-close:hover,
.jd .jd-close:focus {
    background: rgba(255, 255, 255, 0.14);
    box-shadow: none;
    color: #fff;
    outline: none;
    transform: none;
}

/* Landing page: a centred ticket at the top of the hero card */
.jd-banner--landing {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
    padding: 24px;
    text-align: center;
}
.jd-banner--landing .jd-copy {
    flex: 0 0 auto;
}
.jd-banner--landing .jd-title {
    font-size: 1.55em;
}
.jd-banner--landing .jd-text {
    max-width: 34em;
    margin: 0 auto;
}
.jd-banner--landing .jd-btn {
    min-height: 48px;
    padding: 12px 26px;
    font-size: 16px;
    text-align: center;
    white-space: normal;
}

/* Basic editor: spans both columns above the editor and the console */
.jd-banner--editor {
    grid-column: 1 / -1;
}

/* Pro IDE: a slim bar between the header and the workspace (hidden on phones, see below) */
@media (min-width: 769px) {
    .app.jd-has-bar {
        grid-template-rows: 64px auto 1fr 32px;
    }
}
.jd-banner--pro {
    gap: 12px;
    padding: 8px 52px 8px 16px;
    border: 0;
    border-bottom: 1px solid #30363d;
    border-radius: 0;
    background:
        linear-gradient(90deg, rgba(255, 153, 51, 0.20) 0%, rgba(246, 196, 83, 0.08) 50%, rgba(19, 136, 8, 0.18) 100%),
        #161b22;
    box-shadow: none;
}
.jd-banner--pro .jd-badge {
    width: 32px;
    height: 32px;
    font-size: 17px;
}
.jd-banner--pro .jd-copy {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 2px 12px;
}
.jd-banner--pro .jd-eyebrow {
    display: none;
}
.jd-banner--pro .jd-title {
    margin: 0;
    font-size: 14px;
}
.jd-banner--pro .jd-text {
    font-size: 13px;
}
.jd-banner--pro .jd-btn {
    min-height: 32px;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 13px;
}
.jd-banner--pro .jd-input {
    flex-basis: 150px;
    width: 150px;
    min-height: 32px;
    padding: 0 10px;
    border-radius: 6px;
    font-size: 13px;
}
.jd-banner--pro .jd-close {
    top: 50%;
    width: 32px;
    height: 32px;
    margin-top: -16px;
    font-size: 20px;
}

/* Post prompt: follows the visitor once the wish has run and the banner is off screen */
.jd-snack {
    position: fixed;
    left: 50%;
    bottom: 24px;
    z-index: 2147482000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: calc(100vw - 24px);
    padding: 8px 8px 8px 20px;
    border: 1px solid rgba(246, 196, 83, 0.55);
    border-radius: 999px;
    background: linear-gradient(135deg, #1c2533 0%, #2c3e50 100%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    color: #f5f7fa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.3;
    white-space: nowrap;
    transform: translateX(-50%);
    animation: jd-pop 0.35s ease-out both;
}
.jd-snack[hidden] {
    display: none;
}
.jd-snack .jd-btn {
    min-height: 40px;
    padding: 8px 16px;
    border-radius: 999px;
}
.jd-snack .jd-close {
    position: static;
    width: 36px;
    height: 36px;
    font-size: 22px;
}

.jd-confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2147483000;
}

@keyframes jd-rise {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes jd-shimmer {
    to { background-position: -200% 0; }
}
@keyframes jd-bob {
    0%, 100% { transform: translateY(0) rotate(-4deg); }
    50% { transform: translateY(-3px) rotate(4deg); }
}
@keyframes jd-pop {
    from { opacity: 0; transform: translate(-50%, 16px); }
    to { opacity: 1; transform: translate(-50%, 0); }
}

@media (max-width: 1000px) {
    .jd-banner--editor,
    .jd-banner--pro {
        flex-wrap: wrap;
    }
    .jd-banner--editor {
        padding-right: 20px;
    }
    .jd-banner--editor .jd-copy {
        flex-basis: 0;
        padding-right: 34px; /* keeps the text clear of the close button */
    }
    .jd-banner--pro .jd-copy {
        flex-basis: 0;
    }
    .jd-banner--editor .jd-actions,
    .jd-banner--pro .jd-actions {
        width: 100%;
    }
    .jd-banner--editor .jd-btn,
    .jd-banner--pro .jd-btn {
        flex: 1 1 auto;
    }
    .jd-banner--editor .jd-input,
    .jd-banner--pro .jd-input {
        flex: 2 1 170px;
        font-size: 16px; /* below 16px iOS zooms the page on focus */
    }
    .jd-snack {
        bottom: 72px; /* above the status pill / status bar */
    }
}
/* Pro IDE on phones: the header already fills the top of the screen, so the bar steps aside */
@media (max-width: 768px) {
    .jd-banner--pro {
        display: none;
    }
}
@media (max-width: 480px) {
    .jd-banner--editor {
        align-items: flex-start;
        gap: 12px;
        padding: 14px;
    }
    .jd-banner--landing {
        padding: 20px 16px;
    }
    .jd-badge {
        width: 42px;
        height: 42px;
        font-size: 21px;
    }
    .jd-banner .jd-title {
        font-size: 1.12em;
    }
    .jd-banner--landing .jd-title {
        font-size: 1.3em;
    }
    .jd-banner--editor .jd-btn {
        padding: 10px 12px;
        font-size: 14px;
    }
    .jd-banner--editor .jd-input {
        flex-basis: 100%;
    }
    .jd-snack {
        gap: 6px;
        padding-left: 16px;
        font-size: 14px;
    }
}
@media (prefers-reduced-motion: reduce) {
    .jd,
    .jd * {
        animation: none !important;
        transition: none !important;
    }
}
`;

    let banner = null;
    let bannerOptions = null;
    let snack = null;
    let snackClosed = false;
    let observer = null;

    function injectStyles() {
        if (document.getElementById('jd-styles')) return;
        const style = document.createElement('style');
        style.id = 'jd-styles';
        style.textContent = STYLES;
        document.head.appendChild(style);
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    function sessionFlag(key, value) {
        try {
            if (value === undefined) return sessionStorage.getItem(key) === '1';
            sessionStorage.setItem(key, value);
        } catch (error) {
            // Storage can be blocked (private mode); the banner still works without it.
        }
        return false;
    }

    function prefersReducedMotion() {
        return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    /**
     * Show the birthday banner.
     * options.variant   'landing' | 'editor' | 'pro'
     * options.container element the banner goes into
     * options.before    optional child of container to insert before (default: first)
     * options.onName    editor/pro: the name box changed; called with the name to sign with
     * options.onRun     editor/pro: run the wish; called with the name typed in the banner
     * options.onPost    editor/pro: post the wish on X; called with the same name
     * options.onDismiss editor/pro: called after the banner is closed
     */
    function mountBanner(options) {
        const { variant, container } = options;
        if (!container || banner) return banner;
        if (variant !== 'landing' && sessionFlag(DISMISS_KEY)) return null;

        injectStyles();

        bannerOptions = options;
        banner = el('aside', `jd jd-banner jd-banner--${variant}`);
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', 'Amitabh Bachchan birthday edition');

        const badge = el('div', 'jd-badge', '🎂');
        badge.setAttribute('aria-hidden', 'true');

        const copy = el('div', 'jd-copy');
        copy.appendChild(el('p', 'jd-eyebrow', '11 October · Janamdin Edition'));
        copy.appendChild(el('p', 'jd-title', `Happy ${ordinal(age())} Birthday, Amitabh Bachchan!`));

        const text = el('p', 'jd-text');
        text.setAttribute('aria-live', 'polite');
        if (variant === 'landing') {
            text.textContent = 'A birthday wish, written in the language made from his films. Sign it with your name and run it.';
        } else {
            text.textContent = 'Sign it with your name, run it, then post it.';
        }
        copy.appendChild(text);

        const actions = el('div', 'jd-actions');
        if (variant === 'landing') {
            const link = el('a', 'jd-btn jd-btn--primary', '🎂 Run the birthday wish');
            link.href = 'editor.html?janamdin=1';
            actions.appendChild(link);
        } else {
            const name = el('input', 'jd-input');
            name.type = 'text';
            name.maxLength = NAME_MAX;
            name.placeholder = 'Your name';
            name.autocomplete = 'given-name';
            name.setAttribute('aria-label', 'Your name, to sign the wish');
            name.setAttribute('enterkeyhint', 'go');
            // The wish in the editor follows the box as the visitor types;
            // emptying the box puts the default name back
            name.addEventListener('input', () => {
                if (options.onName) options.onName(cleanName(name.value) || DEFAULT_FAN);
            });
            name.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    event.stopPropagation(); // the pages have their own Ctrl+Enter run shortcut
                    name.blur(); // closes the on-screen keyboard so the wish is visible
                    if (options.onRun) options.onRun(name.value);
                }
            });

            const run = el('button', 'jd-btn jd-btn--primary', '▶ Run the wish');
            run.type = 'button';
            run.dataset.jd = 'run';
            run.setAttribute('aria-label', 'Run the wish');
            run.addEventListener('click', () => options.onRun && options.onRun(name.value));

            const post = el('button', 'jd-btn', '𝕏 Post it');
            post.type = 'button';
            post.dataset.jd = 'post';
            post.setAttribute('aria-label', 'Post your wish on X');
            post.addEventListener('click', () => options.onPost && options.onPost(name.value));

            actions.appendChild(name);
            actions.appendChild(run);
            actions.appendChild(post);
        }

        banner.appendChild(badge);
        banner.appendChild(copy);
        banner.appendChild(actions);

        const pageTitle = document.title;

        if (variant !== 'landing') {
            const close = el('button', 'jd-close', '×');
            close.type = 'button';
            close.setAttribute('aria-label', 'Dismiss birthday banner');
            close.addEventListener('click', () => {
                sessionFlag(DISMISS_KEY, '1');
                container.classList.remove('jd-has-bar');
                document.title = pageTitle;
                if (observer) observer.disconnect();
                if (snack) snack.remove();
                banner.remove();
                banner = observer = snack = null;
                if (options.onDismiss) options.onDismiss();
            });
            banner.appendChild(close);
        }

        container.insertBefore(banner, options.before || container.firstChild);
        if (variant === 'pro') container.classList.add('jd-has-bar');
        document.title = '🎂 ' + pageTitle;

        return banner;
    }

    // ===== Confetti (browser only) =====

    function confetti() {
        if (prefersReducedMotion() || document.querySelector('.jd-confetti')) return;

        injectStyles();
        const canvas = el('canvas', 'jd-confetti');
        canvas.setAttribute('aria-hidden', 'true');
        const ctx = canvas.getContext && canvas.getContext('2d');
        if (!ctx) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        document.body.appendChild(canvas);

        // Saffron, green and chakra blue from the flag, plus gold and marigold pink
        const colors = ['#ff9933', '#138808', '#1f4fd8', '#f6c453', '#e84a8a'];
        const count = Math.min(180, 60 + Math.round(width / 8));
        const power = Math.max(11, Math.min(20, height / 46));
        const pieces = [];

        // Two cannons, one in each bottom corner, firing up and inwards
        for (let i = 0; i < count; i++) {
            const fromLeft = i % 2 === 0;
            const angle = (fromLeft ? -Math.PI / 3 : -2 * Math.PI / 3) + (Math.random() - 0.5) * 0.9;
            const speed = power * (0.55 + Math.random() * 0.75);
            pieces.push({
                x: fromLeft ? -10 : width + 10,
                y: height * 0.92,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                width: 6 + Math.random() * 6,
                height: 9 + Math.random() * 7,
                rotation: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 0.3,
                flip: Math.random() * Math.PI * 2,
                flipSpeed: 0.08 + Math.random() * 0.12,
                color: colors[i % colors.length]
            });
        }

        const DURATION = 3400;
        const FADE = 700;
        const start = performance.now();
        let last = start;

        function frame(now) {
            const elapsed = now - start;
            const step = Math.min(32, now - last) / 16.67;
            last = now;

            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = elapsed > DURATION - FADE ? Math.max(0, (DURATION - elapsed) / FADE) : 1;

            for (const piece of pieces) {
                piece.vx *= Math.pow(0.985, step);
                piece.vy = piece.vy * Math.pow(0.985, step) + 0.32 * step;
                piece.x += piece.vx * step;
                piece.y += piece.vy * step;
                piece.rotation += piece.spin * step;
                piece.flip += piece.flipSpeed * step;

                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate(piece.rotation);
                ctx.scale(1, Math.cos(piece.flip));
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
                ctx.restore();
            }

            if (elapsed < DURATION) {
                requestAnimationFrame(frame);
            } else {
                canvas.remove();
            }
        }

        requestAnimationFrame(frame);
    }

    // Once the wish has run, keep "Post it" one tap away whenever the banner is off screen.
    function showSnack(show) {
        if (snackClosed) return;
        if (!snack) {
            if (!show) return;
            snack = el('div', 'jd jd-snack');
            const message = el('span', '', '🎉 Wish delivered!');
            message.setAttribute('role', 'status');
            snack.appendChild(message);

            const post = el('button', 'jd-btn jd-btn--primary', '𝕏 Post it');
            post.type = 'button';
            post.setAttribute('aria-label', 'Post your wish on X');
            post.addEventListener('click', () => {
                const name = banner.querySelector('.jd-input');
                if (bannerOptions.onPost) bannerOptions.onPost(name ? name.value : '');
            });

            const close = el('button', 'jd-close', '×');
            close.type = 'button';
            close.setAttribute('aria-label', 'Dismiss');
            close.addEventListener('click', () => {
                snackClosed = true;
                snack.remove();
                snack = null;
            });

            snack.appendChild(post);
            snack.appendChild(close);
            document.body.appendChild(snack);
        }
        snack.hidden = !show;
    }

    function watchBanner() {
        if (observer || !('IntersectionObserver' in window)) return;
        observer = new IntersectionObserver(entries => {
            showSnack(!entries[entries.length - 1].isIntersecting);
        }, { threshold: 0.25 });
        observer.observe(banner);
    }

    // Show the wish from its first line instead of the run summary. On pages that
    // scroll, a short console also grows so the whole wish fits without scrolling.
    function revealWish(output, roomBelow) {
        const line = Array.from(output.children).find(node => node.textContent.includes(WISH_MARKER));
        if (!line) return;

        const offset = output.scrollTop + line.getBoundingClientRect().top - output.getBoundingClientRect().top - 8;
        if (roomBelow !== undefined) {
            // Never taller than the screen can show with that room left under it
            const needed = output.scrollHeight - offset + 8;
            const limit = window.innerHeight - roomBelow - 8;
            if (needed > output.clientHeight) {
                output.style.height = Math.min(needed, limit) + 'px';
            }
        }
        output.scrollTop = offset;
    }

    /**
     * A wish just ran: confetti, show the wish, and point the visitor at Post.
     * options.output     console element holding the program output
     * options.scrollPage true on pages that scroll: fit the console to the wish
     *                    and bring it into view
     */
    function celebrate(options = {}) {
        const { output, scrollPage } = options;
        // A banner that is mounted but hidden (the Pro IDE on phones) stays out of it
        const shown = !!banner && banner.offsetParent !== null;

        // Change the banner first: its new text can re-wrap and move the console
        if (shown) {
            const text = banner.querySelector('.jd-text');
            const run = banner.querySelector('[data-jd="run"]');
            const post = banner.querySelector('[data-jd="post"]');
            if (text) text.textContent = 'Wish delivered! Ab duniya ko batao — post it on X.';
            if (run) run.classList.remove('jd-btn--primary');
            if (post) post.classList.add('jd-btn--primary');
        }

        if (output && scrollPage) {
            // On small screens leave room under the console for the post prompt
            const roomBelow = window.innerWidth <= 1000 ? 150 : 16;
            revealWish(output, roomBelow);
            output.style.scrollMarginBottom = roomBelow + 'px';
            // Scroll once the page has finished its own after-run updates (its Run
            // button changes label and can re-wrap, which moves the console)
            setTimeout(() => {
                output.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
            }, 0);
        } else if (output) {
            revealWish(output);
        }

        confetti();
        if (shown) watchBanner();
    }

    // Landing page: one welcome burst per browser tab, not on every visit home.
    function welcome() {
        if (sessionFlag(CONFETTI_KEY)) return;
        sessionFlag(CONFETTI_KEY, '1');
        confetti();
    }

    // The birthday dressing must never break the page it decorates: a failure
    // in here is logged and the page carries on without it.
    function safely(fn) {
        return function (...args) {
            try {
                return fn(...args);
            } catch (error) {
                console.error('Janamdin edition:', error);
                return null;
            }
        };
    }

    return {
        PROGRAM,
        isBirthday,
        isActive,
        age,
        ordinal,
        isWish,
        isOwnWork,
        signWish,
        shareText,
        shareTextFor,
        mountBanner: safely(mountBanner),
        celebrate: safely(celebrate),
        welcome: safely(welcome)
    };
})();

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AmitabhCBirthday;
} else {
    window.AmitabhCBirthday = AmitabhCBirthday;
}
