Ext.define('NavixyPanel.view.users.ActivationPanel', {
    extend: 'NavixyPanel.view.components.SlidablePanel',
    alias: 'widget.activationpanel',
    cls: 'activation-panel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function () {
        var appName = 'registration',
            appLink = Ext.Nav.getApplicationLink(this.hash, appName),
            content = appLink && appLink.indexOf(appName) > -1 ? '<iframe src="' + appLink +'"></iframe>' : '';

        this.items = [{
            xtype: 'component',
            html: content,
            flex: 1
        }];

        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);

        var me = this,
            isIE = Ext.isIE || Ext.isIE11;

        this.beforeClosePanel = Ext.bind(this.beforeClosePanel, this);

        window.addEventListener('message', this.beforeClosePanel,false);
        window[isIE ? 'onhashchange' : 'onpopstate'] = function () {
            me.fireEvent('close');
        };
    },

    destroy: function () {
        window.removeEventListener('message', this.beforeClosePanel);
        window.onpopstate = null;
        window.onhashchange = null;

        this.callParent(arguments);
    },

    beforeClosePanel: function (messageEvent) {
        var data = JSON.parse(messageEvent.data);

        if (data.action === 'closeregisterpanel') {
            this.fireEvent('close');
        }
    }
});
