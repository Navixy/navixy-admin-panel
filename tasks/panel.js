'use strict';

module.exports = function (grunt) {
    grunt.registerTask('build', 'Build Navixy Panel interface', function () {

            var options = this.options({targetPath: 'build'}),
                buildDestination = options.targetPath,

                appName = options.appName || 'Panel',
                appRoot = options.appRoot || '', //
                appDest = options.appDest,
                appTemp = options.appTemp || '_temp',
                appPath = options.appPath || '',
                notRoot = appPath.length ? true : false,
                excludeClasses = options.excludeClasses || true,
                destinationFileName = options.targetFileName || 'app.js',

                productionFiles = options.productionFiles || false,
                copyFiles = options.copyFiles || false,

                noSencha = options.noSencha || false,
                senchaUrl = grunt.option('url') || '', //


                senchaBuildConfig = {},
                concatBuildConfig = {},
                uglifyBuildConfig = {},
                copyBuildConfig = {},
                mainTaskSequence = [];

            function getAppPath(filePath)  {
                return notRoot
                    ? [appPath, filePath].join('/')
                    : filePath;
            }


            senchaBuildConfig[appName] = {
                options: {
                    projectRoot: appRoot,
                    url: senchaUrl,
                    excludeClasses: excludeClasses
                }
            };

            var buildDesinationFilePath = [buildDestination, appTemp, destinationFileName].join('/'),
                concatSrc = ['<%= dependencies_files %>'];

            if (productionFiles && productionFiles.length) {
                productionFiles.forEach(function (prodPath) {
                    concatSrc.push(getAppPath(prodPath));
                });
            }

            concatBuildConfig[appName] = {
                src: concatSrc,
                dest: buildDesinationFilePath
            };

            uglifyBuildConfig[appName] = {
                src: buildDesinationFilePath,
                dest: buildDesinationFilePath
            };

            if (copyFiles && copyFiles.length) {
                var files = [];
                copyFiles.forEach(function (value, index) {
                    if (typeof value === 'string') {
                        files.push({
                            src: getAppPath(value),
                            dest: [buildDestination, appTemp].join('/') + '/'
                        });
                    } else {
                        files.push({
                            src: getAppPath(value.from),
                            dest: [buildDestination, appTemp, value.to].join('/')
                        });
                    }
                });
                copyBuildConfig[appName] = {
                    files: files
                };
            }

            var taskSequence = ['copy:' + appName];

            if (!noSencha) {
                taskSequence.push('sencha-build:' + appName,
                    'concat:' + appName,
                    'uglify:' + appName
                );
            }

            mainTaskSequence = mainTaskSequence.concat(taskSequence);

            var appBuildConfig = {pkg: grunt.file.readJSON('package.json'),
                'sencha-build': senchaBuildConfig,
                'concat': concatBuildConfig,
                'uglify': uglifyBuildConfig,
                'copy': copyBuildConfig
            };

            if (appDest) {
                appBuildConfig.rename = {
                    files: {
                        src: [buildDestination + '/' + appTemp],
                        dest: [buildDestination + '/' + appDest]
                    }
                };

                appBuildConfig.clean = [buildDestination + '/' + appDest];

                grunt.loadNpmTasks('grunt-contrib-clean');
                mainTaskSequence.push('clean');

                grunt.loadNpmTasks('grunt-contrib-rename');
                mainTaskSequence.push('rename');
            }

            grunt.initConfig(appBuildConfig);
            grunt.loadNpmTasks('grunt-contrib-concat');
            grunt.loadNpmTasks('grunt-contrib-uglify');
            grunt.loadNpmTasks('grunt-contrib-copy');

            grunt.task.run(mainTaskSequence);
      }
    );
};