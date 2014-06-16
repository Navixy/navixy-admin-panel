/**
 * @class NavixyPanel.view.user.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.SelectList', {
    extend: 'NavixyPanel.view.users.List',
    alias: 'widget.usersselectlist',
    createBtn: false,
    noTBar: true,
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
            deselect: this.onRecordDeSelect
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
                    text: _l.close_form_btn,
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
                userTitle = this.texts.selectBtn + ' "' + record.get('login') + '"';

            button.setText(userTitle);
            button.enable();
        }
    },

    onRecordDeSelect: function () {
        var button = this.getSelectBtn(),
            userTitle = this.texts.selectBtn;

        button.setText(userTitle);
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
        var userCardTpl = '{last_name:htmlEncode} {first_name:htmlEncode} {middle_name:htmlEncode}',
            userCityTpl = '{post_city:htmlEncode} <tpl if="registered_city"><span class="lighten">({registered_city:htmlEncode})</span></tpl>';

        return [
            {
                text: _l.users.fields.user_id,
                dataIndex: 'id',
                width: 60
            },
            {
                text: _l.users.fields.full_name,
                xtype: 'templatecolumn',
                tpl: userCardTpl,
                dataIndex: 'last_name',
                sortable: true,
                flex: 2
            },
            {
                text: _l.users.fields.login_short,
                dataIndex: 'login',
                flex: 1
            },
            {
                text: _l.users.fields.phone,
                dataIndex: 'phone',
                flex: 1
            },
            {
                text: _l.users.fields.post_city,
                xtype: 'templatecolumn',
                tpl: userCityTpl,
                dataIndex: 'post_city',
                sortable: true,
                flex: 1
            }
        ];
    }

});
