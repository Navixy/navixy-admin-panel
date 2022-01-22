/**
 * @class NavixyPanel.view.desktop.IndexPlain
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.IndexPlain', {
    extend: 'Ext.Container',
    alias: 'widget.indexplain',
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
                    xtype: 'plain_prices'
                }
            ];


        this.callParent(arguments);
    }

});
