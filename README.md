# 熊发展 - 交互式个人简历

这是一个基于 HTML + JavaScript 的交互式个人简历页面，展示算法工程师的技能、项目经验和学术成果。

## 🚀 在线预览

部署后访问：`https://<你的GitHub用户名>.github.io/<仓库名>/`

## 📁 项目结构

```
.
├── index.html    # 主页面
├── README.md     # 项目说明
└── docs/         # 文档目录
```

## 🌐 部署到 GitHub Pages

### 方式一：创建个人主页（推荐）

1. 在 GitHub 创建新仓库，命名为 `<用户名>.github.io`
2. 将本项目所有文件推送到该仓库
3. 访问 `https://<用户名>.github.io` 即可

### 方式二：作为项目页面

1. 创建任意名称的仓库（如 `resume`）
2. 推送代码后，进入仓库 **Settings → Pages**
3. Source 选择 `Deploy from a branch`，Branch 选择 `main`，文件夹选择 `/ (root)`
4. 保存后访问 `https://<用户名>.github.io/resume/`

## 📦 快速部署命令

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: Interactive Resume"

# 4. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/<用户名>/<仓库名>.git

# 5. 推送到 main 分支
git push -u origin main
```

## ✨ 特性

- 📊 技能雷达图可视化
- 🔄 交互式项目展示
- 📈 数据驱动的成果展示
- 📱 响应式设计，支持移动端
