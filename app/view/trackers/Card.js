Ext.define('NavixyPanel.view.trackers.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.trackercard',
    stateful: true,
    stateId: 'trackerCard',

    getLinks: function () {
        var me = this,
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

        if (Ext.checkPermission('trackers', 'create') && !this.getRecordData().clone) {
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

        if (Ext.checkPermission('trackers', 'delete') && this.getRecordData().clone) {
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

        if (Ext.checkPermission('trackers', 'update') && Ext.checkPermission('transactions', 'create') && Ext.checkPermission('tariffs', 'read') && !this.getRecordData().clone && !this.getRecordData().deleted) {
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


        if (Ext.checkPermission('trackers', 'corrupt') && !this.getRecordData().clone) {

            result.push(
                {
                    xtype: 'container',
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
                    value: Ext.checkPermission('users', 'read') ? '<a href="#user/' +  userData.id + '">#' + userData.id + '</a> (' + (userData.legal_name || userData.last_name + ' ' + userData.first_name + ' ' + userData.middle_name) + ')' : "#" + userData.id
                },
                {
                    no_encode: true,
                    no_empty: true,
                    title: _l.get('trackers.fields.tariff'),
                    value: tariffData && (Ext.checkPermission('tariffs', 'read') ? '<a href="#tariff/' +  tariffData.id + '">#' + tariffData.id + '</a> (' + (tariffData.name) + ')' : "#" + tariffData.id)
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
        Ext.MessageBox.show({
            title: _l.get('trackers.corrupt.alert.title'),
            msg: _l.get('trackers.corrupt.alert.text'),
            width: 500,
            buttons: Ext.MessageBox.OKCANCEL,
            icon: Ext.MessageBox.WARNING,
            fn: Ext.bind(this.sendTrackerCorrupt, this)
        });
    },

    sendTrackerCorrupt: function () {
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
    }
});
