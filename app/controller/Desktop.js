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
        'panelUser.authWindow',

        'controls.Controls',
        'desktop.Desktop'
    ],

    refs: [
        {
            ref: 'desktop',
            selector: 'maindesktop'
        },
        {
            ref: 'controls',
            selector: 'maincontrols'
        }
    ],

    init: function () {
        this.callParent(arguments);

        this.application.on({
            contentchange   : this.showContent,
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
    }
});