@echo off
setlocal
title Perfume Shope - Cloudflare Pages Deployer

:: Ensure script runs in project root directory
cd /d "%~dp0"

echo ==============================================================================
echo                      PERFUME SHOPE - CLOUDFLARE DEPLOYER                      
echo ==============================================================================
echo.
echo [1/3] Checking environment prerequisites...

where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not found in system PATH.
    echo Please install Node.js from https://nodejs.org/ and try again.
    goto :FAIL
)

where npx >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npx is not available. Please ensure npm/Node.js is installed.
    goto :FAIL
)

echo [OK] Node.js and npx detected.
echo.
echo [2/3] Deploying project to Cloudflare Pages...
echo Target Project: perfume-shopee
echo Target Branch: main
echo.

call npx wrangler pages deploy . --project-name perfume-shopee --branch main --commit-dirty=true

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Deployment encountered an error.
    echo If this is an authentication issue, try running: npx wrangler login
    goto :FAIL
)

echo.
echo ==============================================================================
echo                         DEPLOYMENT SUCCESSFUL!                                
echo ==============================================================================
echo.
echo Live Production URL: https://perfume-shopee.pages.dev
echo.
echo Opening live website in your default browser...
start "" "https://perfume-shopee.pages.dev"

goto :END

:FAIL
echo.
echo ==============================================================================
echo                         DEPLOYMENT FAILED                                     
echo ==============================================================================
echo Please check the error log messages above.
echo.

:END
echo.
echo Press any key to exit...
pause >nul
endlocal
