@Echo 即将终止Firefox进程并备份Firefox\profile配置文件，是否继续？ & pause > nul
taskkill /F /IM firefox.exe
set hour=%time:~,2%
if "%time:~,1%"==" " set hour=0%time:~1,1%
set backupTime=%date:~0,4%-%date:~5,2%-%date:~8,2%,%hour%-%time:~3,2%-%time:~6,2%  
set backupName="profilebackup[%backupTime:~0,19%]"
set compressPara=-m5 -idq -r -ed -ep1
set backupFilePath="profile\*"
set backupFilter=-x*.mfl -x*.dat -x*\*cache* -x*\*thumbnails* -x*\*safebrowsing* -x*\*healthreport* -x*\*dumps* -x*\*bak* -x*\*jetpack* -x*\*bookmarkbackups* -x*.bak -xpatterns-*.ini -xcompatibility.ini -xparent.lock
rar.exe a %compressPara% %backupFilter% %backupName% %backupFilePath%