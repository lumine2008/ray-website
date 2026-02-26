@echo off
chcp 65001 >nul
title 雷曼老师网站 - 一键部署工具

echo ======================================
echo   雷曼老师网站 - 一键部署工具
echo ======================================
echo.

:: 获取服务器信息
set /p SERVER_IP="请输入你的阿里云服务器 IP: "
set /p SERVER_USER="请输入服务器用户名 (默认 root): "
if "%SERVER_USER%"=="" set SERVER_USER=root

echo.
echo 正在准备部署文件...
echo.

:: 检查 build 目录是否存在
if not exist "build\" (
    echo [错误] 未找到 build 目录，请先执行 npm run build
    echo.
    pause
    exit /b 1
)

echo [✓] build 目录存在
echo.

:: 显示部署信息
echo ======================================
echo   部署信息
echo ======================================
echo 服务器 IP: %SERVER_IP%
echo 用户名：%SERVER_USER%
echo 目标目录：/var/www/leiman-website/
echo.

echo 请选择部署方式：
echo.
echo 1. SCP 上传（推荐，需要 SSH 密钥或密码）
echo 2. 生成部署包（手动上传）
echo 3. Git 部署（需要 Git 仓库）
echo.
set /p DEPLOY_METHOD="请输入选项 (1-3): "

if "%DEPLOY_METHOD%"=="1" goto SCP_DEPLOY
if "%DEPLOY_METHOD%"=="2" goto ZIP_DEPLOY
if "%DEPLOY_METHOD%"=="3" goto GIT_DEPLOY

echo 无效的选项
pause
exit /b 1

:SCP_DEPLOY
echo.
echo ======================================
echo   SCP 方式部署
echo ======================================
echo.
echo 正在上传文件...
echo.
echo 在 PowerShell 中执行以下命令：
echo.
echo scp -r build\* %SERVER_USER%@%SERVER_IP%:/var/www/leiman-website/
echo.
set /p RUN_SCP="是否现在执行？(Y/N): "
if /i "%RUN_SCP%"=="Y" (
    echo.
    echo 正在上传...
    echo 注意：需要安装 Git Bash 或 WSL 才能执行 SCP 命令
    echo.
    echo 或者使用以下命令手动上传：
    echo pscp -r build\* %SERVER_USER%@%SERVER_IP%:/var/www/leiman-website/
    echo.
    echo 需要下载 pscp.exe: https://www.putty.org/
)
goto DEPLOY_SCRIPT

:ZIP_DEPLOY
echo.
echo ======================================
echo   压缩包方式部署
echo ======================================
echo.
echo 正在创建压缩包...
echo.

:: 创建临时目录
if exist "deploy_package" rmdir /s /q "deploy_package"
mkdir "deploy_package"
mkdir "deploy_package\leiman-website"

:: 复制文件
echo 复制网站文件...
xcopy /E /I /Y build\ deploy_package\leiman-website\build\
xcopy /E /I /Y deploy.sh deploy_package\
xcopy /E /I /Y DEPLOYMENT.md deploy_package\

:: 创建压缩包
echo 创建压缩包...
powershell -Command "Compress-Archive -Path 'deploy_package\*' -DestinationPath 'leiman-website-deploy.zip' -Force"

echo.
echo [✓] 压缩包创建完成：leiman-website-deploy.zip
echo.
echo 下一步：
echo 1. 使用 FTP 工具（如 FileZilla）上传 leiman-website-deploy.zip 到服务器
echo 2. 在服务器上解压：unzip leiman-website-deploy.zip -d /var/www/
echo 3. 执行部署脚本：bash /var/www/leiman-website/deploy.sh
echo.

rmdir /s /q "deploy_package"
goto END

:GIT_DEPLOY
echo.
echo ======================================
echo   Git 方式部署
echo ======================================
echo.
echo 请确保你已经有 Git 仓库
echo.
set /p GIT_REPO="请输入 Git 仓库地址: "
echo.
echo 在服务器上执行以下命令：
echo.
echo ssh %SERVER_USER%@%SERVER_IP%
echo cd /var/www
echo git clone %GIT_REPO% leiman-website
echo cd leiman-website
echo npm install
echo npm run build
echo bash deploy.sh
echo.
goto END

:DEPLOY_SCRIPT
echo.
echo ======================================
echo   服务器端部署脚本
echo ======================================
echo.
echo 上传完成后，在服务器上执行：
echo.
echo ssh %SERVER_USER%@%SERVER_IP%
echo bash /var/www/leiman-website/deploy.sh
echo.
echo 或者手动配置 Nginx（详见 DEPLOYMENT.md）
echo.

:END
echo ======================================
echo   部署说明
echo ======================================
echo.
echo 1. 文件上传完成后，登录服务器执行部署脚本
echo 2. 在阿里云控制台配置安全组（开放 80 端口）
echo 3. 访问 http://你的服务器 IP
echo.
echo 详细文档：DEPLOYMENT.md
echo.
echo 如需帮助，请查看 DEPLOYMENT.md 文件
echo.
pause
