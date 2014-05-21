/**
 * @class NavixyPanel.view.widgets.PageSize
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.widgets.PageSize', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.pagesize',

    width: 180,
    height: 22,
    labelClsExtra: 'x-toolbar-text',
    style: 'margin-top: -2px !important',
    labelWidth: 120,
    labelStyle: "font-size: 12px; line-height: 25px",

    queryMode: 'local',
    displayField: 'id',
    valueField: 'id',

    editable: false,

    sizes: [10, 20, 50, 100, 500],

    initComponent: function () {

        this.fieldLabel = _l.page_size;

        this.store = new Ext.data.ArrayStore({
            fields: ['id'],
            sorters: [
                {
                    property: 'id',
                    direction: 'ASC'
                }
            ]
        });

        this.callParent(arguments);
    },

    applyStore: function () {
        var defaultValue = this.getInitialValue(),
            sizes = this.getParent().pageSizes || this.sizes;

        Ext.iterate(Ext.apply(sizes, defaultValue), function (size) {
            this.store.add({id: size});
        }, this);

        this.setValue(defaultValue);

        this.on('select', this.applyPageSize, this);
    },

    applyPageSize: function () {
        var value = this.getValue();
        this.getParentStore().setPageSize(value);
    },

    afterRender: function () {
        this.applyStore();
        this.callParent(arguments);
    },

    getParent: function () {
        return this.findParentByType('abstractlist');
    },

    getParentStore: function () {
        return this.getParent().getView().store;
    },

    getInitialValue: function () {
        return this.getParentStore().pageSize;
    }
})
;