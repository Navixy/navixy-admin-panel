/**
 * @class NavixyPanel.store.Security
 * @extends NavixyPanel.store.Abstract
 * Description
 */
Ext.define('NavixyPanel.store.Security', {
    extend: 'Ext.data.Store',
    id: 'Security',
    model: 'NavixyPanel.model.Security',

    autoLoad: false,
    remoteFilter: false,
    remoteSort: false,
    batch: false,

    loadDefaultSettings: function () {
        if (!Ext.API.authKey) {
            return;
        }

        Ext.API.getDefaultMfaSettings({
            scope: this,
            callback: function (response) {
                if (response.value) {
                    this.loadRawData([{
                        type: response.value.type,
                        factor_types: response.value.factor_types,
                    }]);
                }
            },
            failure: function (error) {
                console.error(error)
            },
        });
    },

    isAllowedByDefault: function () {
        var record = this.getAt(0);

        return record && record.getData().type === 'allowed';
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
