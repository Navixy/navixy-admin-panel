module.exports = function (grunt) {
    // Project configuration.

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            'build': {
                options: {
                    targetPath: 'build',
                    appDest: 'panel',
                    excludeClasses: [
                        'Config',
                        'Locale.locale-en',
                        'Locale.locale-ru',
                        'Locale.ext.locale-en',
                        'Locale.ext.locale-ru'
                    ],
                    copyFiles: [
                        {
                            from: 'productionFiles/index.html',
                            to: 'index.html'
                        },
                        'PConfig.js',
                        'locale/locale-en.js',
                        'locale/locale-ru.js',
                        'locale/ext/*',
                        'libs/jquery/*',
                        'libs/inputmask/*',
                        'libs/momentjs/*',
                        //Theme files
                        'favicon.ico',
                        'theme/panel_metromorph/images/**',
                        'theme/panel_metromorph/thumbs/*',
                        'theme/panel_metromorph/icons/fonts/*',
                        'theme/panel_metromorph.css',
                        //Ext  files
                        'ext/ext-all.js'
                    ],

                    productionFiles: ['dev/preprocessors.js', 'app.js']
                }
            },

            'deploy': {
                options: {
                    files: {
                        src: ["build/panel/**"]
                    },
                    exclusions: [
                        "build/panel/theme/panel_metromorph/images/**"
                    ],

                    srcBasePath: "build/panel"
                }
            }
        }
    );

    grunt.loadTasks('tasks');
};