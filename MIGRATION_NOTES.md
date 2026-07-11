# PROJECT BEYOND — Migration Notes

迁移目标：`E:\MySite\🚀 Projects\project-beyond`

记录日期：2026-07-10（Asia/Shanghai）

## 用户需求摘要

- 初始化 React + Vite，使用普通 JavaScript。
- 使用 GSAP 与 ScrollTrigger。
- 建立 Silence、Signal、Departure、Wormhole、Singularity、Beyond 六个全屏滚动章节。
- 黑底白字、极简线条与克制的二维动画，不使用 Three.js、WebGL、外部视频或外部图片。
- 英文主视觉、中文辅助文字、右侧六章进度指示。
- 支持桌面端、手机端与 `prefers-reduced-motion`。
- 创建清晰的组件结构与 README。

## 本轮完成内容

- 建立 React + Vite 工程。
- 实现六章双语内容、右侧章节导航与当前章节高亮。
- 使用 CSS 几何图形实现脉冲光点、扫描、轨道、虫洞、奇点和地平线。
- 使用 GSAP/ScrollTrigger 实现文字进入、线条绘制、视差、旋转拉伸、文字扭曲与地平线展开。
- 添加手机端单列布局和减少动态效果支持。
- 添加 README 与项目结构说明。

## 依赖版本

- React 19.2.7
- React DOM 19.2.7
- GSAP 3.15.0
- Vite 8.1.4
- @vitejs/plugin-react 6.0.3

## 验证记录

- `npm run build`：通过。
- 桌面浏览器：1280 × 720，通过。
- 手机浏览器：390 × 844，通过，无横向溢出。
- 六个章节及六个进度按钮存在，章节跳转与高亮状态正常。
- 浏览器控制台未发现 error 或 warning。

## 已知情况

- 初始工作区中未发现需求提到的 `reference/PROJECT_BEYOND_graybox.html`，因此没有修改或迁移该文件。
- 当前版本仍是正式灰盒，未包含电影素材、声音、Three.js/WebGL 或复杂三维效果。
- Codex 的完整对话记录和内部运行日志不是工作区文件，无法作为原始文件导出；本文件作为可迁移的工作摘要与验证记录。
