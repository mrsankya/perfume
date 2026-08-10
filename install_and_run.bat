@echo off
setlocal

REM Run from project root (double-click or open cmd and run). Detects Node or Python projects.
cd /d "%~dp0"

REM NODE.JS flow
if exist package.json (
  echo Node project detected.
  if exist package-lock.json (
    echo Running npm ci...
    npm ci || npm install
  ) else (
    echo Running npm install...
    npm install
  )

  echo Trying npm run dev...
  call npm run dev 2>nul || call npm start 2>nul || (
    echo No npm dev/start script succeeded. Trying npx http-server or python fallback...
    npx http-server -c-1 -p 3000 >nul 2>&1 || python -m http.server 3000 >nul 2>&1
  )
  start "" "http://localhost:3000"
  goto :EOF
)

REM PYTHON flow
if exist requirements.txt (
  echo Python project detected.
  python -m pip install --upgrade pip >nul 2>&1
  python -m pip install -r requirements.txt

  if exist app.py (
    start "" "http://localhost:5000"
    python app.py
    goto :EOF
  ) else if exist main.py (
    start "" "http://localhost:8000"
    python main.py
    goto :EOF
  ) else (
    echo No obvious entrypoint found; serving current directory on port 8000.
    start "" "http://localhost:8000"
    python -m http.server 8000
    goto :EOF
  )
)

REM Fallback: serve static files using npx or python
echo No package.json or requirements.txt found. Attempting to serve current folder on port 3000.
npx http-server -c-1 -p 3000 >nul 2>&1 || python -m http.server 3000 >nul 2>&1
start "" "http://localhost:3000"

endlocal
pause
