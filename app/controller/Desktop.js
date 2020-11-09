/**
 * @class NavixyPanel.controller.Desktop
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Desktop', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'MainDesktopController',
    alternateTokens: [
        'login'
    ],

    views: [
        'desktop.Header',
        'desktop.menu.MainMenu',
        'desktop.Desktop',
        'desktop.Footer',
        'desktop.AccessDenied',
        'desktop.Search',
        'desktop.Exponential',
        'desktop.Index',
        'desktop.IndexExp'
    ],

    refs: [
        {
            ref: 'desktop',
            selector: 'maindesktop'
        },
        {
            ref: 'controls',
            selector: 'maincontrols'
        },
        {
            ref: 'mainMenu',
            selector: 'mainmenu'
        }
    ],

    init: function () {
        this.callParent(arguments);

        this.application.on({
            contentchange: this.showContent,
            menuregister: this.addMainMenuItem,
            menuselect: this.onMenuSelect,
            menudeselect: this.onMenuDeselect,
            'section-search': this.onSearch,
            'section-payment': this.onPayment,
            index: this.onIndex,
            scope: this
        });

        this.control({
            'mainviewport': {
                render: {
                    fn: this.registerSearch,
                    single: true
                }
            },

            navixypaging: {
                change: this.scrollGridToTop
            }
        });
    },

    scrollGridToTop: function (toolbar, pageOptions) {
        if (!pageOptions || pageOptions.currentPage === 1) {
            return;
        }

        var grid = toolbar.up('grid');
        if (grid) {
            grid.el.dom.scrollIntoView();
        } else {
            Ext.getBody().scrollTo('top', 0);
        }
    },

    onMenuDeselect: function () {
        this.getMainMenu().unToggleAll();
    },

    showContent: function (cmpConfig) {

        cmpConfig = typeof cmpConfig === 'string' ? { xtype: cmpConfig } : cmpConfig;

        var cardContainer = this.getDesktop(),
            xtype = cmpConfig.xtype,
            existing = cardContainer.down('container[role=' + xtype + ']') || null,
            rewrite = existing && (cmpConfig.singleCmp || existing.singleCmp),
            active = cardContainer.getLayout().getActiveItem(),
            target;

        if (rewrite) {
            this.removeContent(existing);
            existing = null;
        }

        target = existing || this.addContent(cmpConfig);

        target = cardContainer.getLayout().setActiveItem(target);

        if (existing && Ext.isFunction(existing.updateConfig)) {
            existing.updateConfig(cmpConfig);
        }

        if (active && active.destroyOnLeave) {
            this.removeContent(active);
        }

        return target;
    },

    removeContent: function (cmp) {
        var cardContainer = this.getDesktop();

        try {
            cardContainer.remove(cmp, true);
        } catch (e) {
        }
    },

    addContent: function (cmpConfig) {

        var cardContainer = this.getDesktop(),
            xtype = cmpConfig.xtype,
            menu_text = cmpConfig.name || xtype,
            config = Ext.apply(cmpConfig, { role: xtype });

        return cardContainer.add(config);
    },

    addMainMenuItem: function (requiest) {
        this.getMainMenu().addSection(requiest);
    },

    onMenuSelect: function (requiest) {
        this.getMainMenu().forceToggleSectionButton(requiest);
    },

    onSearch: function (searchString) {
        if (Ext.checkPermissons(['users', 'trackers', 'tariffs', 'subpaas'])) {
            this.application.fireEvent('handlefound');
            this.application.fireEvent('contentchange', {
                xtype: 'searchform',
                searchStr: decodeURIComponent(searchString)
            });
        }
    },

    onPayment: function () {
        var dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first(),
            seller_currency = dealer && dealer.get('seller_currency');

        if (Ext.checkPermission('paas_payments', 'create') && seller_currency === 'USD' && Ext.getStore('PaymentSystems').hasSubscription()) {
            this.application.fireEvent('handlefound');
            this.application.fireEvent('contentchange', {
                xtype: 'payments-panel'
            });
        }
    },

    onIndex: function () {

        this.application.fireEvent('handlefound');
        this.application.fireEvent('menuselect', 'index');

        this.application.fireEvent('contentchange', {
            xtype: Ext.checkPermissons(['users', 'trackers', 'tariffs'])
                ? this.checkExponential()
                    ? 'indexexp'
                    : 'searchform'
                : 'indexpage'
        });
    },

    checkExponential: function () {
        return Ext.getStore('Dealer').isExponential();
    },


    registerSearch: function () {
        this.addMainMenuItem({
            name: 'index',
            text: _l.get('index.menu_text'),
            target: ''
        });

        this.registerPayments();

        // this.checkWarning();

        this.checkTutorial();
    },

    checkTutorial: function () {
        if (Ext.getStore('Dealer').isTutorial()) {
            this.showTutorial();
        }
    },

    showTutorial: function () {
        if (Ext.Nav.isIndex()) {
            Ext.Nav.shift('users');
        }
    },

    checkWarning: function () {

        var aws = document.location.host.indexOf('us.navixy.com') > -1,
            time = Ext.Date.format(Ext.Date.parse("2020-01-19", 'Y-m-d'), 'U') * 1 > Ext.Date.format(new Date(), 'U') * 1;

        if (aws && time) {
            Ext.getFirst('mainviewport').insert(0, {
                    xtype: 'component',
                    height: 50,
                    cls: 'maintenance_warning',
                    html: _l.get("maintenance_warning"),
                    width: '100%'
                }
            )
        }
    },

    registerPayments: function () {
        var dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first(),
            seller_currency = dealer && dealer.get('seller_currency');

        if (Ext.checkPermission('paas_payments', 'create') && !Ext.checkPermission('service_settings', 'read') && seller_currency === 'USD' && Ext.getStore('PaymentSystems').hasSubscription()) {
            this.addMainMenuItem({
                name: 'payment',
                text: _l.get('settings.subscription.title'),
                target: 'payment'
            });
        }
    }

});
