# Icy Wang · Portfolio Archive

Icy 的个人作品集：社区运营、AI 小网页、玩法落地，以及实习记录。视觉是编辑设计 / 数字档案馆。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://127.0.0.1:43421`。

## 发布到 GitHub Pages

站点地址：https://icywang11.github.io/icy-portfolio/

推送到 `main` 后，GitHub Actions 会构建并发布。项目路径必须带 `/icy-portfolio/`：

```bash
VITE_BASE_PATH=/icy-portfolio/ npm run build
```

## 改内容

- 站点信息、导航、实习：`src/data/site.ts`
- 作品案例：`src/data/projects.ts`
- 玩法落地页：`src/data/play.ts`
- 流程：`src/data/process.ts`
- 图片：`public/`（头像、兴趣相册、玩法截图）
