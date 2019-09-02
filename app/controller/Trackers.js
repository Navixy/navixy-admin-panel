/**
 * @class NavixyPanel.controller.Trackers
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Trackers', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'TrackersController',

    views: [
        'components.MessageBoxWithAlert',

        'trackers.List',
        'trackers.Card',
        'trackers.Clone',
        'trackers.Console',
        'trackers.Edit',
        'trackers.Tariff',
        'trackers.GroupClone',
        'trackers.GroupOwner'
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
        },
        {
            ref: 'trackerClone',
            selector: 'trackerclone'
        },
        {
            ref: 'trackerGroupClone',
            selector: 'trackersgroupclone'
        },
        {
            ref: 'trackerGroupOwner',
            selector: 'trackersgroupowner'
        }
    ],

    stores: ['Trackers'],
    models: ['Tracker'],
    mainStore: 'Trackers',
    requires: ['NavixyPanel.view.trackers.TrackerSettingsWindow'],

    init: function () {
        this.callParent(arguments);


        this.control({
            'trackerslist': {
                actionclick: this.handleListAction,
                editclick: this.handleTrackerEditAction,
                clonetrackers: this.handleGroupClone,
                deleteclonetrackers: this.handleDeleteClones,
                ownertrackers: this.handleGroupOwner,
                clonefilterchange: this.onClonesFilterChange
            },
            'trackersgroupclone' : {
                formsubmit: this.onGroupCloneSubmit,
                back: this.handleTrackers
            },
            'trackersgroupowner' : {
                formsubmit: this.onGroupOwnerSubmit,
                back: this.handleTrackers
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
                trackerconsole: this.onTrackerConsole,
                trackerremoved: this.onTrackerRemove,
                trackerremovefailure: this.onTrackerRemoveFailure,
                opentrackersettings: this.openTrackerSettings
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
                loadRecord: true
            },
            'tracker > edit' : {
                fn: this.handleTrackerEdit,
                access: 'update',
                loadRecord: true,
                loadAssociations: ['Users']
            },
            'tracker > clone' : {
                fn: this.handleTrackerClone,
                access: 'create',
                loadRecord: true,
                loadAssociations: ['Users']
            },
            'tracker > console' : {
                fn: this.handleTrackerConsole,
                loadRecord: true,
                access: 'update',
                loadAssociations: false
            },
            'tracker > tariff' : {
                fn: this.handleTrackerTariffEdit,
                access: 'update',
                loadRecord: true,
                loadAssociations: ['Tariffs']
            }
        });

        this.menuConfig = {
            text: _l.get('trackers.menu_text'),
            target: 'trackers'
        };
    },

    handleTrackerCard: function (trackerRecord) {
        this.fireContent({
            xtype: 'trackercard',
            record: trackerRecord
        });
    },

    handleTrackers: function () {
        this.fireContent({
            xtype: 'trackerslist',
            createBtn: false,
            hasSelection: true,
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        });
    },

    handleTrackerEdit: function (trackerRecord) {
        this.fireContent({
            xtype: 'trackeredit',
            record: trackerRecord
        });
    },

    handleTrackerTariffEdit: function (trackerRecord) {
        this.fireContent({
            xtype: 'trackertariff',
            record: trackerRecord
        });
    },

    handleTrackerClone: function (trackerRecord) {
        this.fireContent({
            xtype: 'trackerclone',
            record: trackerRecord
        });
    },

    handleTrackerConsole: function (trackerRecord) {
        this.fireContent({
            xtype: 'trackerconsole',
            record: trackerRecord
        });
    },

    handleGroupClone: function (records) {
        this.fireContent({
            xtype: 'trackersgroupclone',
            record: records || false
        });
    },

    handleDeleteClones: function (records) {
        var me = this
        Ext.MessageBox.show({
            msg: Ext.String.format(
                _l.get('trackers.confirm_delete_clones'),
                Ext.util.Format.units(records.length, 'clones', true)
            ),
            buttons: Ext.MessageBox.YESNO,
            closable: false,
            fn: function(res) {
                if (res === 'yes') {
                    me.trackerRemoveClones(records);
                }
            }
        });
    },

    handleGroupOwner: function (records) {
        this.fireContent({
            xtype: 'trackersgroupowner',
            record: records || false
        });
    },

    handleAction: function (record, callback) {
        if (!record.get('source').corrupted) {
            callback.call(this, record);
        } else {
            Ext.MessageBox.show({
                title: _l.get('error'),
                msg: _l.get('errors.252')
            });
        }
    },

    handleListAction: function (record) {
        this.handleAction(record, function (record) {
            var trackerId = record.getId();
            Ext.Nav.shift('tracker/' + trackerId);
        });
    },

    handleTrackerEditAction: function (record) {
        this.handleAction(record, function (record) {
            var trackerId = record.getId();
            Ext.Nav.shift('tracker/' + trackerId + '/edit');
        });
    },

    onTrackerTariffEditAction: function (record) {
        this.handleAction(record, function (record) {
            var trackerId = record.getId();
            Ext.Nav.shift('tracker/' + trackerId + '/tariff');
        });
    },

    handleTrackerCloneAction: function (record) {
        this.handleAction(record, function (record) {
            var trackerId = record.getId();
            Ext.Nav.shift('tracker/' + trackerId + '/clone');
        });
    },

    handleTrackerEditSubmit: function (cmp, formValues, record) {

        record.set(formValues);

        var me = this,
            trackerChanges = record.getTrackerChanges(),
            sourceChanges = record.getSourceChanges(),
            trackerData = record.getData();

        var updateSettingsStep = function () {
            return new Promise(function (resolve, reject) {
                if (!trackerChanges) {
                    return resolve({ success: true })
                }

                Ext.API.updateTrackerData({
                    params: {
                        tracker_id: trackerData.id,
                        label: trackerData.label,
                        deleted: trackerData.deleted
                    },
                    callback: resolve,
                    failure: reject
                });
            })
        }

        var moveTrackerStep = function () {
            return new Promise(function (resolve, reject) {
                if (!trackerChanges || !trackerChanges.user_id) {
                    return resolve({ success: true })
                }

                Ext.API.updateTrackerUser({
                    params: {
                        tracker_id: trackerData.id,
                        user_id: trackerData.user_id
                    },
                    callback: resolve,
                    failure: reject
                });
            })
        }

        var updateSourceStep = function () {
            return new Promise(function (resolve, reject) {
                if (!sourceChanges) {
                    return resolve({ success: true })
                }
                Ext.API.updateTrackerSource({
                    params: {
                        tracker_id: trackerData.id,
                        blocked: trackerData.blocked
                    },
                    callback: resolve,
                    failure: reject
                });
            })
        }

        updateSettingsStep()
            .then(updateSourceStep)
            .then(moveTrackerStep)
            .then(function (response) {
                response && me.afterTrackerEdit(response, record);
            })
            .catch(function (response) {
                response && me.afterTrackerEditFailure(response, record);
            })
    },

    afterTrackerEdit: function (response, record) {
        if (response.success) {
            if (response.id) {
                return Ext.Nav.shift('tracker/' + response.id);
            }
            try {
                record.commit();
            } catch (e) {}

            try {
                this.getTrackersList().store.load();
            } catch (e) {
                console.log('Trackers list doesn\'t exist yet');
            }

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
            errDescription = _l.get('errors.tracker')[errCode] || _l.get('errors')[errCode] || status.description || false;

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
                    var errCode = response && response.status && response.status.code,
                        errDescription = _l.get('errors.tracker')[errCode] || _l.get('errors')[errCode] || status.description || false;

                    Ext.MessageBox.alert(_l.get('error'), _l.get('trackers.clone_form.failure_msg') + (errDescription ? '. ' + errDescription : ''));
                },
                scope: this
            });
        }
    },

    afterTrackerCloneCreate: function (trackerId, record, values) {
        if (trackerId && values) {
            this.getTrackerClone().afterSave();
            this.getTrackersList().store.load();
        }
    },

    handleTrackerCloneDeleteAction: function (record) {
        var me = this;
        if (record) {
            Ext.MessageBox.show({
                msg: _l.get('trackers.clone_form.remove_confirm') + ' "' + record.get('label') + '"?',
                buttons: Ext.MessageBox.YESNO,
                closable: false,
                fn: function(res) {
                    if (res === 'yes') {
                        me.trackerCloneRemove(record);
                    }
                }
            });
        }
    },

    trackerCloneRemove: function (record) {
        Ext.API.removeTrackerClone({
            params: {
                tracker_id: record.get('id')
            },
            callback: function (response) {
                this.afterTrackerCloneRemove(response, record);
            },
            failure: function (response) {
                this.afterTrackerCloneRemoveFailure(response, record);
            },
            scope: this
        });
    },

    afterTrackerCloneRemove: function (response, record) {
        if (response) {
            this.getTrackersList().store.load();

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
            errDescription;

        if (errCode === 203) {
            var localPath = _l.get('errors.tracker').get(errCode.toString()),
                entities = Ext.Array.map(response.entities, function(entity) {
                    return localPath.get('entities').get(entity.type);
                }).join(', ');

            errDescription = Ext.String.format(localPath.get('msg'), entities);

        } else {
            errDescription = _l.get('errors.tracker')[errCode] || _l.get('errors')[errCode] || status.description || false;
        }

        Ext.MessageBox.alert(_l.get('error'), errDescription);
    },

    trackerRemoveClones: function (records) {
        var lastTimeout = setTimeout(this.showProgressBar.bind(this), 4000);

        var resetTimeout = function () {
            clearTimeout(lastTimeout);
            this.hideProgressBar();
        }.bind(this);

        Ext.API.removeTrackerClones({
            params: {
                trackers: JSON.stringify(records.map(function (rec) { return rec.get('id') }))
            },
            callback: function (response) {
                resetTimeout();
                this.afterTrackerRemoveClones(response, records);
            },
            failure: function (response) {
                resetTimeout();
                this.afterTrackerRemoveClonesFailure(response, record);
            },
            scope: this
        });
    },

    showProgressBar: function () {
        this.progressMsgBox = Ext.Msg.show({
            msg : Ext.util.Format.htmlDecode(
                '<div class="progress-bar stripes animated slower">' +
                '    <span class="progress-bar-inner"></span>' +
                '</div>'),
            closable: false
        });
    },

    hideProgressBar: function () {
        if (this.progressMsgBox) {
            this.progressMsgBox.close()
            this.progressMsgBox = null
        }
    },

    /**
     {
       "success": true,
       "deleted_count": 0,
       "not_deleted_count": 1,
       "not_deleted_trackers": [
          {
             "id": 57,
             "error": "Already deleted"
          }
       ]
     }
    */

    afterTrackerRemoveClones: function (response, records) {
        var deleted = response.deleted_count,
            notDeleted = response.not_deleted_count,
            message = [];
        this.getTrackersList().clearSelection();
        this.refreshTrackersStore();

        if (deleted === 0 && notDeleted === 1 && response.not_deleted_trackers.length > 0) {
            // Если маячок 1 и он не был удален, показываем сообщение об ошибке
            var details = response.not_deleted_trackers[0].error
            Ext.MessageBox.show({
                msg: Ext.String.format(_l.get('trackers.clones_delete_failure_details_msg'), details),
                closable: false,
                buttons: Ext.MessageBox.OK
            });
        } else {
            // А если была попытка удалить несколько маячков - то тока общую стату удалено/не удалено.
            if (deleted > 0) {
                message.push(Ext.String.format(_l.get('trackers.clones_delete_success_msg'),
                    Ext.util.Format.units(deleted, 'deleted', false),
                    Ext.util.Format.units(deleted, 'clones', true)
                ))
            }
            if (notDeleted > 0 ) {
                message.push(Ext.String.format(_l.get('trackers.clones_delete_failure_msg'),
                    Ext.util.Format.units(notDeleted, 'deleted', false),
                    Ext.util.Format.units(notDeleted, 'clones', true)
                ))
            }
            Ext.MessageBox.show({
                msg: message.join('<br />'),
                closable: false,
                buttons: Ext.MessageBox.OK
            });
        }
    },

    afterTrackerRemoveClonesFailure: function (response, records) {
        Ext.MessageBox.show({
            msg: Ext.String.format(_l.get('trackers.clones_delete_success_msg'), records.length),
            closable: false,
            buttons: Ext.MessageBox.OK
        });
        this.getTrackersList().clearSelection();
        this.refreshTrackersStore();
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

            this.getTrackersList().store.load();
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
            errDescription = _l.get('errors.tracker')[errCode] || _l.get('errors')[errCode] || status.description || false;

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
        this.handleAction(record, function (record) {
            var trackerId = record.get('id');

            if (trackerId !== null) {
                Ext.Nav.shift('tracker/' + trackerId + '/console');
            }
        });
    },

    onTrackerRemove: function (trackerRecord) {
        Ext.Msg.show({
            title: _l.get('success'),
            msg: Ext.String.format(_l.get('trackers.corrupt.success_msg'), trackerRecord.get('label')),
            buttons: Ext.Msg.OK,
            width: 350
        });

        Ext.Nav.shift('trackers');

        Ext.waitFor(function () {
            return this.getTrackersList();
        }, function () {
            this.getTrackersList().store.load();
        }, this);
    },

    onTrackerRemoveFailure: function (trackerRecord, response) {

        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tracker')[errCode] || _l.get('errors')[errCode] || status.description || false;

        Ext.Msg.show({
            title: _l.get('error'),
            msg: errCode === 253 && response.list
                ? Ext.String.format(errDescription, response.list.join(', '))
                : errCode === 7 ? errDescription.default_msg : errDescription,
            buttons: Ext.Msg.OK
        });
    },

    openTrackerSettings: function (card) {
        if (!this.trackerSettingsWindow) {
            card.fireSessionCreateHash(function (hash) {
                this.trackerSettingsWindow = Ext.create('NavixyPanel.view.trackers.TrackerSettingsWindow', {
                    listeners: {
                        destroy: function () {
                            this.trackerSettingsWindow = null;
                        },
                        scope: this
                    },
                    hash: hash,
                    tracker_id: card.record.getId()
                }).show();

                this.trackerSettingsWindow.mon(Ext.getFirst('viewport'), {
                    resize: function () {
                        this.updateLayout();
                    },
                    scope: this.trackerSettingsWindow
                });
            }, this);
        } else {
            this.closeTrackerSettingsWindow();
        }
    },

    closeTrackerSettingsWindow: function () {
        if (this.trackerSettingsWindow) {
            this.trackerSettingsWindow.close();
            this.trackerSettingsWindow = null;
        }
    },

    onGroupCloneSubmit: function (cmp, formValues, recordsData) {
        var requestsCnt = recordsData.length,
            errCnt = 0;

        Ext.iterate(recordsData, function (record) {
            Ext.API.createTrackerClone({
                params: {
                    tracker_id: record.id,
                    label: record.label,
                    user_id: formValues.user_id
                },
                callback: function (response) {
                    if (--requestsCnt === 0)  {
                        this.afterGroupCloneSubmit(recordsData.length - errCnt, recordsData.length, response);
                    }
                },
                failure: function (response) {
                    errCnt++;
                    if (--requestsCnt === 0)  {
                        this.afterGroupCloneSubmit(recordsData.length - errCnt, recordsData.length, response);
                    }
                },
                scope: this
            });
        }, this);
    },

    afterGroupCloneSubmit: function (successCount, assigned, response) {
        this.getTrackerGroupClone().afterSave();
        this.getTrackersList().store.load();
        this.getTrackersList().afterClone(assigned, successCount);
    },

    onGroupOwnerSubmit: function (cmp, formValues, recordsData) {
        var requestsCnt = recordsData.length,
            errCnt = 0;

        Ext.iterate(recordsData, function (record) {
            Ext.API.updateTrackerUser({
                params: {
                    tracker_id: record.id,
                    user_id: formValues.user_id
                },
                callback: function (response) {
                    if (--requestsCnt === 0)  {
                        this.afterGroupOwnerSubmit(recordsData.length - errCnt, recordsData.length, response);
                    }
                },
                failure: function (response) {
                    errCnt++;
                    if (--requestsCnt === 0)  {
                        this.afterGroupOwnerSubmit(recordsData.length - errCnt, recordsData.length, response);
                    }
                },
                scope: this
            });
        }, this);
    },

    afterGroupOwnerSubmit: function (successCount, assigned, response) {
        this.getTrackerGroupOwner().afterSave();
        this.getTrackersList().store.load();
        this.getTrackersList().afterOwner(assigned, successCount);
    },

    onClonesFilterChange: function (modeId) {
        Ext.state.Manager.set('TrackersCloneFilter', modeId)
        this.refreshTrackersStore(true)
    },

    refreshTrackersStore: function (resetPaging) {
        if (resetPaging) {
            this.getTrackersList().store.loadPage(1);
        } else {
            this.getTrackersList().store.load();
        }
    },
});
