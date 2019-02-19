/**
 * @class NavixyPanel.view.settings.components.MobileColorButton
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.MobileColorButton', {
    extend: 'Ext.Container',
    xtype: 'settings-themes-mobile-color-button',
    checked: false,
    color: '#1E96DC',
    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },
    getItems: function () {
        var html = '<div class="mobile-color-picker-button" style="background-color: ' + this.color + '">'
        if (this.checked) {
            html += '<div class="mobile-color-picker-button__active-icon" />';
        }
        html += '</div>'
        return [
            {
                xtype: 'component',
                html: html
            }
        ];
    }
});
