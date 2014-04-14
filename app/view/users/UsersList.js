/**
 * @class NavixyPanel.view.user.UsersList
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.users.UsersList', {
    extend: 'Ext.grid.Panel',
    requires: ['NavixyPanel.plugins.pagination.CustomPaging'],
    alias: 'widget.userslist',
    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false
    },

    bodyStyle: {
        border: 'none'
    },

    ui: 'light',

    store: 'Users',

    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,

    disableSelection: true,

    initComponent: function () {

        var userCardTpl = '<a>{last_name} {first_name} {middle_name}</a>';

        this.columns = {
            items: [
                {
                    xtype: 'toolcolumn',
                    width: 31,
                    action: 'edit',
                    tip: 'edit'
                },
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
                    dataIndex: 'post_city',
                    flex: 1
                }
            ],
            defaults: {
                menuDisabled: true
            }
        };

        this.tbar = {
            padding: '0 0 10 0',
            border: 0,
            ui: 'light',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'add-button',
                    text: _l.users.create_btn
                }
            ]
        };

        this.bbar = {
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'container',
                    html: Ext.getStore(this.store).count()
                },
                {
                    xtype: 'custompaging',
                    store: this.store
                }
            ]
        };

        this.addListeners();

        this.callParent(arguments);
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
