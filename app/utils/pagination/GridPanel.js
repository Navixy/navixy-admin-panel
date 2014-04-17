/**
 * @class User.store.cTimeZones
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.utils.pagination.GridPanel', {
    extend: 'Ext.grid.Panel',
    requires: ['NavixyPanel.utils.pagination.CustomPaging'],
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