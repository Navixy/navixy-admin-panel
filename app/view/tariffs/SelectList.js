/**
 * @class NavixyPanel.view.tariffs.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.SelectList', {
    extend: 'NavixyPanel.view.tariffs.List',
    requires: ['NavixyPanel.view.widgets.Searcher'],
    alias: 'widget.tariffselectlist',
    createBtn: false,
    hasEdit: false,
    viewPageSize: 10000,

    disableSelection: false,

    handleCellClick: Ext.emptyFn,

    searchFields: ['id', 'name'],

    afterRender: function () {
        this.applyViewToSearcher();
        this.callParent(arguments);
    },

    applyListeners: function () {
        this.callParent(arguments);

        this.on({
            select: this.onRecordSelect,
            deselect: this.onRecordDeSelect
        }, this);
    },

    getBottomBar: function () {
        return [
            {
                xtype: 'searcher',
                searchFields: this.searchFields,
                width: 200
            },
            '->',
            {
                xtype: 'container',
                width: 10
            },
            {
                xtype: 'button',
                role: 'select-btn',
                disabled: true,
                text: this.texts.selectBtn,
                height: 28,
                handler: Ext.bind(this.submitValue, this)
            },
            {
                xtype: 'button',
                ui: 'gray',
                text: _l.close_form_btn,
                height: 28,
                handler: Ext.bind(this.fireClose, this)
            }
        ];
    },

    getSelectBtn: function () {
        return this.down('[role="select-btn"]') || null;
    },

    applyViewToSearcher: function () {
        this.down('searcher').setView(this.getView(), this.searchFields);
    },

    onRecordSelect: function (grid, record) {

        if (record) {
            var button = this.getSelectBtn(),
                tariffTitle = this.texts.selectBtn + ' "' + record.get('name') + '"';

            button.setText(tariffTitle);
            button.enable();
        }
    },

    onRecordDeSelect: function () {
        var button = this.getSelectBtn(),
            tariffTitle = this.texts.selectBtn;

        button.setText(tariffTitle);
        button.disable();
    },

    submitValue: function () {
        var sm = this.getSelectionModel(),
            records = sm.getSelection(),
            record = records && records[0];

        if (record) {
            this.fireEvent('recordselected', record);
        }
    },

    fireClose: function () {
        this.fireEvent('close');
    },

    getTexts: function () {
        var texts = this.callParent(arguments);

        texts.selectBtn = _l.select_form_btn;
        return texts;
    },

    getColumnsConfig: function () {
        var columns = this.callParent(arguments);
        columns.splice(2,1);
        return columns;
    }
});
