/**
 * @class NavixyPanel.view.components.AbstractList
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractList', {
    extend: 'Ext.grid.Panel',
    requires: ['NavixyPanel.utils.pagination.CustomPaging'],
    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false
    },

    bodyStyle: {
        border: 'none'
    },

    ui: 'light',

    store: null,

    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,

    disableSelection: true,

    createBtn: false,
    hasEdit: false,

    texts: null,

    filterType: null,
    filterValue: null,

    initComponent: function () {

        var defaultTexts = {
            editToolTip: _l.list.edit_tool,
            createBtnRole: 'create-btn',
            createBtnText: _l.list.create_btn_text,
            emptyData: _l.list.empty_text
        };

        this.texts = Ext.applyIf(this.getTexts(), defaultTexts);

        this.emptyText = this.texts.emptyData;

        this.tbar = this.getTopBar();

        this.bbar = this.getBottomBar();

        this.columns = {
            items: Ext.Array.merge(this.getToolsColumns(), this.getColumnsConfig()),
            defaults: {
                menuDisabled: true
            }
        };

        this.addListeners();

        this.callParent(arguments);

        this.applyFilters();
    },

    applyFilters: function () {
        var canFilter = typeof this.store.applyExternalFilter === 'function';

        if (canFilter) {

//            this.store.clearExternalFilters();

            if (this.filterType
                && this.filterValue) {

                this.store.applyExternalFilter(this.filterType, this.filterValue);
            }
        }
    },

    getTexts: function () {
        return {};
    },

    getColumnsConfig: function () {
        return [];
    },

    getToolsColumns: function () {
        return this.hasEdit
            ? [
                {
                    xtype: 'toolcolumn',
                    width: 31,
                    action: 'edit',
                    tip: this.texts.editToolTip
                }
            ]
            : [];
    },

    getTopBar: function () {

        var barConfig = {
                padding: '0 0 10 0',
                border: 0,
                ui: 'light',
                items: []
            };

        if (this.createBtn) {
            barConfig.items.push({
                xtype: 'button',
                iconCls: 'add-button',
                role: this.texts.createBtnRole,
                text: this.texts.createBtnText
            });
        }

        return barConfig.items.length ? barConfig : false;
    },

    getBottomBar: function () {
        return {
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'custompaging',
                    store: this.store
                }
            ]
        };
    },

    addListeners: function () {
        this.on('cellclick', this.handleCellClick, this);
    },

    handleCellClick: function (table, td, cellIndex, record) {
        var tdEl = Ext.get(td),
            isTool = tdEl.hasCls('tool-column'),
            isEdit = isTool && tdEl.hasCls('edit');

        if (isEdit) {
            this.fireEvent('editclick', record);
        } else {
            this.fireEvent('actionclick', record);
        }
    }
});
