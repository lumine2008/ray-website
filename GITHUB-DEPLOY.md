# 🚀 GitHub 自动部署指南

## 一、推送到 GitHub

### 1. 初始化 Git 仓库
```bash
cd E:\Test\qwen\test2\leiman-website
git init
git add .
git commit -m "Initial commit"
```

### 2. 关联 GitHub 仓库
```bash
# 替换为你的 GitHub 用户名
git remote add origin https://github.com/你的用户名/leiman-website.git
git push -u origin main
```

---

## 二、配置 GitHub Secrets

### 1. 打开 Settings
- 进入你的 GitHub 仓库
- 点击 **Settings**

### 2. 添加 Secrets
- 左侧：**Secrets and variables** → **Actions**
- 点击 **New repository secrets**

添加以下 3 个 Secrets：

| Name | Value | 说明 |
|------|-------|------|
| `ALIYUN_HOST` | `8.130.157.0` | 阿里云服务器 IP |
| `ALIYUN_USERNAME` | `root` | 服务器用户名 |
| `ALIYUN_PASSWORD` | 你的服务器密码 | 服务器密码 |

---

## 三、自动部署

### 推送代码触发部署

每次 push 到 `main` 分支时，会自动部署：

```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push
```

### 查看部署状态

1. 进入 GitHub 仓库
2. 点击 **Actions** 标签
3. 查看部署进度
4. 绿色 ✓ 表示成功

---

## 四、手动触发部署

### 在 GitHub 上手动部署

1. 进入仓库 **Actions**
2. 选择 **Deploy to Aliyun**
3. 点击 **Run workflow**
4. 选择分支 → **Run workflow**

---

## 五、首次部署

### 1. 确保服务器已配置好 Nginx

在阿里云服务器上执行：
```bash
# 安装 Nginx（如果未安装）
yum install nginx -y  # CentOS/Alibaba Cloud Linux

# 启动 Nginx
systemctl start nginx
systemctl enable nginx
```

### 2. 推送代码到 GitHub
```bash
git push -u origin main
```

### 3. 等待自动部署
- GitHub Actions 会自动构建并部署
- 大约 2-5 分钟
- 在 Actions 页面查看进度

---

## 六、验证部署

### 访问网站
```
http://8.130.157.0
```

### 检查项目
- [ ] 首页正常显示
- [ ] 博主合作页面正常（/media）
- [ ] 图片正常加载
- [ ] 导航链接正常

---

## 七、常见问题

### Q1: 部署失败
**检查：**
- GitHub Secrets 配置是否正确
- 服务器密码是否正确
- 服务器 SSH 端口（22）是否开放

### Q2: 404 错误
**解决：**
```bash
# 在服务器上执行
cat > /etc/nginx/conf.d/leiman-website.conf << 'EOF'
server {
    listen 80;
    server_name _;
    
    root /var/www/leiman-website;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /media {
        try_files $uri $uri/ /index.html;
    }
}
EOF

nginx -t
systemctl restart nginx
```

### Q3: 图片不显示
**检查：**
- 文件权限：`chmod -R 755 /var/www/leiman-website`
- Nginx 配置中的 root 路径

---

## 八、优化建议

### 1. 使用 SSH 密钥（更安全）

生成 SSH 密钥对：
```bash
ssh-keygen -t rsa -b 4096
```

在 GitHub Secrets 中添加：
- `SSH_PRIVATE_KEY`：私钥内容
- 公钥添加到服务器：`~/.ssh/authorized_keys`

### 2. 使用部署分支

创建 `production` 分支用于生产部署：
```bash
git checkout -b production
git push origin production
```

修改 `.github/workflows/deploy.yml`：
```yaml
on:
  push:
    branches: [ production ]
```

### 3. 添加部署通知

在 workflow 中添加邮件或钉钉通知。

---

## 九、完整工作流

```
本地开发 → Git 提交 → Push 到 GitHub 
       → GitHub Actions 自动构建 
       → 自动部署到阿里云 
       → 网站自动更新
```

---

## 📞 需要帮助？

查看 GitHub Actions 文档：
https://docs.github.com/en/actions

遇到问题请告诉我！
