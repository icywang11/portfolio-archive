export type Project = {
  slug: string
  num: string
  title: string
  enTitle: string
  category: string
  year: string
  role: string
  summary: string
  overview: string
  challenge: string
  approach: string
  execution: string[]
  result: string
  reflection: string
  to: string
  href?: string
  hrefLabel?: string
  linksLabel?: string
  stats: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: "community-ops",
    num: "01",
    title: "社区运营",
    enTitle: "Community Operations",
    category: "Work",
    year: "2026",
    role: "海外运营实习 · NetEase",
    to: "/works/community-ops",
    summary: "Discord 基建、活动执行和数据复盘。社区活动看板是工作里真正在用的指挥板。",
    overview:
      "在网易海外运营实习中，我负责 Discord 社区、活动落地和每周数据复盘，服务《燕云十六声》《全明星街球派对》。社区活动数据看板把 4 个社区、189 场活动、20 万参与人次摊在一页，用来指挥下一场。",
    challenge:
      "多社区并行时，触达、参与和舆情会散开。翻表耽误决策，周报只能事后叙述。",
    approach:
      "基建先稳，触达可计量，周报收成下一周动作。活动结束后数据回到同一张看板。",
    execution: [
      "完成 100万+ 人次私信推送，并在推送后取数",
      "输出 50+ 篇周报，维持社区看板与每周数据分析",
      "优化《燕云十六声》《全明星街球派对》Discord 社区基建",
      "把 4 个社区、189 场活动做成可检索的活动看板",
    ],
    result: "触达效率提高 30%。后续活动参与率提升约 18%。看板可在线打开。",
    reflection: "社区运营的成绩是触达、参与和复盘能不能闭环。看板属于这条线。",
    href: "https://icywang11.github.io/discord-community-board/",
    hrefLabel: "打开社区活动数据看板",
    stats: [
      { value: "100万+", label: "DM Reach" },
      { value: "4", label: "Discord Communities" },
      { value: "189", label: "Campaigns" },
      { value: "18%", label: "Event Participation" },
    ],
  },
  {
    slug: "ai-tools",
    num: "02",
    title: "AI 工具使用",
    enTitle: "Small Worlds",
    category: "Personal",
    year: "2026",
    role: "个人项目",
    to: "/works/ai-tools",
    summary: "用 AI 把星座、读书这些兴趣做成可以打开的小网页。后面还会做太空和宇宙相关的东西。",
    overview:
      "我喜欢星座和印占，也喜欢读书。工作之外，我会用 AI 搭一些小网页，把这些兴趣做成可以打开、可以玩的东西：每日星座心情、书单转盘，还有像素小人。后面还会继续做太空和宇宙相关的内容——我是宇宙迷。",
    challenge:
      "兴趣如果只停在收藏和备忘，很快就会过期。我想让它们变成可以每天回来看一眼的小地方。",
    approach:
      "一个网页只做一件事：写信、抽书、出一张图。先做完，再慢慢把宇宙主题加进去。",
    execution: [
      "每日星座心情：运势、幸运色、穿搭和今日饮品排成一封信",
      "每日书单转盘：抽出一位作者和一句名言，写下今日一文",
      "像素小人：一张参考照生成可交付的像素纸娃娃",
    ],
    result: "三件小网页都可以在线打开。之后会往太空、宇宙的方向继续做。",
    reflection: "这些是兴趣的延伸，不是实习交付。工作里用的看板写在社区运营里。",
    linksLabel: "打开小网页",
    stats: [],
  },
  {
    slug: "play",
    num: "03",
    title: "玩法落地",
    enTitle: "Play",
    category: "Play",
    year: "2026",
    role: "社区机制",
    to: "/play",
    summary: "线索解谜拉玩家进 Discord，再用机器人把上墙、彩蛋和抽奖跑起来。",
    overview: "",
    challenge: "",
    approach: "",
    execution: [],
    result: "",
    reflection: "",
    stats: [],
  },
  {
    slug: "sentiment",
    num: "04",
    title: "舆情处理",
    enTitle: "Sentiment Board",
    category: "Work",
    year: "2026",
    role: "社区运营",
    to: "https://icywang11.github.io/community-board/",
    href: "https://icywang11.github.io/community-board/",
    hrefLabel: "打开舆情看板",
    summary: "把玩家反馈收成整体、本周、议题、建议和原话。点进去打开舆情看板。",
    overview:
      "社区消息量和舆情速度靠手工翻会跟不上。我把处理写成固定步骤：收集、确认、策略、复盘，再收到同一张看板上。",
    challenge: "反馈散在频道和表格里，单周情绪容易盖过跨周反复出现的问题。",
    approach: "先看整体和跨周主线，再看当周类型，最后落到建议、动作和原话。",
    execution: [
      "累计有效反馈收进整体舆情",
      "按周拆类型、建议和原话",
      "跨周反复出现的议题单独跟踪",
    ],
    result: "看板可在线打开：整体、本周、议题、建议、原话在同一套目录里。",
    reflection: "舆情处理的成绩是能不能从原话走到下一周动作，而不是停在情绪统计。",
    stats: [
      { value: "3950", label: "有效反馈" },
      { value: "24", label: "周" },
    ],
  },
]

export function isExternalProject(project: Project) {
  return /^https?:\/\//.test(project.to)
}

export const projectLinks: Record<string, { label: string; href: string }[]> = {
  "ai-tools": [
    { label: "每日星座心情", href: "https://icywang11.github.io/icy-melody/" },
    { label: "每日书单转盘", href: "https://icywang11.github.io/book-spin/" },
    { label: "像素小人制作", href: "https://icywang11.github.io/chibi-forge/" },
  ],
}

export const projectRedirects: Record<string, string> = {
  "discord-community-board": "/works/community-ops",
  "netease-overseas-ops": "/works/community-ops",
  "poizon-global-ops": "/internship",
  poizon: "/internship",
  "play-mechanics": "/play",
  play: "/play",
  "ai-ops-tools": "/works/ai-tools",
  yuqing: "https://icywang11.github.io/community-board/",
  "community-board": "https://icywang11.github.io/community-board/",
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return projects[0]
  return projects[(index + 1) % projects.length]
}
