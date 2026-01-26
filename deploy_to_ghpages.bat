@echo off
REM Script to deploy Docusaurus build to GitHub Pages

REM Save current directory
set ORIGINAL_DIR=%CD%

REM Go to the ai-book directory
cd ai-book

REM Build the site if not already built
echo Building Docusaurus site...
npm run build

REM Create a temporary directory for the deployment
mkdir ..\temp-deploy
cd ..\temp-deploy

REM Initialize a new git repository
git init
git remote add origin https://github.com/SuhaibGit/Physical-AI-Humanoid-Robotics.git

REM Pull the current gh-pages branch
git pull origin gh-pages

REM Remove all existing files
del /q /s * >nul 2>&1
for /d %%x in (*) do rd /s /q "%%x"

REM Copy the build files from the ai-book build directory
xcopy "..\ai-book\build\*.*" . /E /I /H /Y

REM Create .nojekyll file to prevent Jekyll processing
echo. > .nojekyll

REM Add and commit the files
git add .
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git commit -m "Deploy Docusaurus site to GitHub Pages" -a

REM Push to gh-pages branch
git push origin gh-pages -f

REM Cleanup
cd ..
rmdir /s /q temp-deploy

REM Return to original directory
cd %ORIGINAL_DIR%

echo Deployment completed!