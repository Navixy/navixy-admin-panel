REM Sencha Cmd in global path required

cd %~dp0
cd ../bootstrap/packages/metromorph/
sencha package build
REM pause
cd %~dp0
cd ../
sass --compass app.scss:../metromorph.css --style compressed