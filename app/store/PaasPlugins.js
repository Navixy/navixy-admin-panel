/**
 * @class NavixyPanel.store.PaasPlugins
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.PaasPlugins', {
    extend: 'NavixyPanel.store.Abstract',
    model: 'NavixyPanel.model.PaasPlugin',
    storeId: 'PaasPlugins',
    autoLoad: true,
    api: {
        read: 'getPaasPlugins'
    },

    checkPlugin: function (pluginId) {
        return this.find('id', pluginId) > 0
    }
});