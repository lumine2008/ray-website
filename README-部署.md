# 🚀 快速部署指南

## 方式一：一键部署脚本（推荐）

### 1. 双击运行
```
一键部署.bat
```

### 2. 按照提示操作
- 输入阿里云服务器 IP
- 选择部署方式
- 完成部署

---

## 方式二：PowerShell 脚本

### 1. 打开 PowerShell
在网站目录打开 PowerShell：
```powershell
cd E:\Test\qwen\test2\leiman-website
```

### 2. 执行部署脚本
```powershell
.\deploy-to-aliyun.ps1
```

### 3. 输入服务器信息
- 服务器 IP
- 用户名（默认 root）

---

## 方式三：手动部署

### 1. 上传文件
使用 FTP 工具（如 FileZilla）上传 `build` 目录中的所有文件到：
```
/var/www/leiman-website/
```

### 2. 登录服务器
```bash
ssh root@你的服务器 IP
```

### 3. 执行部署脚本
```bash
bash /var/www/leiman-website/deploy.sh
```

---

## 配置阿里云安全组

1. 登录阿里云控制台
2. ECS 实例 → 安全组
3. 添加规则：端口 80，授权对象 0.0.0.0/0

---

## 访问网站

```
http://你的服务器 IP
```

---

## 需要帮助？

查看完整文档：`DEPLOYMENT.md`
