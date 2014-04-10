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
            scope: this
        });
    },

    showContent: function (cmpConfig) {

        var cardContainer = this.getDesktop(),
            xtype = typeof cmpConfig === 'string' ? cmpConfig : cmpConfig.xtype,
            target = cardContainer.down('container[role=' + xtype + ']') || this.addContent(cmpConfig);

        cardContainer.getLayout().setActiveItem(target);

        return target;
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
        this.getMainMenu().toggleSectionButton(requiest, true, true);
    }
});