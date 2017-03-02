Ext.define('NavixyPanel.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',
    innerWidth: 1250,
    layout: {
        type: 'auto'
    },
    initComponent: function () {

        this.items = [
            {
                xtype: 'mainheader',
                style: 'margin: 0 auto 30px',
                width: this.innerWidth
            },
            {
                xtype: 'maindesktop',
                style: 'margin: 0 auto',
                region: 'center',
                flex: 1,
                width: this.innerWidth
            },
            {
                xtype: 'mainfooter',
                style: 'margin: 0 auto',
                height: 200,
                width: this.innerWidth
            }
        ];

        this.callParent(arguments);
    },

    afterFirstLayout: function() {
        this.fireEvent('ready', this);
        this.callParent(arguments);
    }
});