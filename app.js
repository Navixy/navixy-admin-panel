Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        'Ext.ux': 'ext/src/ux',
        'Config': 'PConfig.js'
    }
});

Ext.debug = 1;

Ext.require([
    'Config'
]);

Ext.application({
    name: 'NavixyPanel',
    appFolder: 'app',
    controllers: [
        'NavixyPanel.controller.Main',
        'NavixyPanel.controller.Desktop',
        'NavixyPanel.controller.User'
    ],
//    autoCreateViewport: true
});