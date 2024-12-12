@setlocal DisableDelayedExpansion
@echo off

cls

:: Check if running as administrator
NET SESSION >nul 2>&1
if %errorLevel% neq 0 (
    echo Administrator permissions required. Rerun with elevated permissions.
    pause
    exit /b
)

:: Check if running x32 system
if %PROCESSOR_ARCHITECTURE%=="X86" (
    echo This only works for 64-bit system. Your system is unsupported.
    pause
    exit /b
)

:: Check if Minecraft Bedrock is installed
powershell -Command "Get-AppxPackage | Select Name, PackageFullName | findstr /C:'Microsoft.MinecraftUWP'"
if %errorlevel% neq 0 (
    echo Minecraft Bedrock Edition is not installed. Please install Minecraft Bedrock Edition [Trial] first from the Microsoft Store.
    pause
    exit /b
)

:: Check if Minecraft Bedrock is running
powershell -Command "Get-Process | Select ProcessName | findstr Minecraft.Windows"
if %errorlevel% equ 0 (
    cls
    echo Minecraft Bedrock is currently running. To prevent errors while patching, the application must be closed.
    echo Close Minecraft Bedrock and try rerunning this script.
    echo:
    pause
    exit /b
)

:: Add ESC for flavoring text
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do set esc=%%b

:displayMenu
cls
title Minecraft Bedrock Full Version Patcher by nnotwen

echo:
echo:
echo:
echo:
echo:       ______________________________________________________________
echo:
echo:             Minecraft Bedrock Patcher: %PROCESSOR_ARCHITECTURE%
echo:
echo:
echo:             [1] Install Patch
echo:
echo:             [2] Uninstall Patch
echo:
echo:             [0] Exit
echo:
echo:       ______________________________________________________________
echo:
echo:          %esc%[32mEnter a menu option in the Keyboard [1,2,0] :%esc%[0m
choice /C:120 /N
set _erl=%errorlevel%

if %_erl%==3 exit /b
if %_erl%==2 setlocal & call :revertPatch & cls & endlocal & goto :displayMenu
if %_erl%==1 setlocal & call :patch       & cls & endlocal & goto :displayMenu
goto :displayMenu


:: ============================================================================================================

:patch
cls
title Minecraft Bedrock Full Version Patcher by nnotwen - Installing Patch

:: Set vars
set temp=%userprofile%\AppData\Local\Temp\minecraftpatcher
set baseURI=https://raw.githubusercontent.com/nnotwen/khakialien/main/mcpe/v2

set file_n[0]=f5ec96e8-bcf1-4036-a9f6-d1d6e18a4ba7.dll
set file_n[1]=e534ace5-b93a-44ec-9d6c-c277a4c5ce79.dll
set file_n_size=2
set file=Windows.ApplicationModel.Store.dll

set dir[0]=System32
set dir[1]=SYSWOW64


:: create directory if it doesn't exist
if not exist %temp% mkdir %temp% 

for /L %%i in (0,1,%file_n_size%) do (
    set ff=!file_m[%%i]!

    echo Downloading !file!...
    powershell -command "& Invoke-WebRequest -Uri '%baseURI%'/%ff% OutFile '%temp%\%ff%'" 2>&1
    if exist %temp%\%ff% (
        echo %esc%[32mFile successfully downloaded.%esc%[0m & echo.
    ) else (
        echo. & echo %esc%[91mUnable to download the required file.%esc%[0m Stopping patch execution... & echo.
        pause & goto :displayMenu
    )
)

:: Taking ownership of each default files
for /L %%i in (0,1,%file_n_size%) do (
    echo Taking ownership of %file% on !dir[%%i]!...

    takeown /f C:\Windows\!dir[%%i]!\%file% >nul 2>&1
    icacls C:\Windows\!dir[%%i]!\%file% /grant %username%:F >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo %esc%[91mUnable to take ownership of !dir[%%i]!\%file%.%esc%[0m
        echo stopping patch execution... & echo. & pause & goto :displayMenu
    ) else (
        echo %esc%[32mSuccessfully took ownership of !dir[%%i]!\%file%.%esc%[0m
    )
    echo.
)

:: Move file to temp (so that they can be retrieved when something goes wrong)
::
:: Edit: This move is unnecessary, if something goes wrong, 
:: just use sfc to retrieve cached copies from dllcache


:: Move the modified dll from temp
for /L %%i in (0,1,%file_n_size%) do (
    echo Applying patch !file_m[%%i]! to C:\Windows\!dir[%%i]!
    copy /Y %temp%\!file_m[%%i]! C:\Windows\!dir[%%i]!\%file%
    
    if %ERRORLEVEL% neq 0 (
        echo %esc%[30mUnable to apply %temp%\!file_m[%%i]! to !dir[%%i]!.%esc%[0m & echo.
        echo Performing patch uninstall to revert the changes... & pause & goto :revertPatch
    )
)

:: Patch complete. Cleaning up
echo. & echo %esc%[32mPatch complete. Cleaning up...%esc%[0m
del /Q %temp%\*.* & echo & pause & goto :displayMenu

:: ============================================================================================================

:revertPatch
cls
title Minecraft Bedrock Full Version Patcher by nnotwen - Uninstalling Patch

:: Set vars
set file=Windows.ApplicationModel.Store.dll
set dir[0]=System32
set dir[1]=SYSWOW64
set dir_size=2

for /L %%i in (0,1,%dir_size%) do (
    set /a index=%%i+1
    echo Uninstalling patch !index! of %dir_size%...

    sfc /scanfile=C:\Windows\!dir[%%i]!\%file% >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo %esc%[91mPatch !index! of %dir_size% unsuccessful.%esc%[0m
        echo Please run sfc \scanfile=C:\Windows\!dir[%%i]!\%file% to replace possible corrupt file.
    ) else (
        echo: %esc%[32mSuccessfully patched C:\Windows\!dir[%%i]!\%file%.%esc%[0m
    )
)

echo. & pause & goto :displayMenu

:: ============================================================================================================