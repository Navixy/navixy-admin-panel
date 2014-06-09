Ext.define('NavixyPanel.view.users.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.usercard',
    stateful: true,
    stateId: 'userCard',


    getLinks: function () {
        var me = this,
            result = [
                {
                    html: '<a>' + _l.users.card.links.session_text + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireSessionCreate,
                            scope: me
                        }
                    }
                }
            ];

        result.unshift(
            {
                xtype: 'container',
                height: 10
            }
        );

        if (Ext.checkPermission('users', 'update') && Ext.checkPermission('transactions', 'create')) {
            result.unshift(
                {
                    html: '<a>' + _l.users.card.links.create_transaction + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireUserCrateTransaction,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('users', 'update')) {
            result.unshift(
                {
                    html: '<a>' + _l.users.card.links.user_edit + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireUserEdit,
                            scope: me
                        }
                    }
                }
            );
        }

        return result;
    },

    getPanelTitle: function () {
        return false;
    },

    getTabPanelItems: function () {
        return [
            {
                xtype: 'trackerslist',
                title: _l.users.card.tab_panel.trackers.title,
                noTBar: true,
                filter: {
                    user_id: this.getRecordId()
                },
                hasEdit: Ext.checkPermission('trackers', 'read')
            },
            {
                xtype: 'usertransactions',
                noTBar: true,
                title: _l.users.card.tab_panel.transactions.title,
                record: this.record
            }
        ];
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData(),
            fio = recordData.last_name + ' ' + recordData.first_name + ' ' + recordData.middle_name;

        return {
            title: recordData.legal_name || recordData.last_name + ' ' + recordData.first_name + ' ' + recordData.middle_name,
            title_add: recordData.legal_name && fio,
            main_cls: 'card-header-inner',
            table_cls: 'header-table',
            fields: [
                {
                    title: _l.users.fields.user_id_exp,
                    value: this.getRecordId()
                },
                {
                    title: _l.users.fields.login_short,
                    value: recordData.login
                },
                {
                    title: _l.users.fields.activated_short.title,
                    value: _l.users.fields.activated_short[recordData.activated ? 'status_true' : 'status_false'],
                    left_td_cls: recordData.activated ? 'status ok' : 'status no'
                },
                {
                    title: _l.users.fields.balance,
                    value: recordData.balance
                },
                {
                    title: _l.users.fields.bonus,
                    value: recordData.bonus
                },
                {
                    title: _l.users.fields.post_city,
                    value: recordData.post_city
                },
                {
                    title: _l.users.fields.registered_city,
                    value: recordData.registered_city
                },
                {
                    title: _l.users.fields.legal_type,
                    value: _l.users.fields[recordData.legal_type] || ''
                },
                {
                    title: _l.users.fields.phone,
                    value: recordData.phone
                }
            ]
        };
    },

    prepareBodyLeftData: function () {
        var recordData = this.getRecordData();

        return {
            title: _l.users.create_form.address_fields,
            main_cls : 'card-body-inner',
            table_cls: 'body-table',
            fields: [
                {
                    title: _l.users.fields.post_country,
                    value: recordData.post_country
                },
                {
                    title: _l.users.fields.post_index,
                    value: recordData.post_index
                },
                {
                    title: _l.users.fields.post_region,
                    value: recordData.post_region
                },
                {
                    title: _l.users.fields.post_city,
                    value: recordData.post_city
                },
                {
                    title: _l.users.fields.post_street_address,
                    value: recordData.post_street_address
                }
            ]
        };
    },

    prepareBodyRightData: function () {
        var recordData = this.getRecordData();

        return {
            title: _l.users.create_form.legal_fields,
            main_cls : 'card-body-inner',
            table_cls: 'body-table',
            fields: [
                {
                    title: _l.users.fields.registered_country,
                    value: recordData.registered_country
                },
                {
                    title: _l.users.fields.registered_index,
                    value: recordData.registered_index
                },
                {
                    title: _l.users.fields.registered_region,
                    value: recordData.registered_region
                },
                {
                    title: _l.users.fields.registered_city,
                    value: recordData.registered_city
                },
                {
                    title: _l.users.fields.registered_street_address,
                    value: recordData.registered_street_address
                },
                {
                    title: _l.users.fields.tin,
                    value: recordData.tin
                },
                {
                    title: _l.users.fields.iec,
                    value: recordData.iec
                }
            ]
        };
    },

    fireSessionCreate: function () {
        var userId = this.record.getId(),
            win = window.open('', '_blank');

        Ext.API.createUserSession({
            params: {
                user_id: userId
            },
            callback: function(hash) {
                win.location = Ext.Nav.getMonitoring(hash);
            },
            failure: this.showUserSessionHashFailure
        });
    },

    showUserSessionHashFailure: function () {
        Ext.MessageBox.alert(_l.error, _l.users.session_alert.error);
    },

    fireUserEdit: function () {
        this.fireEvent('useredit', this.record);
    },

    fireTransactionsShow: function () {
        Ext.Nav.shift('user/' + this.record.getId() + '/transactions');
    },

    fireUserCrateTransaction: function () {
        Ext.Nav.shift('user/' + this.record.getId() + '/transaction_add');
    }
});
