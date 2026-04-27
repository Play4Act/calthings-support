export type Lang = 'zh' | 'en' | 'ja';
export const LANGS: Lang[] = ['zh', 'en', 'ja'];

export function getLangLabel(lang: Lang): string {
  return { zh: '繁中', en: 'EN', ja: '日本語' }[lang];
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

interface Feature {
  icon: string;
  color: string;
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface I18n {
  lang: Lang;
  nav: {
    home: string;
    faq: string;
    announcements: string;
    terms: string;
    privacy: string;
  };
  hero: {
    subtitle: string;
    downloadBtn: string;
  };
  about: {
    title: string;
    desc: string;
  };
  features: Feature[];
  premium: {
    title: string;
    desc: string;
    tags: string[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  announcements: {
    title: string;
    empty: string;
    readMore: string;
    backToList: string;
    publishedOn: string;
  };
  contact: {
    title: string;
    desc: string;
  };
  download: {
    title: string;
    desc: string;
    btn: string;
  };
  terms: {
    title: string;
    updated: string;
  };
  privacy: {
    title: string;
    updated: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
  backToHome: string;
}

export const t: Record<Lang, I18n> = {
  zh: {
    lang: 'zh',
    nav: {
      home: '首頁',
      faq: '常見問題',
      announcements: '公告',
      terms: '使用條款',
      privacy: '隱私權政策',
    },
    hero: {
      subtitle: '智慧記帳・輕鬆生活',
      downloadBtn: 'App Store 下載',
    },
    about: {
      title: '關於 CalThings',
      desc: 'CalThings 是一款功能完整的 iOS 記帳與記事應用程式，採用現代 SwiftUI 架構，幫助您輕鬆管理日常收支、設定預算、撰寫備忘錄，並整合農曆顯示與智慧提醒功能。',
    },
    features: [
      { icon: '💰', color: 'coral', title: 'POS 風格記帳', desc: '直覺式介面，快速輸入金額、選擇分類與商店' },
      { icon: '📊', color: 'blue', title: '預算管理', desc: '分類預算設定，即時追蹤花費進度' },
      { icon: '📝', color: 'yellow', title: '記事功能', desc: '備忘錄、標籤分類、釘選，關聯記帳記錄' },
      { icon: '📈', color: 'green', title: '統計分析', desc: '收支趨勢圖表、分類餅圖，掌握財務全貌' },
      { icon: '🌙', color: 'purple', title: '農曆整合', desc: '農民曆顯示，中文日期格式化' },
      { icon: '🔔', color: 'coral', title: '智慧提醒', desc: '一次性、每日、每週、每月等週期性提醒' },
      { icon: '💱', color: 'mint', title: '多幣別支援', desc: '外幣記帳，自動匯率換算為主幣' },
      { icon: '🏷️', color: 'blue', title: '自訂分類', desc: '新增、編輯收支分類，自選圖示與顏色' },
      { icon: '🌗', color: 'purple', title: '深色模式', desc: '支援淺色與深色主題，自動跟隨系統' },
      { icon: '📁', color: 'green', title: '資料備份', desc: 'CSV 匯入匯出，安心保存與還原資料' },
    ],
    premium: {
      title: '進階會員',
      desc: '升級進階會員，解鎖完整統計分析功能，全面掌握您的財務狀況。',
      tags: ['📈 趨勢圖表', '🥧 分類餅圖', '📊 收支分析'],
    },
    faq: {
      title: '常見問題',
      items: [
        { q: '如何新增一筆記帳？', a: '點擊主頁的「+」按鈕，即可透過 POS 風格介面快速輸入金額、選擇分類與商店，完成記帳。' },
        { q: '如何設定預算？', a: '前往「記帳」頁面，點擊右上角選單中的「預算管理」，即可為不同分類設定每日、每週、每月或每年的預算上限。' },
        { q: '如何新增或自訂分類？', a: '前往「設定」中的分類管理，可新增自訂收支分類，自選圖示與顏色，也可編輯預設分類的名稱和圖示。' },
        { q: '如何設定提醒？', a: '新增或編輯記帳 / 記事時，開啟提醒功能即可設定提醒時間。支援一次性、每日、每週、每月、每年及自訂天數等多種週期。' },
        { q: '如何備份或還原資料？', a: '前往「設定」>「資料管理」，可將記帳與記事資料匯出為 CSV 檔案，也可從 CSV 檔案匯入還原。' },
        { q: '支援哪些幣別？', a: 'CalThings 支援多種常見幣別（TWD、USD、JPY、EUR 等），可在記帳時選擇幣別並自動換算為主幣。' },
        { q: '統計分析功能需要付費嗎？', a: '是的，完整的統計分析功能（含趨勢圖表與分類餅圖）為進階會員專屬功能，可透過應用內訂閱解鎖。' },
        { q: '資料會上傳到雲端嗎？', a: '您的所有記帳與記事資料皆儲存在裝置本機，不會上傳至任何伺服器。' },
      ],
    },
    announcements: {
      title: '最新公告',
      empty: '目前沒有公告。',
      readMore: '閱讀更多',
      backToList: '← 返回公告列表',
      publishedOn: '發布於',
    },
    contact: {
      title: '聯絡我們',
      desc: '如果您有任何問題、建議或回饋，歡迎來信：',
    },
    download: {
      title: '立即下載',
      desc: '免費下載，開始您的智慧記帳之旅。',
      btn: 'App Store 下載',
    },
    terms: {
      title: '使用條款',
      updated: '最後更新日期：2026 年 4 月 27 日',
    },
    privacy: {
      title: '隱私權政策',
      updated: '最後更新日期：2026 年 2 月 27 日',
    },
    footer: {
      rights: '© 2026 CalThings. All rights reserved.',
      backToTop: '回到頂部',
    },
    backToHome: '← 返回首頁',
  },

  en: {
    lang: 'en',
    nav: {
      home: 'Home',
      faq: 'FAQ',
      announcements: 'News',
      terms: 'Terms',
      privacy: 'Privacy',
    },
    hero: {
      subtitle: 'Smart Expense Tracking, Simple Life',
      downloadBtn: 'Download on App Store',
    },
    about: {
      title: 'About CalThings',
      desc: 'CalThings is a full-featured iOS app for expense tracking and note-taking, built with modern SwiftUI. It helps you manage daily income and expenses, set budgets, write memos, with integrated lunar calendar display and smart reminder features.',
    },
    features: [
      { icon: '💰', color: 'coral', title: 'POS-Style Entry', desc: 'Intuitive interface for quick amount input, category & store selection' },
      { icon: '📊', color: 'blue', title: 'Budget Management', desc: 'Set category budgets, track spending in real time' },
      { icon: '📝', color: 'yellow', title: 'Notes', desc: 'Memos, tag categories, pin feature, linked to expenses' },
      { icon: '📈', color: 'green', title: 'Statistics', desc: 'Income & expense trend charts, category pie charts' },
      { icon: '🌙', color: 'purple', title: 'Lunar Calendar', desc: 'Traditional lunar calendar with Chinese date formatting' },
      { icon: '🔔', color: 'coral', title: 'Smart Reminders', desc: 'One-time, daily, weekly, monthly & custom recurring reminders' },
      { icon: '💱', color: 'mint', title: 'Multi-Currency', desc: 'Foreign currency recording with auto exchange rate conversion' },
      { icon: '🏷️', color: 'blue', title: 'Custom Categories', desc: 'Add & edit income/expense categories with custom icons & colors' },
      { icon: '🌗', color: 'purple', title: 'Dark Mode', desc: 'Light and dark themes, follows system appearance' },
      { icon: '📁', color: 'green', title: 'Data Backup', desc: 'CSV import & export for safe data storage and restore' },
    ],
    premium: {
      title: 'Premium Membership',
      desc: 'Upgrade to Premium to unlock full statistics and analytics for a complete view of your finances.',
      tags: ['📈 Trend Charts', '🥧 Category Pie Charts', '📊 Income & Expense Analysis'],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How do I add a new expense?', a: 'Tap the "+" button on the home page to quickly enter the amount, select a category and store using the POS-style interface.' },
        { q: 'How do I set a budget?', a: 'Go to the "Expenses" tab, tap the menu in the top right corner and select "Budget Management" to set daily, weekly, monthly, or yearly budget limits for different categories.' },
        { q: 'How do I add or customize categories?', a: 'Go to category management in Settings to add custom income/expense categories with your choice of icon and color. You can also edit the name and icon of default categories.' },
        { q: 'How do I set reminders?', a: 'When adding or editing an expense or note, enable the reminder feature to set a reminder time. Supports one-time, daily, weekly, monthly, yearly, and custom day intervals.' },
        { q: 'How do I back up or restore data?', a: 'Go to "Settings" > "Data Management" to export your expense and note data as CSV files, or import from CSV files to restore.' },
        { q: 'Which currencies are supported?', a: 'CalThings supports many common currencies (TWD, USD, JPY, EUR, etc.). You can select a currency when recording expenses and it will auto-convert to your primary currency.' },
        { q: 'Is the statistics feature paid?', a: 'Yes, full statistics and analytics (including trend charts and category pie charts) are exclusive to Premium members and can be unlocked via in-app subscription.' },
        { q: 'Is my data uploaded to the cloud?', a: 'All your expense and note data is stored locally on your device and is never uploaded to any server.' },
      ],
    },
    announcements: {
      title: 'Announcements',
      empty: 'No announcements yet.',
      readMore: 'Read more',
      backToList: '← Back to announcements',
      publishedOn: 'Published on',
    },
    contact: {
      title: 'Contact Us',
      desc: 'If you have any questions, suggestions, or feedback, feel free to reach out:',
    },
    download: {
      title: 'Download Now',
      desc: 'Free to download. Start your smart expense tracking journey.',
      btn: 'Download on App Store',
    },
    terms: {
      title: 'Terms of Service',
      updated: 'Last updated: April 27, 2026',
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: February 27, 2026',
    },
    footer: {
      rights: '© 2026 CalThings. All rights reserved.',
      backToTop: 'Back to top',
    },
    backToHome: '← Back to Home',
  },

  ja: {
    lang: 'ja',
    nav: {
      home: 'ホーム',
      faq: 'よくある質問',
      announcements: 'お知らせ',
      terms: '利用規約',
      privacy: 'プライバシー',
    },
    hero: {
      subtitle: 'スマート家計簿・シンプルライフ',
      downloadBtn: 'App Store からダウンロード',
    },
    about: {
      title: 'CalThings について',
      desc: 'CalThings は、モダンな SwiftUI で構築されたフル機能の iOS 向け家計簿・メモアプリです。日々の収支管理、予算設定、メモ作成を簡単に行え、旧暦表示やスマートリマインダー機能も統合しています。',
    },
    features: [
      { icon: '💰', color: 'coral', title: 'POS スタイル入力', desc: '直感的なインターフェースで金額・カテゴリ・店舗を素早く入力' },
      { icon: '📊', color: 'blue', title: '予算管理', desc: 'カテゴリ別予算を設定し、支出をリアルタイムで追跡' },
      { icon: '📝', color: 'yellow', title: 'メモ機能', desc: 'メモ、タグ分類、ピン留め、支出との連携' },
      { icon: '📈', color: 'green', title: '統計分析', desc: '収支トレンドチャート、カテゴリ別円グラフ' },
      { icon: '🌙', color: 'purple', title: '旧暦対応', desc: '旧暦（農暦）表示、中国語日付フォーマット' },
      { icon: '🔔', color: 'coral', title: 'スマートリマインダー', desc: '1回限り、毎日、毎週、毎月など多様な周期設定' },
      { icon: '💱', color: 'mint', title: 'マルチ通貨対応', desc: '外貨記録と自動為替レート換算' },
      { icon: '🏷️', color: 'blue', title: 'カスタムカテゴリ', desc: '収支カテゴリを追加・編集、アイコンと色を自由に選択' },
      { icon: '🌗', color: 'purple', title: 'ダークモード', desc: 'ライト・ダークテーマ対応、システム設定に自動追従' },
      { icon: '📁', color: 'green', title: 'データバックアップ', desc: 'CSV インポート・エクスポートで安心保存・復元' },
    ],
    premium: {
      title: 'プレミアム会員',
      desc: 'プレミアムにアップグレードすると、完全な統計分析機能で家計を全面的に把握できます。',
      tags: ['📈 トレンドチャート', '🥧 カテゴリ別円グラフ', '📊 収支分析'],
    },
    faq: {
      title: 'よくある質問',
      items: [
        { q: '新しい支出を追加するには？', a: 'ホーム画面の「+」ボタンをタップすると、POS スタイルのインターフェースで金額入力、カテゴリ・店舗の選択ができます。' },
        { q: '予算を設定するには？', a: '「家計簿」タブで右上のメニューから「予算管理」を選択すると、カテゴリ別に日次・週次・月次・年次の予算上限を設定できます。' },
        { q: 'カテゴリを追加・カスタマイズするには？', a: '設定のカテゴリ管理から、収支カテゴリを追加できます。アイコンと色を自由に選択でき、デフォルトカテゴリの名前やアイコンも編集可能です。' },
        { q: 'リマインダーを設定するには？', a: '支出やメモの追加・編集時にリマインダー機能をオンにすると、通知時間を設定できます。1回限り、毎日、毎週、毎月、毎年、カスタム日数に対応しています。' },
        { q: 'データのバックアップや復元は？', a: '「設定」>「データ管理」から、家計簿やメモのデータを CSV ファイルとしてエクスポートしたり、CSV ファイルからインポートして復元できます。' },
        { q: '対応している通貨は？', a: 'CalThings は多くの主要通貨（TWD、USD、JPY、EUR など）に対応しています。記録時に通貨を選択すると、主通貨に自動換算されます。' },
        { q: '統計分析機能は有料ですか？', a: 'はい、完全な統計分析機能（トレンドチャート、カテゴリ別円グラフなど）はプレミアム会員専用機能で、アプリ内サブスクリプションで解除できます。' },
        { q: 'データはクラウドにアップロードされますか？', a: 'すべての家計簿・メモデータはデバイス本体に保存され、サーバーにアップロードされることはありません。' },
      ],
    },
    announcements: {
      title: 'お知らせ',
      empty: 'お知らせはまだありません。',
      readMore: '続きを読む',
      backToList: '← お知らせ一覧に戻る',
      publishedOn: '公開日',
    },
    contact: {
      title: 'お問い合わせ',
      desc: 'ご質問、ご提案、フィードバックがございましたら、お気軽にご連絡ください：',
    },
    download: {
      title: 'ダウンロード',
      desc: '無料でダウンロード。スマート家計簿を始めましょう。',
      btn: 'App Store からダウンロード',
    },
    terms: {
      title: '利用規約',
      updated: '最終更新日：2026年4月27日',
    },
    privacy: {
      title: 'プライバシーポリシー',
      updated: '最終更新日：2026年2月27日',
    },
    footer: {
      rights: '© 2026 CalThings. All rights reserved.',
      backToTop: 'トップへ戻る',
    },
    backToHome: '← ホームに戻る',
  },
};
