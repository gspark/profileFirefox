if not exist "%APPDATA%\Mozilla" (md "%APPDATA%\Mozilla")
if not exist "%APPDATA%\Mozilla\Firefox" (md "%APPDATA%\Mozilla\Firefox")
@echo [General] > "%APPDATA%\Mozilla\Firefox\profiles.ini"
@echo StartWithLastProfile=1 >> "%APPDATA%\Mozilla\Firefox\profiles.ini"
@echo [Profile0] >> "%APPDATA%\Mozilla\Firefox\profiles.ini"
@echo Name=default >> "%APPDATA%\Mozilla\Firefox\profiles.ini"
@echo Default=1 >> "%APPDATA%\Mozilla\Firefox\profiles.ini"
@echo IsRelative=0 >> "%APPDATA%\Mozilla\Firefox\profiles.ini"
@echo Path=%cd%\profile>> "%APPDATA%\Mozilla\Firefox\profiles.ini"
uninstall\helper.exe /SetAsDefaultAppGlobal