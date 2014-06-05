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

//    getUsersList: function (callback, failure, scope) {
//        this.sendRequest({
//            success: callback,
//            failure: failure,
//            action: 'list',
//            handler: 'user',
//            root: 'list',
//            scope: scope
//        });
//    },

    getUsersList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'user',
            root: 'list'
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

    getTrackersList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'tracker',
            root: 'list'
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

    getTariffsDefaults: function (callback, failure, scope) {
        this.sendRequest({
            success: callback,
            failure: failure,
            action: 'defaults/read',
            handler: 'tariff',
            scope: scope
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
            handler: 'dealer/activation_code',
            root: 'list'
        });
    },

    updateCodes: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'dealer/activation_code',
            root: 'count'
        });
    },

    getSettingsService: function (config) {
        this.requestWithOptions(config, {
            action: 'read',
            handler: 'dealer/settings/service',
            root: 'value'
        });
    },

    getSettingsNotification : function (config) {
        this.requestWithOptions(config, {
            action: 'read',
            handler: 'dealer/settings/notification',
            root: 'value'
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
    }
});