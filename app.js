Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        'Ext.ux': 'ext/src/ux',
        'Config': 'PConfig.js',
        'Locale': 'locale'
    }
});

Ext.debug = 1;

Ext.require([
    'Config',
    'Locale.Manager',
], function () {
    Locale.Manager.init();
});

Ext.application({
    name: 'NavixyPanel',
    appFolder: 'app',
    controllers: [
        'NavixyPanel.controller.Main',
        'NavixyPanel.controller.Desktop',
        'NavixyPanel.controller.Users'
    ]
//    ,autoCreateViewport: true
});