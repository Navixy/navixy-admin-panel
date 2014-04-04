/**
 * @class NavixyPanel.view.desktop.Controls
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.controls.Controls', {
    extend: 'Ext.Container',
    alias: 'widget.maincontrols',

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                html: 'CONTROLS'
            },
            {
                xtype: 'button',
                text: 'Logout',
                ui: 'gray',
                role: 'auth-logout'
            }
        ];


        this.callParent(arguments);
    },
});
