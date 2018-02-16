Ext.define('NavixyPanel.view.users.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.usercard',
    stateful: true,
    stateId: 'userCard',

    getItemsConfig: function () {
        if (this.getRecordData() === false) {
            return [{
                xtype: 'panel',
                ui: 'light',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                bodyPadding: '10 20',
                title: this.getPanelTitle(),
                items: [{
                    xtype: 'component',
                    html: _l.get('errors.user.252'),
                    style: 'font-size:15px;color: #f44336 !important;',
                    margin: '0 0 10 0'
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'button',
                        text: _l.get('back_form_btn'),
                        ui: "gray-small",
                        handler: Ext.Nav.back
                    }, {
                        xtype: 'component',
                        flex: 1
                    }]
                }]
            }];
        }

        return this.callParent(arguments);
    },

    getLinks: function () {
        var me = this,
            result = [
                {
                    xtype: 'component',
                    height: 10
                }
            ];

        if (Ext.checkPermission('users', 'read') && Ext.checkPermission('user_sessions', 'create')) {
            result.push({
                html: '<a>' + _l.get('users.card.links.session_text') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireSessionCreate,
                        scope: me
                    }
                }
            }, {
                html: '<a>' + _l.get('users.card.links.hash_text') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireSessionCreateHash,
                        scope: me
                    }
                }
            }, {
                xtype: 'component',
                height: 10
            }, this.isAppLinkCorrect() ? {
                html: '<a>' + _l.get('users.card.links.activate_tracker') + '</a>',
                listeners: {
                    click: {
                        fn: me.toggleActivationPanel,
                        scope: me
                    }
                }
            } : {
                html: '<a class="x-item-disabled" data-qtip="' + _l.get('users.card.links.wrong_config') + '">' +
                _l.get('users.card.links.activate_tracker') + '</a>'
            });
        }

        if (Ext.checkPermission('users', 'update')) {
            result.unshift({
                html: '<a>' + _l.get('users.card.links.user_change_password') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireUserChangePassword,
                        scope: me
                    }
                }
            });

            if (Ext.checkPermission('transactions', 'create')) {
                result.unshift({
                    html: '<a>' + _l.get('users.card.links.create_transaction') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireUserCrateTransaction,
                            scope: me
                        }
                    }
                });
            }

            result.unshift({
                html: '<a>' + _l.get('users.card.links.user_edit') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireUserEdit,
                        scope: me
                    }
                }
            });
        }

        if (Ext.checkPermission('users', 'corrupt')) {
            result.push({
                xtype: 'component',
                height: 10
            }, {
                html: '<a style="color: red">' + _l.get('users.card.links.corrupt') + '</a>',
                listeners: {
                    click: {
                        fn: me.fireCorruptUser,
                        scope: me
                    }
                }
            });
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
                title: _l.get('users.card.tab_panel.trackers.title'),
                stateId: 'UserTrackersList',
                noTBar: true,
                filter: {
                    user_id: this.getRecordId()
                },
                hasEdit: Ext.checkPermission('trackers', 'read')
            },
            {
                xtype: 'usertransactions',
                noTBar: true,
                title: _l.get('users.card.tab_panel.transactions.title'),
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
                    title: _l.get('users.fields.user_id_exp'),
                    value: this.getRecordId()
                },
                {
                    title: _l.get('users.fields.login_short'),
                    value: recordData.login
                },
                {
                    title: _l.get('users.fields.activated_short.title'),
                    value: _l.get('users.fields.activated_short')[recordData.activated ? recordData.verified ? 'status_true' : 'status_no' : 'status_false'],
                    left_td_cls: recordData.activated ? recordData.verified ? 'status ok' : 'status not' : 'status no'
                },
                {
                    title: _l.get('users.fields.balance'),
                    value: Ext.Number.toFixed(recordData.balance, 4)
                },
                {
                    title: _l.get('users.fields.bonus'),
                    value: Ext.Number.toFixed(recordData.bonus, 4)
                },
                {
                    title: _l.get('users.fields.post_city'),
                    value: recordData.post_city
                },
                {
                    title: _l.get('users.fields.registered_city'),
                    value: recordData.registered_city
                },
                {
                    title: _l.get('users.fields.legal_type'),
                    value: '<span class="icon ' + recordData.legal_type + '"></span>' + _l.get('users.fields')[recordData.legal_type] || '',
                    no_encode: true
                },
                {
                    title: _l.get('users.fields.creation_date'),
                    value: Ext.Date.formatISO(recordData.creation_date, Ext.util.Format.dateFormat)
                },  {
                    title: _l.get('users.fields.trackers_count'),
                    value: recordData.trackers_count
                },
                {
                    title: _l.get('users.fields.phone'),
                    value: recordData.phone
                },
                {
                    title: _l.get('users.fields.discount.value'),
                    margin: '10 0 0 0',
                    value: recordData.discount + '%'
                },
                {
                    title: _l.get('users.fields.discount.end_date'),
                    value: recordData.discount_end_date ? Ext.Date.formatISO(recordData.discount_end_date, Ext.util.Format.dateFormat) : _l.get('users.fields.discount.permanent')
                },
                {
                    title: _l.get('users.fields.discount.min_trackers'),
                    value: recordData.discount_min_trackers
                }
            ]
        };
    },

    prepareBodyLeftData: function () {
        var recordData = this.getRecordData();

        return {
            title: _l.get('users.create_form.address_fields'),
            main_cls: 'card-body-inner',
            table_cls: 'body-table',
            fields: [
                {
                    title: _l.get('users.fields.post_country'),
                    value: recordData.post_country
                },
                {
                    title: _l.get('users.fields.post_index'),
                    value: recordData.post_index
                },
                {
                    title: _l.get('users.fields.post_region'),
                    value: recordData.post_region
                },
                {
                    title: _l.get('users.fields.post_city'),
                    value: recordData.post_city
                },
                {
                    title: _l.get('users.fields.post_street_address'),
                    value: recordData.post_street_address
                }
            ]
        };
    },

    prepareBodyRightData: function () {
        var recordData = this.getRecordData();

        return {
            title: _l.get('users.create_form.legal_fields'),
            main_cls: 'card-body-inner',
            table_cls: 'body-table',
            fields: [
                {
                    title: _l.get('users.fields.registered_country'),
                    value: recordData.registered_country
                },
                {
                    title: _l.get('users.fields.registered_index'),
                    value: recordData.registered_index
                },
                {
                    title: _l.get('users.fields.registered_region'),
                    value: recordData.registered_region
                },
                {
                    title: _l.get('users.fields.registered_city'),
                    value: recordData.registered_city
                },
                {
                    title: _l.get('users.fields.registered_street_address'),
                    value: recordData.registered_street_address
                },
                {
                    title: _l.get('users.fields.tin'),
                    value: recordData.tin
                },
                {
                    title: _l.get('users.fields.iec'),
                    value: recordData.iec
                }
            ]
        };
    },

    getUserId: function () {
        return this.record.getId();
    },

    fireUserEdit: function () {
        this.fireEvent('useredit', this.record);
    },

    fireUserChangePassword: function () {
        Ext.Nav.shift('user/' + this.record.getId() + '/change_password');
    },

    fireTransactionsShow: function () {
        Ext.Nav.shift('user/' + this.record.getId() + '/transactions');
    },

    fireUserCrateTransaction: function () {
        Ext.Nav.shift('user/' + this.record.getId() + '/transaction_add');
    },

    fireCorruptUser: function () {
        this.fireEvent('usercorrupt', this.record);
    },

    toggleActivationPanel: function () {
        this.fireEvent('toggleactivationpanel');
    }
});