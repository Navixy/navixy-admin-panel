/**
 * @class NavixyPanel.view.desktop.Controls
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.controls.Controls', {
    extend: 'Ext.Container',
    alias: 'widget.maincontrols',
    requires: ['NavixyPanel.view.widgets.LocaleCombo'],
    padding: 10,
    layout: {
        type: 'hbox',
        pack: 'end'
    },

    initComponent: function () {

        this.items = [
            {
                xtype: 'localecombo',
                fieldLabel: false,
                margin: '0 10 0 0'
            },
            {
                xtype: 'button',
                text: _l.auth.logout,
                height: 28,
                padding: '0 10 0 10',
                ui: 'gray',
                role: 'auth-logout'
            }
        ];


        this.callParent(arguments);
    },
});
