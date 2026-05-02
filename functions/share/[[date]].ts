interface Env {}

const APP_STORE_URL = 'https://apps.apple.com/tw/app/calthings/id6757834850';
const APP_STORE_DEEPLINK = 'https://apps.apple.com/app/6757834850';
const SITE_URL = 'https://support.calthings.app';
const OG_IMAGE = `${SITE_URL}/icon-256.png`;

type Lang = 'zh' | 'en' | 'ja';

function pickLang(acceptLanguage: string | null): Lang {
    const al = (acceptLanguage ?? '').toLowerCase();
    if (al.startsWith('ja')) return 'ja';
    if (al.startsWith('en')) return 'en';
    return 'zh';
}

function parseDate(raw: string): { y: number; m: number; d: number } | null {
    if (!/^\d{8}$/.test(raw)) return null;
    const y = parseInt(raw.slice(0, 4), 10);
    const m = parseInt(raw.slice(4, 6), 10);
    const d = parseInt(raw.slice(6, 8), 10);
    if (m < 1 || m > 12 || d < 1 || d > 31) return null;
    return { y, m, d };
}

function formatDate(lang: Lang, date: { y: number; m: number; d: number }): string {
    const { y, m, d } = date;
    if (lang === 'en') {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return `${months[m - 1]} ${d}, ${y}`;
    }
    return `${y}年${m}月${d}日`;
}

function escapeHtml(s: string): string {
    return s.replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] ?? c
    ));
}

const COPY: Record<Lang, { titleWithDate: (d: string) => string; titleBare: string; desc: string; cta: string; lead: string; opening: string; fallback: string }> = {
    zh: {
        titleWithDate: d => `CalThings 早安卡・${d}`,
        titleBare: 'CalThings 早安卡',
        desc: '來自 CalThings 的每日早安問候，包含農曆日期、每日箴言與宜忌資訊。',
        cta: 'App Store 下載',
        lead: '智慧記帳・輕鬆生活',
        opening: '正在開啟 CalThings…',
        fallback: '若未自動開啟，點此下載 App',
    },
    en: {
        titleWithDate: d => `CalThings Morning Card・${d}`,
        titleBare: 'CalThings Morning Card',
        desc: "A daily morning greeting from CalThings — lunar date, today's quote, and almanac highlights.",
        cta: 'Download on App Store',
        lead: 'Smart Expense Tracking, Simple Life',
        opening: 'Opening CalThings…',
        fallback: "If it doesn't open, tap to download",
    },
    ja: {
        titleWithDate: d => `CalThings 朝の挨拶カード・${d}`,
        titleBare: 'CalThings 朝の挨拶カード',
        desc: 'CalThings からの毎日の朝の挨拶。旧暦の日付、今日の名言、暦の情報をお届けします。',
        cta: 'App Store からダウンロード',
        lead: 'スマート家計簿・シンプルライフ',
        opening: 'CalThings を開いています…',
        fallback: '自動で開かない場合はタップしてダウンロード',
    },
};

export const onRequest: PagesFunction<Env> = async ({ params, request }) => {
    const segments = (Array.isArray(params.date) ? params.date : params.date ? [params.date] : []) as string[];

    if (segments.length > 1) {
        return Response.redirect(`${SITE_URL}/zh/`, 302);
    }

    const raw = segments[0] ?? '';
    const parsed = raw ? parseDate(raw) : null;

    if (raw && !parsed) {
        return Response.redirect(`${SITE_URL}/zh/`, 302);
    }

    const lang = pickLang(request.headers.get('accept-language'));
    const htmlLang = lang === 'zh' ? 'zh-Hant' : lang;
    const copy = COPY[lang];
    const dateStr = parsed ? formatDate(lang, parsed) : '';
    const title = parsed ? copy.titleWithDate(dateStr) : copy.titleBare;
    const desc = copy.desc;
    const url = parsed ? `${SITE_URL}/share/${raw}` : `${SITE_URL}/share/`;

    const html = `<!DOCTYPE html>
<html lang="${htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(desc)}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="CalThings">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(desc)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="256">
<meta property="og:image:height" content="256">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${lang === 'zh' ? 'zh_TW' : lang === 'ja' ? 'ja_JP' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(desc)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<meta name="apple-itunes-app" content="app-id=6757834850">
<script>
// iOS 已安裝 → Universal Link 攔截開 App；未安裝 → 1.5 秒後跳 App Store
setTimeout(function () { window.location.href = '${APP_STORE_DEEPLINK}'; }, 1500);
</script>
<style>
:root { color-scheme: light dark; }
body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif; background: linear-gradient(160deg, #2173B3 0%, #409ED9 50%, #73C2ED 100%); color: #fff; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 32px; }
.card { max-width: 480px; text-align: center; }
.icon { width: 96px; height: 96px; border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); margin-bottom: 20px; }
h1 { font-size: 1.8em; font-weight: 800; margin: 0 0 8px; letter-spacing: -0.02em; }
.date { font-size: 1.05em; opacity: 0.9; margin: 0 0 12px; }
.opening { font-size: 1em; opacity: 0.95; margin: 0 0 20px; }
.lead { font-size: 0.9em; opacity: 0.8; margin: 0 0 28px; }
.cta { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #2173B3; padding: 12px 28px; border-radius: 14px; font-weight: 700; text-decoration: none; box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
.cta:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(0,0,0,0.22); }
</style>
</head>
<body>
<div class="card">
<img class="icon" src="/icon-256.png" alt="CalThings">
<h1>CalThings</h1>
${parsed ? `<p class="date">${escapeHtml(dateStr)}</p>` : ''}
<p class="opening">${escapeHtml(copy.opening)}</p>
<p class="lead">${escapeHtml(copy.lead)}</p>
<a class="cta" href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.cta)}</a>
</div>
</body>
</html>`;

    return new Response(html, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=300, s-maxage=86400',
        },
    });
};
