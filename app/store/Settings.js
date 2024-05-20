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
            'requestMenuPresetsList'
        ]
    },

    loadRecord: function (recordId, callback, scope, loadAssociations, failure) {
        if (this.api.record) {
            var loadCallback = this.createLoadCallback(callback, scope, false);
            Ext.API.batch(this.api.record, {
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
            var menuPresetsStore = Ext.getStore('MenuPresets')
            var menu_preset_id

            if (menuPresetsStore) {
                menuPresetsStore.loadRawData(batchResult.requestMenuPresetsList)
                menu_preset_id = menuPresetsStore.getDefaultPreset().id || ''
            }

            fn.call(scope, me.model
                ? Ext.create(me.model, Ext.apply(batchResult.getSettingsService || {}, batchResult.getSettingsNotification, {
                    menu: batchResult.getDefaultMenu,
                    menu_preset_id: menu_preset_id
                }))
                : batchResult
            );
        };
    }
});
