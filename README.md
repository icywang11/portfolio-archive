# Icy Wang · Portfolio Archive

**个人主页：https://icywang11.github.io/portfolio-archive/**

Icy 的个人作品集：社区运营、AI 小网页、玩法落地、实习记录，以及游戏经历。视觉是编辑设计 / 数字档案馆。正式发布地址和仓库备份见 `留档.md`。


## 本地运行

```bash
npm install
npm run dev
```

打开 `http://127.0.0.1:43421`。

## 发布到 GitHub Pages

站点地址：https://icywang11.github.io/portfolio-archive/

推送到 `main` 后，GitHub Actions 会构建并发布。项目路径必须带 `/portfolio-archive/`：

```bash
VITE_BASE_PATH=/portfolio-archive/ npm run build
```

## 改内容

- 站点信息、导航、实习：`src/data/site.ts`
- 作品案例：`src/data/projects.ts`
- 游戏经历：`src/data/games.ts`
- 玩法落地页：`src/data/play.ts`
- 流程：`src/data/process.ts`
- 图片：`public/`（头像、兴趣相册、玩法截图）
