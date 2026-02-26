# 雷曼老师网站 - PowerShell 一键部署脚本
# 使用方法：在 PowerShell 中执行 .\deploy-to-aliyun.ps1

param(
    [string]$ServerIP = "",
    [string]$Username = "root",
    [string]$TargetDir = "/var/www/leiman-website"
)

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  雷曼老师网站 - 一键部署工具" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# 检查 build 目录
if (-not (Test-Path "build")) {
    Write-Host "[错误] 未找到 build 目录，请先执行 npm run build" -ForegroundColor Red
    Write-Host ""
    Write-Host "执行：npm run build" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "[✓] build 目录存在" -ForegroundColor Green
Write-Host ""

# 获取服务器信息
if (-not $ServerIP) {
    $ServerIP = Read-Host "请输入阿里云服务器 IP"
}
if (-not $Username) {
    $Username = Read-Host "请输入服务器用户名 (默认 root)"
    if (-not $Username) { $Username = "root" }
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  部署信息" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "服务器：$ServerIP"
Write-Host "用户名：$Username"
Write-Host "目标目录：$TargetDir"
Write-Host ""

# 检查是否安装了 OpenSSH
$sshAvailable = Get-Command ssh -ErrorAction SilentlyContinue
if (-not $sshAvailable) {
    Write-Host "[警告] 未检测到 SSH 客户端" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "请安装 OpenSSH 客户端：" -ForegroundColor Yellow
    Write-Host "1. Windows 10/11: 设置 → 应用 → 可选功能 → 添加 OpenSSH 客户端" -ForegroundColor White
    Write-Host "2. 或者使用 Git Bash（推荐）" -ForegroundColor White
    Write-Host ""
    Write-Host "按任意键继续，将使用备用方案..." -ForegroundColor Yellow
    pause
    
    # 创建部署包
    Write-Host ""
    Write-Host "正在创建部署包..." -ForegroundColor Cyan
    
    if (Test-Path "deploy_package") {
        Remove-Item "deploy_package" -Recurse -Force
    }
    
    New-Item -ItemType Directory -Path "deploy_package\leiman-website" | Out-Null
    Copy-Item "build\*" -Destination "deploy_package\leiman-website\" -Recurse
    Copy-Item "deploy.sh" -Destination "deploy_package\leiman-website\" -Force
    Copy-Item "DEPLOYMENT.md" -Destination "deploy_package\leiman-website\" -Force
    
    # 创建说明文件
    $readme = @"
部署说明
========

1. 使用 FTP 工具（如 FileZilla）上传 deploy_package 文件夹中的所有文件到服务器
   远程路径：$TargetDir

2. 登录服务器并执行：
   ssh $Username@$ServerIP
   bash $TargetDir/deploy.sh

3. 在阿里云控制台配置安全组（开放 80 端口）

4. 访问 http://$ServerIP

详细文档：DEPLOYMENT.md
"@
    $readme | Out-File "deploy_package\部署说明.txt" -Encoding UTF8
    
    # 创建压缩包
    if (Test-Path "leiman-website-deploy.zip") {
        Remove-Item "leiman-website-deploy.zip" -Force
    }
    
    Compress-Archive -Path "deploy_package\*" -DestinationPath "leiman-website-deploy.zip" -Force
    
    Write-Host ""
    Write-Host "[✓] 部署包创建完成：leiman-website-deploy.zip" -ForegroundColor Green
    Write-Host ""
    Write-Host "下一步：" -ForegroundColor Cyan
    Write-Host "1. 使用 FileZilla 上传 leiman-website-deploy.zip 到服务器" -ForegroundColor White
    Write-Host "2. 在服务器上解压：unzip leiman-website-deploy.zip -d /var/www/" -ForegroundColor White
    Write-Host "3. 执行部署脚本：bash /var/www/leiman-website/deploy.sh" -ForegroundColor White
    Write-Host ""
    
    # 清理
    Remove-Item "deploy_package" -Recurse -Force
    
    pause
    exit 0
}

# 使用 SSH/SCP 上传
Write-Host ""
Write-Host "正在上传文件..." -ForegroundColor Cyan
Write-Host ""

# 创建远程目录
Write-Host "创建远程目录..." -ForegroundColor Yellow
ssh $Username@$ServerIP "mkdir -p $TargetDir"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 无法连接到服务器" -ForegroundColor Red
    Write-Host ""
    Write-Host "请检查：" -ForegroundColor Yellow
    Write-Host "1. 服务器 IP 是否正确" -ForegroundColor White
    Write-Host "2. SSH 服务是否运行（端口 22）" -ForegroundColor White
    Write-Host "3. 防火墙/安全组设置" -ForegroundColor White
    pause
    exit 1
}

# SCP 上传文件
Write-Host "上传网站文件..." -ForegroundColor Yellow
scp -r "build\*" "$Username@$ServerIP`:$TargetDir/"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 上传失败" -ForegroundColor Red
    pause
    exit 1
}

# 上传部署脚本
scp "deploy.sh" "$Username@$ServerIP`:$TargetDir/"
scp "DEPLOYMENT.md" "$Username@$ServerIP`:$TargetDir/"

Write-Host ""
Write-Host "[✓] 文件上传完成" -ForegroundColor Green
Write-Host ""

# 执行部署脚本
Write-Host "是否现在执行服务器端部署脚本？" -ForegroundColor Cyan
$runDeploy = Read-Host "(Y/N)"
if ($runDeploy -eq "Y" -or $runDeploy -eq "y") {
    Write-Host ""
    Write-Host "正在执行部署脚本..." -ForegroundColor Cyan
    ssh $Username@$ServerIP "bash $TargetDir/deploy.sh"
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Green
Write-Host "  部署完成！" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host ""
Write-Host "网站地址：http://$ServerIP" -ForegroundColor Cyan
Write-Host ""
Write-Host "下一步：" -ForegroundColor Yellow
Write-Host "1. 在阿里云控制台配置安全组（开放 80 端口）" -ForegroundColor White
Write-Host "2. 访问网站测试" -ForegroundColor White
Write-Host "3. （可选）配置 HTTPS 证书" -ForegroundColor White
Write-Host ""

pause
