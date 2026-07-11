# PROJECT BEYOND

PROJECT BEYOND 是一个 React + Vite 的滚动叙事灰盒工程。它使用 GSAP 与 ScrollTrigger 编排六个全屏章节，在不依赖图片、视频、Three.js 或 WebGL 的前提下，通过排版、线条和 CSS 几何图形建立正式视觉方向。

## 章节

1. Silence / 寂静
2. Signal / 信号
3. Departure / 启航
4. Wormhole / 虫洞
5. Singularity / 奇点
6. Beyond / 彼方

## 技术栈

- React
- Vite
- GSAP
- ScrollTrigger
- 普通 JavaScript 与 CSS

## 本地启动

```bash
npm install
npm run dev
```

终端会显示本地访问地址，通常是 `http://localhost:5173`。

## 生产构建

```bash
npm run build
npm run preview
```

## 项目结构

```text
src/
├─ components/
│  ├─ ChapterProgress.jsx  # 右侧章节进度导航
│  ├─ ChapterVisuals.jsx   # 六章纯 CSS 几何视觉
│  └─ SectionShell.jsx     # 章节通用结构
├─ data/chapters.js        # 双语章节内容
├─ hooks/usePrefersReducedMotion.js
├─ styles/global.css
├─ App.jsx                 # ScrollTrigger 与章节动画编排
└─ main.jsx
```

## 动效与无障碍

- ScrollTrigger 控制章节进入、视差、轨道、虫洞、奇点与地平线动效。
- 右侧导航支持键盘聚焦与点击跳转，并标记当前章节。
- 系统启用 `prefers-reduced-motion: reduce` 时，会关闭循环、视差和扭曲动画，保留完整内容与章节状态。
- 手机端改为上下排版，并缩减右侧导航为圆点指示。

## 当前范围

这是第一轮正式灰盒。暂未加入正式电影素材、声音、复杂三维/WebGL、内容管理、预加载叙事和页面切换。

> 注意：初始化时工作区中未发现需求描述中的 `reference/PROJECT_BEYOND_graybox.html`，因此本轮实现依据文字规格完成，没有修改或生成 `reference/` 内容。
