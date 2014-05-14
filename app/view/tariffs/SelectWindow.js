/**
 * @class NavixyPanel.view.tariffs.SelectWindow
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.SelectWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    requires: ['NavixyPanel.view.tariffs.SelectList'],
    alias: 'widget.tariffselectwindow',
    height: '70%',
    width: '50%',

    deviceType: null,

    getItems: function () {
        return [
            {
                xtype: 'tariffselectlist',
                filter: {
                    device_type: this.deviceType
                },
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
            windowTitle: _l.tariffs.select.title
        };
    }
});
