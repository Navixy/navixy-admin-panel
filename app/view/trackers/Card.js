Ext.define('NavixyPanel.view.trackers.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.trackercard',
    stateful: true,
    stateId: 'trackerCard',

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
                    html: _l.get('errors.252'),
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
            tracker = this.getRecordData(),
            result = [];

        if (Ext.checkPermission('trackers', 'update')) {
            result.unshift(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_edit') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerEdit,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('trackers', 'update') && typeof WebSocket !== 'undefined') {
            result.unshift(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_console') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerConsole,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('trackers', 'update') && Ext.checkPermission('users', 'read') &&
            Ext.checkPermission('user_sessions', 'create') && !tracker.clone && !tracker.blocked)
        {
            result.push(this.isAppLinkCorrect({tracker_id: 'tracker_id'}) ? {
                html: '<a>' + _l.get('trackers.card.links.tracker_settings') + '</a>',
                listeners: {
                    click: {
                        fn: me.openTrackerSettings,
                        scope: me
                    }
                }
            } : {
                html: '<a class="x-item-disabled" data-qtip="' + _l.get('users.card.links.wrong_config') +  '">' +
                _l.get('trackers.card.links.tracker_settings') + '</a>'
            });
        }

        if (Ext.checkPermission('trackers', 'create') && !tracker.clone) {
            result.push(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_clone_create') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerClone,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('trackers', 'delete') && tracker.clone) {
            result.push(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_clone_remove') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerCloneDelete,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('trackers', 'update') && Ext.checkPermission('transactions', 'create') && Ext.checkPermission('tariffs', 'read') && !tracker.clone && !tracker.deleted) {
            result.push(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_tariff_edit') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerTariffEdit,
                            scope: me
                        }
                    }
                }
            );
        }

        result.push(
            {
                xtype: 'container',
                height: 10
            }
        );

        // TODO: fix links
        if (Ext.checkPermission('users', 'read') && this.record.getUsersData()) {
            result.push(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_owner') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerOwner,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('tariffs', 'read') && this.record.getTariffsData()) {
            result.push(
                {
                    html: '<a>' + _l.get('trackers.card.links.tracker_tariff') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerTariff,
                            scope: me
                        }
                    }
                }
            );
        }

        if (Ext.checkPermission('trackers', 'corrupt') && !tracker.clone) {

            result.push(
                {
                    xtype: 'component',
                    height: 10
                }
            );

            result.push(
                {
                    html: '<a style="color: red">' + _l.get('trackers.card.links.tracker_corrupt') + '</a>',
                    listeners: {
                        click: {
                            fn: me.fireTrackerCorrupt,
                            scope: me
                        }
                    }
                }
            );
        }
        if (Ext.checkPermission('trackers', 'update') && this.isRetryRegisterAllowed(tracker)) {
            result.push({
                html: '<a style="font-weight: bold">' + _l.get('trackers.card.links.tracker_register_retry') + '</a>',
                margin: '15 0 0 0',
                role: 'register_retry_link',
                listeners: {
                    click: {
                        fn: me.fireTrackerRegisterRetry,
                        scope: me
                    },
                    afterrender: function () {
                        var retryLink = this;

                        if (Ext.util.Cookies.get('panel-need-to-retry-registration-' + tracker.id)) {
                            retryLink.disable();
                            retryLink.setTip(_l.get('trackers.card.links.countdown_msg'));

                            retryLink.interval = setInterval(function () {
                                if (!Ext.util.Cookies.get('panel-need-to-retry-registration-' + tracker.id)) {
                                    retryLink.enable();
                                    retryLink.removeTip();
                                    clearInterval(retryLink.interval);
                                }
                            }, 5000);
                        }

                    },
                    beforedestroy: function () {
                        if (this.interval) {
                            clearInterval(this.interval);
                        }
                        if (this.timeout) {
                            clearTimeout(this.timeout);
                        }
                    }
                }
            });
        }

        return result;
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData(),
            userData = this.record.getUsersData(),
            tariffData = this.record.getTariffsData();

        return {
            title: recordData.label,
            title_add: recordData.clone ? _l.get('trackers.fields.clone') : false,
            main_cls: 'card-header-inner',
            table_cls: 'header-table',
            fields: [
                {
                    title: _l.get('trackers.fields.tracker_id_exp'),
                    value: this.getRecordId()
                },
                {
                    title: _l.get('trackers.fields.label'),
                    value: recordData.label
                },
                {
                    no_encode: true,
                    title: _l.get('trackers.fields.owner'),
                    value: Ext.checkPermission('users', 'read') ? '<a href="#user/' + userData.id + '">#' + userData.id + '</a> (' + (userData.legal_name || userData.last_name + ' ' + userData.first_name + ' ' + userData.middle_name) + ')' : "#" + userData.id
                },
                {
                    no_encode: true,
                    no_empty: true,
                    title: _l.get('trackers.fields.tariff'),
                    value: tariffData && (Ext.checkPermission('tariffs', 'read') ? '<a href="#tariff/' + tariffData.id + '">#' + tariffData.id + '</a> (' + (tariffData.name) + ')' : "#" + tariffData.id)
                },
                {
                    title: _l.get('trackers.fields.creation_date'),
                    value: Ext.Date.formatISO(recordData.creation_date, Ext.util.Format.dateFormat)
                },
                {
                    title: _l.get('trackers.fields.model'),
                    value: recordData.model_name
                },
                {
                    title: _l.get('trackers.fields.device_id'),
                    value: recordData.device_id
                },
                {
                    title: _l.get('trackers.fields.phone_exp'),
                    value: recordData.phone
                },
                {
                    title: _l.get('trackers.fields.deleted'),
                    value: _l[recordData.deleted ? 'yes' : 'no'],
                    left_td_cls: !recordData.deleted ? 'status ok' : 'status no'
                },
                {
                    title: _l.get('trackers.fields.blocked'),
                    value: _l[recordData.blocked ? 'yes' : 'no'],
                    left_td_cls: !recordData.blocked ? 'status ok' : 'status no'
                }
            ]
        };
    },

    fireTrackerConsole: function () {
        this.fireEvent('trackerconsole', this.record);
    },

    fireTrackerEdit: function () {
        this.fireEvent('trackeredit', this.record);
    },

    fireTrackerTariffEdit: function () {
        this.fireEvent('trackertariffedit', this.record);
    },

    fireTrackerClone: function () {
        this.fireEvent('trackerclone', this.record);
    },

    fireTrackerCloneDelete: function () {
        this.fireEvent('trackerclonedelete', this.record);
    },

    fireTrackerTariff: function () {
        this.fireEvent('trackertariffshow', this.record);
    },

    fireTrackerOwner: function () {
        this.fireEvent('trackerownershow', this.record);
    },

    fireTrackerCorrupt: function () {
        Ext.create('Ext.MessageBoxWithAlert', {
            title: _l.get('trackers.corrupt.alert.title'),
            msg: _l.get('trackers.corrupt.alert.text'),
            agreeAction: Ext.bind(this.sendTrackerCorrupt, this)
        }).show();
    },

    fireTrackerRegisterRetry: function () {
        if (!this.retryLink.disabled) {
            Ext.MessageBox.show({
                title: _l.get('trackers.retry_registraion.alert.title'),
                msg: _l.get('trackers.retry_registraion.alert.text'),
                width: 500,
                buttons: Ext.MessageBox.OKCANCEL,
                icon: Ext.MessageBox.WARNING,
                fn: Ext.bind(this.sendTrackerRegisterRetry, this)
            });
        }
    },

    sendTrackerCorrupt: function (window) {
        Ext.API.setTrackerCorrupt({
            params: {
                tracker_id: this.record.getId()
            },
            callback: function () {
                this.fireEvent('trackerremoved', this.record);
            },
            failure: function () {
                this.fireEvent('trackerremovefailure', this.record, arguments[0]);
            },
            scope: this
        });
        window.close();
    },

    sendTrackerRegisterRetry: function (result) {
        if (result === "ok") {
            var retryLink = this.retryLink,
                tracker = this.getRecordData();

            //Rate limiter is here because api launches the rate limiter on request instead of the success retry
            this.retryLink.disable();
            this.retryLink.setTip(_l.get('trackers.card.links.countdown_msg'));
            Ext.util.Cookies.set('panel-need-to-retry-registration-' + this.getRecordData().id, 1, moment().add(2, 'minutes').toDate());

            Ext.API.registerRetry({
                params: {
                    tracker_id: this.record.getId()
                },
                failure: function (err) {
                    if (err.status.code === 214 && retryLink.timeout) {
                        Ext.util.Cookies.clear('panel-need-to-retry-registration-' + this.getRecordData().id);
                        clearTimeout(retryLink.timeout);
                        retryLink.enable();
                        retryLink.removeTip();
                    }
                },
                scope: this
            });

            retryLink.timeout = setTimeout(function () {
                if (!Ext.util.Cookies.get('panel-need-to-retry-registration-' + tracker.id)) {
                    retryLink.enable();
                    retryLink.removeTip();
                }
            }, 2 * 60 * 1000);
        }
    },

    getUserId: function () {
        return this.record.get('user_id');
    },

    openTrackerSettings: function () {
        this.fireEvent('opentrackersettings', this);
    },

    isRetryRegisterAllowed: function (tracker) {
        var forbiddenModel = /^navixymobile|^mobile_unknown|^iosnavixytracker/gi.exec(tracker.model);
        return !forbiddenModel && !tracker.blocked && !tracker.source.corrupted && !tracker.clone;
    },

    afterRender: function () {
        this.callParent(arguments);
        this.retryLink = this.down('component[role=register_retry_link]');
    }
});
