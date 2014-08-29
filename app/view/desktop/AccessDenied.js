/**
 * @class NavixyPanel.view.desktop.AccessDenied
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.AccessDenied', {
    extend: 'Ext.Container',
    alias: 'widget.accessdenied',

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                padding: '50 50 0 50',
                style: 'font-size: 20px; text-align: center',
                html: _l.get('access_denied')
            },
            {
                xtype: 'container',
                padding: '5 50 0 50',
                style: 'font-size: 12px; text-align: center',
                html: _l.get('access_denied_tip')
            }
        ];


        this.callParent(arguments);
    }
});
