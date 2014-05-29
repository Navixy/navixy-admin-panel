Ext.define('Dev.ConfigManager', {
    alternateClassName: 'ConfigManager',

    singleton: true,

    _loaded: false,
    _config: null,

    init: function () {

        this._loaded = true;
        this._getData();
    },

    getConfig: function () {
        return this._config;
    },

    getPlatformConstant: function (constantName) {
        var config = this.getConfig();

        if (config.platform_constants) {
            return config.platform_constants[constantName];
        }

        return null;
    },

    _getData: function (lang) {
        var me = this,

            cls = 'Config',
            loadCallback = function () {
                me._loaded = true;
                me._config = Config;
                Ext.Array.remove(Ext.Loader.history, cls);
            };

        try {
            Ext.require(cls, loadCallback);
        } catch (e) {
            Ext.log('cant load main config');
        }
    }
});

