Ext.Class.registerPreprocessor('dependencychecker', function (cls, data, hooks, fn) {
    var me = this;

    if (data.dependencies) {
        var needToLoad = [];

        Ext.each(data.dependencies, function (dependency) {
            if (!Ext.Loader.isClassFileLoaded[dependency]) {
                needToLoad.push(dependency);
            }
        });
        if (needToLoad.length) {
            Ext.each(needToLoad, function (dependency) {
                var includeInHistory = true,
                    className = dependency;

                if (Ext.isObject(dependency)) {
                    className = dependency.name;

                    if (dependency.history !== undefined) {
                        includeInHistory = dependency.history;
                    }
                }

                var url = Ext.Loader.getPath(className),
                    resultCallback = function () {
                        Ext.Loader.isClassFileLoaded[className] = true;
                        if (includeInHistory) {
                            Ext.Loader.history.push(className);
                        }
                    };

                Ext.Loader.loadScriptFile(url, resultCallback, resultCallback, this, true);
            });

            var interval = setInterval(function () {
                var needTooContinue = true;

                Ext.each(needToLoad, function (dependency) {
                    var className = dependency;

                    if (Ext.isObject(dependency)) {
                        className = dependency.name;
                    }
                    if (!Ext.Loader.isClassFileLoaded[className]) {
                        needTooContinue = false;
                        return false;
                    }
                });

                if (needTooContinue) {
                    clearInterval(interval);
                    if (!data.singleton) {
                        fn.call(me, cls, data, hooks);
                    }
                }
            });

        } else {
            if (!data.singleton) {
                fn.call(me, cls, data, hooks);
            }
        }
    }

}, true, 'after', 'loader');
Ext.Class.getDefaultPreprocessors();

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        'Ext.ux': 'ext/src/ux',
        'Config': 'PConfig.js',
        'Locale': 'locale',
        'Lib': 'libs'
    }
});

Ext.debug = 1;

Ext.require([
    'Config',
    'Locale.Manager'
], function () {
    Locale.Manager.init();
});

Ext.application({
    name: 'NavixyPanel',
    appFolder: 'app',
    controllers: [
        'NavixyPanel.controller.Main',
        'NavixyPanel.controller.Desktop',
        'NavixyPanel.controller.Users',
        'NavixyPanel.controller.Trackers'
    ]
});