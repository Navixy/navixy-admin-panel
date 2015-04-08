module.exports = function (grunt) {
    grunt.registerTask('tx_push', 'Push translations to Transifex service from resource folder', function () {
        var exec = require('child_process').exec,
            command = 'tx push -s -t',
            sys = require('sys'),
            done = this.async();

        console.log(command);

        exec(command, function (error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log(stdout, 'OK: pushing to transifex');
                done();
            }
        });

    });

    grunt.registerTask('i18n_push', 'Push locales from interface to resource(transifex) folder', function () {
        var fs = require('fs'),
            Promise = require('promise'),
            done = this.async(),
            localeMap = {
                'panel-ui': {
                    dir: './locale/',
                    matchRegExp: /locale-(.*)\.js/,
                    parser: function (data) {
                        var localeData = null,
                            Ext = {
                                define: function (className, uiLocaleData) {
                                    objectCleaner(uiLocaleData);

                                    localeData = uiLocaleData;
                                }
                            };
                        try {
                            eval(data);
                        } catch (e) {
                            console.log(e.stack);
                        }

                        return localeData ? JSON.stringify(localeData) : null;
                    }
                }
            }, targetFolder = './transifex/';

        updateResource(localeMap, targetFolder);

        function objectCleaner(object) {
            var needRevalidate = false;

            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    var value = object[key],
                        valueType = typeof value;

                    if (!value || JSON.stringify(value) === '{}' || valueType === 'boolean') {
                        delete object[key];
                        needRevalidate = true;
                    } else if (valueType !== 'string' && valueType !== 'number') {
                        objectCleaner(value);
                    }
                }
            }

            if (needRevalidate) {
                objectCleaner(object);
            }
        }

        function getLocaleJson(fileName, parser) {
            return new Promise(function (fulfill, reject) {
                try {
                    fs.readFile(fileName, 'utf8', function (err, data) {
                        if (err) {
                            return console.log(err);
                        }
                        fulfill(parser(data));
                    });
                } catch (e) {
                    reject(e);
                }
            });

        }

        function ensureExists(path, mask, cb) {
            if (typeof mask === 'function') { // allow the `mask` parameter to be optional
                cb = mask;
                mask = 0777;
            }
            fs.mkdir(path, mask, function (err) {
                if (err) {
                    if (err.code === 'EEXIST') {
                        cb(null);
                    }// ignore the error if the folder already exists
                    else {
                        cb(err);
                    } // something else went wrong
                } else {
                    cb(null);
                } // successfully created folder
            });
        }

        function getLocaleFiles(dir, matchRegExp) {
            var files = fs.readdirSync(dir),
                result = [];

            for (var i in files) {
                var name = dir + files[i];
                if (!fs.statSync(name).isDirectory() && name.match(matchRegExp)) {
                    result.push(name);
                }
            }

            return result;
        }

        function updateResource(localeMap, targetFolder) {
            var resourceLength = 0;

            for (var key in localeMap) {
                (function (resourceName) {
                    var localeCfg = localeMap[resourceName],
                        dirPath = localeCfg.dir,
                        matchRegExp = localeCfg.matchRegExp,
                        parser = localeCfg.parser;

                    var localeFiles = getLocaleFiles(dirPath, matchRegExp);

                    resourceLength += localeFiles.length;

                    localeFiles.forEach(function (path) {
                        var pathChuncks = path.split('/'),
                            localeCode = pathChuncks[pathChuncks.length - 1].replace(matchRegExp, '$1'),
                            resourceDirPath = targetFolder + localeCode;

                        getLocaleJson(path, parser).then(function (data) {
                            ensureExists(resourceDirPath, function () {
                                if (data) {
                                    fs.writeFile(resourceDirPath + '/' + resourceName + '.json', data, function () {
                                        console.log('OK:', resourceDirPath + '/' + resourceName + '.json');
                                        resourceLength--;
                                    });
                                } else {
                                    console.log('Empty localization!!', localeCode);
                                    resourceLength--;
                                }
                            });
                        });
                    });
                }(key));
            }

            var checkInterval = setInterval(function () {
                if (!resourceLength) {
                    clearInterval(checkInterval);
                    done();
                }
            }, 5);
        }

    });

    grunt.registerTask('lpush', 'Upload locale changes', function () {
        grunt.task.run(['tx_pull', 'i18n_pull', 'i18n_push', 'tx_push']);
    });

};




