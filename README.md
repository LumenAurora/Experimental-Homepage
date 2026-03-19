# 个人学术主页

这是一个为北京大学元培学院人工智能专业学生设计的个人学术主页，基于 Next.js + Tailwind CSS 构建。

## 功能特性

- ✅ 响应式设计（支持桌面端和移动端）
- ✅ 深色/浅色模式切换
- ✅ 个人简介
- ✅ 研究方向展示
- ✅ 科研项目介绍
- ✅ 发表成果列表
- ✅ GitHub 代码开源展示
- ✅ 学术经历与荣誉时间线
- ✅ 优化的 SEO 设置
- ✅ 学术风格 UI 设计

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **组件**: shadcn/ui
- **图标**: Lucide React
- **语言**: TypeScript

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看效果。

### 部署到 GitHub Pages

由于您没有服务器，以下是部署到 GitHub Pages 的步骤：

#### 方法 1：使用 Vercel（推荐）

1. 在 Vercel (https://vercel.com) 注册账号
2. 连接您的 GitHub 仓库
3. Vercel 会自动检测 Next.js 项目并部署
4. 获得免费的 `your-project.vercel.app` 域名

#### 方法 2：使用 GitHub Pages + Static Export

1. **更新 `next.config.mjs`**（已完成）：
   ```javascript
   output: 'export',
   images: {
     unoptimized: true,
   },
   ```

2. **构建静态文件**：
   ```bash
   npm run build
   ```

3. **创建 `.github/workflows/deploy.yml`**：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

4. **推送到 GitHub**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

5. **在 GitHub 仓库设置中**：
   - 进入 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 等待部署完成

## 自定义内容

### 需要修改的占位符

在 `app/page.tsx` 中，请替换以下内容：

1. **个人信息**：
   - `[您的姓名]` → 您的真实姓名
   - `your-email@pku.edu.cn` → 您的邮箱
   - `yourusername` → 您的 GitHub 用户名
   - `yourprofile` → 您的 LinkedIn 个人资料

2. **导师信息**：
   - `[导师姓名]` → 您的导师姓名

3. **研究项目**：
   - `[项目名称 X]` → 实际项目名称
   - `[项目描述]` → 项目简介

4. **发表成果**：
   - `[论文标题 X]` → 论文实际标题
   - `[合作者 X]` → 合作作者姓名
   - `[会议/期刊]` → 发表 venue
   - 链接到实际的 PDF、代码和项目页面

5. **GitHub 项目**：
   - `[项目名称 X]` → 项目名称
   - `[项目简介]` → 项目描述
   - 链接到实际的 GitHub 仓库

6. **学术经历**：
   - `[实验室/研究组名称]` → 实际名称
   - `[奖项名称 X]` → 实际奖项
   - GPA、排名等信息

### 添加个人头像

将您的头像图片放在 `public/` 目录下，然后在 `app/page.tsx` 中替换头像部分：

```tsx
<img src="/your-avatar.jpg" alt="您的姓名" className="w-full h-full object-cover" />
```

## 文件结构

```
homepage/
├── app/
│   ├── globals.css      # 全局样式（设计系统）
│   ├── custom.css       # 自定义样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 主页内容
├── components/
│   └── ui/
│       ├── button.tsx   # 按钮组件
│       └── card.tsx     # 卡片组件
├── lib/
│   └── utils.ts         # 工具函数
├── public/              # 静态资源
├── tailwind.config.ts   # Tailwind 配置
├── next.config.mjs      # Next.js 配置
└── package.json         # 项目依赖
```

## 设计特色

- **北京大学红**作为主色调，体现学校特色
- **简洁专业**的学术风格
- **响应式布局**，适配各种设备
- **时间线设计**展示学术经历
- **卡片式布局**组织内容模块
- **深色模式**支持

## 开发建议

1. 保持内容简洁，突出学术重点
2. 定期更新发表成果和项目
3. 确保所有链接有效
4. 使用真实的学术照片
5. 保持 GitHub 仓库活跃

## 许可证

本项目仅供个人学术用途。

---

**祝您学术顺利！** 🎓
