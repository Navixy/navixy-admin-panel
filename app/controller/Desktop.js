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
        'desktop.IndexExp',
        'desktop.IndexPlain',
        'desktop.PlainPrices'
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
        var desktopPricesBlock = 'indexpage'
        if (this.checkExponential()) {
            desktopPricesBlock = 'indexexp'
        } else if (this.checkPlain()) {
            desktopPricesBlock = 'indexplain'
        }
        this.application.fireEvent('contentchange', {
            xtype: Ext.checkPermissons(['users', 'trackers', 'tariffs']) && !this.checkIsStandalone()
                ? desktopPricesBlock
                : 'indexpage'
        });
    },

    checkExponential: function () {
        return Ext.getStore('Dealer').isExponentialAvailable();
    },

    checkPlain: function () {
        return Ext.getStore('Dealer').isPlainPricesAvailable()
    },

    checkIsStandalone: function () {
        return Ext.getStore('Dealer').isStandalone();
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
        var dealer_store = Ext.getStore('Dealer'),
            dealer = dealer_store && dealer_store.first()
        var time = Ext.Date.format(Ext.Date.parse("2022-03-28", 'Y-m-d'), 'U') * 1 > Ext.Date.format(new Date(), 'U') * 1;
        var dealerIdIncluded = this.warningAnnouncementDealerLists.includes(dealer.get('id'))
        if (time && dealerIdIncluded) {
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

        if (
            Ext.checkPermission('paas_payments', 'create')
            && !Ext.checkPermission('service_settings', 'read')
            && seller_currency === 'USD'
            && Ext.getStore('PaymentSystems').hasAvangate()) {
            this.addMainMenuItem({
                name: 'payment',
                text: _l.get('settings.subscription.title'),
                target: 'payment'
            });
        }
    },

    warningAnnouncementDealerLists: [
        15694,9566,14816,13236,14016,13015,9326 ,22562,13405,10611,10617,14850,14365,12819,14555,15379,22078,5880,
        11662,9325 ,9369 ,21472,12639,11696,5865 ,22218,14681,12309,15788,13698,11658,15893,9710 ,17231,9188 ,9273,
        14008,15925,13588,13187,14155,5828 ,8265 ,8289 ,16340,20924,9446 ,8719 ,10675,8734 ,13525,10182,15320,22846,
        10483,10001,15201,15695,14775,12710,21283,10917,17120,8463 ,12950,12246,20945,21614,11726,12925,21399,21296,
        15476,16613,13508,15306,12383,10566,10312,13116,13548,12643,15634,11835,11751,10823,10852,16283,21505,12388,
        13170,13741,10863,12636,8926 ,12767,16735,8651 ,10104,16339,20641,23241,12755,11989,11765,13453,11909,20951,
        8091 ,21386,12335,22623,12366,12699,23609,21131,13330,20960,15483,21440,11959,12686,16518,10991,10820,21873,
        10910,21474,21636,16247,9419 ,14158,20937,15186,20676,15229,12503,13033,14549,15253,12545,16029,22230,22847,
        7509 ,8794 ,21167,13810,21936,12069,11718,14204,21005,12501,13327,13329,17299,7759 ,12507,14386,14829,15486,
        13526,15750,16728,11507,15770,13373,13516,21735,11369,21453,21169,21434,21625,20679,20845,12992,14991,16883,
        16665,23424,13934,10796,13158,10358,16757,20450,20221,10053,11449,5008 ,5957 ,14762,21712,14689,15288,15686,
        13121,15899,20286,21892,14378,23019,8568 ,9684 ,14397,23368,12552,21948,14787,11373,16447,12965,15091,8897,
        11541,14134,13497,20795,15130,21110,11401,10880,15748,20080,21550,21959,22874,12090,23458,23150,11336,15339,
        16335,23268,12342,14863,15332,7524 ,10654,20396,22029,10082,12541,22227,15819,12809,15557,21417,12815,8386,
        13898,16228,17278,13198,22037,11131,16062,16908,13519,16190,20769,15316,15956,13950,16175,5697 ,6230,
        11670,13048,13186,15460,21703,9032 ,22978,12118,16278,8480 ,10009,12252,23639,12122,13509,10264,13926,15248,
        16853,10420,14322,9049 ,12107,12003,12331,16078,16546,8663 ,13419,11806,11364,20001,20896,16405,12808,14118,
        20149,22866,11566,13016,13776,16766,21155,21516,20400,20544,21583,23285,8902 ,9339 ,10365,22128,11813,15031,
        15207,16165,21330,23505,8662 ,12547,13520,21165,10732,21109,11528,21680,22519,11968,12600,20145,23080,23447,
        23518,10324,13018,14668,14882,20919,23422,15473,23619,6166 ,11423,20903,23073,23250,9024 ,10706,15485,
        20416,23417, 10002800,10002406,10001881,10000901,10003320,10001899,10001749,10002012,10000680,10001503,
        10000817,10001808,10001028,10000279,10002235,10000358,10000970,10000914,10000284, 10002853,10000257,10001171,
        10001701,10000529,10000456,10000652,10000754,10000593, 10001858,10000124,10000517,10001721,10000896,10002408,
        10000600,10001142,10000909,10001395,10001464,10000140,10000259,10000182,10001604,10001366,10001149,10002090,
        10000733,10001526,10000546,10000555,10000830,10001008,10001746,10002383,10000470, 10002591,10003471,10000179,
        10000818,10000795,10000800,10000305,10000996,10001613, 10003418,10002143,10002743,10002020,10003518,10000380,
        10000479,10000246,10002860, 10001393,10000859,10000472,10002833,10003520,10003560,10001269,10002598,10001687,
        10000654,10001413,10002642,10002652,10000159,10002000,10002445,10002487,10001221, 10000732,10002716,10003352,
        10003543, 10000841,10002038,10002941,10003037,10003210, 10003467,10002884,10002930, 10002953,10003034,10003067,
        10003453,10002129,10002384, 5001
    ]

});
