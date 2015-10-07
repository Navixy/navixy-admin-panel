/**
 * @class NavixyPanel.view.widgets.map.MapPanel
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.widgets.map.MapPanel', {
    extend: 'Ext.Container',
    alias: 'widget.mappanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    cls: 'mappanel',
    initComponent: function () {
        this.items = this.applyItems();
        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);
        this.map = this.down('map');
    },

    applyItems: function () {
        return [
            {
                xtype: 'map',
                flex: 1
            },
            {
                xtype: 'mapcontrols',
                style: {
                    'z-index': 2
                },
                height: 40
            }
        ];
    }
});