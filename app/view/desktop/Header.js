/**
 * @class NavixyPanel.view.desktop.Controls
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Header', {
    extend: 'Ext.Container',
    alias: 'widget.mainheader',
    requires: ['NavixyPanel.view.widgets.fields.LocaleCombo'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    cls: 'main-header',

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'end',
                    align: 'middle'
                },

                items: [
                    {
                        xtype: 'container',
                        cls: 'header-logo',
                        width: 150,
                        height: 30
                    },
                    {
                        xtype: 'container',
                        cls: 'dealer-info',
                        padding: '27 0 0 30',
                        height: 78,
                        tpl: '{legal_name}<div class="devices-info">{[_l.dealer_info.first]} {active_amount:devicesEncode} <tpl if="active_limit"> {[_l.dealer_info.last]} {active_limit}</tpl></div>',
                        data: Ext.getStore('Dealer').first().getData()
                    },
                    {
                        xtype: 'container',
                        padding: '40 0 10 10',
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'localecombo',
                                ui: 'light',
                                fieldLabel: false,
                                width: 90,
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
                    }
                ]
            },
            {
                xtype: 'mainmenu'
            }
        ];


        this.callParent(arguments);
    }
});
