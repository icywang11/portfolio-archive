# Yichen Wang · Portfolio Archive

Icy 的个人作品集：社区运营、游戏运营、内容与数据。视觉是编辑设计 / 数字档案馆，信息按求职作品集来写。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://127.0.0.1:43421`。

## 发布到 GitHub Pages

```bash
VITE_BASE_PATH=/icy-portfolio/ npm run build
```

把 `dist/` 部署到 `gh-pages`。项目站点必须带 `VITE_BASE_PATH`，否则静态资源会 404。`public/404.html` 会把刷新后的子路径导回应用。

## 改内容

- 站点信息：`src/data/site.ts`
- 案例：`src/data/projects.ts`
- 流程：`src/data/process.ts`
- 图片：`public/`（头像、流程图、摄影）。项目图可随时替换，路径写在 `projects.ts` 的 `image` 字段。
