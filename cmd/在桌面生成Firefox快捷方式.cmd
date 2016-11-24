mkdir profile
echo Set Shell=CreateObject("WScript.Shell")>createshortcut.vbs
echo DesktopPath=Shell.SpecialFolders("Desktop")>>createshortcut.vbs
echo Set link=Shell.CreateShortcut(DesktopPath ^& "\\Mozilla Firefox.lnk")>>createshortcut.vbs
echo link.description="Mozilla Firefox">>createshortcut.vbs
echo cmdPath=left(Wscript.ScriptFullName,len(Wscript.ScriptFullName)-len(Wscript.ScriptName))>>createshortcut.vbs
echo link.TargetPath=cmdPath ^& "Firefox.exe">>createshortcut.vbs
echo link.Arguments="-profile profile">>createshortcut.vbs
echo link.IconLocation=cmdPath ^& "Firefox.exe">>createshortcut.vbs
echo link.HotKey="CTRL+ALT+SHIFT+X">>createshortcut.vbs
echo link.WindowStyle=1 >>createshortcut.vbs
echo link.WorkingDirectory=cmdPath>>createshortcut.vbs
echo link.Save>>createshortcut.vbs
createshortcut.vbs
del createshortcut.vbs