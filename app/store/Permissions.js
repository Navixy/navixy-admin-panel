/**
 * @class NavixyPanel.store.SectionPermissions
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Permissions', {
    extend: 'Ext.data.Store',
    model: 'NavixyPanel.model.Permissions',
    storeId: 'Permissions',

    aliasesMap: {
        'codes' : 'activation_code',
        'bundles' : 'tracker_bundles',
        'settings' : 'service_settings,notification_settings',
        //Debug
        'payments' : 'accounting'
    },

    getAlias: function (sectionId) {
        return this.aliasesMap[sectionId] || false;
    }
});