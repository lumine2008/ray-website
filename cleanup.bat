@echo off
chcp 65001 >nul
title 清理项目 - 雷曼老师网站

echo ======================================
echo   清理不需要的文件
echo ======================================
echo.

echo 正在清理...
echo.

:: 删除部署包
if exist "leiman-website-deploy.zip" (
    del /q leiman-website-deploy.zip
    echo [✓] 删除 leiman-website-deploy.zip
)

:: 删除部署临时目录
if exist "deploy_package" (
    rmdir /s /q deploy_package
    echo [✓] 删除 deploy_package/
)

:: 删除构建目录（可选，如果需要保留构建结果请注释掉）
if exist "build" (
    rmdir /s /q build
    echo [✓] 删除 build/
)

:: 删除日志文件
if exist "*.log" (
    del /q *.log
    echo [✓] 删除 *.log
)

:: 删除临时文件
if exist "*.tmp" (
    del /q *.tmp
    echo [✓] 删除 *.tmp
)

if exist "*.temp" (
    del /q *.temp
    echo [✓] 删除 *.temp
)

:: 删除系统文件
if exist ".DS_Store" (
    del /q .DS_Store
    echo [✓] 删除 .DS_Store
)

if exist "Thumbs.db" (
    del /q Thumbs.db
    echo [✓] 删除 Thumbs.db
)

echo.
echo ======================================
echo   清理完成！
echo ======================================
echo.
echo 以下文件已被删除：
echo - leiman-website-deploy.zip
echo - deploy_package/
echo - build/ (重新构建会生成)
echo - *.log
echo - *.tmp
echo - *.temp
echo - .DS_Store
echo - Thumbs.db
echo.
echo 注意：node_modules/ 需要手动删除（如果不需要）
echo       命令：rmdir /s /q node_modules
echo.

pause
