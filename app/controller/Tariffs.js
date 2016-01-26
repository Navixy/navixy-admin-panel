/**
 * @class NavixyPanel.controller.Tariffs
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Tariffs', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'TariffsController',

    views: [
        'tariffs.List',
        'tariffs.Card',
        'tariffs.NewCard',
        'tariffs.Create',
        'tariffs.Edit',
        'tariffs.SetDefault',

        'widgets.fields.FakeField',
        'widgets.fields.TariffPrice'
    ],

    refs: [
        {
            ref: 'tariffsList',
            selector: 'tariffslist'
        },
        {
            ref: 'tariffEdit',
            selector: 'tariff-card'
        },
        {
            ref: 'tariffDefault',
            selector: 'defaulttariff'
        },
        {
            ref: 'tariffCreate',
            selector: 'tariffcreate'
        }
    ],

    stores: ['Tariffs', 'TariffPrices', 'TariffDefaults', 'MapTypes', 'Features'],
    models: ['Tariff'],
    mainStore: 'Tariffs',

    init: function () {
        this.callParent(arguments);

        this.control({
            'tariff-card' : {
                tariffedit: this.handleTariffEditAction,
                setdefault: this.onTariffDefault,
                formsubmit: this.handleTariffEditSubmit,
                createsubmit: this.handleTariffCreateSubmit
            },
            'tariffslist': {
                actionclick: this.handleListAction,
                editclick: this.handleTariffEditAction
            },
            'tariffslist button[role="create-btn"]' : {
                click: this.handleTariffCreateAction
            },
            'defaulttariff' : {
                formsubmit: this.handleTariffDefaultEdit
            }
        });

        this.handle({
            'tariffs' : {
                fn: this.handleTariffs,
                access: 'read'
            },
            'tariff' : {
                fn: this.handleTariffCard,
                loadRecord: true,
                access: 'read'
            },
            'tariff > edit' : {
                fn: this.handleTariffEdit,
                loadRecord: true,
                access: 'update'
            },
            'tariff > create' : {
                fn: this.handleTariffCreate,
                access: 'create'
            },
            'tariff > default' : {
                fn: this.handleTariffDefault,
                loadRecord: true,
                access: 'update'
            }
        });

        this.menuConfig = {
            text: _l.get('tariffs.menu_text'),
            target: 'tariffs'
        };

        this.waitConnectionReady(function() {
            if (Ext.checkPermission(this.getModuleName())) {
                Ext.getStore('TariffDefaults').load();
            }
        });
    },

    // TODO: dirty hack
    waitTariffPrices: function (callback, scope) {
        var me = this,
            pricesStore = Ext.getStore('TariffPrices');

        if (pricesStore && pricesStore.count()) {
            callback.call(scope || me);
        } else {
            Ext.getStore('Tariffs').getClone({
                pageSize: 1,
                listeners: {
                    load: function() {
                        callback.call(scope || me);
                    }
                }
            });
        }
    },

    // TODO: dirty hack
    waitSettingsStore: function (callback, scope) {
        var me = this,
            pricesStore = Ext.getStore('Settings');

        Ext.getStore('Settings').loadRecord(null, function (record) {callback.call(scope || me, record)})
    },

    handleTariffs: function () {
        this.fireContent({
            xtype: 'tariffslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        });
    },

    handleTariffCardOld: function (tariffRecord) {
        this.waitTariffPrices(function () {
            this.fireContent({
                xtype: 'tariffcard',
                record: tariffRecord
            });
        });
    },

    handleTariffCard: function (tariffRecord) {
        this.waitTariffPrices(function () {
            this.fireContent({
                xtype: 'tariff-card',
                record: tariffRecord
            });
        });
    },

    handleTariffEdit: function (tariffRecord) {
        this.waitTariffPrices(function () {
            this.fireContent({
                xtype: 'tariff-card',
                mode: 'edit',
                record: tariffRecord
            });
        });
    },

    handleTariffCreate: function () {
        this.waitSettingsStore(function (settings) {
            this.waitTariffPrices(function () {
                this.fireContent({
                    xtype: 'tariff-card',
                    mode: 'create',
                    settings: settings.getData()
                });
            });
        });
    },

    handleTariffDefault: function (tariffRecord) {
        this.waitTariffPrices(function () {
            this.fireContent({
                xtype: 'defaulttariff',
                record: tariffRecord
            });
        });
    },


    handleTariffCreateAction: function () {

        Ext.Nav.shift('tariff/create');
    },

    onTariffDefault: function (record) {
        var tariffId = record.getId();
        Ext.Nav.shift('tariff/' + tariffId + '/default');
    },

    handleTariffEditAction: function (record) {
        var tariffId = record.getId();
        Ext.Nav.shift('tariff/' + tariffId + '/edit');
    },

    handleListAction: function (record) {
        var tariffId = record.getId();
        Ext.Nav.shift('tariff/' + tariffId);
    },

    checkDefaultChange: function (formValues, record, callback, args) {
        var device_type = record.get('device_type'),
            defaultRecord = Ext.getStore('TariffDefaults').findRecord('id', device_type);

        if (formValues["tariff_is_default"] &&
            (
                defaultRecord.get("tariff_id") != record.get("id")
                ||
                defaultRecord.get("free_days") != formValues["free_days"]
                ||
                defaultRecord.get("activation_bonus") != formValues["activation_bonus"]
            )
        ) {
            this.handleTariffDefaultEdit(null, {
                    tariff_id: record.get("id"),
                    free_days: formValues["free_days"],
                    activation_bonus: formValues["activation_bonus"]
                },
                record,
                callback,
                args
            );
            //callback.apply(this, args)
        } else {
            callback.apply(this, args)
        }
    },

    handleTariffEditSubmit: function (cmp, formValues, record) {

        record.set(formValues);

        var tariffData = record.getData();

        Ext.API.updateTariffData({
            params: {
                tariff: Ext.encode(tariffData)
            },
            callback: function (response) {
                this.checkDefaultChange(formValues, record, this.afterTariffEdit, [response, record]);
            },
            failure: function (response) {
                this.afterTariffEditFailure(response, record);
            },
            scope: this
        });
    },

    afterTariffEdit: function (success, record) {
        if (success) {
            try {
                record.commit();
            } catch (e) {}

            if (this.getTariffsList()) {
                this.getTariffsList().store.load();
            }
            this.getTariffEdit().afterSave();
        } else {
            record.reject(false);
        }
    },

    afterTariffEditFailure: function (response, record) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tariff')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getTariffEdit().showSubmitErrors(errCode, errors, errDescription);
    },


    handleTariffCreateSubmit: function (cmp, formValues) {

        var record = Ext.create('NavixyPanel.model.Tariff');
        record.set(formValues);

        var tariffData = Ext.apply({}, record.getData());

        delete tariffData.id;

        Ext.API.createTariff({
            params: {
                tariff: Ext.encode(tariffData)
            },
            callback: function (response) {
                if (Ext.isNumber(response)) {
                    record.set("id", response)
                }
                this.checkDefaultChange(formValues, record, this.afterTariffCreate, [response, record]);
            },
            failure: this.afterTariffCreateFailure,
            scope: this
        });
    },

    afterTariffCreate: function (tariffId, record) {
        record.setId(tariffId);
        Ext.getStore('Tariffs').add(record);
        this.getTariffEdit().afterSave(tariffId);
    },

    afterTariffCreateFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tariff')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getTariffEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    handleTariffDefaultEdit: function (cmp, formValues, record, callback, args) {

        var device_type = record.get('device_type'),
            defaultRecord = Ext.getStore('TariffDefaults').findRecord('id', device_type),
            params = {},
            trackerDefaults, cameraDefaults;

        if (defaultRecord) {
            defaultRecord.set(formValues);
        }

        trackerDefaults = Ext.getStore('TariffDefaults').findRecord('id', 'tracker');
        cameraDefaults = Ext.getStore('TariffDefaults').findRecord('id', 'camera');

        if (trackerDefaults) {
            params.tracker = Ext.encode(trackerDefaults.getData());
        }

        if (cameraDefaults) {
            params.camera = Ext.encode(cameraDefaults.getData());
        }

        Ext.API.updateTariffDefaults({
            params: params,
            callback: function (response) {
                this.afterDefaultTariffEdit(response, record, defaultRecord, callback, args);
            },
            failure: function (response) {
                this.afterDefaultTariffEditFailure(response, record, callback, args);
            },
            scope: this
        });
    },


    afterDefaultTariffEdit: function (success, record, defaultRecord, callback, args) {
        if (success) {
            try {
                defaultRecord.commit();
            } catch (e) {}

            if (Ext.isFunction(callback)) {
                callback.apply(this, args)
            }
            //this.getTariffsList().store.load();
            //this.getTariffDefault().afterSave();
        } else {
            defaultRecord.reject(false);
        }
    },

    afterDefaultTariffEditFailure: function (response, record, callback, args) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tariff')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getTariffEdit().showSubmitErrors(errCode, errors, errDescription);

        if (Ext.isFunction(callback)) {
            callback.apply(this, args)
        }
    }
});