/*
 * grunt-lib-phantomjs
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

/*global phantom:true*/

'use strict';

var fs = require('fs');

// The temporary file used for communications.
var tmpfile = phantom.args[0];
// The page .html file to load.
var url = phantom.args[1];
// Extra, optionally overridable stuff.
var options = JSON.parse(phantom.args[2] || {});

// Default options.
if (!options.timeout) {
    options.timeout = 5000;
}

// Keep track of the last time a client message was sent.
var last = new Date();

// Messages are sent to the parent by appending them to the tempfile.
var sendMessage = function (arg) {
    var args = Array.isArray(arg) ? arg : [].slice.call(arguments);
    last = new Date();
    fs.write(tmpfile, JSON.stringify(args) + '\n', 'a');
};

// This allows grunt to abort if the PhantomJS version isn't adequate.
sendMessage('private', 'version', phantom.version);

// Abort if the page doesn't send any messages for a while.
setInterval(function () {
    if (new Date() - last > options.timeout) {
        sendMessage('fail.timeout');
        phantom.exit();
    }
}, 100);

// Create a new page.
var page = require('webpage').create();

// Inject bridge script into client page.
var injected;
var inject = function () {
    if (injected) {
        return;
    }
    // Inject client-side helper script.
    var scripts = Array.isArray(options.inject) ? options.inject : [options.inject];
    sendMessage('inject', options.inject);
    scripts.forEach(page.injectJs);
    injected = true;
};

// Keep track if the client-side helper script already has been injected.
page.onUrlChanged = function (newUrl) {
    injected = false;
    sendMessage('onUrlChanged', newUrl);
};

// The client page must send its messages via alert(jsonstring).
page.onAlert = function (str, data) {
    // The only thing that should ever alert "inject" is the custom event
    // handler this script adds to be executed on DOMContentLoaded.
    if (str === 'inject') {
        inject();
        return;
    }

    if (str === 'done') {
        sendMessage('done', data);
        phantom.exit();
        return;
    }
    // Otherwise, parse the specified message string and send it back to grunt.
    // Unless there's a parse error. Then, complain.
    try {
        sendMessage(JSON.parse(str));
    } catch (err) {
        sendMessage('error.invalidJSON', str);
    }
};

page.onError = function (msg, trace) {
    phantom.exit(0);
    sendMessage('error.onError', msg, trace);
};

// Run before the page is loaded.
page.onInitialized = function () {
    sendMessage('onInitialized');
    // Abort if there is no bridge to inject.
    if (!options.inject) {
        return;
    }
    // Tell the client that when DOMContentLoaded fires, it needs to tell this
    // script to inject the bridge. This should ensure that the bridge gets
    // injected before any other DOMContentLoaded or window.load event handler.
    page.evaluate(function () {
        document.addEventListener('DOMContentLoaded', function () {
            alert('inject');
        }, false);

    });
};

// Run when the page has finished loading.
page.onLoadFinished = function (status) {
    // The window has loaded.
    sendMessage('onLoadFinished', status);
    if (status !== 'success') {
        // File loading failure.
        sendMessage('fail.load', url);
        phantom.exit();
    }
};

page.onCallback = function (dependenies) {
    sendMessage('build-ready', dependenies);
};
var excludeClasses = options.excludeClasses || [];
//Actually load url.
page.open(url, function (status) {
    if (status !== 'success') {
        alert('error.onError', "Failed openning: '" + appLocation + "', please verify that the URI is valid");
    }

    page.addCookie({name: 'debug', value: 1});

    page.evaluate(function (excludeClasses) {

        localStorage.clear();
        var exclusionArray = excludeClasses.split(',');

        window.onerror = function (e) {
            console.log('!!!!ERROR!!!!' + e);
        };

        function sendMessage() {
            var args = [].slice.call(arguments);
            alert(JSON.stringify(args));
        }

        Ext.onReady(function () {
            Ext.each(Ext.ComponentQuery.query('component[stateful]'), function (cmp) {
                cmp.stateful = false;
            });
            var documentLocation = document.location,
                currentLocation = documentLocation.origin + documentLocation.pathname + documentLocation.search,
                dependencies = [],
                path;

            function getRelativePath(from, to) {
                var fromParts = from.split('/'),
                    toParts = to.split('/'),
                    index = null,
                    i, ln;

                for (i = 0, ln = toParts.length ; i < ln ; i++) {
                    if (toParts[i] !== fromParts[i]) {
                        index = i;
                        break;
                    }
                }

                if (index === null || index === 0) {
                    return from;
                }

                fromParts = fromParts.slice(index);

                for (i = 0 ; i < ln - index - 1 ; i++) {
                    fromParts.unshift('..');
                }

                for (i = 0, ln = fromParts.length ; i < ln ; i++) {
                    if (fromParts[i] !== '..' && fromParts[i + 1] === '..') {
                        fromParts.splice(i, 2);
                        i -= 2;
                        ln -= 2;
                    }
                }

                return fromParts.join('/');
            }

            Ext.Loader.history.forEach(function (item) {

                var path = getRelativePath(Ext.Loader.getPath(item), currentLocation);

                dependencies.push(path);
            });
            window.callPhantom(dependencies);
        });

    }, excludeClasses.join(','));

});
