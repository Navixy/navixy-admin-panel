module.exports = function (grunt) {
    grunt.registerTask('tx_pull', 'Pull translations from Transifex service to resource folder', function () {
        var exec = require('child_process').exec,
            command = 'tx pull -a',
            sys = require('sys'),
            done = this.async();

        console.log(command);

        exec(command, function (error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log(stdout, 'OK: pulling form transifex');
                done();
            }
        });

    });

    grunt.registerTask('i18n_pull', 'Pull locales from resource(transifex) folder to interface', function () {
        var fs = require('fs'),
            template = require("string-template"),
            merge = require('merge'),
            Promise = require('promise'),
            done = this.async();

        var targetFolder = './transifex/',
            availableLocales = getResourceFilesAvailableLocales(targetFolder),
            convertersMap = {
                'panel-ui': {
                    path: './locale/',
                    fileNameTpl: 'locale-{locale}.js',
                    localeMap: {
                        en_US: 'en'
                    },
                    skipLocale: ['en'],
                    converter: function (locale, json, originalLocaleClass) {
                        var localeData = null,
                            Ext = {
                                define: function (className, uiLocaleData) {
                                    localeData = uiLocaleData;
                                }
                            };

                        try {
                            eval(originalLocaleClass);
                        } catch (e) {
                            console.log(e);
                        }

                        var data = JSON.parse(json),
                            classText = template([
                                "/**",
                                "* @class Locale.locale-{locale}",
                                "* @extends Locale.AbstractLocale",
                                "*/",
                                "Ext.define('Locale.locale-{locale}',{body});"
                            ].join('\n'), {
                                locale: locale,
                                body: JSON.stringify(merge.recursive(localeData, data, {
                                    extend: 'Locale.AbstractLocale',
                                    dependencies: [
                                        {
                                            name: 'Locale.ext.locale-' + locale,
                                            history: false
                                        }
                                    ],
                                    singleton: true
                                }), null, 4)
                            });

                        return classText;

                    }
                }

            },
            checkCount = 0;

        function getResourceFilesAvailableLocales(dir) {
            var files = fs.readdirSync(dir),
                result = [];

            for (var i in files) {
                var name = dir + files[i];
                if (fs.statSync(name).isDirectory()) {
                    result.push(files[i]);
                }
            }

            return result;
        }

        function getLocaleJson(fileName) {
            return new Promise(function (fulfill, reject) {
                try {
                    fs.readFile(fileName, 'utf8', function (err, data) {
                        if (err) {
                            console.log('file-read-error', err);
                        }
                        fulfill(err ? null : data);
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

        function updateLocale(locale, folder, map) {
            for (var resourceName in map) {
                checkCount++;

                var resourceData = map[resourceName];

                if (resourceData.skipLocale && resourceData.skipLocale.indexOf(locale) < 0) {
                    (function (resourceData, fileName) {
                        var converter = resourceData.converter,
                            resourceLocale = resourceData.localeMap ? resourceData.localeMap[locale] || locale : locale,
                            classFileName = template(resourceData.fileNameTpl, {
                                locale: resourceLocale
                            }),
                            destPath = resourceData.path + classFileName,
                            jsonCache;

                        getLocaleJson(fileName)
                            .then(function (data) {
                                jsonCache = data;
                                if (!data) {
                                    console.log('Resource file error:', fileName);
                                }
                            })
                            .then(getLocaleJson(destPath)
                                .then(function (originalJson) {
                                    try {
                                        if (!originalJson) {
                                            console.log('Original file error:', locale, destPath);
                                        }
                                        return converter(resourceLocale, jsonCache || '{}', originalJson || '{}');
                                    } catch (e) {
                                        console.log(e.stack);
                                    }

                                })
                                .then(function (classText) {
                                    if (classText) {
                                        ensureExists(resourceData.path, function () {
                                            fs.writeFile(destPath, classText, 'utf8', function (err) {
                                                if (err) {
                                                    console.log('Write error:', destPath);
                                                }
                                                console.log('OK:', destPath);
                                                checkCount--;
                                            });
                                        });
                                    } else {
                                        console.log('error:', locale);
                                        checkCount--;
                                    }
                                }));
                    })(resourceData, [folder + locale, resourceName + '.json'].join('/'));
                }

            }

        }

        for (var i = 0, len = availableLocales.length ; i < len ; i++) {
            updateLocale(availableLocales[i], targetFolder, convertersMap);
        }

        var timeoutInterval,
            checkInterval = setInterval(function () {
                if (!checkCount) {
                    clearTimeout(timeoutInterval);
                    clearInterval(checkInterval);
                    done();
                }
            }, 2000);

        timeoutInterval = setTimeout(function () {
            console.log('Timedout', checkCount);
            clearInterval(checkInterval);
            done();
        }, 10000);
    });

    grunt.registerTask('lpull', 'Pull translations from Transifex service to resource folder', function () {
        grunt.task.run(['tx_pull', 'i18n_pull']);
    });

};



