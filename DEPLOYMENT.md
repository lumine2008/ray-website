# 雷曼老师个人网站 - 阿里云服务器部署指南

## 📦 一、构建生产版本

### 1.1 本地构建
```bash
cd E:\Test\qwen\test2\leiman-website
npm run build
```

构建完成后，会在 `build` 目录生成生产文件。

---

## 🚀 二、上传到阿里云服务器

### 方案 A：使用 FTP 工具（推荐）

#### 2.1 安装 FileZilla
1. 下载：https://filezilla-project.org/
2. 安装并打开 FileZilla

#### 2.2 配置连接
- **主机**：你的阿里云公网 IP
- **用户名**：root（或你创建的用户）
- **密码**：你的服务器密码
- **端口**：22

#### 2.3 上传文件
1. 本地站点：`E:\Test\qwen\test2\leiman-website\build\*`
2. 远程站点：`/var/www/leiman-website/`
3. 上传所有文件

---

### 方案 B：使用 SCP 命令

```bash
# Windows PowerShell 或 Mac/Linux Terminal
scp -r E:\Test\qwen\test2\leiman-website\build\* root@你的服务器 IP:/var/www/leiman-website/
```

---

### 方案 C：使用 Git 部署

#### 2.1 在服务器上克隆仓库
```bash
# 在阿里云服务器上执行
cd /var/www
git clone <你的 Git 仓库地址> leiman-website
cd leiman-website
npm install
npm run build
```

#### 2.2 后续更新
```bash
cd /var/www/leiman-website
git pull
npm run build
```

---

## ⚙️ 三、配置 Nginx

### 3.1 安装 Nginx（如果未安装）
```bash
# CentOS/Alibaba Cloud Linux
sudo yum install nginx -y

# Ubuntu/Debian
sudo apt update
sudo apt install nginx -y
```

### 3.2 配置 Nginx
```bash
sudo vim /etc/nginx/conf.d/leiman-website.conf
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name 你的域名.com www.你的域名.com;  # 如果有域名
    # 或者使用服务器 IP: server_name _;
    
    root /var/www/leiman-website;
    index index.html;
    
    # React Router 支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

### 3.3 测试配置
```bash
sudo nginx -t
```

### 3.4 重启 Nginx
```bash
sudo systemctl restart nginx
sudo systemctl enable nginx  # 开机自启
```

---

## 🔒 四、配置防火墙（安全组）

### 4.1 阿里云控制台配置
1. 登录阿里云控制台
2. 进入 ECS 实例
3. 点击"安全组"
4. 添加规则：
   - **端口范围**：80/80（HTTP）
   - **授权对象**：0.0.0.0/0
   - **优先级**：1

### 4.2 如果配置了 HTTPS
- **端口范围**：443/443（HTTPS）

### 4.3 服务器防火墙
```bash
# CentOS
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

# Ubuntu
sudo ufw allow 'Nginx Full'
sudo ufw reload
```

---

## 🔐 五、配置 HTTPS（可选但推荐）

### 5.1 安装 Certbot
```bash
# CentOS
sudo yum install certbot python3-certbot-nginx -y

# Ubuntu
sudo apt install certbot python3-certbot-nginx -y
```

### 5.2 获取证书
```bash
sudo certbot --nginx -d 你的域名.com -d www.你的域名.com
```

### 5.3 自动续期
Certbot 会自动配置定时任务，无需手动配置。

---

## ✅ 六、验证部署

### 6.1 访问网站
在浏览器中输入：
- `http://你的服务器 IP`
- 或 `http://你的域名.com`

### 6.2 检查项目
- [ ] 首页正常显示
- [ ] 导航链接正常
- [ ] 博主合作页面正常（`/media`）
- [ ] 图片正常加载
- [ ] 滚动动画正常

---

## 🔧 七、常见问题

### 7.1 页面空白
**原因**：React Router 配置问题
**解决**：确保 Nginx 配置了 `try_files`

### 7.2 图片不显示
**原因**：路径问题
**解决**：检查图片路径是否为 `/images/` 开头

### 7.3 404 错误
**原因**：文件未上传或路径错误
**解决**：
```bash
# 检查文件是否存在
ls -la /var/www/leiman-website/

# 检查权限
sudo chown -R nginx:nginx /var/www/leiman-website/
sudo chmod -R 755 /var/www/leiman-website/
```

### 7.4 访问慢
**解决**：
1. 开启 Gzip 压缩（已在配置中）
2. 配置 CDN（阿里云 CDN）
3. 优化图片大小

---

## 📊 八、性能优化（可选）

### 8.1 启用 CDN
1. 登录阿里云控制台
2. 开通 CDN 服务
3. 配置加速域名
4. CNAME 到阿里云 CDN

### 8.2 数据库备份（如果有）
```bash
# 创建备份脚本
sudo vim /usr/local/bin/backup-website.sh

# 添加备份逻辑
#!/bin/bash
tar -czf /backup/website-$(date +%Y%m%d).tar.gz /var/www/leiman-website

# 添加定时任务
crontab -e
0 2 * * * /usr/local/bin/backup-website.sh
```

---

## 📞 九、技术支持

### 阿里云文档
- ECS 使用指南：https://help.aliyun.com/product/25362.html
- Nginx 配置：https://help.aliyun.com/document_detail/98636.html
- SSL 证书：https://help.aliyun.com/product/29675.html

### 网站源码
- 本地路径：`E:\Test\qwen\test2\leiman-website`
- 服务器路径：`/var/www/leiman-website`

---

## 🎉 部署完成！

访问你的网站，享受成果吧！

**默认访问地址：**
- HTTP: `http://你的服务器 IP`
- HTTPS: `https://你的域名.com`（配置 SSL 后）
