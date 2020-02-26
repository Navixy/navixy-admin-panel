/**
 * @class NavixyPanel.view.desktop.IndexExp
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.IndexExp', {
    extend: 'Ext.Container',
    alias: 'widget.indexexp',

    initComponent: function () {

        this.items = [
                {
                    xtype: 'exponential_grapth'
                },
                {
                    margin: '20 0 0 0',
                    xtype: 'searchform'
                }
            ];


        this.callParent(arguments);
    }
});
