/**
 * @class NavixyPanel.view.components.AbstractWindowSelect
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractWindowSelect', {
    extend: 'Ext.window.Window',
    modal: true,
    shadow: false,
    resizable: false,
    layout: 'fit',
    closeOnSelect: true,

    initComponent: function () {

        var defaultTexts = {
            windowTitle: null
        };

        this.texts = Ext.applyIf(this.getTexts(), defaultTexts);

        this.title = this.title || this.texts.windowTitle;

        this.items = this.getItems();

        this.bbar = this.getBottomBar();

        this.callParent(arguments);
    },

    getItems: Ext.emptyFn,

    getBottomBar: Ext.emptyFn,

    getTexts: function () {
        return {};
    },

    submitSelect: function (record) {
        if (record) {
            this.fireEvent('select', record);
        }

        if (this.closeOnSelect) {
            this.close();
        }
    }
});
