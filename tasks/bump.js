'use strict';

module.exports = function (grunt) {

    grunt.registerTask('bump', 'Bump version', function () {
        var options = this.options(),
            isMajor = grunt.option('major') || false,
            hgRelaseTaskname = isMajor ? 'hg_release:major' : 'hg_release:minor';

        grunt.option('verbose', true);

        console.log('asd');

        grunt.initConfig({
            'file-creator': {
                options: {
                    openFlags: 'w'
                },
                "basic": {
                    "VERSION": function (fs, fd, done) {
                        var sys = require('sys'),
                            exec = require('child_process').exec;

                        exec('hg id -i', function (error, stdout, stderr) {
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                            var packageJSONFile = grunt.file.readJSON('package.json'),
                                version = packageJSONFile.version,
                                msg = [new Date().toISOString(), stdout.substr(0, stdout.length - 2),
                                       packageJSONFile.name, 'release',
                                       version].join(' ');

                            fs.writeSync(fd, msg);
                            done();
                        });

                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-hg-release');
        grunt.loadNpmTasks('grunt-file-creator');
        grunt.task.run([hgRelaseTaskname, 'file-creator:basic']);
    });

};
