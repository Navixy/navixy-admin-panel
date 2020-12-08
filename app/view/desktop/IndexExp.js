/**
 * @class NavixyPanel.view.desktop.IndexExp
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.IndexExp', {
    extend: 'Ext.Container',
    alias: 'widget.indexexp',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {

        this.items = [
                {
                    xtype: 'searchform'
                },
                {
                    margin: '20 0 0 0',
                    xtype: 'exponential_grapth'
                }
            ];


        this.callParent(arguments);
    }
    
});
