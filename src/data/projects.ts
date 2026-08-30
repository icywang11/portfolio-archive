export type ProjectCategory =
  | "Community Operations"
  | "Game Operations"
  | "Content & Campaigns"
  | "Personal Projects"

export type Project = {
  slug: string
  num: string
  title: string
  enTitle: string
  category: ProjectCategory
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
  image?: string
  imageAlt?: string
  stats: { value: string; label: string }[]
  gallery?: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: "discord-community-board",
    num: "01",
    title: "社区活动数据看板",
    enTitle: "Community Activity Board",
    category: "Community Operations",
    year: "2026",
    role: "海外运营 / 数据分析",
    summary: "4 个社区、189 场活动、20 万参与人次摊在一张板上，打开就能指挥下一场。",
    overview:
      "海外游戏社区的活动越做越多，热度、漏斗和运营提示散落在表格里。我把复盘做成可复用的工作流：一场活动结束后，数据能立刻回到同一张指挥板。",
    challenge:
      "多社区并行时，很难在同一视野里看到哪场在掉、哪场该加码。翻表会耽误决策，周报也只能事后叙述，不能当场指挥。",
    approach:
      "先固定取数口径和漏斗节点，再做成一张面向运营的看板：活动热度、参与路径、下一步提示同屏出现。目标不是“好看的图表”，而是减少从数据到动作的距离。",
    execution: [
      "把 4 个 Discord 社区、189 场活动的参与记录收成统一结构",
      "活动数据复盘后直接进入看板，而不是另存一份周报附件",
      "私信推送后取数，把触达效率回写到同一套复盘节奏里",
    ],
    result: "20 万参与人次可在一页里检索。触达效率提高 30%。后续活动参与率在社区看板周报节奏下提升约 18%。",
    reflection:
      "运营工具要服务下一场，而不是服务归档。看板一旦能回答“下一场做什么”，它才算落地。",
    href: "https://icywang11.github.io/discord-community-board/",
    image: "/ai/yuqing-map.png",
    imageAlt: "舆情处理与运营复盘流程图",
    stats: [
      { value: "4", label: "Discord Communities" },
      { value: "189", label: "Campaigns" },
      { value: "20万+", label: "Participants" },
      { value: "30%", label: "Reach Efficiency" },
    ],
    gallery: [
      { src: "/ai/yuqing-map.png", caption: "舆情收集与对策流程：收集、确认、策略、复盘预防" },
    ],
  },
  {
    slug: "netease-overseas-ops",
    num: "02",
    title: "网易海外运营",
    enTitle: "NetEase Overseas Operations",
    category: "Game Operations",
    year: "2026",
    role: "海外运营实习",
    summary: "以 Discord 社区、活动执行和数据分析，参与海外游戏用户增长与内容生态建设。",
    overview:
      "在网易海外运营实习中，我负责 Discord 社区基建、活动落地和每周数据复盘，服务《燕云十六声》《全明星街球派对》等项目的海外用户。",
    challenge:
      "海外社区同时要做增长、活跃和舆情。私信触达量大，如果没有复盘节奏，活动和内容会变成一次性消耗。",
    approach:
      "把社区当成产品来运营：基建先稳，触达可计量，周报把问题收成下一周动作。机器人承担重复触达，人负责判断和对策。",
    execution: [
      "完成 100万+ 人次私信推送，并在推送后取数",
      "输出 50+ 篇周报，维持社区看板与每周数据分析",
      "优化《燕云十六声》《全明星街球派对》Discord 社区基建",
      "搭建趣味交互：指令互动、签到与社区小游戏",
      "用定时推送做内容分发，用 AI 做舆情收集与对策",
    ],
    result: "百万级触达可复盘。Excel 社区看板支撑每周决策，后续活动参与率提升约 18%。",
    reflection:
      "游戏运营的核心不是“做一场热闹的活动”，而是让触达、参与、舆情成为同一条闭环。",
    stats: [
      { value: "100万+", label: "DM Reach" },
      { value: "50+", label: "Weekly Reports" },
      { value: "18%", label: "Event Participation" },
    ],
    gallery: [
      { src: "/ai/yuqing-map.png", caption: "AI 舆情收集与对策全流程" },
    ],
  },
  {
    slug: "poizon-global-ops",
    num: "03",
    title: "得物全球化运营",
    enTitle: "POIZON Global Operations",
    category: "Content & Campaigns",
    year: "2025",
    role: "全球化运营实习",
    summary: "负责重点商家经营与跨境营销活动，把商品、商家和活动数据跑顺。",
    overview:
      "在 POIZON 全球化运营实习中，我维护跨境商品信息、跟进重点商家，并参与大促活动运营。工作重心是准确率和活动活跃，而不是单次曝光。",
    challenge:
      "跨境 SKU 体量大，商家节奏不一。信息不准会直接伤转化；大促如果只做声量、不看活跃，活动会空转。",
    approach:
      "先把商品和商家数据做干净，再把大促动作压到可追踪的活跃指标上。经营运营和营销活动用同一套数据说话。",
    execution: [
      "维护 10万+ 跨境商品 SKU，准确率 99.5%",
      "负责 30+ 重点商家的日常经营运营",
      "参与跨境营销活动，跟踪大促活跃度",
    ],
    result: "SKU 准确率保持 99.5%。大促活跃度提升 35%。",
    reflection:
      "全球化运营先解决“货和商家是否跑得顺”，再谈增长。数据干净，活动才有资格谈效果。",
    stats: [
      { value: "10万+", label: "Cross-border SKU" },
      { value: "99.5%", label: "Accuracy" },
      { value: "30+", label: "Key Merchants" },
      { value: "35%", label: "Campaign Activity" },
    ],
  },
  {
    slug: "ai-ops-tools",
    num: "04",
    title: "AI 运营工具",
    enTitle: "AI Operations Tools",
    category: "Personal Projects",
    year: "2026",
    role: "独立制作",
    summary: "把运营里重复的制作和回访，压成可以每天打开的小产品。",
    overview:
      "这组个人项目服务同一件事：让运营和内容不再依赖一次性手工。像素纸娃娃、每日星座信、书单转盘都是可进入实操的落地作品。",
    challenge:
      "社区物料和日常内容如果全靠手做，节奏会断。玩家需要的是会回访的产品，而不是一条过期动态。",
    approach:
      "每个工具只解决一个明确动作：出图、写信、抽书。控制参数，保证可交付，而不是做演示用的玩具。",
    execution: [
      "像素小人：一张参考照生成 1080×1080 可交付纸娃娃，头身比、像素粒度、武器和表情可控",
      "每日星座心情：运势、幸运色、穿搭和饮品自动排成一封会回访的信",
      "每日书单转盘：26 位作者、120 本书，抽出一句名言后写下今日一文",
    ],
    result: "3 件作品均可在线实操。制作链路从手工描图压成一次生成，内容从过期动态变成可回访产品。",
    reflection:
      "给运营用的工具必须能交付。好看不够，参数和回访节奏才决定它会不会被第二天再打开。",
    href: "https://icywang11.github.io/chibi-forge/",
    stats: [
      { value: "3", label: "Live Tools" },
      { value: "1080", label: "Deliverable PX" },
      { value: "120", label: "Books on Wheel" },
    ],
  },
]

export const projectLinks = {
  "ai-ops-tools": [
    { label: "像素小人制作", href: "https://icywang11.github.io/chibi-forge/" },
    { label: "每日星座心情", href: "https://icywang11.github.io/icy-melody/" },
    { label: "每日书单转盘", href: "https://icywang11.github.io/book-spin/" },
  ],
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return projects[0]
  return projects[(index + 1) % projects.length]
}
