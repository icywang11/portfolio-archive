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
  href?: string
  hrefLabel?: string
  linksLabel?: string
  stats: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: "ai-tools",
    num: "01",
    title: "AI 工具使用",
    enTitle: "AI in Operations",
    category: "Work",
    year: "2026",
    role: "海外运营",
    summary: "工作里用 AI 做舆情对策和定时推送，把重复触达交给工具，判断留给人。",
    overview:
      "海外社区的消息量和舆情速度，靠手工翻看会跟不上。我在工作里用 AI 收舆情、整理对策，并用定时推送把内容发出去。像素小人、星座信、书单转盘是我自己的延伸玩法，放在「玩法落地」，不和社区看板混在一起。",
    challenge:
      "舆情一来就要确认范围、原因和风险；触达又要按时发生。如果这两件事都靠人盯，周报会写成流水账。",
    approach:
      "先把舆情处理写成固定步骤：收集、确认、策略、复盘。再用机器人做定时分发。人只做判断和对外口径。",
    execution: [
      "用 AI 收集舆情并整理对策：确认信息、紧急风险、与产品策划同步、安抚用户",
      "使用龙虾做定时内容分发和运营触达",
      "用机器人承担重复触达，人负责判断和复盘",
    ],
    result: "舆情有步骤可跟，推送有固定节奏。社区看板仍是工作里的指挥工具，见「社区运营」。",
    reflection: "工作里的 AI 是为了把流程跑稳，不是为了做出三个可玩的小站。",
    stats: [],
  },
  {
    slug: "play-mechanics",
    num: "02",
    title: "玩法落地",
    enTitle: "Play, Landed",
    category: "Play",
    year: "2026",
    role: "社区机制 / 个人延伸",
    summary: "社区里落地签到、指令和小游戏；另外用 AI 做了三件可玩的延伸，和看板不是同一件事。",
    overview:
      "社区增长不能只靠公告。工作里我把指令互动、签到、小游戏做成玩家会点的机制。另外，像素小人、每日星座心情、书单转盘是我用 AI 做的延伸玩法，用来练交付和回访，不是实习项目产出。",
    challenge:
      "玩法如果停在策划案，玩家看不见。个人做的 AI 小工具如果写成工作结果，又会和工作里的社区看板混在一起。",
    approach:
      "社区机制求能跑、能重复；个人延伸玩法求能打开、能玩。两条线分开写。",
    execution: [
      "社区落地：指令互动、签到与社区小游戏",
      "社区落地：积分商城结构与运营配置",
      "延伸玩法：像素小人，一张参考照生成可交付纸娃娃",
      "延伸玩法：每日星座心情，把运势和穿搭写成会回访的信",
      "延伸玩法：每日书单转盘，抽出作者和一句名言后写下今日一文",
    ],
    result: "社区玩法进了日常互动。三件延伸玩法可以点开试，它们不替代社区看板。",
    reflection: "玩法落地看玩家会不会用；延伸玩法看自己会不会把它做完。工作成绩仍以社区运营和得物为准。",
    linksLabel: "延伸玩法 · 可试玩",
    stats: [],
  },
  {
    slug: "community-ops",
    num: "03",
    title: "社区运营",
    enTitle: "Community Operations",
    category: "Work",
    year: "2026",
    role: "海外运营实习 · NetEase",
    summary: "Discord 基建、活动执行和数据复盘。社区活动看板是工作里真正在用的指挥板。",
    overview:
      "在网易海外运营实习中，我负责 Discord 社区、活动落地和每周数据复盘，服务《燕云十六声》《全明星街球派对》。社区活动数据看板把 4 个社区、189 场活动、20 万参与人次摊在一页，这是工作产出，不是个人 AI 小工具。",
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
    slug: "poizon",
    num: "04",
    title: "得物",
    enTitle: "POIZON",
    category: "Work",
    year: "2025",
    role: "全球化运营实习",
    summary: "重点商家经营与跨境营销，把商品、商家和活动数据跑顺。",
    overview:
      "在得物全球化运营实习中，我维护跨境商品信息、跟进重点商家，并参与大促。工作重心是准确率和活动活跃。",
    challenge:
      "跨境 SKU 体量大，商家节奏不一。信息不准会伤转化；大促只做声量、不看活跃，活动会空转。",
    approach:
      "先把商品和商家数据做干净，再把大促压到可追踪的活跃指标上。",
    execution: [
      "维护 10万+ 跨境商品 SKU，准确率 99.5%",
      "负责 30+ 重点商家的日常经营运营",
      "参与跨境营销活动，跟踪大促活跃度",
    ],
    result: "SKU 准确率保持 99.5%。大促活跃度提升 35%。",
    reflection: "全球化运营先解决货和商家是否跑得顺，再谈增长。",
    stats: [
      { value: "10万+", label: "Cross-border SKU" },
      { value: "99.5%", label: "Accuracy" },
      { value: "30+", label: "Key Merchants" },
      { value: "35%", label: "Campaign Activity" },
    ],
  },
]

export const projectLinks: Record<string, { label: string; href: string }[]> = {
  "play-mechanics": [
    { label: "像素小人制作", href: "https://icywang11.github.io/chibi-forge/" },
    { label: "每日星座心情", href: "https://icywang11.github.io/icy-melody/" },
    { label: "每日书单转盘", href: "https://icywang11.github.io/book-spin/" },
  ],
}

export const projectRedirects: Record<string, string> = {
  "discord-community-board": "community-ops",
  "netease-overseas-ops": "community-ops",
  "poizon-global-ops": "poizon",
  "ai-ops-tools": "ai-tools",
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return projects[0]
  return projects[(index + 1) % projects.length]
}
