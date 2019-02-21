/**
 * @class NavixyPanel.view.settings.components.MobileColorButton
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.MobileColorButton', {
    extend: 'Ext.Component',
    xtype: 'settings-themes-mobile-color-button',
    checked: false,
    color: '#1E96DC',
    initComponent: function () {
        this.html = this.renderButton(this.checked);
        this.callParent(arguments);
    },

    renderButton: function (checked) {
        var html = '<div class="mobile-color-picker-button" style="background-color: ' + this.color + '">'
        if (checked) {
            html += '<div class="mobile-color-picker-button__active-icon" />';
        }
        html += '</div>';
        return html;
    },

    check: function () {
        this.checked = !this.checked;
        this.update(this.renderButton(this.checked));
    }
});
