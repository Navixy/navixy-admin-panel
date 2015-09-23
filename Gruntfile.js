module.exports = function (grunt) {
    // Project configuration.

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            'build': {
                options: {
                    targetPath: 'build',
                    appDest: 'panel',
                    excludeClasses: [
                        'Config'
                    ],
                    godBlessIE: [
                        {
                            name: 'ie-theme',
                            root: 'theme',
                            src: 'panel_metromorph.css',
                            dest: 'panel_metromorph_ie.css'
                        }
                    ],
                    copyFiles: [
                        {
                            from: 'productionFiles/index.html',
                            to: 'index.html'
                        },
                        'VERSION',
                        'PConfig.js',
                        'PConfig.example.js',
                        'locale/**',
                        'redirector/**',
                        'payment_gate/**',
                        'dev/uploadHandler.html',
                        'dev/stickerPrint.html',
                        'dev/iccid.png',
                        'libs/jquery/*',
                        'libs/inputmask/*',
                        'libs/momentjs/*',
                        'libs/pdf/*',
                        'stickers/*',
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
            },

            'bless': {
                css: {
                    dest: 'theme/panel_metromorph_ie.css',
                    src: 'theme/panel_metromorph.css'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-bless');

    grunt.loadTasks('tasks');
};