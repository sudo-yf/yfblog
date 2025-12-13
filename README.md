# Yifan's Blog

个人博客网站，基于 [Astro](https://astro.build/) 和 [astro-erudite](https://github.com/jktrn/astro-erudite) 模板构建。

## 📝 如何更新博客

### 添加新文章

博客文章存储在 `blog/` 目录下，按分类组织：

```
blog/
├── Study/         # 学习相关
├── Learning/      # 技能学习
├── Recommendations/  # 推荐内容
└── Life/          # 生活日记
```

**创建新文章**：

1. 在对应分类文件夹下创建 `.md` 或 `.mdx` 文件
2. 添加 frontmatter（文章元数据）：

```markdown
---
title: '文章标题'
description: '文章描述'
date: 2025-12-14
tags:
  - tag1
  - tag2
authors:
  - yifan
---

你的文章内容...
```

### Obsidian 支持

支持 Obsidian 图片插入语法 `![[image.png]]`。图片可以放在：
- 文章同级目录
- `assets/` 子文件夹

### 创建子系列

在分类文件夹下创建子文件夹，并添加 `index.mdx` 作为系列首页：

```
blog/Study/
├── index.mdx          # Study 分类首页
├── series-name/       # 子系列
│   ├── index.mdx      # 系列首页
│   ├── part-1.md
│   └── part-2.md
└── standalone.md      # 独立文章
```

## 🎵 如何更新音乐

编辑 `src/components/bento/MusicCard.tsx`:

```typescript
const song = "歌曲名"
const artist = "艺术家"
const album = "专辑名"
const url = "https://music.apple.com/..." // Apple Music 链接
```

更新专辑封面：替换 `public/static/bento/music-cover.jpg`

## 💼 如何更新 Work/项目

### 添加新项目

在 `src/content/projects/` 创建 `.mdx` 文件：

```markdown
---
title: '项目标题'
description: '项目描述'
date: 2025-12-14
url: 'https://project-url.com'
---

项目详细介绍...
```

### 编辑 Work 页面

主页面位于 `src/pages/work.astro`，可以自定义布局和内容。

## 🎨 自定义个人信息

### 社交链接

编辑 `src/consts.ts` 中的 `SOCIAL_LINKS`:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/your-username',
  },
  {
    label: 'Email',
    href: 'mailto:your@email.com',
  },
  // ...
]
```

### 导航菜单

同样在 `src/consts.ts` 中的 `NAV_LINKS`:

```typescript
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: withBase('/') },
  { label: 'Blog', href: withBase('/blog') },
  // 添加更多...
]
```

### 主页个人介绍

编辑 `src/pages/index.astro`，找到 About 卡片的文本部分并修改个人介绍。

### Discord 状态

编辑 `src/components/bento/DiscordPresence.tsx` 中的配置。

### GitHub 日历

在 `src/pages/index.astro` 中找到：

```tsx
<GithubCalendar username="sudo-yf" client:load />
```

替换为你的 GitHub 用户名。

## 🚀 部署

### GitHub Pages 配置

**重要**：仓库必须命名为 `username.github.io` 才能部署到根域名。

1. 推送代码到 GitHub
2. GitHub Actions 会自动构建和部署
3. 网站将部署到 `https://username.github.io/`

### 本地开发

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 📂 项目结构

```
yfblog/
├── blog/                  # 博客内容（Markdown）
├── public/
│   └── static/
│       └── bento/        # 主页卡片资源
├── src/
│   ├── components/       # UI 组件
│   │   └── bento/       # 主页 Bento 卡片
│   ├── content/         # 其他内容
│   │   ├── authors/     # 作者信息
│   │   └── projects/    # 项目/工作
│   ├── layouts/         # 页面布局
│   ├── pages/           # 路由页面
│   └── consts.ts        # 全局配置
└── astro.config.ts      # Astro 配置
```

## 📄 许可证

代码基于 [astro-erudite](https://github.com/jktrn/astro-erudite) 模板（MIT License）。

## 🛠 技术栈

- **框架**: Astro
- **样式**: Tailwind CSS
- **组件**: shadcn/ui
- **内容**: MDX + Markdown
- **部署**: GitHub Pages
