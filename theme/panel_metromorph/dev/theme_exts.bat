REM Sencha Cmd in global path required

cd %~dp0
cd ..
sencha -sdk ../../../../ext generate workspace bootstrap
cd bootstrap
sencha -sdk ../../../ext generate app ThemeTempApp tempapp
rmdir /s /q "ext"
rmdir /s /q "tempapp"
cd ../dev/src/
copy sencha.cfg "../../bootstrap/.sencha/workspace/sencha.cfg" /Y