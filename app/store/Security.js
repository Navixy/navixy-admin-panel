/**
 * @class NavixyPanel.store.Security
 * @extends NavixyPanel.store.Abstract
 * Description
 */
Ext.define('NavixyPanel.store.Security', {
    extend: 'NavixyPanel.store.Abstract',
    id: 'Security',
    fields: [
        {
            name: 'type',
            type: 'string',
        },
        {
            name: 'factor_types',
            defaultValue: [],
        },
    ],

    autoLoad: false,
    remoteFilter: false,
    remoteSort: false,
    batch: false,

    api: {
        read: 'getDefaultMfaSettings',
    },

    proxy: {
        type: 'navixy',
    },

    getProxyEncoder: function () {
        return function (data) {
            return [data];
        };
    },

    isAllowedByDefault: function () {
        return this.getAt(0).getData().type === 'allowed';
    },

    getMfaType: function (isActive) {
        return isActive ? 'allowed' : 'disallowed';
    },

    getMfaSettings: function (isActive) {
        var target = this.getMfaType(isActive);

        return isActive ? {
            type: target,
            factor_types: ['email'],
        } : {
            type: target,
            factor_types: [],
        };
    },
});
