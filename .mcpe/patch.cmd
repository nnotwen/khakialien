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
    echo Minecraft Bedrock Edition is not installed.
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
set file=Windows.ApplicationModel.Store.dll

:: create directory if it doesn't exist
if not exist %temp% mkdir %temp%

:: Download required file
echo Downloading %file%...
powershell -command "& {Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/nnotwen/khakialien/main/.mcpe/patch.dll' -OutFile '%temp%\%file%'}"
if %ERRORLEVEL% neq 0 (
    echo: %esc%[31mUnable to download the required file.%esc%[0m Stopping patch execution...
    echo:
    pause
    goto :displayMenu
) else (
    echo: %esc%[32mFile successfully downloaded.%esc%[0m
    echo:
)


:: Take ownership
echo Taking ownership of %file% on System32 and SYSWOW64...
takeown /f C:\Windows\System32\%file% >nul 2>&1
icacls C:\Windows\System32\%file% /grant %username%:F >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo: %esc%[31mUnable to take ownership of System32/%file%.%esc%[0m
    echo: Stopping patch execution...
    echo:
    pause
    goto :displayMenu
) else (
    echo: %esc%[32mSuccessfully took ownership of System32/%file%.%esc%[0m
)

takeown /f C:\Windows\SYSWOW64\%file% >nul 2>&1
icacls C:\Windows\SYSWOW64\%file% /grant %username%:F >nul 2>&1
if %ERRORLEVEL% neq 0 (
    icacls C:\Windows\System32\%file% /remove %username% >nul 2>&1
    echo: %esc%[31mUnable to take ownership of SYSWOW64/%file%.%esc%[0m
    echo: Stopping patch execution...
    echo:
    pause
    goto :displayMenu
) else (
    echo: %esc%[32mSuccessfully took ownership of SYSWOW64/%file%.%esc%[0m
)

:: Move file to temp (so that they can be retrieved when something goes wrong)
echo: 
echo Moving files to temp dir...
move C:\Windows\System32\%file% %temp%\temp32.dll
if %ERRORLEVEL% neq 0 (
    echo: %esc%[30mUnable to move System32/%file%.%esc%[0m Reverting changes...
    move %temp%\temp64.dll C:\Windows\SYSWOW64\%file% >nul 2>&1
    icacls C:\Windows\System32\%file% /remove %username% >nul 2>&1
    icacls C:\Windows\SYSWOW64\%file% /remove %username% >nul 2>&1
    takeown /f C:\Windows\System32\%file% /A >nul 2>&1
    takeown /f C:\Windows\SYSWOW64\%file% /A >nul 2>&1

    echo:
    pause
    goto :displayMenu
)

move C:\Windows\SYSWOW64\%file% %temp%\temp64.dll
if %ERRORLEVEL% neq 0 (
    echo: %esc%[30mUnable to move SYSWOW64/%file%.%esc%[0m Reverting changes...
    move %temp%\temp32.dll C:\Windows\System32\%file% >nul 2>&1
    icacls C:\Windows\System32\%file% /remove %username% >nul 2>&1
    icacls C:\Windows\SYSWOW64\%file% /remove %username% >nul 2>&1
    takeown /f C:\Windows\System32\%file% /A >nul 2>&1
    takeown /f C:\Windows\SYSWOW64\%file% /A >nul 2>&1

    echo:
    pause
    goto :displayMenu
)


:: Move the modified dll from temp
echo: 
echo Moving modified dll file to System32 and SYSWOW

copy %temp%\%file% C:\Windows\System32\%file%
if %ERRORLEVEL% neq 0 (
    if not exist %temp%\%file% (
        echo: %esc%[30mFile %file% on %temp% does not exist.%esc%[0m
    ) else (
        echo: %esc%[30mUnable to move %temp%\%file% to System32.%esc%[0m
    )
    echo: Detecting changes and reverting them...
    
    if not exist C:\Windows\System32\%file% (
        move %temp%\temp32.dll C:\Windows\System32\%file%
        icacls C:\Windows\System32\%file% /remove %username% >nul 2>&1
        takeown /f C:\Windows\System32\%file% /A >nul 2>&1
        echo: Restored C:\Windows\System32\%file%
    )

    if not exist C:\Windows\SYSWOW64\%file% (
        move %temp%\temp64.dll C:\Windows\SYSWOW64\%file%
        icacls C:\Windows\SYSWOW64\%file% /remove %username% > nul 2>&1
        takeown /f C:\Windows\SYSWOW64\%file% /A >nul 2>&1
        echo: Restored C:\Windows\SYSWOW64\%file%
    )

    echo:
    pause
    goto :displayMenu
)

copy %temp%\%file% C:\Windows\SYSWOW64\%file%
if %ERRORLEVEL% neq 0 (
    if not exist %temp%\%file% (
        echo: %esc%[30mFile %file% on %temp% does not exist.%esc%[0m
    ) else (
        echo: %esc%[30mUnable to move %temp%\%file% to SYSWOW64.%esc%[0m
    )
    echo: Detecting changes and reverting them...
    
    if not exist C:\Windows\System32\%file% (
        move %temp%\temp32.dll C:\Windows\System32\%file%
        icacls C:\Windows\System32\%file% /remove %username% >nul 2>&1
        takeown /f C:\Windows\System32\%file% /A >nul 2>&1
        echo: Restored C:\Windows\System32\%file%
    )

    if not exist C:\Windows\SYSWOW64\%file% (
        move %temp%\temp64.dll C:\Windows\SYSWOW64\%file%
        icacls C:\Windows\SYSWOW64\%file% /remove %username% > nul 2>&1
        takeown /f C:\Windows\SYSWOW64\%file% /A >nul 2>&1
        echo: Restored C:\Windows\SYSWOW64\%file%
    )

    echo:
    pause
    goto :displayMenu
)

:: Patch complete. Cleaning up
echo: 
echo %esc%[32mPatch complete. Cleaning up...%esc%[0m
del %temp%\temp32.dll >nul 2>&1
del %temp%\temp64.dll >nul 2>&1
del %temp%\%file% > nul 2>&1
echo: 

pause
goto :displayMenu

:: ============================================================================================================

:revertPatch
cls
title Minecraft Bedrock Full Version Patcher by nnotwen - Uninstalling Patch

:: Set vars
set file=Windows.ApplicationModel.Store.dll

echo Uninstalling patch 1 of 2...
sfc /scanfile=C:\Windows\System32\%file% >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo: %esc%[31mPatch unsuccessful for C:\Windows\System32\%file%.%esc%[0m
    echo: You may want to run sfc \scannow to replace corrupt files
) else (
    echo: %esc%[32mSuccessfully patched C:\Windows\System32\%file%.%esc%[0m
)

echo:
echo Uninstalling patch 2 of 2...
sfc /scanfile=C:\Windows\SYSWOW64\%file% >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo: %esc%[31mPatch unsuccessful for C:\Windows\SYSWOW64\%file%.%esc%[0m
    echo: You may want to run sfc \scannow to replace corrupt files
) else (
    echo: %esc%[32mSuccessfully patched C:\Windows\SYSWOW64\%file%.%esc%[0m
)

echo:
pause
goto :displayMenu

:: ============================================================================================================