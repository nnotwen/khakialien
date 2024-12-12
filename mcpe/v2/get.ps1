$ErrorActionPreference = "Stop"
# Enable TLSv1.2 for compatibility with older clients
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

$DownloadURL = 'https://raw.githubusercontent.com/nnotwen/khakialien/main/mcpe/v2/patch.cmd'

$rand = Get-Random -Maximum 99999999
$isAdmin = [bool]([Security.Principal.WindowsIdentity]::GetCurrent().Groups -match 'S-1-5-32-544')
$FilePath = if ($isAdmin) { "$env:SystemRoot\Temp\MCPE_$rand.cmd" } else { "$env:TEMP\MCPE_$rand.cmd" }

$response = Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing

$ScriptArgs = "$args "
$prefix = "@REM $rand `r`n"
$content = $prefix + $response
Set-Content -Path $FilePath -Value $content

Start-Process $FilePath $ScriptArgs -Verb RunAs -Wait

$FilePaths = @("$env:TEMP\MCPE*.cmd", "$env:SystemRoot\Temp\MCPE*.cmd")
foreach ($FilePath in $FilePaths) { Get-Item $FilePath | Remove-Item }
