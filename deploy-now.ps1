# 雷曼老师网站 - 快速部署到阿里云
# 服务器：8.130.157.0

$ServerIP = "8.130.157.0"
$Username = "root"
$TargetDir = "/var/www/leiman-website"

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  正在部署到阿里云服务器" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "服务器：$ServerIP" -ForegroundColor Yellow
Write-Host "用户名：$Username" -ForegroundColor Yellow
Write-Host "目标目录：$TargetDir" -ForegroundColor Yellow
Write-Host ""

# 检查 SSH 是否可用
$sshTest = Test-Connection -ComputerName $ServerIP -Count 1 -Quiet
if (-not $sshTest) {
    Write-Host "[错误] 无法连接到服务器 $ServerIP" -ForegroundColor Red
    Write-Host ""
    Write-Host "请检查：" -ForegroundColor Yellow
    Write-Host "1. 服务器 IP 是否正确" -ForegroundColor White
    Write-Host "2. 服务器是否运行中" -ForegroundColor White
    Write-Host "3. 网络连接是否正常" -ForegroundColor White
    Write-Host ""
    pause
    exit 1
}

Write-Host "[✓] 服务器连接正常" -ForegroundColor Green
Write-Host ""

# 创建部署包
Write-Host "正在创建部署包..." -ForegroundColor Cyan
Write-Host ""

if (Test-Path "deploy_package") {
    Remove-Item "deploy_package" -Recurse -Force
}

New-Item -ItemType Directory -Path "deploy_package\leiman-website" | Out-Null
Copy-Item "build\*" -Destination "deploy_package\leiman-website\" -Recurse
Copy-Item "deploy.sh" -Destination "deploy_package\leiman-website\" -Force
Copy-Item "DEPLOYMENT.md" -Destination "deploy_package\leiman-website\" -Force

# 创建压缩包
if (Test-Path "leiman-website-deploy.zip") {
    Remove-Item "leiman-website-deploy.zip" -Force
}

Compress-Archive -Path "deploy_package\*" -DestinationPath "leiman-website-deploy.zip" -Force

Write-Host "[✓] 部署包创建完成" -ForegroundColor Green
Write-Host ""
Write-Host "部署包：leiman-website-deploy.zip" -ForegroundColor Cyan
Write-Host ""

# 显示部署说明
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  下一步操作" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "请选择上传方式：" -ForegroundColor Yellow
Write-Host ""
Write-Host "【方式 1】使用 SCP 命令（需要 SSH 客户端）" -ForegroundColor White
Write-Host ""
Write-Host "在 PowerShell 中执行：" -ForegroundColor Gray
Write-Host "scp leiman-website-deploy.zip root@$ServerIP`:/tmp/" -ForegroundColor Cyan
Write-Host "ssh root@$ServerIP" -ForegroundColor Cyan
Write-Host "unzip /tmp/leiman-website-deploy.zip -d /var/www/" -ForegroundColor Cyan
Write-Host "bash /var/www/leiman-website/deploy.sh" -ForegroundColor Cyan
Write-Host ""
Write-Host "【方式 2】使用 FTP 工具（推荐）" -ForegroundColor White
Write-Host ""
Write-Host "1. 下载 FileZilla: https://filezilla-project.org/" -ForegroundColor Gray
Write-Host "2. 连接到 $ServerIP (用户名：root)" -ForegroundColor Gray
Write-Host "3. 上传 leiman-website-deploy.zip 到 /tmp/" -ForegroundColor Gray
Write-Host "4. SSH 登录服务器并执行：" -ForegroundColor Gray
Write-Host "   unzip /tmp/leiman-website-deploy.zip -d /var/www/" -ForegroundColor Cyan
Write-Host "   bash /var/www/leiman-website/deploy.sh" -ForegroundColor Cyan
Write-Host ""
Write-Host "【方式 3】使用阿里云 Workbench" -ForegroundColor White
Write-Host ""
Write-Host "1. 登录阿里云控制台" -ForegroundColor Gray
Write-Host "2. ECS 实例 → 远程连接 (Workbench)" -ForegroundColor Gray
Write-Host "3. 上传 leiman-website-deploy.zip" -ForegroundColor Gray
Write-Host "4. 执行解压和部署命令" -ForegroundColor Gray
Write-Host ""

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  部署后配置" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. 在阿里云控制台配置安全组：" -ForegroundColor Yellow
Write-Host "   - 端口：80" -ForegroundColor White
Write-Host "   - 授权对象：0.0.0.0/0" -ForegroundColor White
Write-Host ""
Write-Host "2. 访问网站：" -ForegroundColor Yellow
Write-Host "   http://$ServerIP" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. （可选）配置 HTTPS：" -ForegroundColor Yellow
Write-Host "   certbot --nginx" -ForegroundColor Cyan
Write-Host ""

# 清理
Remove-Item "deploy_package" -Recurse -Force

Write-Host ""
Write-Host "部署包已准备就绪！" -ForegroundColor Green
Write-Host "位置：$PWD\leiman-website-deploy.zip" -ForegroundColor Cyan
Write-Host ""

pause
