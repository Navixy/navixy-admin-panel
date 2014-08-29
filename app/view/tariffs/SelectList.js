/**
 * @class NavixyPanel.view.tariffs.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.SelectList', {
    extend: 'NavixyPanel.view.tariffs.List',
    alias: 'widget.tariffselectlist',
    noTBar: true,
    showBBar: true,
    viewPageSize: 20,
    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false,
        enableTextSelection: false
    },

    disableSelection: false,

    handleCellClick: Ext.emptyFn,

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
                    xtype: 'navixylistfilter',
                    margin: '0 -2 0 0',
                    width: 200,
                    listeners: {
                        filter: this.applyListFilter,
                        clear: this.removeListFilter,
                        scope: this
                    }
                },
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
                    text: _l.get('close_form_btn'),
                    height: 28,
                    handler: Ext.bind(this.fireClose, this)
                }
            ],
            config.items
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
        var texts = this.callParent(arguments);

        texts.selectBtn = _l.get('select_form_btn');
        return texts;
    }
});
