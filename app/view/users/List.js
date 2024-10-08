/**
 * @class NavixyPanel.view.user.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.users.List', {
    extend: 'NavixyPanel.view.components.AbstractList',
    alias: 'widget.userslist',

    store: 'Users',
    stateId: 'UsersList',

    getTexts: function () {
        return {
            createBtnText: _l.get('users.list.create_btn_text'),
            importBtnText: _l.get('users.list.import_btn_text'),
            emptyData: _l.get('users.list.empty_text')
        };
    },

    applyListeners: function () {
        this.callParent(arguments);
        this.store.on({
            load: {
                fn: function () {
                    this.fireEvent('firstload', this);
                },
                single: true,
                scope: this
            }
        })
    },


    getTopBar: function () {
        var toolbar = this.callParent(arguments);
        if (toolbar) {
            Ext.Array.insert(toolbar.items, 2, [Ext.apply({
                xtype: 'checkbox',
                boxLabel: _l.get('users.show_only_active_users'),
                name: 'only_active',
                margin: '0 0 0 10',
                stateful: true,
                stateId: 'ShowOnlyActiveUsers',
                stateEvents: ['change'],
                inputValue: true,
                getState: function () {
                    return {
                        checked: this.getValue()
                    };
                }
            }, Ext.state.Manager.get('ShowOnlyActiveUsers') || {})]);
        }

        return toolbar;
    },

    getBottomBar: function () {
        var bbar = this.callParent(arguments);

        if (Ext.checkPermission('users', 'read')) {
            bbar.items.unshift({
                xtype: 'button',
                text: _l.get('users.download_btn'),
                menuAlign: 'tr-br?',
                menu: {
                    xtype: 'menu',
                    cls: 'download-menu',
                    items: Ext.Array.map(['xlsx', 'csv'], function (format) {
                        return {
                            text: format.toUpperCase(),
                            name: format,
                            handler: this.fireDownload,
                            scope: this
                        };
                    }, this)
                }
            });
        }

        return bbar;
    },

    getColumnsConfig: function () {
        var userCardTpl = [
                '<span class="icon {legal_type}"></span>',
                '<a>',
                '<tpl if="legal_name && legal_type == \'legal_entity\'">',
                '{legal_name:htmlEncode}',
                '<tpl else>',
                '{last_name:htmlEncode} {first_name:htmlEncode} {middle_name:htmlEncode}',
                '</tpl>',
                '</a>',
                '<tpl if="!activated">',
                '<span class="scaled red">{[_l.get("users.fields.activated_short.status_false")]}</span>',
                '<tpl else>',
                '<tpl if="!verified">',
                '<span class="scaled green">{[_l.get("users.fields.activated_short.status_no")]}</span>',
                '</tpl>',
                '</tpl>',
                '</a>'
            ],
            userCityTpl = '{post_city:htmlEncode} <tpl if="registered_city"><span class="lighten">({registered_city:htmlEncode})</span></tpl>',
            balanceTpl = '{balance:balanceEncode}',
            bonusTpl = '{bonus:bonusEncode}',
            statusTpl = [
                '<tpl if="verified">',
                '<tpl if="verified">',
                '{[_l.get("users.fields.activated_short.status_true")]}',
                '<tpl else>',
                '{[_l.get("users.fields.activated_short.status_no")]}',
                '</tpl>',

                '<tpl else>',
                '<span class="gray nopad">{[_l.get("users.fields.activated_short.status_false")]}</span>',
                '</tpl>'
            ];

        return [
            {
                text: _l.get('users.fields.user_id'),
                dataIndex: 'id',
                width: 60
            },
            {
                text: _l.get('users.fields.full_name'),
                xtype: 'templatecolumn',
                tpl: userCardTpl,
                dataIndex: 'legal_name',
                sortable: true,
                flex: 3
            },
            {
                text: _l.get('users.fields.balance'),
                xtype: 'templatecolumn',
                tpl: balanceTpl,
                dataIndex: 'balance',
                width: 80
            },
            {
                text: _l.get('users.fields.bonus'),
                xtype: 'templatecolumn',
                tpl: bonusTpl,
                hidden: true,
                dataIndex: 'bonus',
                width: 80
            }, {
                text: _l.get('users.fields.trackers_count'),
                dataIndex: 'trackers_count',
                align: 'center',
                width: 80
            },
            {
                text: _l.get('users.fields.login_short'),
                dataIndex: 'login',
                flex: 1
            },
            {
                text: _l.get('settings.security.2fa.title_short'),
                dataIndex: 'mfa_allowed',
                flex: 1,
                renderer: function (value) {
                    return value ? _l.get('settings.security.enabled') : _l.get('settings.security.disabled');
                },
            },
            {
                text: _l.get('users.fields.phone'),
                dataIndex: 'phone',
                flex: 1
            }, {
                text: _l.get('users.fields.creation_date'),
                dataIndex: 'creation_date',
                renderer: function (value) {
                    return Ext.Date.formatISO(value, Ext.util.Format.dateFormat);
                },
                hidden: true,
                width: 120
            },
            {
                text: _l.get('users.fields.post_city'),
                xtype: 'templatecolumn',
                tpl: userCityTpl,
                dataIndex: 'post_city',
                sortable: true,
                resizable: false,
                flex: 1
            },
            {
                text: _l.get('trackers.fields.comment'),
                dataIndex: 'comment',
                minWidth: 140,
                resizable: true,
                hidden: true,
                sortable: false,
                flex: 1
            }
        ];
    },

    fireDownload: function (cmp) {
        this.fireEvent('downloaduserlist', this, cmp.name);
    }
});
