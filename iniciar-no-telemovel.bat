@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo O Node.js nao foi encontrado. Instala o Node.js LTS e tenta novamente.
  pause
  exit /b 1
)
node servidor-local.js
pause
