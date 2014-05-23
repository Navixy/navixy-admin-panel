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

    init: function () {
        this.callParent(arguments);

        this.control({
            'settingsedit' : {
                formsubmit: this.onEditSubmit
            }
        });

        this.handle({
            'settings' : {
                fn: this.handleEdit,
                access: 'read'
            }
        });

        this.menuConfig = {
            text: _l.settings.menu_text,
            target: 'settings'
        };
    },

    handleEdit: function () {
        this.fireContent({
            xtype: 'settingsedit',
            record: Ext.getStore('Settings').first(),
            rights: {
                serviceRead : Ext.checkPermission('service_settings', 'read'),
                serviceEdit : Ext.checkPermission('service_settings', 'update'),
                notificationRead : Ext.checkPermission('notification_settings', 'read'),
                notificationEdit : Ext.checkPermission('notification_settings', 'update')
            }
        });
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
            errDescription = _l.errors.tracker[errCode] || _l.errors[errCode] || status.description || false;

        this.getSettingsEdit().showSubmitErrors(errCode, errors, errDescription);
    }
});