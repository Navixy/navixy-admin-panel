/**
 * @class Tasks.view.menu.AbstractMenu
 * @extends Ext.Panel
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractMenu', {
    extend: 'Ext.DataView',
    alias: 'widget.abstract-menu',
    itemSelector: 'div.menu_item',
    cls: 'abstract-menu',
    selectedItemCls: 'selected',
    selModel: {
        mode: 'SINGLE',
        deselectOnContainerClick: false
    },
    stateful: true,
    getState: function () {
        var selection = this.getSelectionModel().getSelection()[0],
            type = this.defaultPart;

        if (selection) {
            type = selection.get('id');
        }

        return { type: type };
    },

    initComponent: function () {
        this.applyStore();
        this.applyListeners();
        this.tpl = new Ext.XTemplate('<tpl for=".">',
            '<div data-qtip="{tip}" class="ripple menu_item">',
            '<div class="menu-icon {iconCls}"></div>',
            '<div class="menu-label">{text}</div>',
            '</div>',
            '</tpl>'
        );
        this.callParent(arguments);
    },

    getTarget: function () {
        var selection = this.getSelectionModel().getSelection()[0];
        if (selection) {
            return selection.get('id');
        }

        return null;
    },

    applyListeners: function () {
        this.on({
            viewready: this.applySelection,
            select: { fn: this.saveState, delay: 1 },
            scope: this
        });
    },

    applySelection: function () {
        var type = this.type || this.defaultPart;
        var defaultItem = this.getStore().findRecord('id', type)
        if (defaultItem) {
            this.getSelectionModel().select(defaultItem);
        }
    },

    beforeDestroy: function () {
        this.store.destroyStore();
        this.callParent(arguments);
    },

    applyStore: Ext.emptyFn
});
