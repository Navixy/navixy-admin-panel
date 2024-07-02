Ext.define('NavixyPanel.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',
    innerWidth: 1250,
    layout: {
        type: 'auto'
    },
    initComponent: function () {

        this.items = [
            // {
            //     xtype: 'component',
            //     height: 50,
            //     cls: 'maintenance_warning',
            //     html: _l.get("maintenance_warning") + '<div class="maintenance_warning__close">🗙</div>',
            //     width: '100%',
            //     hidden: !!localStorage.getItem('warningHidden'),
            //     listeners: {
            //         click: {
            //             delegate: '.maintenance_warning__close',
            //             element: 'el',
            //             fn: function () {
            //                 this.hide()
            //                 localStorage.setItem('warningHidden', 1)
            //             }
            //         }
            //     }
            // },
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

    afterFirstLayout: function () {
        this.fireEvent('ready', this);
        this.callParent(arguments);
    }
});
