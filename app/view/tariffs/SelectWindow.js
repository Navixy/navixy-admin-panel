/**
 * @class NavixyPanel.view.tariffs.SelectWindow
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.SelectWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    requires: ['NavixyPanel.view.tariffs.SelectList'],
    alias: 'widget.tariffselectwindow',
    emptyValue: null,
    deviceType: null,

    getItems: function () {
        var filter = this.deviceType ? {
            device_type: this.deviceType
        } : {};

        return [{
            xtype: 'tariffselectlist',
            emptyValue: this.emptyValue,
            filter: filter,
            listeners: {
                close: this.destroy,
                recordselected: this.submitSelect,
                scope: this
            }
        }];
    },

    getTexts: function () {
        return {
            windowTitle: _l.get('tariffs.select.title')
        };
    }
});
