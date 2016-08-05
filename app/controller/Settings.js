/**
 * @class NavixyPanel.controller.Settings
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Settings', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'SettingsController',

    views: [
        'settings.Edit',
        'settings.avangate.Subscription',
        'settings.smtpgate.GatePanel',
        'widgets.map.Map',
        'settings.components.MapWindow',
        'settings.components.Themes',
        'settings.components.Theme'
    ],
    requires: [
        'NavixyPanel.utils.mapProvider.NavixyMapsProvider',
        'NavixyPanel.utils.mapProvider.LeafletMapsProvider'
    ],

    refs: [
        {
            ref: 'settingsEdit',
            selector: 'settingsedit'
        }
    ],

    stores: ['Settings', 'Geocoders', 'MeasurementSystems', 'RouteProviders', 'MapTypes', 'Currencies', 'Geolocation',
             'SpeedRestriction', 'RoadsSnap', 'leMaps', 'Themes'],

    models: ['Settings'],
    mainStore: 'Settings',

    init: function () {
        this.callParent(arguments);
        this.initMapApi();

        this.control({
            'settingsedit': {
                formsubmit: this.onEditSubmit,
                formsubmitpassword: this.onPasswordEditSubmit,
                mapchanged: this.onMapSettingsChange
            },

            'settings-map': {
                'map-edit': this.showMapSettingsWindow
            },

            'map-edit-window': {
                'formsubmit': this.updateMapSettings
            },

            'smtp-gate-panel': {
                'smtp-settings-save-request': this.handleSmptpSettings
            }
        });

        this.handle({
            'settings': {
                fn: this.handleEdit,
                loadRecord: true,
                access: 'read'
            },

            'avangate_payment_recieved': {
                fn: this.showPaymentsRecieveMsg
            }
        });

        this.menuConfig = {
            text: _l.get('settings.menu_text'),
            target: 'settings'
        };
    },

    initMapApi: function () {
        this.availableMapTypesLoad();
        Ext.Map = Ext.create('NavixyPanel.utils.mapProvider.LeafletMapsProvider', {});
    },

    availableMapTypesLoad: function () {
        var defaultStore = Ext.getStore("MapTypes"),
            mapsStore = Ext.getStore("leMaps"),
            list = [];

        defaultStore.each(function (record) {
            list.push(record.get("type"))
        });

        mapsStore.availableLoad(list);
    },

    updateMapSettings: function (cmp, settings, record) {
        var editCmp = Ext.getFirst('settings-map');

        if (editCmp) {
            editCmp.updateSettingsFromMap(settings)
        }
    },

    showMapSettingsWindow: function (cmp, record, values) {
        Ext.widget('map-edit-window', {
            record: record,
            formValues: values
        }).show();
    },

    showPaymentsRecieveMsg: function () {
        Ext.Msg.show({
            msg: _l.get('settings.subscription.payment_recieved_msg'),
            buttons: Ext.Msg.OK,
            closable: false,
            fn: function () {
                Ext.Nav.shift('settings');
                try {
                    Ext.waitFor(function () {
                        return Ext.getFirst('avangate-panel');
                    }, function () {
                        Ext.getFirst('avangate-panel').maybeInitActivationPaymentCheck();
                    }, this);
                } catch (e) {
                    console.log(e.stack);
                }

            },
            scope: this
        });

    },

    handleEdit: function (settingsRecord) {
        this.fireContent({
            xtype: 'settingsedit',
            record: settingsRecord,
            rights: {
                serviceRead: Ext.checkPermission('service_settings', 'read'),
                serviceEdit: Ext.checkPermission('service_settings', 'update'),
                notificationRead: Ext.checkPermission('notification_settings', 'read'),
                notificationEdit: Ext.checkPermission('notification_settings', 'update')
            }
        });
    },

    onPasswordEditSubmit: function (cmp, formValues, record) {
        if (formValues.new_password && formValues.old_password) {
            Ext.API.updateSettingsPassword({
                params: {
                    old_password: formValues.old_password,
                    new_password: formValues.new_password
                },
                callback: function (response) {
                    this.afterPasswordEdit(response, record);
                },
                failure: function (response) {
                    this.afterPasswordEditFailure(response, record);
                },
                scope: this
            });
        }
    },

    afterPasswordEdit: function (success, record) {
        if (success) {
            this.getSettingsEdit().afterPasswordSave();
        } else {
        }
    },

    afterPasswordEditFailure: function (response, record) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.settings')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getSettingsEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    onEditSubmit: function (cmp, formValues, record) {
        record.set(formValues);

        var serviceChanges = record.getServiceChanges(),
            notificationChanges = record.getNotificationChanges(),
            settingsData = record.getData(),
            requestsCnt = 0;

        if (serviceChanges && Ext.checkPermission('service_settings', 'update')) {
            requestsCnt++;
            Ext.API.updateSettingsSerivce({
                params: record.getServiceFormatted(),
                callback: function (response) {
                    if (--requestsCnt === 0) {
                        this.afterSettingsEdit(response, record);
                    }
                },
                failure: function (response) {
                    this.afterSettingsEditFailure(response, record);
                },
                scope: this
            });
        }

        if (notificationChanges && Ext.checkPermission('notification_settings', 'update')) {
            requestsCnt++;
            Ext.API.updateSettingsNotification({
                params: record.getNotificationFormatted(),
                callback: function (response) {
                    if (--requestsCnt === 0) {
                        this.afterSettingsEdit(response, record);
                    }
                },
                failure: function (response) {
                    this.afterSettingsEditFailure(response, record);
                },
                scope: this
            });
        }
    },

    afterSettingsEdit: function (success, record) {
        if (success) {

            Ext.API.getDealerInfo(this.updateDealerInfo, this.updateDealerInfo(), this);
            try {
                record.commit();
            } catch (e) {
            }

            this.getSettingsEdit().afterSave();
        } else {
            record.reject(false);
        }
    },

    afterSettingsEditFailure: function (response, record) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.settings')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getSettingsEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    updateDealerInfo: function (data) {
        var store = Ext.getStore('Dealer'),
            dealer = store && store.first();

        if (dealer) {
            dealer.set(data);
        }
    },

    handleSmptpSettings: function (gateSettings) {
        if (Ext.checkPermission('email_gateways', 'update')) {
            if (!gateSettings.selectedGate) {
                this.createAndAssignEmailGate(gateSettings.settings)
            } else if (gateSettings.settings) {
                this.updateAndAssignEmailGate(gateSettings.settings)
            } else {
                this.assignEmailGate(gateSettings.selectedGate);
            }
        }

        if (Ext.checkPermission('notification_settings', 'update')) {
            Ext.API.updateEmailNotificationSettings({
                params: gateSettings.notifications
            });
        }

    },

    assignEmailGate: function (id) {
        Ext.API.assignEmailGate({
            params: {
                gateway_id: id
            },
            callback: function () {
                Ext.Msg.show({
                    msg: _l.get('settings.email_gateways.gateway_assing_success_msg'),
                    buttons: Ext.Msg.OK,
                    closable: false
                });
            }
        });
    },

    updateAndAssignEmailGate: function (settings) {
        Ext.API.updateEmailGate({
            params: {
                gateway: JSON.stringify(settings)
            },
            callback: function () {
                this.assignEmailGate(settings.id);
            },
            scope: this
        })
    },

    createAndAssignEmailGate: function (settings) {
        delete settings.id;

        Ext.API.createEmailGate({
            params: {
                gateway: JSON.stringify(settings)
            },
            callback: function (id) {
                Ext.getFirst('smtp-gate-item[gate_id=null]').setGateId(id);
                this.assignEmailGate(id);
            },
            scope: this
        })
    }
});