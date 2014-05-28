'use strict';

module.exports = function (grunt) {

    grunt.registerTask('deploy', 'Deploy to server', function () {
        var options = this.options(),
            profiles = grunt.file.readJSON('deploy_profiles.json'),
            profileName = grunt.option('p'),
            useExclusion = grunt.option('e') || false,
            makeFolders = grunt.option('mkdir') || false;

        grunt.option('verbose', true);

        if (profileName && profiles[profileName]) {
            var prompt = require('prompt');

            var done = this.async();

            prompt.start();

            prompt.get({
                properties: {
                    username: {
                        required: true
                    },
                    password: {
                        hidden: true
                    }
                }
            }, function (err, authResult) {

                var profile = profiles[profileName],
                    exclusions = useExclusion ? options.exclusions : [];

                grunt.initConfig({
                    sftp: {
                        deploy: {
                            files: options.files,
                            options: {
                                host: profile.host,
                                path: profile.remotePath,
                                username: authResult.username,
                                password: authResult.password,
                                createDirectories: makeFolders,
                                srcBasePath: options.srcBasePath,
                                exclusions: exclusions,
                                directoryPermissions: parseInt(775, 8)
                            }
                        }
                    }
                });

                grunt.loadNpmTasks('grunt-ssh');

                grunt.task.run(['sftp:deploy']);

                done();
            });
        } else {
            grunt.fail.fatal('Sftp profile not found (check profiles.json)');
            done();
        }
    });

};
