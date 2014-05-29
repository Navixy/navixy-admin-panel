/**
 * @class NavixyPanel.store.Settings
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Settings', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.Settings',
    storeId: 'Settings',
    apiCall: 'getSettingsService,getSettingsNotification',

    requireAPISuccess: function (results, callName, done, callback, scope) {
        var settingsRecord = this.first();

        if (settingsRecord) {
            settingsRecord.set(results);
        } else {
            this.loadData([results]);
        }

        if (this.loaded = done) {
            this.fireEvent('apisuccess', this);
            if (Ext.isFunction(callback)) {
                callback.call(scope);
            }
        }
    }
});