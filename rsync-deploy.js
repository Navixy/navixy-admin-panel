var config = require('./deploy_profiles.json'),
    sys = require('sys'),
    exec = require('child_process').exec,
    profile = process.argv[2],
    username = process.argv[3],
    port = process.argv[4] || 22

if (profile) {
    var profileObject = config[profile]

    if (profileObject) {
        var command = "rsync -rvzc --exclude='PConfig.js' --include='/PConfig.example.js' ./build/panel/ " + username + '@' + profileObject.host + ':' + profileObject.remotePath + (profileObject.p ? ' -e "ssh -p ' + profileObject.p + '" ' : '');
        console.log(command);

        exec(command, function (error, stdout, stderr) {
            sys.print('stdout: ' + stdout)
            sys.print('stderr: ' + stderr)
            if (error !== null) {
                console.log('exec error: ' + error)
            }
        })
    } else {
        throw 'Profile not found'
    }
} else {
    throw 'Profile must be specified'
}

