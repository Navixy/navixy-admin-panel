Ext.define('NavixyPanel.view.trackers.Card', {
    extend: 'NavixyPanel.view.components.AbstractCard',
    alias: 'widget.trackercard',
    stateful: true,
    stateId: 'trackerCard',

    getLinks: function () {
        var me = this;
        return [
            {
                html: '<a>' + _l.trackers.card.links.tracker_edit + '</a>',
                listeners: {
                    click: {
                        fn: me.fireTrackerEdit,
                        scope: me
                    }
                }
            }
        ];
    },

    prepareHeaderData: function () {
        var recordData = this.getRecordData(),
            userData = this.record.getParentUserData();

        return {
            title: recordData.label,
            main_cls: 'card-header-inner',
            table_cls: 'header-table',
            fields: [
                {
                    title: _l.trackers.fields.tracker_id_exp,
                    value: this.getRecordId()
                },
                {
                    title: _l.trackers.fields.label,
                    value: recordData.label
                },
                {
                    no_encode: true,
                    title: _l.trackers.fields.owner,
                    value: Ext.checkPermission('users', 'read') ? '<a href="#user/' +  userData.id + '">#' + userData.id + '</a> (' + (userData.legal_name || userData.last_name + ' ' + userData.first_name + ' ' + userData.middle_name) + ')' : "#" + userData.id
                },
                {
                    title: _l.trackers.fields.creation_date,
                    value: Ext.Date.formatISO(recordData.creation_date, "d-m-Y")
                },
                {
                    title: _l.trackers.fields.model,
                    value: recordData.model
                },
                {
                    title: _l.trackers.fields.device_id,
                    value: recordData.device_id
                },
                {
                    title: _l.trackers.fields.phone_exp,
                    value: recordData.phone
                },
                {
                    title: _l.trackers.fields.deleted,
                    value: _l[recordData.deleted ? 'yes' : 'no'],
                    left_td_cls: !recordData.deleted ? 'status ok' : 'status no'
                },
                {
                    title: _l.trackers.fields.blocked,
                    value: _l[recordData.blocked ? 'yes' : 'no'],
                    left_td_cls: !recordData.blocked ? 'status ok' : 'status no'
                }
            ]
        };
    },

    fireTrackerEdit: function () {
        this.fireEvent('trackeredit', this.record);
    }
});
