export const site = {
  name: "Icy",
  title: "Icy · 海外运营 · 内容 · 数据",
  description:
    "Icy 的个人作品集。海外运营、内容与数据。把社区、活动和复盘做成可复用的工作流。",
  kicker: "Portfolio / 2026",
  role: "海外运营 · 内容 · 数据",
  orgs: "NetEase · POIZON",
  github: "https://github.com/icywang11",
  email: "wycsdu0516@163.com",
  wechat: "Wycrrika",
  intro:
    "海外运营、内容与数据。把社区、活动和复盘做成可复用的工作流。",
  tags: ["Operations", "Data", "Reading", "Japanese", "Photography"],
};

export const nav = [
  { href: "#intro", label: "关于" },
  { href: "#internship", label: "实习" },
  { href: "#skills", label: "AI工作流" },
  { href: "#gaming", label: "游戏" },
  { href: "#interests", label: "兴趣" },
  { href: "#writing", label: "阅读" },
  { href: "#contact", label: "联系" },
] as const;

export const indexItems = [
  { href: "#internship", num: "01", title: "实习", hint: "NETEASE · POIZON" },
  { href: "#skills", num: "02", title: "AI 工作流", hint: "方法与落地作品" },
  { href: "#gaming", num: "03", title: "游戏", hint: "长期投入的记录" },
  { href: "#interests", num: "04", title: "兴趣", hint: "音乐 · 摄影 · 旅行" },
  { href: "#writing", num: "05", title: "阅读", hint: "哲学 · 经济" },
] as const;

export const internships = [
  {
    num: "01",
    date: "2026.03 — 2026.09",
    company: "NETEASE",
    role: "海外运营",
    summary:
      "以 Discord 社区运营、活动执行和数据分析为核心，参与海外游戏用户增长与内容生态建设。",
    bullets: [
      "完成 100万+ 人次私信推送",
      "输出 50+ 篇周报",
      "Excel 社区看板与每周数据分析报告，后续活动参与率提升约 18%",
      "《燕云十六声》《全明星街球派对》Discord 社区基建优化",
    ],
  },
  {
    num: "02",
    date: "2025.06 — 2025.09",
    company: "POIZON",
    role: "全球化运营",
    summary:
      "负责重点商家经营运营与跨境营销活动，把商品、商家和活动数据跑顺。",
    bullets: [
      "维护 10万+ 跨境商品 SKU，准确率 99.5%",
      "负责 30+ 重点商家运营",
      "大促活跃度提升 35%",
    ],
  },
] as const;

export const robotSkills = [
  {
    num: "01",
    title: "一些趣味交互玩法",
    hint: "指令互动、签到与社区小游戏",
  },
  {
    num: "02",
    title: "使用龙虾进行推送",
    hint: "定时内容分发与运营触达",
  },
  {
    num: "03",
    title: "使用 AI 进行舆情收集与对策",
    hint: "点开看舆情处理全流程图",
    gallery: "yuqing",
  },
] as const;

export const dataSkills = [
  {
    num: "01",
    title: "活动数据复盘",
    hint: "打开 Discord 社区数据看板",
    href: "https://icywang11.github.io/discord-community-board/",
  },
  {
    num: "02",
    title: "商城搭建",
    hint: "积分商城结构与运营配置",
  },
  {
    num: "03",
    title: "私信推送后取数，搭建数据看板",
    hint: "触达效率提高 30%",
  },
] as const;

export const works = [
  {
    num: "01",
    title: "像素小人制作",
    href: "https://icywang11.github.io/chibi-forge/",
    description:
      "一张参考照直接出 1080×1080 可交付像素纸娃娃。头身比、像素粒度、武器和表情都能控，角色立绘从手工描图压成一次生成。",
  },
  {
    num: "02",
    title: "每日星座心情",
    href: "https://icywang11.github.io/icy-melody/",
    description:
      "每天自动换一封心情信：星座运势、幸运色、穿搭和今日饮品一次排好。把“今天心情怎么样”做成会回访的产品，而不是一条过期动态。",
  },
  {
    num: "03",
    title: "社区活动数据看板",
    href: "https://icywang11.github.io/discord-community-board/",
    description:
      "4 个社区、189 场活动、20 万参与人次摊在一张板上。活动热度、参与漏斗和运营提示不用再翻表，打开就能指挥下一场。",
  },
  {
    num: "04",
    title: "每日书单转盘",
    href: "https://icywang11.github.io/book-spin/",
    description:
      "点大转盘，抽出一位作者和一句名言。26 位作者、120 本书摊在盘上，停下后写下今日一文，点名字就能去翻他的书。",
  },
] as const;

export const gameGroups = [
  {
    dim: "深度体验",
    type: "MOBA",
    games: [
      {
        title: "王者荣耀",
        body: "开服至今十年老玩家，累计充值 10000+ 元。巅峰赛最高 2100 分，曾赛季末全国排名前 4000。",
        badges: ["10年玩家", "巅峰 2100", "全国前 4000"],
      },
      {
        title: "英雄联盟手游",
        body: "游戏时长 100+ 小时，熟悉辅助位对线与团战配合，擅长英雄琴女。",
        badges: ["100+ 小时", "辅助位", "琴女"],
      },
    ],
  },
  {
    dim: "深度体验",
    type: "竞速 RAC",
    games: [
      {
        title: "QQ 飞车",
        body: "游戏时长 500+ 小时，累计充值 2000+ 元。等级 201 级，长期参与边境玩法。",
        badges: ["500+ 小时", "201 级", "边境玩法"],
      },
      {
        title: "极限竞速：地平线 5",
        body: "游戏时长 100+ 小时，熟悉开放世界竞速与多种赛事类型。",
        badges: ["100+ 小时", "开放世界"],
      },
    ],
  },
  {
    dim: "深度体验",
    type: "开放世界探索",
    games: [
      {
        title: "燕云十六声",
        body: "游戏时长 200+ 小时，持续体验开放世界玩法，完成大量地图探索与奇术收集，熟悉探索、成长与任务核心循环。",
        badges: ["200+ 小时", "地图探索", "奇术收集"],
      },
    ],
  },
  {
    dim: "深度体验",
    type: "二次元游戏",
    games: [
      {
        title: "原神",
        body: "游戏时长 100+ 小时，熟悉开放世界探索、角色养成、队伍搭配与元素反应，关注新版本内容与玩家体验平衡。",
        badges: ["100+ 小时", "元素反应", "队伍搭配"],
      },
    ],
  },
  {
    dim: "其他",
    type: "MMO · 休闲竞技",
    games: [
      {
        title: "明日之后",
        body: "游戏时长 50+ 小时，熟悉末日生存玩法，包括资源采集与基地建造。",
        badges: ["50+ 小时", "生存建造"],
      },
      {
        title: "蛋仔派对",
        body: "游戏时长 50+ 小时，对闯关竞速与 UGC 地图玩法有较好理解。",
        badges: ["50+ 小时", "UGC 地图"],
      },
    ],
  },
] as const;

export const hobbies = [
  {
    id: "music",
    tab: "Music",
    title: "听音乐",
    lyric: "海鸟和鱼相爱 只是一场意外",
    slides: [
      {
        src: "/hobbies/music/01-gdragon.jpg",
        alt: "G-DRAGON Übermensch 世界巡演票根",
        caption: "G-DRAGON · Übermensch World Tour",
      },
      {
        src: "/hobbies/music/02-utada.jpg",
        alt: "宇多田光 First Love",
        caption: "宇多田光 · First Love",
      },
      {
        src: "/hobbies/music/03-groupies.jpg",
        alt: "groupies",
        caption: "groupies",
      },
      {
        src: "/hobbies/music/04-jay.jpg",
        alt: "周杰伦",
        caption: "周杰伦",
      },
      {
        src: "/hobbies/music/05-crowd-lu.jpg",
        alt: "卢广仲",
        caption: "卢广仲",
      },
      {
        src: "/hobbies/music/06-avril.jpg",
        alt: "Avril Lavigne",
        caption: "Avril Lavigne",
      },
      {
        src: "/hobbies/music/07-blackpink.jpg",
        alt: "BLACKPINK",
        caption: "BLACKPINK",
      },
    ],
  },
  {
    id: "photo",
    tab: "Photo",
    title: "摄影",
    lyric: "相机是我的语言，我说的每一个字都是“看见”",
    slides: [
      { src: "/hobbies/photo/01-coast.jpg", alt: "海边礁石", caption: "海边" },
      { src: "/hobbies/photo/02-leaves.jpg", alt: "树影与海", caption: "树影" },
      { src: "/hobbies/photo/03-sunset.jpg", alt: "晚霞与桥", caption: "晚霞" },
      { src: "/hobbies/photo/04-night.jpg", alt: "江岸夜色", caption: "夜色" },
      { src: "/hobbies/photo/05-roof.jpg", alt: "屋檐", caption: "屋檐" },
      { src: "/hobbies/photo/06-breakwater.jpg", alt: "防波堤", caption: "防波堤" },
    ],
  },
  {
    id: "travel",
    tab: "Travel",
    title: "旅游",
    lyric: "读万卷书，行万里路",
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
] as const;

export const books = {
  philosophy: [
    {
      title: "《百年孤独》",
      author: "加西亚·马尔克斯",
      note: "家族百年里的循环、遗忘与爱。",
    },
    {
      title: "《悉达多》",
      author: "赫尔曼·黑塞",
      note: "一条河，一次又一次把自己走回来。",
    },
  ],
  economy: [
    {
      title: "《经营未来》",
      author: "李明博",
      note: "从工薪族到经营者，把挑战当成日常功课。",
    },
    {
      title: "《置身事内》",
      author: "兰小欢",
      note: "把中国经济放回政府与地方的真实运转里看。",
    },
  ],
};

export const authors = [
  { name: "黑塞", src: "/authors/hesse.jpg" },
  { name: "余华", src: "/authors/yuhua.jpg" },
  { name: "张爱玲", src: "/authors/eileen.jpg" },
  { name: "鲁迅", src: "/authors/luxun.jpg" },
  { name: "马尔克斯", src: "/authors/marquez.jpg" },
  { name: "加缪", src: "/authors/camus.jpg" },
  { name: "卡夫卡", src: "/authors/kafka.jpg" },
  { name: "尼采", src: "/authors/nietzsche.jpg" },
  { name: "叔本华", src: "/authors/schopenhauer.jpg" },
  { name: "亚当·斯密", src: "/authors/smith.jpg" },
  { name: "凯恩斯", src: "/authors/keynes.jpg" },
  { name: "李明博", src: "/authors/lee.jpg" },
] as const;

export const yuqingGallery = {
  kicker: "AI 工作流 · 智能化机器人",
  title: "使用 AI 进行舆情收集与对策",
  src: "/ai/yuqing-map.png",
  caption: "舆情处理流程图：收集、确认信息、制定策略、复盘预防",
};
