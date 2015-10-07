Ext.define('NavixyPanel.view.widgets.map.MapControls', {
    extend: 'Ext.Container',
    alias: 'widget.mapcontrols',
    layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'start'
    },
    cls: 'mapcontrols',
    items: [
        //{
        //    xtype: 'maptypecontrol',
        //    minWidth: 150,
        //    flex: 1.7
        //},
        //{
        //    xtype: 'component',
        //    width: 10
        //},
        {
            xtype: 'mapscale'
        }
        //{
        //    xtype: 'component',
        //    width: 20
        //}
    ],

    bindMap: function (map) {
        this.items.each(function (cmp) {
            try {
                cmp.bindMap(map);
            } catch (e) {
            }
        });
    }
});