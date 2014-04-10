/**
 * @class NavixyPanel.view.desktop.Controls
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Header', {
    extend: 'Ext.Container',
    alias: 'widget.mainheader',
    requires: ['NavixyPanel.view.widgets.LocaleCombo'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                padding: '50 10 10 10',
                layout: {
                    type: 'hbox',
                    pack: 'end'
                },
                items: [
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
                ]
            },
            {
                xtype: 'mainmenu'
            }
        ];


        this.callParent(arguments);
    },
});
