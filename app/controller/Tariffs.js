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
        'tariffs.Edit'
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
                tariffedit: this.handleTariffEditAction
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


    handleTariffCreateAction: function () {

        Ext.Nav.shift('tariff/create');
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
    }
});