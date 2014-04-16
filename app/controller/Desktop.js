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
        'desktop.AccessDenied'
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
            contentchange   : this.showContent,
            menuregister    : this.addMainMenuItem,
            menuselect      : this.onMenuSelect,
            menudeselect    : this.onMenuDeselect,
            scope: this
        });
    },

    onMenuDeselect: function () {
        this.getMainMenu().unToggleAll();
    },

    showContent: function (cmpConfig) {

        var cardContainer = this.getDesktop(),
            xtype = typeof cmpConfig === 'string' ? cmpConfig : cmpConfig.xtype,
            rewrite = typeof cmpConfig === 'string' ? false : cmpConfig.rewrite || false,
            existing = cardContainer.down('container[role=' + xtype + ']') || null,
            target;

        if (rewrite) {
            this.removeContent(existing);
            existing = null;
        }

        target = existing || this.addContent(cmpConfig);

        cardContainer.getLayout().setActiveItem(target);

        return target;
    },

    removeContent: function (cmp) {
        var cardContainer = this.getDesktop();

        try {
            cardContainer.remove(cmp, true);
        } catch(e) {}
    },

    addContent: function (cmpConfig) {

        var cardContainer = this.getDesktop(),
            xtype = typeof cmpConfig === 'string' ? cmpConfig : cmpConfig.xtype,
            menu_text = Ext.isObject(cmpConfig) ? cmpConfig.name || xtype : xtype,
            config = Ext.isObject(cmpConfig) ? Ext.apply(cmpConfig, {role: xtype}) : {xtype: xtype, role: xtype};

        return cardContainer.add(config);
    },

    addMainMenuItem: function (requiest) {
        this.getMainMenu().addSection(requiest);
    },

    onMenuSelect: function (requiest) {
        this.getMainMenu().forceToggleSectionButton(requiest);
    }
});