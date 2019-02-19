/**
 * @class NavixyPanel.view.settings.components.MobileColorPicker
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.MobileColorPicker', {
    extend: 'Ext.Container',
    xtype: 'settings-themes-mobile-color-picker',
    colorCodes: {
        orange_1: '#F44336',
        pink_1: '#E91E63',
        violet_1: '#9C27B0',
        violet_2: '#673AB7',
        blue_1: '#3F51B5',
        blue_2: '#1E96DC',
        blue_3: '#0097A7',
        green_1: '#009688',
        green_2: '#43A047',
        orange_2: '#FFA000',
        orange_3: '#E65100',
        grey_1: '#607D8B',
        green_3: '#97C33C',
        blue_4: '#29ACDF'
    },
    defaultColor: 'blue_2',
    colorTable: [
        ['orange_1', 'pink_1', 'violet_1'],
        ['violet_2', 'blue_1', 'blue_2'],
        ['blue_3', 'green_1', 'green_2'],
        ['orange_2', 'orange_3', 'grey_1']
    ],
    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },
    getItems: function () {
        var result = [];
        for (var row = 0; row < 4; row++) {
            var rowContainerItems = [];
            for (var col = 0; col < 3; col++) {
                var color = this.colorCodes[this.colorTable[row][col]]
                rowContainerItems.push({
                    xtype: 'settings-themes-mobile-color-button',
                    color: color,
                    checked: true
                });
            }
            result.push({
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: rowContainerItems
            });
        }
        return result;
    }
});
