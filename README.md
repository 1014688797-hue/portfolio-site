# 作品集网站代码说明（portfolio_site）

你提供的 `portfolio.zip` 是一个**已完成的作品集网站**项目，技术栈为 **Vite + React + TypeScript + Tailwind CSS**，并带一个极简 **Express** 静态服务器用于生产环境运行。

## 1) 项目结构速览

- `client/`：前端代码（Vite root）
  - `client/index.html`：HTML 入口
  - `client/src/main.tsx`：React 挂载入口
  - `client/src/App.tsx`：路由/主题/全局组件入口
  - `client/src/pages/Home.tsx`：单页作品集（把各个 section 串起来）
  - `client/src/components/`：通用组件（Navbar/Footer/等）
  - `client/src/components/sections/`：页面内容模块（Hero、Projects、Skills…）
  - `client/src/components/ui/`：UI 组件库封装（Radix UI + Tailwind 风格）
- `server/index.ts`：生产环境静态资源服务器（Express），用于 `pnpm start`
- `shared/`：前后端共享常量
- `vite.config.ts`：Vite 配置（含别名、构建输出目录、Manus debug collector 插件等）
- `patches/` + `pnpm-lock.yaml`：pnpm patch 与锁文件
- `ideas.md`：设计头脑风暴（“数字花园”风格）
- `review-notes.md`：渲染检查记录（指出新闻模块大卡片截断等细节）

## 2) 页面模块（Home 单页滚动）

`client/src/pages/Home.tsx` 组合了以下模块，并用 `BotanicalDivider`（植物学分隔线）穿插：

1. `HeroSection`（#hero）
2. `ProjectsSection`（#projects）
3. `SkillsSection`（#skills）
4. `AigcSection`（#aigc）
5. `PlansSection`（#plans）
6. `NewsSection`（#news）
7. `WorkSection`（#work）
8. `LiterarySection`（#literary）
9. `Footer`（含 #contact 之类锚点，便于“联系我”滚动定位）

`Navbar` 会根据滚动位置自动高亮当前 section，并对移动端菜单做了 body 滚动锁定。

## 3) 本地运行（开发）

在项目根目录执行：

1. 安装依赖
   - `pnpm install`
2. 启动开发服务器
   - `pnpm dev`

默认端口是 **3000**（如被占用会自动找下一个可用端口）。

## 4) 构建与生产运行

1. 构建
   - `pnpm build`
   - 前端输出：`dist/public/`
   - 服务端输出：`dist/index.js`
2. 生产启动
   - `pnpm start`
   - 访问：`http://localhost:3000/`

生产环境由 `server/index.ts` 提供静态文件服务，并对前端路由做了 fallback（所有路径都回到 `index.html`）。

## 5) 环境变量提示（analytics）

我在 `pnpm build` 时看到了 Vite 的提示：
- `%VITE_ANALYTICS_ENDPOINT%`
- `%VITE_ANALYTICS_WEBSITE_ID%`

这两个变量**未定义**会导致构建阶段出现警告（但不影响构建产物生成）。

如果你确实使用 Umami/统计脚本：
- 建议在项目根目录放一个 `.env`（或 `.env.production`）补齐，例如：
  - `VITE_ANALYTICS_ENDPOINT=...`
  - `VITE_ANALYTICS_WEBSITE_ID=...`

如果你不需要统计：
- 可以把 `client/index.html` 里相关脚本占位符移除，构建会更干净。

## 6) 我本地验证结果

在沙箱里我已完成：
- `pnpm install` ✅
- `pnpm run check`（tsc）✅
- `pnpm run build` ✅（仅有上面提到的 analytics 变量 warning + chunk size warning）

---

如果你接下来想做二次开发（比如：替换 Hero 的头像、项目卡片内容改成你真实项目、补全新闻大卡片截断问题、加多语言/SEO/站点地图/部署到 Vercel 等），你告诉我目标和要改的模块，我可以直接在这份代码上继续改。