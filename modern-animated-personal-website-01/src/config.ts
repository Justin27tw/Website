// ============================================================
// 🌌 AURORA — 個人資料設定檔
// 修改這裡即可自訂整個網站的內容
// ============================================================

export const profile = {
  name: "邱 哥",
  englishName: "CHIU JIA",
  title: "全端開發工程師 & 創意設計師",
  tagline: "在程式與設計的交界，探索無限可能",
  description:
    "一位精通 C# 後端與 Kotlin 行動開發的全端實戰派，擅長將穿戴裝置與地理資訊進行軟硬整合。",
  email: "chiubroworking@gmail.com",
  location: "臺灣 · 臺北",
  years: 1,
  projects: 2,
  clients: 0,
  awards: 0,
};

export const roles = [
  "前端、後端開發工程師",
  "UI/UX 設計師",
  "應用程式設計師",
  "Android開發者",
  "開源貢獻者",
];

export const skills = [
  { name: "React / Next.js", level: 96, category: "Frontend" },
  { name: "TypeScript", level: 93, category: "Language" },
  { name: "Node.js", level: 89, category: "Backend" },
  { name: "UI / UX Design", level: 92, category: "Design" },
  { name: "Tailwind CSS", level: 98, category: "Styling" },
  { name: "Three.js / WebGL", level: 82, category: "3D" },
  { name: "Figma", level: 90, category: "Design" },
  { name: "Motion Design", level: 85, category: "Animation" },
];

export const experiences = [
  // {
  //   year: "2024 — 現在",
  //   title: "資深前端工程師",
  //   company: "TechNova Studio",
  //   desc: "帶領團隊打造多個 SaaS 產品，導入 Design System 與動畫規範，優化使用者體驗與效能。",
  // },
  // {
  //   year: "2022 — 2024",
  //   title: "產品設計師",
  //   company: "Aurora Labs",
  //   desc: "負責跨平台應用的 UI/UX 設計，建立品牌識別系統，作品榮獲 Awwwards 與多項國際設計獎。",
  // },
  // {
  //   year: "2020 — 2022",
  //   title: "全端工程師",
  //   company: "CloudForge Inc.",
  //   desc: "從零打造多個 Web 應用，涵蓋電商、數據平台與 AI 工具整合，月活用戶突破 50 萬。",
  // },
  // {
  //   year: "2018 — 2020",
  //   title: "自由接案設計師",
  //   company: "Freelance",
  //   desc: "與新創團隊與品牌合作，完成超過 40 個網站與品牌識別設計案。",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Nebula Analytics",
    subtitle: "即時數據儀表板",
    category: "Web App",
    desc: "結合 AI 分析的企業級數據儀表板，提供即時可視化、智慧洞察與預測報告。",
    tags: ["React", "D3.js", "TypeScript", "AI"],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    year: "2025",
    featured: true,
  },
  {
    id: 2,
    title: "Aurora Commerce",
    subtitle: "3D 沈浸式電商",
    category: "E-Commerce",
    desc: "次世代電商平台，主打 3D 產品展示、AR 試用與個人化推薦。",
    tags: ["Next.js", "Three.js", "Stripe", "WebGL"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    year: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "Pulse Music",
    subtitle: "AI 音樂串流",
    category: "Mobile App",
    desc: "AI 驅動的音樂串流應用，根據情緒與時段智慧推薦專屬歌單。",
    tags: ["React Native", "Node.js", "ML"],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    year: "2024",
    featured: false,
  },
  {
    id: 4,
    title: "Orbit Design System",
    subtitle: "跨平台設計系統",
    category: "Design System",
    desc: "完整的跨平台設計系統，包含 250+ 元件、設計 Token 與文件網站。",
    tags: ["Figma", "Storybook", "Tokens"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    year: "2024",
    featured: false,
  },
  {
    id: 5,
    title: "Quantum Chat",
    subtitle: "AI 協作平台",
    category: "AI Tool",
    desc: "即時協作 AI 對話平台，支援多模態輸入、團隊知識庫與自動化工作流。",
    tags: ["WebSocket", "LLM", "Next.js"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    year: "2023",
    featured: true,
  },
  {
    id: 6,
    title: "Horizon Portfolio",
    subtitle: "3D 互動作品集",
    category: "Website",
    desc: "WebGL 互動式作品集網站，結合滾動動畫與粒子效果。",
    tags: ["Three.js", "GSAP", "Blender"],
    gradient: "from-sky-500 via-indigo-500 to-purple-500",
    year: "2023",
    featured: false,
  },
];

export const services = [
  {
    icon: "✨",
    title: "網站與 Web App 開發",
    desc: "打造高效能、現代化的網站與 Web 應用，支援 SSR、PWA 與漸進式增強。",
    highlights: ["Next.js", "效能優化", "SEO"],
  },
  {
    icon: "🎨",
    title: "UI/UX 體驗設計",
    desc: "以使用者為中心的研究與設計流程，創造直覺且美觀的使用體驗。",
    highlights: ["使用者研究", "資訊架構", "原型設計"],
  },
  {
    icon: "🌌",
    title: "互動動畫與 3D",
    desc: "運用 WebGL、GSAP 與物理模擬，打造令人驚豔的動畫與 3D 互動。",
    highlights: ["Three.js", "GSAP", "Shader"],
  },
  {
    icon: "🚀",
    title: "品牌與數位策略",
    desc: "協助新創與品牌建立數位識別、內容策略與成長藍圖。",
    highlights: ["品牌識別", "內容策略", "成長行銷"],
  },
];

export const testimonials = [
  {
    name: "陳志遠",
    title: "CEO @ TechNova",
    content:
      "Jay 的技術實力與設計品味令人驚豔，他為我們的產品帶來前所未有的升級，團隊合作非常愉快。",
    avatar: "C",
  },
  {
    name: "Sarah Wang",
    title: "Product Manager @ Aurora",
    content:
      "一位難得能同時掌握設計與工程的人才。他的動畫與互動設計總是能讓產品脫穎而出。",
    avatar: "S",
  },
  {
    name: "李 明 哲",
    title: "Founder @ StartupX",
    content:
      "從零到一的過程中，Jay 提供了非常多寶貴的建議，網站上線後轉換率提升了 180%。",
    avatar: "L",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
];

export const themePresets = [
  { id: "aurora", name: "極光紫", colors: ["#a78bfa", "#f472b6"] },
  { id: "sunset", name: "暮光紅", colors: ["#fb923c", "#f43f5e"] },
  { id: "ocean", name: "深海藍", colors: ["#22d3ee", "#3b82f6"] },
  { id: "meadow", name: "森林綠", colors: ["#4ade80", "#34d399"] },
  { id: "light", name: "拂曉白", colors: ["#6366f1", "#ec4899"] },
];

export const stats = [
  { value: "6+", label: "年資歷", desc: "Years of Experience" },
  { value: "58+", label: "完成專案", desc: "Projects Delivered" },
  { value: "34+", label: "合作客戶", desc: "Happy Clients" },
  { value: "12+", label: "獲獎紀錄", desc: "Awards Won" },
];

export const marqueeWords = [
  "DESIGN", "✦", "DEVELOP", "✦", "CREATE", "✦", "INNOVATE", "✦",
  "MOTION", "✦", "3D", "✦", "UI/UX", "✦", "FRONTEND", "✦",
];
