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
        'codes.Edit'
    ],

    refs: [
        {
            ref: 'codesList',
            selector: 'codeslist'
        },
        {
            ref: 'codesEdit',
            selector: 'codesedit'
        }
    ],

    stores: ['ActivationCodes'],
    models: ['ActivationCode'],

    init: function () {
        this.callParent(arguments);

        this.control({
            'codeslist' : {
                editcodes: this.handleEdit,
                reload: this.doReload
            },
            'codesedit' : {
                formsubmit: this.onEditSubmit,
                back: this.handleList
            }
        });

        this.handle({
            'codes' : {
                fn: this.handleList,
                access: 'read'
            },
            'codes > edit' : {
                fn: this.handleEdit,
                access: 'read'
            }
        });

        this.menuConfig = {
            text: _l.codes.menu_text,
            target: 'codes'
        };
    },

    handleList: function () {
        this.fireContent({
            xtype: 'codeslist',
            createBtn: false,
            hasEdit: false
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
            this.doReload();
            this.getCodesList().afterEdit(records.length, count);
        }
    },

    afterEditFailure: function (response, records) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.errors.tariff[errCode] || _l.errors[errCode] || status.description || false;

        this.getCodesEdit().showSubmitErrors(errCode, errors, errDescription);
    },

    doReload: function () {
        Ext.API.getCodesList(this.applyReload, this.applyReload, this);
    },

    applyReload: function (list) {
        Ext.getStore('ActivationCodes').updateData(list);
    }
});