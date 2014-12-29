/**
 * @class NavixyPanel.view.equipment.SelectWindow
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.equipment.SelectWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    requires: ['NavixyPanel.view.equipment.SelectList'],
    alias: 'widget.equipment-select-window',

    deviceType: null,

    getItems: function () {
        return [
            {
                xtype: 'equipment-select-list',
                listeners: {
                    close: this.destroy,
                    recordselected: this.submitSelect,
                    scope: this
                }
            }
        ];
    },

    getTexts: function () {
        return  {
            windowTitle: _l.get('equipment.select.title')
        };
    }
});
