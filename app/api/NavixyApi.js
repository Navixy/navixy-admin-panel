/**
 * @class NavixyPanel.api.NavixyApi
 * @alternateClassName  Ext.API
 * @extends NavixyPanel.api.ApiConnector
 * Description
 */

Ext.define('NavixyPanel.api.NavixyApi', {
    extend: 'NavixyPanel.api.ApiConnector',
    alternateClassName: 'Ext.API',
    singleton: true,

    authUser: function (callback, failure, params, scope) {
        this.sendRequest({
            params: Ext.apply({}, params),
            success: callback,
            failure: failure,
            action: 'auth',
            handler: 'account',
            scope: scope
        });
    },

    loadPermissions: function (callback, failure, scope) {
        this.sendRequest({
            success: callback,
            failure: failure,
            action: 'get_permissions',
            handler: 'account',
            root: 'permissions',
            scope: scope
        });
    },

    getDealerInfo: function (callback, failure, scope) {
        this.sendRequest({
            success: callback,
            failure: failure,
            action: 'get_info',
            handler: 'dealer',
            scope: scope
        });
    },

    getTimeZones: function (callback, failure, scope) {

        this.sendRequest({
            params: {locale: Locale.Manager.getLocale()},
            success: callback,
            failure: failure,
            action: 'list',
            root: 'list',
            handler: 'timezone',
            scope: scope
        });
    },


    getUsersList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'user'
        });
    },

    getUser: function (userId, callback, failure, scope) {
        this.sendRequest({
            params: {
                user_id: userId
            },
            success: callback,
            failure: failure,
            action: 'read',
            handler: 'user',
            root: 'value',
            scope: scope
        });
    },

    updateUser: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'user',
            root: 'success'
        });
    },

    addUserTransaction: function (config) {
        this.requestWithOptions(config, {
            action: 'change_balance',
            handler: 'user/transaction',
            root: 'success'
        });
    },

    createUser: function (config) {
        this.requestWithOptions(config, {
            action: 'create',
            handler: 'user',
            root: 'id'
        });
    },

    createUserSession: function (config) {
        this.requestWithOptions(config, {
            action: 'session/create',
            handler: 'user',
            root: 'hash'
        });
    },

    getUserTransactions: function (config) {
        this.requestWithOptions(config, {
            action: 'transaction/list',
            handler: 'user',
            root: 'list'
        });
    },


    getTrackersList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'tracker'
        });
    },

    getTracker: function (trackerId, callback, failure, scope) {
        this.sendRequest({
            params: {
                tracker_id: trackerId
            },
            success: callback,
            failure: failure,
            action: 'read',
            handler: 'tracker',
            root: 'value',
            scope: scope
        });
    },

    updateTrackerData: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'tracker/settings',
            root: 'success'
        });
    },

    updateTrackerSource: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'tracker/source',
            root: 'success'
        });
    },

    updateTrackerUser: function (config) {
        this.requestWithOptions(config, {
            action: 'move',
            handler: 'tracker',
            root: 'success'
        });
    },

    updateTrackerTariff: function (config) {
        this.requestWithOptions(config, {
            action: 'change',
            handler: 'tracker/tariff',
            root: 'success'
        });
    },

    createTrackerClone: function (config) {
        this.requestWithOptions(config, {
            action: 'clone',
            handler: 'tracker',
            root: 'id'
        });
    },

    removeTrackerClone: function (config) {
        this.requestWithOptions(config, {
            action: 'delete_clone',
            handler: 'tracker',
            root: 'success'
        });
    },

    getTrackerConnect: function (config) {
        this.requestWithOptions(config, {
            action: 'connect',
            handler: 'tracker/console'
        });
    },



    getTariffsList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'tariff'
        });
    },

    getTariff: function (tariffId, callback, failure, scope) {
        this.sendRequest({
            params: {
                tariff_id: tariffId
            },
            success: callback,
            failure: failure,
            action: 'read',
            handler: 'tariff',
            root: 'value',
            scope: scope
        });
    },

    getTariffsDefaults: function (config) {
        this.requestWithOptions(config, {
            action: 'defaults/read',
            handler: 'tariff'
        });
    },

    updateTariffData: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'tariff',
            root: 'success'
        });
    },

    updateTariffDefaults: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'tariff/defaults',
            root: 'success'
        });
    },

    createTariff: function (config) {
        this.requestWithOptions(config, {
            action: 'create',
            handler: 'tariff',
            root: 'id'
        });
    },



    getCodesList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'dealer/activation_code'
        });
    },

    updateCodes: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'dealer/activation_code',
            root: 'count'
        });
    },

    createCodes: function (config) {
        this.requestWithOptions(config, {
            action: 'create',
            handler: 'dealer/activation_code',
            root: 'count'
        });
    },


    getSettingsService: function (callback, failure, scope) {
        this.sendRequest({
            success: callback,
            failure: failure,
            action: 'read',
            handler: 'dealer/settings/service',
            root: 'value',
            scope: scope
        });
    },

    getSettingsNotification : function (callback, failure, scope) {
        this.sendRequest({
            success: callback,
            failure: failure,
            action: 'read',
            handler: 'dealer/settings/notification',
            root: 'value',
            scope: scope
        });
    },

    updateSettingsSerivce: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'dealer/settings/service',
            root: 'success'
        });
    },

    updateSettingsNotification: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'dealer/settings/notification',
            root: 'success'
        });
    },

    updateSettingsPassword: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'dealer/password',
            root: 'success'
        });
    },

    get1cDownloadLink: function (config) {
        var apiLink = this.getRequestUrl({
                handler: 'accounting',
                action: 'export'
            }),
            hash = this.authKey;

        return apiLink + '/?hash=' + hash +
            '&' + Ext.urlEncode(config.params);

    },

    doExportDelivery: function (date) {
        if (Ext.isDate(date) && Config.optUrl && Config.hasOptDelivery) {

            Ext.Ajax.request({
                url: Config.optUrl + 'orders/send_acts',

                timeout: this.timeout,
                params: {
                    wallet: 'st',
                    todate: Ext.Date.format(date, 'Y-m')
                },
                success: Ext.emptyFn,
                failure: Ext.emptyFn
            });

        }
    }
});