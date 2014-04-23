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
            createBtnText: _l.users.list.create_btn_text,
            emptyData: _l.users.list.empty_text
        };
    },

    getColumnsConfig: function () {
        var userCardTpl = '<a>{last_name:htmlEncode} {first_name:htmlEncode} {middle_name:htmlEncode} <tpl if="!activated"><span class="scaled red">{[l.users.fields.activated_short.status_false]}</span></tpl></a>',
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
