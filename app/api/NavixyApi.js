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
    }
});