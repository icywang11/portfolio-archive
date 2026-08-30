export const site = {
  name: "Yichen Wang",
  short: "Icy",
  title: "Yichen Wang · Portfolio Archive",
  description: "社区运营、游戏运营、内容与数据。把社区、活动和复盘做成可复用的工作流。",
  volume: "VOL. 01",
  year: "2026",
  roleLine: "COMMUNITY / OPERATIONS / GAME INDUSTRY",
  headline: "A DIGITAL ARCHIVE OF SELECTED WORKS",
  intro: "海外运营、内容与数据。把社区、活动和复盘做成可复用的工作流。",
  focus: "Community Operations · Game Operations · Data",
  location: "China / Remote-ready",
  status: "NetEase · 海外运营实习",
  email: "wycsdu0516@163.com",
  wechat: "Wycrrika",
  github: "https://github.com/icywang11",
  tags: ["Operations", "Data", "Community", "Campaigns", "Japanese"],
}

export const nav = [
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const

export const directory = [
  { num: "01", title: "About", hint: "Profile / Approach", to: "/about" },
  { num: "02", title: "Selected Works", hint: "Archive / Case studies", to: "/works" },
  { num: "03", title: "Experience", hint: "NetEase · POIZON", to: "/about#experience" },
  { num: "04", title: "Process", hint: "Research → Optimization", to: "/process" },
  { num: "05", title: "Contact", hint: "Email / WeChat / GitHub", to: "/contact" },
] as const

export const timeline = [
  {
    year: "2025",
    title: "POIZON",
    role: "全球化运营实习",
    note: "重点商家经营与跨境营销，把商品、商家和活动数据跑顺。",
  },
  {
    year: "2026",
    title: "NetEase",
    role: "海外运营实习",
    note: "Discord 社区、活动执行与数据分析，参与海外游戏用户增长。",
  },
]

export const skills = [
  { group: "Operations", items: ["Community Management", "Campaign Planning", "User Growth", "Global Ops"] },
  { group: "Data", items: ["Activity Review", "Dashboarding", "Reach Analysis", "Weekly Reporting"] },
  { group: "Tools", items: ["Discord", "Excel / Sheets", "AI Workflows", "Content Systems"] },
]

export const interests = [
  { title: "Music", note: "海鸟和鱼相爱 只是一场意外" },
  { title: "Photography", note: "相机是我的语言，我说的每一个字都是“看见”" },
  { title: "Travel", note: "读万卷书，行万里路" },
  { title: "Reading", note: "哲学与经济：一边读人怎么活，一边读事怎么做成。" },
]
