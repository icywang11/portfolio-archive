export const site = {
  name: "Icy Wang",
  title: "Icy Wang · Portfolio Archive",
  description: "海外运营。把社区、活动和复盘做成可复用的工作流。",
  volume: "VOL. 01",
  year: "2026",
  roleLine: "OVERSEAS OPERATIONS",
  headline: "A DIGITAL ARCHIVE OF SELECTED WORKS",
  intro: "海外运营、内容与数据。把社区、活动和复盘做成可复用的工作流。",
  focus: "海外运营 · 内容 · 数据",
  location: "China",
  status: "NetEase · 海外运营实习",
  hobbies: "音乐 / 摄影 / 旅行 / 阅读",
  email: "wycsdu0516@163.com",
  wechat: "Wycrrika",
  github: "https://github.com/icywang11",
  resume: "/icywang-resume.pdf",
  resumeFileName: "icywang 简历.pdf",
  tags: ["Operations", "Data", "Community", "Campaigns", "Japanese"],
}

export const identity = [
  { label: "Who", value: "Icy Wang" },
  { label: "Does", value: "海外运营" },
  { label: "Hobbies", value: "音乐 / 摄影 / 旅行 / 阅读" },
  { label: "Now", value: "NetEase · 海外运营实习" },
  { label: "Contact", value: "wycsdu0516@163.com" },
] as const

export const nav = [
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/internship", label: "Internship" },
  { to: "/gaming", label: "Gaming" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const

export const directory = [
  { num: "01", title: "About", hint: "Profile / Approach", to: "/about" },
  { num: "02", title: "Works", hint: "Community · AI · Play · Sentiment", to: "/works" },
  { num: "03", title: "Internship", hint: "NetEase · POIZON", to: "/internship" },
  { num: "04", title: "Gaming", hint: "Play History / 游戏经历", to: "/gaming" },
  { num: "05", title: "Process", hint: "Research → Optimization", to: "/process" },
  { num: "06", title: "Contact", hint: "Email / Resume / GitHub", to: "/contact" },
] as const

export const internships = [
  {
    company: "NETEASE",
    dates: "2026.03 — 2026.09",
    role: "海外运营",
    summary:
      "以 Discord 社区运营、活动执行和数据分析为核心，参与海外游戏用户增长与内容生态建设。",
    stats: [
      { value: "100万+", label: "私信触达" },
      { value: "50+", label: "周报" },
      { value: "18%", label: "活动参与率" },
      { value: "30%", label: "触达效率" },
    ],
    bullets: [
      "汇总4个社区、189场活动，制作活动数据复盘网页",
      "独立搭建24周舆情分析看板，改善社区氛围",
      "完成 100万+ 人次私信推送，输出 50+ 篇周报",
      "《燕云十六声》《全明星街球派对》Discord 社区基建优化",
    ],
  },
  {
    company: "POIZON",
    dates: "2025.06 — 2025.09",
    role: "全球化运营",
    summary: "负责重点商家经营与跨境营销活动，把商品、商家和活动数据跑顺。",
    stats: [
      { value: "10万+", label: "跨境 SKU" },
      { value: "99.5%", label: "准确率" },
      { value: "30+", label: "重点商家" },
      { value: "35%", label: "大促活跃度" },
    ],
    bullets: [
      "维护 10万+ 跨境商品 SKU，准确率 99.5%",
      "负责 30+ 重点商家运营",
      "大促活跃度提升 35%",
    ],
  },
]

export const skills = [
  { group: "Operations", items: ["Community Management", "Campaign Planning", "User Growth", "Global Ops"] },
  { group: "Data", items: ["Activity Review", "Dashboarding", "Reach Analysis", "Weekly Reporting"] },
  { group: "Tools", items: ["Discord", "Excel / Sheets", "AI Workflows", "Content Systems"] },
]

export const hobbies = [
  {
    id: "music",
    tab: "Music",
    title: "听音乐",
    note: "海鸟和鱼相爱 只是一场意外",
    slides: [
      { src: "/hobbies/music/01-gdragon.jpg", alt: "G-DRAGON Übermensch 世界巡演", caption: "G-DRAGON" },
      { src: "/hobbies/music/02-utada.jpg", alt: "宇多田光 First Love", caption: "宇多田光" },
      { src: "/hobbies/music/03-groupies.jpg", alt: "groupies", caption: "groupies" },
      { src: "/hobbies/music/04-jay.jpg", alt: "周杰伦", caption: "周杰伦" },
      { src: "/hobbies/music/05-crowd-lu.jpg", alt: "卢广仲", caption: "卢广仲" },
      { src: "/hobbies/music/06-avril.jpg", alt: "Avril Lavigne", caption: "Avril Lavigne" },
      { src: "/hobbies/music/07-blackpink.jpg", alt: "BLACKPINK", caption: "BLACKPINK" },
    ],
  },
  {
    id: "photo",
    tab: "Photography",
    title: "摄影",
    note: "相机是我的语言，我说的每一个字都是“看见”",
    slides: [
      { src: "/hobbies/photo/01-coast.jpg", alt: "海边", caption: "海边" },
      { src: "/hobbies/photo/02-leaves.jpg", alt: "树影", caption: "树影" },
      { src: "/hobbies/photo/03-sunset.jpg", alt: "晚霞", caption: "晚霞" },
      { src: "/hobbies/photo/04-night.jpg", alt: "夜色", caption: "夜色" },
      { src: "/hobbies/photo/05-roof.jpg", alt: "屋檐", caption: "屋檐" },
      { src: "/hobbies/photo/06-breakwater.jpg", alt: "防波堤", caption: "防波堤" },
    ],
  },
  {
    id: "travel",
    tab: "Travel",
    title: "旅行",
    note: "读万卷书，行万里路",
    slides: [
      { src: "/hobbies/travel/01-beijing.jpg", alt: "北京", caption: "北京" },
      { src: "/hobbies/travel/02-xian.jpg", alt: "西安", caption: "西安" },
      { src: "/hobbies/travel/03-altay.jpg", alt: "阿勒泰", caption: "阿勒泰" },
      { src: "/hobbies/travel/04-seoul.jpg", alt: "首尔", caption: "首尔" },
      { src: "/hobbies/travel/05-kawagoe.jpg", alt: "川越", caption: "川越" },
      { src: "/hobbies/travel/06-kobe.jpg", alt: "神户", caption: "神户" },
      { src: "/hobbies/travel/07-yokohama.jpg", alt: "横滨", caption: "横滨" },
      { src: "/hobbies/travel/08-kyoto.jpg", alt: "京都", caption: "京都" },
      { src: "/hobbies/travel/09-nara.jpg", alt: "奈良", caption: "奈良" },
      { src: "/hobbies/travel/10-tokyo.jpg", alt: "东京", caption: "东京" },
      { src: "/hobbies/travel/11-sapporo.jpg", alt: "札幌", caption: "札幌" },
      { src: "/hobbies/travel/12-hongkong.jpg", alt: "香港", caption: "香港" },
      { src: "/hobbies/travel/13-macao.jpg", alt: "澳门", caption: "澳门" },
    ],
  },
  {
    id: "reading",
    tab: "Reading",
    title: "阅读",
    note: "哲学、文学、经济与自传。一边读人怎么活，一边读事怎么做成。",
    slides: [],
    books: [
      { genre: "哲学", title: "《悉达多》", author: "赫尔曼·黑塞" },
      { genre: "文学", title: "《百年孤独》", author: "加西亚·马尔克斯" },
      { genre: "经济", title: "《置身事内》", author: "兰小欢" },
      { genre: "自传", title: "《经营未来》", author: "李明博" },
    ],
  },
]
