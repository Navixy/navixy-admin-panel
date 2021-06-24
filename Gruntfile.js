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
                    copyFiles: [
                        {
                            from: 'productionFiles/index.html',
                            to: 'index.html'
                        },
                        'VERSION',
                        'PConfig.example.js',
                        'PConfig.example.sa.js',
                        'locale/**',
                        'images/**',
                        'redirector/**',
                        'payment_gate/**',
                        'dev/uploadHandler.html',
                        'dev/stickerPrint.html',
                        'dev/iccid.png',
                        'app/view/settings/stripe/form.html',
                        'app/resources/*',
                        'libs/jquery/*',
                        'libs/jquery/*',
                        'libs/inputmask/*',
                        'libs/momentjs/*',
                        'libs/leaflet/*',
                        'libs/pdf/*',
                        'libs/flot/*',
                        'stickers/*',
                        //Theme files
                        'favicon.ico',
                        'navixy.ico',
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
            'sass': {
                theme_build: {
                    options: {
                        style: 'compressed',
                        sourcemap: 'none',
                        update: true,
                        compass: true
                    },
                    files: [{
                        src: './theme/panel_metromorph/app.scss',
                        dest: './theme/panel_metromorph.css'
                    }]
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
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bless');

    grunt.loadTasks('tasks');
};
