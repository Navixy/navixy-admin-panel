/**
 * @class NavixyPanel.view.desktop.Desktop
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.user.Test', {
    extend: 'Ext.Container',
    alias: 'widget.utest',

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                padding: '50 50 0 50',
                style: 'font-size: 40px; color: white',
                html: 'HERE IS THE USER INFO PAGE'
            },
            {
                xtype: 'container',
                padding: '5 50 0 50',
                style: 'font-size: 10px; color: #eee; text-align: right',
                html: 'someday...'
            }
        ];


        this.callParent(arguments);
    }
});
