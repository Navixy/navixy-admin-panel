/**
 * @class NavixyPanel.view.desktop.Index
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Index', {
    extend: 'Ext.Container',
    alias: 'widget.indexpage',

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                padding: '50 50 0 50',
                style: 'font-size: 20px; text-align: center',
                html: _l.get('index_title')
            },
            {
                xtype: 'container',
                padding: '5 50 0 50',
                style: 'font-size: 12px; text-align: center',
                html: _l.get('index_tip')
            }
        ];


        this.callParent(arguments);
    }
});
