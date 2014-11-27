(function () {
    var stateProvider = Ext.supports.LocalStorage ?
                        new Ext.state.LocalStorageProvider() :
                        new Ext.state.CookieProvider();

    Ext.state.Manager.setProvider(stateProvider);
})(window);

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        'Dev': 'dev',
        'Ext.ux': 'ext/src/ux',
        'Config': 'PConfig.js',
        'Locale': 'locale',
        'Lib': 'libs'
    }
});

Ext.debug = 1;

Ext.require([
    'Dev.ConfigManager',
    'Locale.Manager'
], function () {
    Locale.Manager.init();
    Dev.ConfigManager.init();
});

Ext.application({
    name: 'NavixyPanel',
    appFolder: 'app',
    controllers: [
        'NavixyPanel.controller.Main',
        'NavixyPanel.controller.Desktop',
        'NavixyPanel.controller.Users',
        'NavixyPanel.controller.Trackers',
        'NavixyPanel.controller.Tariffs',
        'NavixyPanel.controller.Codes',
        'NavixyPanel.controller.Bundles',
        'NavixyPanel.controller.Settings',
        'NavixyPanel.controller.Accounting'
    ]
});