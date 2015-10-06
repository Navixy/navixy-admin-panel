'use strict';

module.exports = function (grunt) {

    grunt.registerTask('buildbump', 'Bump version', function () {
        var done = this.async();

        grunt.util.spawn({ cmd: "npm", args: [ "version", "patch" ] }, function (err) {
            if (err) {
                grunt.fail.fatal(err);
            }
            done();
        });
    });

};
