/**
 * @class NavixyPanel.store.Settings
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Settings', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Settings',
    storeId: 'Settings',
//    apiCall: 'getSettingsService,getSettingsNotification',
    api: {
        record: [
            'getDefaultMenu',
            'getSettingsService',
            'getSettingsNotification',
            'requestDefaultMfaSettings',
        ]
    },

    loadRecord: function (recordId, callback, scope, loadAssociations, failure) {
        var apiRecord = this.api.record;

        if (Ext.getStore('Dealer').isMenuPresetsAvailable()) {
            apiRecord.push('requestMenuPresetsList');
        }

        if (apiRecord) {
            var loadCallback = this.createLoadCallback(callback, scope, false);
            Ext.API.batch(apiRecord, {
                callback: loadCallback,
                failure: loadCallback
            });
        } else {
            callback.call(scope);
        }
    },

    createLoadCallback: function (fn, scope) {
        var me = this;
        return function (batchResult) {
            var requestDefaultMfaSettings = batchResult.requestDefaultMfaSettings || {}
            var menu_preset_id = '';

            if (batchResult.requestMenuPresetsList) {
                var menuPresetsStore = Ext.getStore('MenuPresets');

                if (menuPresetsStore) {
                    menuPresetsStore.loadRawData(batchResult.requestMenuPresetsList);
                    menu_preset_id = menuPresetsStore.getDefaultPreset().id || '';
                }
            }

            fn.call(scope, me.model
                ? Ext.create(me.model, Ext.apply(batchResult.getSettingsService || {}, batchResult.getSettingsNotification, {
                    menu: batchResult.getDefaultMenu,
                    menu_preset_id: menu_preset_id,
                    mfa_type: requestDefaultMfaSettings.type,
                    mfa_factor_types: requestDefaultMfaSettings.factor_types,
                }))
                : batchResult
            );

            Ext.getStore('Security').loadRawData([{
                type: requestDefaultMfaSettings.type || '',
                factor_types: requestDefaultMfaSettings.factor_types || [],
            }]);
        };
    }
});
