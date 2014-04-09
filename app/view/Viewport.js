Ext.define('NavixyPanel.view.Viewport', {
    extend: 'Ext.Container',
    alias: 'widget.mainviewport',

    innerWidth: 1250,

    layout: {
        type: 'hbox',
        align: 'top',
        pack: 'center'
    },

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align:'stretch'
                },
                width: this.innerWidth,
                items: [
                    // TODO: Header here
                    {
                        xtype: 'mainheader',
                    },
                    {
                        xtype: 'maindesktop',
                        region: 'center',
                        flex: 1
                    },
                    // TODO: Footer here
                    {
                        xtype: 'mainfooter',
                        height: 200
                    }
                ]
            }
        ];

        this.callParent(arguments);
    },

    afterFirstLayout: function() {
        var me = this;
        this.fireEvent('ready', this);

        me.callParent(arguments);

        this.fireResize();

        setTimeout(function() {
            Ext.EventManager.onWindowResize(me.fireResize, me);
        }, 1);
    },

    fireResize : function(){
        var bodyWidth = Ext.getBody().getWidth();
        this.setSize({width: bodyWidth > this.innerWidth ? bodyWidth : this.innerWidth, height: 'auto'});
    }
});