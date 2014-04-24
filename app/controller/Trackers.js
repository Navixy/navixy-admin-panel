/**
 * @class NavixyPanel.controller.Trackers
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Trackers', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'TrackersController',

    views: [
        'trackers.List',
        'trackers.Card',
        'trackers.Edit'
    ],

    refs: [
        {
            ref: 'trackersList',
            selector: 'trackerslist'
        },
        {
            ref: 'trackerEdit',
            selector: 'trackeredit'
        }
    ],

    stores: ['Trackers'],
    models: ['Tracker'],

    init: function () {
        this.callParent(arguments);


        this.control({
            'trackerslist': {
                actionclick: this.handleListAction,
                editclick: this.handleTrackerEditAction
            },
            'trackeredit' : {
                formsubmit: this.handleTrackerEditSubmit
            },
            'trackercard' : {
                trackeredit: this.handleTrackerEditAction
            }
        });

        this.handle({
            'trackers' : {
                fn: this.handleTrackers,
                access: 'read'
            },
            'tracker' : {
                fn: this.handleTrackerCard,
                access: 'read'
            },
            'tracker > edit' : {
                fn: this.handleTrackerEdit,
                access: 'update'
            }
        });

        this.menuConfig = {
            text: _l.trackers.menu_text,
            target: 'trackers'
        };
    },

    handleTrackerCard: function (value) {
        var trackerId = parseInt(value),
            trackerRecord = Ext.isNumber(trackerId) && Ext.getStore('Trackers').getById(trackerId);

        this.fireContent({
            xtype: 'trackercard',
            record: trackerRecord
        });
    },

    handleTrackers: function () {
        this.fireContent({
            xtype: 'trackerslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        });
    },

    handleTrackerEdit: function (value) {
        var trackerId = parseInt(value),
            trackerRecord = Ext.isNumber(trackerId) && Ext.getStore('Trackers').getById(trackerId);

        if (trackerRecord) {

            this.fireContent({
                xtype: 'trackeredit',
                record: trackerRecord
            });
        }
    },


    handleListAction: function (record) {
        var trackerId = record.getId();
        Ext.Nav.shift('tracker/' + trackerId);
    },

    handleTrackerEditAction: function (record) {
        var userId = record.getId();
        Ext.Nav.shift('tracker/' + userId + '/edit');
    },

    handleTrackerEditSubmit: function (cmp, formValues, record) {

        record.set(formValues);

        console.log(record.getChanges());

        var trackerChanges = record.getTrackerChanges(),
            sourceChanges = record.getSourceChanges(),
            trackerData = record.getData(),
            requestsCnt = 0;

        if (trackerChanges) {
            requestsCnt++ ;
            Ext.API.updateTrackerData({
                params: {
                    tracker_id: trackerData.id,
                    label: trackerData.label,
                    deleted: trackerData.deleted
                },
                callback: function (response) {
                    if (--requestsCnt === 0)  {
                        this.afterTrackerEdit(response, record);
                    }
                },
                failure: function (response) {
                    --requestsCnt;
                    this.afterTrackerEditFailure(response, record);
                },
                scope: this
            });
        }

        if (sourceChanges) {
            requestsCnt++ ;
            Ext.API.updateTrackerSource({
                params: {
                    tracker_id: trackerData.id,
                    blocked: trackerData.blocked
                },
                callback: function (response) {
                    if (--requestsCnt === 0)  {
                        this.afterTrackerEdit(response, record);
                    }
                },
                failure: function (response) {
                    --requestsCnt;
                    this.afterTrackerEditFailure(response, record);
                },
                scope: this
            });
        }
    },

    afterTrackerEdit: function (success, record) {
        if (success) {
            try {
                record.commit();
            } catch (e) {}

            this.getTrackerEdit().afterSave();
        } else {
            record.reject(false);
        }
    },

    afterTrackerEditFailure: function (response, record) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = status.description || false;

        this.getTrackerEdit().showSubmitErrors(errCode, errors, errDescription);
    }
});