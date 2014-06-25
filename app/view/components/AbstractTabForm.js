/**
 * @class NavixyPanel.view.components.AbstractTabForm
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractTabForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    bodyPadding: '0 0 60 0',
    formRowPadding: '50 0 0 0',

    getItems: function () {
        return [
            {
                xtype:'tabpanel',
                plain: true,
                activeTab: 0,
                border: 0,
                width: '100%',
                ui: 'light',
                cls: 'header-tabs',
                defaults: this.getRowDefaults(),
                items: this.getTabs()
            }
        ];
    },

    getTabs: function () {
        return [];
    }
});