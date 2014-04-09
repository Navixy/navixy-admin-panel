/**
 * @class NavixyPanel.view.user.UsersList
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.users.UsersList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userslist',
    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false
    },

    bodyStyle: {
        border: 'none'
    },

    store: 'Users',

    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,

    disableSelection: true,

    initComponent: function () {

        this.bbar = {
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

        this.columns = {
            items: [
                {
                    xtype: 'templatecolumn',
                    tpl: 'edit',
                    width: 60
                },
                {
                    text: _l.users.fields.user_id,
                    dataIndex: 'id',
                    width: 60,
                },
                {
                    text: _l.users.fields.full_name,
                    xtype: 'templatecolumn',
                    tpl: '{first_name} {last_name} {middle_name}',
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

        this.callParent(arguments);
    }
});
