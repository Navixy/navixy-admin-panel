/**
 * @class User.store.cTimeZones
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.plugins.pagination.GridPanel', {
    extend: 'Ext.grid.Panel',
    requires: ['NavixyPanel.plugins.pagination.CustomPaging'],
    store: null,

    initComponent: function () {

        this.bbar = {
            items: [
                {
                    xtype: 'custompaging',
                    store: this.store
                }
            ]
        };

        this.callParent(arguments);
    }
});