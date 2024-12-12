@setlocal DisableDelayedExpansion
@echo off

:: Add ESC for text flavors
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do set esc=%%b

cls
title Minecraft Bedrock Full Version Patcher - Performing initial tests...

set EMSG1=%esc%[91mAdministrator permissions required.%esc%[0m Rerun with elevated permissions.
set EMSG2=%esc%[91mThis only works for 64-bit system.%esc%[0m Your system is unsupported.
set EMSG3=%esc%[91mMinecraft Bedrock Edition is not installed.%esc%[0m Please install Minecraft Bedrock Edition [Trial] first from the Microsoft Store.
set EMSG4=%esc%[91mMinecraft Bedrock is currently running.%esc%[0m To prevent errors while patching, the application must be closed.
set EMSG5=Close Minecraft Bedrock and try rerunning this script.
set DLURI=https://raw.githubusercontent.com/nnotwen/khakialien/main/mcpe/patch.dll

set folder[0]=System32
set folder[1]=SYSWOW64

:: Check if running as Admin
NET SESSION >nul 2>&1
if %errorLevel% neq 0 echo %EMSG1% & echo: & pause & exit /b

:: Check if running x32 System
if %PROCESSOR_ARCHITECTURE%=="X86" echo %EMSG2% & echo: & pause & exit /b

:: Check if Minecraft Bedrock is installed
powershell -Command "Get-AppxPackage | Select Name, PackageFullName | findstr /C:'Microsoft.MinecraftUWP'" >nul 2>&1
if %errorLevel% neq 0 echo %EMSG3% & echo: & pause & exit /b

:: Check if Minecraft Bedrock is running
powershell -Command "Get-Process | Select ProcessName | findstr Minecraft.Windows" >nul 2>&1
if %errorLevel% equ 0 echo %EMSG4% & echo %EMSG5% & echo: & pause & exit /b

:: Display Menu
:displayMenu
cls & title Minecraft Bedrock Full Version Patcher by nnotwen [v1.0]
echo: & echo: & echo: & echo: 
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

if %errorLevel%==3 exit /b
if %errorLevel%==2 setlocal & call :revertPatch & cls & endlocal & goto :displayMenu
if %errorLevel%==1 setlocal & call :patch       & cls & endlocal & goto :displayMenu
goto :displayMenu


:: ========================================================================

:patch
cls & title Minecraft Bedrock Full Version Patcher by nnotwen - Installing Patch

:: Set variables
set temp=%userprofile%\AppData\Local\Temp\minecraftpatcher
set file=Windows.ApplicationModel.Store.dll

:: Create directory if it doesn't exist
if not exist %temp% mkdir %temp%

:: Download required file
echo Downloading the required file for this patch: %file%
powershell -Command "& Invoke-WebRequest -Uri '%DLURI%' -OutFile '%temp%\%file%'" 2>&1
if exist %temp%\%file% (
    echo: %esc%[32mFile successfully downloaded.%esc%[0m & echo:
) else (
    echo: & echo: %esc%[91mUnable to download the required file.%esc%[0m Stopping patch execution... & echo: & pause & goto :displayMenu
)

for /F "tokens=2 delims==" %%s in ('set folder[') do (
    
    :: Check if files exist in folder (System32 or Syswow64)
    if not exist C:\Windows\%%s\%file% (
        echo %esc%[33mYour system is missing %file% in C:\Windows\%%s.%esc%[0m Grabbing one from the cache...
        sfc /scanfile=C:\Windows\%%s\%file% >nul 2>&1
        if %errorLevel% neq 0 (
            echo %esc%[91mUnable to recover the missing file. It is recommended to run a full system scan.%esc%[0m

            :: since file cannot be recovered, revert changes made to the previous folder
            if %%s == SYSWOW64 (
                echo %esc%[33mChanges have been detected. Running the patch uninstaller...%esc%[0m
                goto :uninstall
            )

            echo Quitting the patcher... & pause & exit /b
        ) else (
            echo %esc%[32m Successfully recovered the missing file. & echo:
        )
    )


    :: Take ownership of the file
    echo Taking ownership of %file% on %%s.
    takeown /f C:\Windows\%%s\%file% >nul 2>&1
    icacls C:\Windows\%%s\%file% /grant %username%:F >nul 2>&1
    if %errorLevel% neq 0 (
        echo: %esc%[91mUnable to take ownership of %file%.%esc%[0m
        echo: Stopping patch execution... & echo: & pause & goto :displayMenu
    )
)




:: Take ownership
echo Taking ownership of %file% on System32 and SYSWOW64...
for /F "tokens=2 delims==" %%s in ('set folder[') do (
    takeown /f C:\Windows\%%s\%file% >nul 2>&1
    icacls C:\Windows\%%s\%file% /grant %username%:F >nul 2>&1
)
if %errorLevel% neq 0 (
    echo: %esc%[91mUnable to take ownership of %file%.%esc%[0m
    echo: Stopping patch execution... & echo: & pause & goto :displayMenu
) else (
    echo: %esc%[32mSuccessfully took ownership of %file%
)

:: Move file to temp folders
echo: & echo Moving files to temp dir...
for /F "tokens=2 delims==" %%s in ('set folder[') do (
    move C:\Windows\%%s\%file% %temp%\%%s\%file% >nul 2>&1
    if exist C:\Windows\%%s\%file% echo: Unable to move %file% to temp dir...
)


echo patch & pause
goto :displayMenu

:revertPatch
cls & title Minecraft Bedrock Full Version Patcher by nnotwen - Uninstalling Patch
goto :uninstall

echo revertpatch & pause
goto :displayMenu

:uninstall
for /F "tokens=2 delims==" %%s in ('set folder[') do (
    echo Uninstalling patch from %%s...
    sfc /scanfile=C:\Windows\%%s\%file% >nul 2>&1
    if %errorLevel% neq 0 (
        echo: %esc%[91mPatch uninstall unsuccessful for C:\Windows\%%s\%file%%esc%[0m
        echo: It is recommended to do a full system scan (run sfc \scannow)
    ) else (
        echo: %esc%[32mPatch uninstall successful for C:\Windows\%%s\%file%%esc%[0m
    )
)