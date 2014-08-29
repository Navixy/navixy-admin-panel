/**
 * @class NavixyPanel.controller.Codes
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Codes', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'CodesController',

    views: [
        'codes.List',
        'codes.Edit',
        'codes.Create'
    ],

    refs: [
        {
            ref: 'codesList',
            selector: 'codeslist'
        },
        {
            ref: 'codesEdit',
            selector: 'codesedit'
        },
        {
            ref: 'codesCreate',
            selector: 'codescreate'
        }
    ],

    stores: ['ActivationCodes'],
    models: ['ActivationCode'],
    waitStores: ['ActivationCodes'],

    init: function () {
        this.callParent(arguments);

        this.control({
            'codeslist' : {
                editcodes: this.handleEdit,
                createcodes: this.handleCreate,
                waitStores: ['Tariffs']
            },
            'codesedit' : {
                formsubmit: this.onEditSubmit,
                back: this.handleList
            },
            'codescreate' : {
                formsubmit: this.onCreateSubmit,
                back: this.handleList
            }
        });

        this.handle({
            'codes' : {
                fn: this.handleList,
                access: 'read'
            },
            'codes > add' : {
                fn: this.handleCreate,
                access: 'read,create'
            },
            'codes > edit' : {
                fn: this.handleEdit,
                access: 'read'
            }
        });

        this.menuConfig = {
            text: _l.get('codes.menu_text'),
            target: 'codes'
        };
    },

    handleList: function () {
        this.fireContent({
            xtype: 'codeslist',
            createBtn: true,
            hasEdit: false
        });
    },

    handleCreate: function () {
        this.fireContent({
            xtype: 'codescreate'
        });
    },

    handleEdit: function (records) {
        this.fireContent({
            xtype: 'codesedit',
            record: records || false
        });
    },

    onEditSubmit: function (cmp, formValues, records) {

        var params = Ext.apply({}, formValues);

        params.codes = Ext.encode(params.codes.split(','));

        Ext.API.updateCodes({
            params: params,
            callback: function (response) {
                this.afterEdit(response, records);
            },
            failure: function (response) {
                this.afterEditFailure(response, records);
            },
            scope: this
        });
    },

    afterEdit: function (count, records) {
        if (count) {
            this.getCodesEdit().afterSave();
            this.getCodesList().store.load();
            this.getCodesList().afterEdit(records.length, count);
        }
    },

    afterEditFailure: function (response, records) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tariff')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getCodesEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    onCreateSubmit: function (cmp, formValues) {

        var params = Ext.apply({}, formValues);

        Ext.API.createCodes({
            params: params,
            callback: function (response) {
                this.afterCreate(response);
            },
            failure: function (response) {
                this.afterCreateFailure(response);
            },
            scope: this
        });
    },

    afterCreate: function (count) {
        if (count) {
            this.getCodesCreate().afterSave();
            this.getCodesList().store.load();
            this.getCodesList().afterEdit(false, count);
        }
    },

    afterCreateFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tariff')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getCodesCreate().showSubmitErrors(errCode, errors, errDescription);
    }
});