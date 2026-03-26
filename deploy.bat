@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ==============================
echo Git 一键提交并推送脚本
echo ==============================
echo.

REM 1) 检查是否安装 git
where git >nul 2>nul
if errorlevel 1 (
    echo [错误] 没有检测到 Git，请先安装 Git for Windows。
    pause
    exit /b 1
)

REM 2) 检查当前目录是不是 git 仓库
git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
    echo [错误] 当前目录不是 Git 仓库。
    echo 请把这个脚本放到你的项目根目录再运行。
    pause
    exit /b 1
)

REM 3) 获取当前分支名
for /f "delims=" %%i in ('git branch --show-current') do set BRANCH=%%i

if "%BRANCH%"=="" (
    echo [错误] 获取不到当前分支名。
    pause
    exit /b 1
)

echo 当前分支: %BRANCH%
echo.

REM 4) 查看是否有改动
git status --porcelain > "%temp%\git_changes_check.txt"
for /f %%i in ("%temp%\git_changes_check.txt") do set SIZE=%%~zi

if "%SIZE%"=="0" (
    echo [提示] 没有检测到文件改动。
    choice /c YN /m "仍然尝试执行 pull 和 push 吗"
    if errorlevel 2 (
        del "%temp%\git_changes_check.txt" >nul 2>nul
        pause
        exit /b 0
    )
)

del "%temp%\git_changes_check.txt" >nul 2>nul

REM 5) 输入提交信息
set /p MSG=请输入提交说明: 

if "%MSG%"=="" (
    set MSG=update
)

echo.
echo [1/5] 添加文件...
git add .
if errorlevel 1 (
    echo [错误] git add 失败
    pause
    exit /b 1
)

echo.
echo [2/5] 提交代码...
git commit -m "%MSG%"
if errorlevel 1 (
    echo [提示] 可能没有可提交内容，继续尝试同步和推送...
)

echo.
echo [3/5] 拉取远程最新代码并 rebase...
git pull --rebase origin %BRANCH%
if errorlevel 1 (
    echo.
    echo [错误] git pull --rebase 失败。
    echo 通常是以下原因：
    echo 1. 远程有更新且发生冲突
    echo 2. 账号或权限有问题
    echo 3. 远程分支不存在
    echo.
    echo 你可以先执行：
    echo git status
    echo git rebase --abort
    echo.
    pause
    exit /b 1
)

echo.
echo [4/5] 推送到远程...
git push -u origin %BRANCH%
if errorlevel 1 (
    echo.
    echo [错误] git push 失败。
    echo 常见原因：
    echo 1. 没有仓库权限
    echo 2. 认证过期
    echo 3. 分支保护，禁止直接推送
    echo 4. 远程地址配置错误
    echo.
    echo 你可以检查：
    echo git remote -v
    echo git status
    echo.
    pause
    exit /b 1
)

echo.
echo [5/5] 完成，推送成功。
echo.
pause
exit /b 0