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
        'tariffs.Create',
        'tariffs.Edit',
        'tariffs.SetDefault'
    ],

    refs: [
        {
            ref: 'tariffsList',
            selector: 'tariffslist'
        },
        {
            ref: 'tariffEdit',
            selector: 'tariffedit'
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

    stores: ['Tariffs', 'TariffPrices', 'TariffDefaults'],
    models: ['Tariff'],

    init: function () {
        this.callParent(arguments);

        this.control({
            'tariffcard': {
                tariffedit: this.handleTariffEditAction,
                setdefault: this.onTariffDefault
            },
            'tariffslist': {
                actionclick: this.handleListAction,
                editclick: this.handleTariffEditAction
            },
            'tariffslist button[role="create-btn"]' : {
                click: this.handleTariffCreateAction
            },
            'tariffcreate' : {
                formsubmit: this.handleTariffCreateSubmit
            },
            'tariffedit' : {
                formsubmit: this.handleTariffEditSubmit
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
                access: 'read'
            },
            'tariff > edit' : {
                fn: this.handleTariffEdit,
                access: 'update'
            },
            'tariff > create' : {
                fn: this.handleTariffCreate,
                access: 'create'
            },
            'tariff > default' : {
                fn: this.handleTariffDefault,
                access: 'update'
            }
        });

        this.menuConfig = {
            text: _l.tariffs.menu_text,
            target: 'tariffs'
        };
    },

    handleTariffs: function () {
        this.fireContent({
            xtype: 'tariffslist',
            createBtn: Ext.checkPermission(this.getModuleName(), 'create'),
            hasEdit: Ext.checkPermission(this.getModuleName(), 'update')
        });
    },

    handleTariffCard: function (value) {
        var tariffId = parseInt(value),
            tariffRecord = Ext.isNumber(tariffId) && Ext.getStore('Tariffs').getById(tariffId);

        this.fireContent({
            xtype: 'tariffcard',
            record: tariffRecord
        });
    },

    handleTariffEdit: function (value) {
        var tariffId = parseInt(value),
            tariffRecord = Ext.isNumber(tariffId) && Ext.getStore('Tariffs').getById(tariffId);

        if (tariffRecord) {

            this.fireContent({
                xtype: 'tariffedit',
                record: tariffRecord
            });
        }
    },

    handleTariffCreate: function () {
        this.fireContent({
            xtype: 'tariffcreate'
        });
    },

    handleTariffDefault: function (value) {
        var tariffId = parseInt(value),
            tariffRecord = Ext.isNumber(tariffId) && Ext.getStore('Tariffs').getById(tariffId);

        this.fireContent({
            xtype: 'defaulttariff',
            record: tariffRecord
        });
    },


    handleTariffCreateAction: function () {

        Ext.Nav.shift('tariff/create');
    },

    onTariffDefault: function (record) {
        console.log('onTariffDefault');
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

    handleTariffEditSubmit: function (cmp, formValues, record) {

        record.set(formValues);

        var tariffData = record.getData();

        Ext.API.updateTariffData({
            params: {
                tariff: Ext.encode(tariffData)
            },
            callback: function (response) {
                this.afterTariffEdit(response, record);
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
            errDescription = _l.errors.tariff[errCode] || _l.errors[errCode] || status.description || false;

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
                this.afterTariffCreate(response, record);
            },
            failure: this.afterTariffCreateFailure,
            scope: this
        });
    },

    afterTariffCreate: function (tariffId, record) {
        record.setId(tariffId);
        Ext.getStore('Tariffs').add(record);
        this.getTariffCreate().afterSave(tariffId);
    },

    afterTariffCreateFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.errors.tariff[errCode] || _l.errors[errCode] || status.description || false;

        this.getTariffCreate().showSubmitErrors(errCode, errors, errDescription);
    },

    handleTariffDefaultEdit: function (cmp, formValues, record) {

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
                this.afterDefaultTariffEdit(response, record);
            },
            failure: function (response) {
                this.afterDefaultTariffEditFailure(response, record);
            },
            scope: this
        });
    },


    afterDefaultTariffEdit: function (success, record, defaultRecord) {
        if (success) {
            try {
                defaultRecord.commit();
            } catch (e) {}

            this.getTariffDefault().afterSave();
        } else {
            defaultRecord.reject(false);
        }
    },

    afterDefaultTariffEditFailure: function (response, record) {
        record.reject(false);
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.errors.tariff[errCode] || _l.errors[errCode] || status.description || false;

        this.getTariffEdit().showSubmitErrors(errCode, errors, errDescription);
    }
});