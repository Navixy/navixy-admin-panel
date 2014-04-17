/**
 * @class NavixyPanel.view.user.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.List', {
    extend: 'NavixyPanel.view.components.AbstractList',
    alias: 'widget.userslist',

    store: 'Users',

    getTexts: function () {
        return {
            createBtnText: _l.users.list.create_btn_text
        };
    },

    getColumnsConfig: function () {
        var userCardTpl = '<a>{last_name:htmlEncode} {first_name:htmlEncode} {middle_name:htmlEncode}</a>';

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
                dataIndex: 'post_city',
                flex: 1
            }
        ];
    }
});
