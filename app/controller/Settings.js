/**
 * @class NavixyPanel.controller.Settings
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Settings', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'SettingsController',

    views: [
        'settings.Edit'
    ],

    refs: [
        {
            ref: 'settingsEdit',
            selector: 'settingsedit'
        }
    ],

    stores: ['Settings'],
    models: ['Settings'],
    mainStore: 'Settings',

    init: function () {
        this.callParent(arguments);

        this.control({
            'settingsedit' : {
                formsubmit: this.onEditSubmit,
                formsubmitpassword: this.onPasswordEditSubmit
            }
        });

        this.handle({
            'settings' : {
                fn: this.handleEdit,
                loadRecord: true,
                access: 'read'
            }
        });

        this.menuConfig = {
            text: _l.get('settings.menu_text'),
            target: 'settings'
        };
    },

    handleEdit: function (settingsRecord) {
        this.fireContent({
            xtype: 'settingsedit',
            record: settingsRecord,
            rights: {
                serviceRead : Ext.checkPermission('service_settings', 'read'),
                serviceEdit : Ext.checkPermission('service_settings', 'update'),
                notificationRead : Ext.checkPermission('notification_settings', 'read'),
                notificationEdit : Ext.checkPermission('notification_settings', 'update')
            }
        });
    },

    onPasswordEditSubmit: function (cmp, formValues, record) {
        console.log('onPasswordEditSubmit', formValues);
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
            requestsCnt++ ;
            Ext.API.updateSettingsSerivce({
                params: record.getServiceFormatted(),
                callback: function (response) {
                    if (--requestsCnt === 0)  {
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
            requestsCnt++ ;
            Ext.API.updateSettingsNotification({
                params: record.getNotificationFormatted(),
                callback: function (response) {
                    if (--requestsCnt === 0)  {
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
            } catch (e) {}

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
    }
});