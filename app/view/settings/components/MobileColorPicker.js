/**
 * @class NavixyPanel.view.settings.components.MobileColorPicker
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.MobileColorPicker', {
    extend: 'Ext.Container',
    xtype: 'settings-themes-mobile-color-picker',
    colorTable: [
        ['orange_1', 'pink_1', 'violet_1'],
        ['violet_2', 'blue_1', 'blue_2'],
        ['blue_3', 'green_1', 'green_2'],
        ['orange_2', 'orange_3', 'grey_1']
    ],
    colorCodes: {},
    activeColor: null,
    constructor: function(config){
        this.name = config.name;
        this.addEvents({
            changeColor : true
        });

        this.listeners = config.listeners;

        this.callParent(arguments)
    },
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
                var self = this;
                rowContainerItems.push({
                    xtype: 'settings-themes-mobile-color-button',
                    color: color,
                    checked: this.activeColor === color,
                    listeners: {
                        afterRender: function(button) {
                            button.getEl().on('click', function() {
                                if (!this.checked) {
                                    self.fireEvent('changeColor', this.color);
                                    self.down('[checked="true"]').check();
                                    this.check()
                                }
                            }.bind(this))
                        }
                    }
                })
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
