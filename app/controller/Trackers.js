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
        'trackers.Clone',
        'trackers.Console',
        'trackers.Edit',
        'trackers.Tariff'
    ],

    refs: [
        {
            ref: 'trackersList',
            selector: 'trackerslist'
        },
        {
            ref: 'trackerTariff',
            selector: 'trackertariff'
        },
        {
            ref: 'trackerEdit',
            selector: 'trackeredit'
        }
    ],

    stores: ['Trackers'],
    models: ['Tracker'],
    waitStores: ['Trackers'],

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
            'trackertariff' : {
                formsubmit: this.handleTrackerTariffSubmit
            },
            'trackerclone' : {
                formsubmit: this.handleTrackerCloneSubmit
            },
            'trackercard' : {
                trackeredit: this.handleTrackerEditAction,
                trackerclone: this.handleTrackerCloneAction,
                trackerclonedelete: this.handleTrackerCloneDeleteAction,
                trackertariffshow: this.handleTrackerTariffRef,
                trackerownershow: this.handleTrackerOwnerRef,
                trackertariffedit: this.onTrackerTariffEditAction,
                trackerconsole: this.onTrackerConsole
            }
        });

        this.handle({
            'trackers' : {
                fn: this.handleTrackers,
                access: 'read'
            },
            'tracker' : {
                fn: this.handleTrackerCard,
                access: 'read',
                waitStores: ['Users', 'Tariffs']
            },
            'tracker > edit' : {
                fn: this.handleTrackerEdit,
                access: 'update',
                waitStores: ['Users']
            },
            'tracker > clone' : {
                fn: this.handleTrackerClone,
                access: 'create',
                waitStores: ['Users']
            },
            'tracker > console' : {
                fn: this.handleTrackerConsole,
                access: 'update'
            },
            'tracker > tariff' : {
                fn: this.handleTrackerTariffEdit,
                access: 'update',
                waitStores: ['Tariffs']
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
            createBtn: false,
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

    handleTrackerTariffEdit: function (value) {
        var trackerId = parseInt(value),
            trackerRecord = Ext.isNumber(trackerId) && Ext.getStore('Trackers').getById(trackerId);

        if (trackerRecord) {

            this.fireContent({
                xtype: 'trackertariff',
                record: trackerRecord
            });
        }
    },

    handleTrackerClone: function (value) {
        var trackerId = parseInt(value),
            trackerRecord = Ext.isNumber(trackerId) && Ext.getStore('Trackers').getById(trackerId);

        if (trackerRecord) {

            this.fireContent({
                xtype: 'trackerclone',
                record: trackerRecord
            });
        }
    },

    handleTrackerConsole: function (value) {
        var trackerId = parseInt(value),
            trackerRecord = Ext.isNumber(trackerId) && Ext.getStore('Trackers').getById(trackerId);

        if (trackerRecord) {
            this.fireContent({
                xtype: 'trackerconsole',
                record: trackerRecord
            });
        }
    },


    handleListAction: function (record) {
        var trackerId = record.getId();
        Ext.Nav.shift('tracker/' + trackerId);
    },

    handleTrackerEditAction: function (record) {
        var trackerId = record.getId();
        Ext.Nav.shift('tracker/' + trackerId + '/edit');
    },

    onTrackerTariffEditAction: function (record) {
        var trackerId = record.getId();
        Ext.Nav.shift('tracker/' + trackerId + '/tariff');
    },

    handleTrackerCloneAction: function (record) {
        var trackerId = record.getId();
        Ext.Nav.shift('tracker/' + trackerId + '/clone');
    },

    handleTrackerEditSubmit: function (cmp, formValues, record) {

        record.set(formValues);

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

        if (trackerChanges && trackerChanges.user_id) {
            requestsCnt++ ;
            Ext.API.updateTrackerUser({
                params: {
                    tracker_id: trackerData.id,
                    user_id: trackerData.user_id
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
            errDescription = _l.errors.tracker[errCode] || _l.errors[errCode] || status.description || false;

        this.getTrackerEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    handleTrackerCloneSubmit: function (cmp, formValues, record) {
        var trackerData = record.getData();

        if (formValues.label && formValues.user_id && record) {
            Ext.API.createTrackerClone({
                params: {
                    tracker_id: trackerData.id,
                    label: formValues.label,
                    user_id: formValues.user_id
                },
                callback: function (response) {
                    this.afterTrackerCloneCreate(response, record, formValues);
                },
                failure: function (response) {
                    Ext.MessageBox.alert(_l.error, _l.trackers.clone_form.failure_msg);
                },
                scope: this
            });
        }
    },

    afterTrackerCloneCreate: function (trackerId, record, values) {
        if (trackerId && values) {
            var trackerData = Ext.apply(record.getData(), {
                    label: values.label,
                    user_id: values.user_id,
                    id: trackerId,
                    clone: true,
                    deleted: false
                }
            );

            Ext.getStore('Trackers').add(trackerData);

            if (Ext.checkPermission(this.getModuleName(), 'read')) {
                this.handleTrackerCard(trackerId);
            } else {
                Ext.Nav.shift('/');
            }
        }
    },

    handleTrackerCloneDeleteAction: function (record) {
        var me = this;
        if (record) {
            Ext.MessageBox.show({
                msg: _l.trackers.clone_form.remove_confirm + ' "' + record.get('label') + '"?',
                buttons: Ext.MessageBox.YESNO,
                closable: false,
                fn: function() {
                    me.trackerCloneRemove(record);
                }
            });
        }
    },

    trackerCloneRemove: function (record) {
        Ext.API.removeTrackerClone({
            params: {
                tracker_id: record.get('id'),
            },
            callback: function (response) {
                this.afterTrackerCloneRemove(response, record);
            },
            failure: function (response) {
                this.afterTrackerCloneRemoveFailure(response, record);
//                Ext.MessageBox.alert(_l.error, _l.trackers.clone_form.remove_failure_msg);
            },
            scope: this
        });
    },

    afterTrackerCloneRemove: function (response, record) {
        if (response) {
            Ext.getStore('Trackers').remove(record);

            if (Ext.checkPermission(this.getModuleName(), 'read')) {
                this.handleTrackers();
            } else {
                Ext.Nav.shift('/');
            }
        }
    },

    afterTrackerCloneRemoveFailure: function (response, record) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.errors.tracker[errCode] || _l.errors[errCode] || status.description || false;

        Ext.MessageBox.alert(_l.error, errDescription);
    },

    handleTrackerTariffSubmit: function (cmp, formValues, record) {

        record.set({tariff_id: formValues.tariff_id});

        var trackerChanges = record.getTrackerChanges(),
            trackerData = record.getData(),
            requestsCnt = 0;

        Ext.API.updateTrackerTariff({
            params: {
                tracker_id: trackerData.id,
                tariff_id: trackerData.tariff_id,
                charge: formValues.charge,
                repay: formValues.repay
            },
            callback: function (response) {
                this.afterTrackerTariffEdit(response, record);
            },
            failure: function (response) {
                this.afterTrackerTariffEditFailure(response, record);
            },
            scope: this
        });
    },


    afterTrackerTariffEdit: function (success, record) {
        if (success) {
            try {
                record.commit();
            } catch (e) {}

            this.getTrackerTariff().afterSave();
        } else {
            record.reject(false);
        }
    },

    afterTrackerTariffEditFailure: function (response, record) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.errors.tracker[errCode] || _l.errors[errCode] || status.description || false;

        console.log(errCode, errors, errDescription);
        this.getTrackerTariff().showSubmitErrors(errCode, errors, errDescription);
    },


    handleTrackerTariffRef: function (record) {
        var tariffId = record.get('tariff_id');

        if (tariffId !== null && Ext.checkPermission('tariffs', 'read')) {
            Ext.Nav.shift('tariff/' + tariffId);
        }
    },

    handleTrackerOwnerRef: function (record) {
        var userId = record.get('user_id');

        if (userId !== null && Ext.checkPermission('users', 'read')) {
            Ext.Nav.shift('user/' + userId);
        }
    },

    onTrackerConsole: function (record) {
        var trackerId = record.get('id');

        if (trackerId !== null) {
            Ext.Nav.shift('tracker/' + trackerId + '/console');
        }
    }
});