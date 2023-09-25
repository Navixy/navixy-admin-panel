/**
 * @class NavixyPanel.view.desktop.Controls
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Header', {
    extend: 'Ext.Container',
    alias: 'widget.mainheader',
    requires: [
        'NavixyPanel.utils.Navigator',
        'NavixyPanel.view.widgets.fields.LocaleCombo'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    cls: 'main-header',

    hasSearch: true,

    initComponent: function () {
        try {
            var hasOld = false,
                dealerStore = Ext.getStore('Dealer'),
                hasBranding = dealerStore.getFeature('branding_web'),
                headerLogo = hasBranding ? dealerStore.getLogo() : false,
                pageFavicon = hasBranding ? dealerStore.getFavicon() : false,
                infoTpl = [
                    '<div class="dealer-info__inner {[values.subpaasStat ? \'dealer-info__inner--with-stat\' : \'\']}">',
                    '<tpl if="legal_name">',
                    '{legal_name}',
                    '</tpl>',
                    '<div class="devices-info ">',
                    '{[_l.get("dealer_info.first")]} {active_amount:devicesEncode} ',
                    '<tpl if="active_limit">',
                    ' {[_l.get("dealer_info.last")]} {active_limit}',
                    '</tpl>',
                    '<tpl if="subpaasStat">',
                    '<div class="devices-info devices-info--subpaas-stat">',
                    '- {[_l.get("dealer_info.clients")]} {active_amount_own}',
                    '</div>',
                    '<div class="devices-info devices-info--subpaas-stat">',
                    '- {[_l.get("dealer_info.subpaas")]} {active_amount_subpaas}',
                    '</div>',
                    '</tpl>',
                    '</div>'
                ];

            Ext.Nav.setPageFavicon(pageFavicon);


            var dealer = Ext.getStore('Dealer').first().getData()

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
                            xtype: 'component',
                            id: 'dealer-logo',
                            cls: 'header-logo',
                            width: 150,
                            height: 30,
                            style: headerLogo ? 'background-image:url(' + headerLogo + ')' : {}
                        },
                        {
                            xtype: 'component',
                            cls: 'dealer-info',
                            height: 78,
                            tpl: infoTpl,
                            role: 'dealer-info',
                            data: Ext.apply({
                                subpaasStat: false
                            }, dealerStore.first().getData())
                        },
                        {
                            xtype: 'component',
                            cls: 'dealer-warnings',
                            padding: '28 0 0 29',
                            height: 78,
                            tpl: [
                                '<tpl if="block_status != \'NOT_BLOCKED\'">',
                                '<div><span></span>{[_l.get("header_blocked." + values.block_status.toLowerCase())]}</div>',
                                '</tpl>'
                            ],
                            data: dealerStore.first().getData()
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
                                Ext.checkPermissons(['users', 'trackers', 'tariffs'])
                                    ? this.getSearcher()
                                    : null,
                                {
                                    xtype: 'button',
                                    cls: 'account-btn',
                                    height: 28,
                                    padding: '0 10 0 10',
                                    iconCls: 'icon-user',
                                    menu: [
                                        {
                                            text: _l.get('account-btn.sa_token'),
                                            role: 'sa_token',
                                            hidden: !dealer.standalone_token
                                        },
                                        {
                                            text: _l.get('account-btn.change_password'),
                                            role: 'password-change',
                                            hidden: !Ext.checkPermission('password', 'update')
                                        },
                                        {
                                            text: _l.get('account-btn.logout'),
                                            role: 'auth-logout'
                                        }]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'mainmenu'
                }
            ]
        } catch (e) {
            console.log(e)
        }
        this.callParent(arguments)
    },


    getSearchBox: function () {
        return this.down('[role="menu-box"]');
    },

    getSearcher: function () {
        return this.hasSearch
            ? {
                xtype: 'searchfield',
                margin: '0 10 0 0',
                ui: 'dark',
                componentCls: 'search-field darken',
                padding: '0 10 0 10',

                listeners: {
                    'search': {
                        fn: this.fireSearch,
                        scope: this
                    }
                }
            } : false;
    },

    unToggleAllMenu: function () {
        Ext.iterate(Ext.ComponentQuery.query('mainmenu button'), function (button) {
            button.toggle(false, true);
        }, this);
    },

    fireSearch: function (searchString) {

        try {
            this.unToggleAllMenu();
            Ext.Nav.shift(Ext.Nav.getSearch(searchString));
        } catch (e) {
            Ext.log(e.stack);
        }
    },

    afterRender: function () {
        var dealerStore = Ext.getStore('Dealer');
        dealerStore.isSubpaasReportsAvailable(function (reportsAvailable) {
            this.down('component[role=dealer-info]').update(Ext.apply({
                subpaasStat: reportsAvailable
            }, dealerStore.first().getData()))
        }, this);

        this.callParent(arguments)
    }
})
