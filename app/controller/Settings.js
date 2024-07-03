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
        'settings.payments.PaymentsPanel',
        'settings.smtpgate.GatePanel',
        'widgets.map.Map',
        'settings.components.MapWindow',
        'settings.components.Themes',
        'settings.components.Theme',
        'settings.components.ThemeField',
        'settings.components.MobileTheme',
        'settings.components.MobileThemeField'
    ],
    requires: [
        'NavixyPanel.utils.mapProvider.NavixyMapsProvider',
        'NavixyPanel.utils.mapProvider.LeafletMapsProvider',
        'NavixyPanel.view.settings.components.MenuEditorWindow'
    ],

    refs: [
        {
            ref: 'settingsEdit',
            selector: 'settingsedit'
        }
    ],

    stores: ['Settings', 'Geocoders', 'MeasurementSystems', 'RouteProviders', 'MapTypes', 'Currencies', 'Geolocation',
        'SpeedRestriction', 'RoadsSnap', 'leMaps', 'Themes', 'MobileThemes', 'DateFormats', 'HourModes', 'MenuPresets'],

    models: ['Settings', 'MapType'],
    mainStore: 'Settings',

    init: function () {
        this.callParent(arguments);
        this.initMapApi();

        this.control({
            'settingsedit': {
                formsubmit: this.mayBeEditSubmit,
                openmenueditor: this.openMenuEditorWindow
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

    handleEdit: function (settingsRecord, single) {
        this.fireContent({
            xtype: 'settingsedit',
            record: settingsRecord,
            singleCmp: !!single,
            rights: {
                serviceRead: Ext.checkPermission('service_settings', 'read'),
                serviceEdit: Ext.checkPermission('service_settings', 'update'),
                notificationRead: Ext.checkPermission('notification_settings', 'read'),
                notificationEdit: Ext.checkPermission('notification_settings', 'update')
            }
        });
    },

    mayBeEditSubmit: function (cmp, formValues, record) {
        record.set(formValues);

        var isPremium = Ext.getStore('Dealer').isPremiumGis(),
            hint = Ext.isNavixy() ? _l.get('settings.fields.domain_google_key_link') : '';

        if (record.isDomainChanged() && isPremium) {
            Ext.Msg.show({
                title: _l.get("settings.domain_warnings.domain_warning"),
                msg: Ext.String.format(_l.get("settings.domain_warnings.domain_changed"), hint),
                buttons: Ext.Msg.OKCANCEL,
                buttonText: { 'ok': _l.get("settings.domain_warnings.continue") },
                fn: function (buttonId) {
                    if (buttonId == 'ok') {
                        this.onEditSubmit(cmp, formValues, record);
                    } else {
                        record.reject(false);
                        this.formUpdateRequired = false;
                    }
                },
                scope: this
            });
        } else {
            this.onEditSubmit(cmp, formValues, record);
        }
    },

    onEditSubmit: function (cmp, formValues, record) {
        var serviceChanges = record.getServiceChanges(),
            notificationChanges = record.getNotificationChanges(),
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


        requestsCnt++

        Ext.API.updateDefaultMenu({
            params: {
                value: Ext.encode(record.getDefaultMenu())
            },
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

        Ext.API.assignMenuPreset({
            params: {
                target: Ext.encode({ type: 'default' }),
                preset_id: record.get('menu_preset_id'),
            },
            callback: function (response) {
                if (--requestsCnt === 0) {
                    this.afterSettingsEdit(response, record);
                }
            },
            failure: function (response) {
                this.afterSettingsEditFailure(response, record);
            },
            scope: this,
        });
    },

    afterSettingsEdit: function (success, record) {
        if (success) {

            Ext.API.getDealerInfo(this.updateDealerInfo, this.updateDealerInfo(), this);
            try {
                record.commit();
            } catch (e) {
            }

            if (this.formUpdateRequired) {
                this.formUpdateRequired = false;
                this.handleEdit(record, true);
                this.getSettingsEdit().afterSave();
            } else {
                this.getSettingsEdit().afterSave();
            }
        } else {
            record.reject(false);
        }
    },

    afterSettingsEditFailure: function (response, record) {
        this.formUpdateRequired = false;
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
        });
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
        });
    },

    openMenuEditorWindow: function () {
        if (!this.menuEditorWindow) {
            this.menuEditorWindow = Ext.create('NavixyPanel.view.settings.components.MenuEditorWindow', {
                listeners: {
                    destroy: function () {
                        Ext.getStore('MenuPresets').reload();
                        this.menuEditorWindow = null;
                    },
                    scope: this,
                },
            }).show();

            this.menuEditorWindow.mon(Ext.getFirst('viewport'), {
                resize: function () {
                    this.updateLayout();
                },
                scope: this.menuEditorWindow,
            });
        } else {
            this.menuEditorWindow.close();
            this.menuEditorWindow = null;
        }
    },
});
