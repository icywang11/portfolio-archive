# Icy Portfolio

Icy 的个人作品集：海外运营、内容与数据。把社区、活动和复盘做成可复用的工作流。

这是现站 [icy-portfolio](https://icywang11.github.io/icy-portfolio/) 的可编辑版本，保留原有文案、照片和作品链接，并补上滚动导航、相册放大、舆情流程图弹层、复制微信/邮箱等交互。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开提示的本地地址即可预览。

## 发布到 GitHub Pages

构建为静态站点：

```bash
NEXT_PUBLIC_BASE_PATH=/icy-portfolio npm run build
```

把生成的 `out/` 目录部署到 `icywang11/icy-portfolio` 的 `gh-pages` 分支（或仓库的 Pages 发布目录）。项目站点需要 `basePath=/icy-portfolio`，否则资源和链接会 404。

## 改内容

文案、实习经历、作品链接、相册说明都在 `src/lib/content.ts`。图片放在 `public/`。
