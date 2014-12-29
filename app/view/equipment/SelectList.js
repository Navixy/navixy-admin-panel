/**
 * @class NavixyPanel.view.equipment.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.equipment.SelectList', {
    extend: 'NavixyPanel.view.components.AbstractList',
    alias: 'widget.equipment-select-list',

    store: 'Equipment',

    noTBar: true,
    showBBar: true,
    viewPageSize: 1000,
    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false,
        enableTextSelection: false
    },

    disableSelection: false,

    handleCellClick: Ext.emptyFn,

    getColumnsConfig: function () {
        return [
            {
                text: _l.get('equipment.fields.equip_id'),
                dataIndex: 'equip_id',
                width: 60
            },
            {
                text: _l.get('equipment.fields.name'),
                dataIndex: 'name',
                flex: 3
            },
            {
                text: _l.get('equipment.fields.model_name'),
                dataIndex: 'model_name',
                flex: 1
            },
            {
                text: _l.get('equipment.fields.model_code'),
                dataIndex: 'model_code',
                flex: 1
            },
            {
                text: _l.get('equipment.fields.vendor'),
                dataIndex: 'vendor',
                flex: 2
            }
        ];
    },

    applyListeners: function () {
        this.callParent(arguments);

        this.on({
            select: this.onRecordSelect,
            deselect: this.onRecordDeSelect,
            celldblclick: this.submitValue
        }, this);
    },

    getBottomBar: function () {
        var config = this.callParent(arguments);

        config.items = Ext.Array.merge(
            [
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
                    text: _l.get('close_form_btn'),
                    height: 28,
                    handler: Ext.bind(this.fireClose, this)
                }
            ]
        );

        return config
    },

    getSelectBtn: function () {
        return this.down('[role="select-btn"]') || null;
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
        return {
            emptyData: _l.get('equipment.list.empty_text'),
            selectBtn: _l.get('select_form_btn')
        };
    }
});
