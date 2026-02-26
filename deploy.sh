#!/bin/bash

# 雷曼老师网站 - 阿里云服务器快速部署脚本
# 使用方法：在阿里云服务器上执行 bash deploy.sh

echo "======================================"
echo "  雷曼老师网站 - 快速部署脚本"
echo "======================================"
echo ""

# 配置变量
WEB_ROOT="/var/www/leiman-website"
NGINX_CONF="/etc/nginx/conf.d/leiman-website.conf"

# 1. 安装 Nginx（如果未安装）
echo "1. 检查 Nginx..."
if ! command -v nginx &> /dev/null; then
    echo "正在安装 Nginx..."
    if [ -f /etc/redhat-release ]; then
        yum install nginx -y
    else
        apt update && apt install nginx -y
    fi
    echo "✓ Nginx 安装完成"
else
    echo "✓ Nginx 已安装"
fi
echo ""

# 2. 创建网站目录
echo "2. 创建网站目录..."
mkdir -p $WEB_ROOT
echo "✓ 目录创建完成：$WEB_ROOT"
echo ""

# 3. 上传文件说明
echo "3. 上传网站文件"
echo "   请将本地 build 目录中的文件上传到：$WEB_ROOT"
echo ""
echo "   方法 1 - SCP 上传（在本地电脑执行）："
echo "   scp -r E:\\Test\\qwen\\test2\\leiman-website\\build\\* root@你的服务器 IP:$WEB_ROOT"
echo ""
echo "   方法 2 - Git 部署："
echo "   cd $WEB_ROOT && git clone <仓库地址> . && npm install && npm run build"
echo ""
read -p "按回车继续..."
echo ""

# 4. 配置 Nginx
echo "4. 配置 Nginx..."
cat > $NGINX_CONF << 'EOF'
server {
    listen 80;
    server_name _;
    
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
EOF
echo "✓ Nginx 配置完成"
echo ""

# 5. 设置权限
echo "5. 设置文件权限..."
chown -R nginx:nginx $WEB_ROOT 2>/dev/null || chown -R www-data:www-data $WEB_ROOT
chmod -R 755 $WEB_ROOT
echo "✓ 权限设置完成"
echo ""

# 6. 测试 Nginx 配置
echo "6. 测试 Nginx 配置..."
nginx -t
if [ $? -eq 0 ]; then
    echo "✓ Nginx 配置测试通过"
else
    echo "✗ Nginx 配置测试失败，请检查配置"
    exit 1
fi
echo ""

# 7. 重启 Nginx
echo "7. 重启 Nginx..."
systemctl restart nginx
systemctl enable nginx
echo "✓ Nginx 已重启并设置开机自启"
echo ""

# 8. 配置防火墙
echo "8. 配置防火墙..."
if command -v firewall-cmd &> /dev/null; then
    firewall-cmd --permanent --add-service=http
    firewall-cmd --permanent --add-service=https
    firewall-cmd --reload
    echo "✓ 防火墙配置完成（CentOS）"
elif command -v ufw &> /dev/null; then
    ufw allow 'Nginx Full'
    ufw reload
    echo "✓ 防火墙配置完成（Ubuntu）"
else
    echo "⚠ 未检测到防火墙，请手动在阿里云控制台配置安全组"
fi
echo ""

# 9. 完成
echo "======================================"
echo "  部署完成！"
echo "======================================"
echo ""
echo "网站地址：http://你的服务器 IP"
echo ""
echo "下一步："
echo "1. 在阿里云控制台配置安全组（开放 80 端口）"
echo "2. 访问网站测试"
echo "3. （可选）配置 HTTPS 证书"
echo ""
echo "如需配置 HTTPS，执行："
echo "  yum install certbot python3-certbot-nginx -y"
echo "  certbot --nginx -d 你的域名.com"
echo ""
