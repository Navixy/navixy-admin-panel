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

    uploadFile: function (form, config) {
        var url = this.getRequestUrl({
            action: config.action,
            handler: config.handler
        }), params = Ext.apply({
            hash: this.authKey,
            redirect_target: this.getUploadHandlerUrl()
        }, config.params || {});

        form.submit({
            url: url,
            waitMsg: config.waitMsg,
            scope: config.scope,
            params: params,

            success: config.success || Ext.emptyFn,
            failure: Ext.bind(function (form, action) {
                try {
                    var errorCode = action.result.status.code;
                    if (config.failure) {
                        config.failure.call(config.scope || this, form, action);
                    }
                    this.errorsManager.fireError(errorCode, params, action.response.responseText);
                } catch (e) {
                    this.errorsManager.fireError('upload_exeption');
                    console.log(e.stack);
                }
            }, this)
        });
    },

    getUploadHandlerUrl: function () {
        var location = window.location.href.split('/');
        location.pop();

        location.push(Ext.Loader.getPath('Dev') + '/uploadHandler.html');
        return location.join('/');
    },

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

    getUsersListDownloadLink: function (config) {
        var apiLink = this.getRequestUrl({
                action: 'export',
                handler: 'user'
            }),
            hash = this.authKey;

        return apiLink + '/?hash=' + hash +
            '&' + Ext.urlEncode(config.params);
    },

    getUser: function (userId, callback, failure, scope) {
        this.sendRequest({
            params: {
                user_id: userId
            },
            success: function (result, params, response) {
                //Hoook to extract discount
                callback.call(scope, Ext.apply(result.value, {
                    discount: result.discount.value,
                    discount_min_trackers: result.discount.min_trackers,
                    discount_end_date: result.discount.end_date,
                    discount_strategy: result.discount.strategy
                }), params, response)
            },
            failure: failure,
            action: 'read',
            handler: 'user',
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

    updateUserPassword: function (config) {
        this.requestWithOptions(config, {
            action: 'change_password',
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

    removeUser: function (config) {
        this.requestWithOptions(config, {
            action: 'corrupt',
            handler: 'user'
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

    setTrackerCorrupt: function (config) {
        this.requestWithOptions(config, {
            action: 'corrupt',
            handler: 'tracker'
        });
    },
    registerRetry: function (config) {
        this.requestWithOptions(config, {
            action: 'register_retry',
            handler: 'tracker'
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

    getSettingsNotification: function (callback, failure, scope) {
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

    uploadSettingsImage: function (form, config) {
        this.uploadFile(form, Ext.apply({
            action: 'upload',
            handler: 'dealer/settings/image'
        }, config));
    },

    removeSettingsPassword: function (config) {
        this.requestWithOptions(config, {
            action: 'delete',
            handler: 'dealer/settings/image',
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

    getAvangateDownloadLink: function (config) {
        var apiLink = this.getRequestUrl({
                handler: 'payments',
                action: 'avangate/export'
            }),
            hash = this.authKey;

        return apiLink + '/?hash=' + hash +
            '&' + Ext.urlEncode(config.params);

    },

    check1cDownloadLink: function (config) {
        this.requestWithOptions(config, {
            handler: 'accounting',
            action: 'export'
        });
    },

    doExportDelivery: function (config) {
        this.requestWithOptions(config, {
            action: 'send_acts',
            handler: 'accounting'
        });
    },

    get1cPaymentDownloadLink: function (config) {
        var apiLink = this.getRequestUrl({
                handler: 'payments',
                action: 'export'
            }),
            hash = this.authKey;

        return apiLink + '/?hash=' + hash +
            '&' + Ext.urlEncode(config.params);

    },

    doPaymentExport: function (config) {
        this.requestWithOptions(config, {
            action: 'export',
            handler: 'payments'
        });
    },

    importSberbank: function (form, config) {
        this.uploadFile(form, Ext.apply({
            action: 'sberbank',
            handler: 'payments/import'
        }, config));
    },

    getBundlesList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'tracker/bundle'
        });
    },

    getBundles: function (config) {
        this.requestWithOptions(config, {
            action: 'read',
            handler: 'tracker/bundle'
        });
    },

    assignBundle: function (config) {
        this.requestWithOptions(config, {
            action: 'assign',
            handler: 'tracker/bundle'
        });
    },

    assignBundleToOrder: function (config) {
        this.requestWithOptions(config, {
            action: 'assign',
            handler: 'tracker/bundle/order'
        });
    },

    getBundleOrder: function (config) {
        this.requestWithOptions(config, {
            action: 'read',
            handler: 'order'
        });
    },

    getEquipmentList: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'equipment'
        });
    },

    assignEquipToBundle: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'tracker/bundle'
        });
    },

    importBundles: function (config) {
        this.requestWithOptions(config, {
            action: 'import',
            handler: 'tracker/bundle'
        });
    },

    getEmailGates: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'gateways/email'
        });
    },

    createEmailGate: function (config) {
        this.requestWithOptions(config, {
            action: 'create',
            root: 'id',
            handler: 'gateways/email'
        });
    },

    updateEmailGate: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'gateways/email'
        });
    },

    assignEmailGate: function (config) {
        this.requestWithOptions(config, {
            action: 'bind',
            handler: 'gateways/email'
        });
    },

    removeEmailGate: function (config) {
        this.requestWithOptions(config, {
            action: 'delete',
            handler: 'gateways/email'
        });
    },
    sendTestEmail: function (config) {
        this.requestWithOptions(config, {
            action: 'send_email',
            handler: 'gateways/email'
        });
    },

    updateEmailNotificationSettings: function (config) {
        this.requestWithOptions(config, {
            action: 'update',
            handler: 'dealer/settings/notification/email'
        });
    },

    getActiveTrackersStat: function (config) {
        this.requestWithOptions(config, {
            action: 'list',
            handler: 'tracker/active/history'
        });
    }

});