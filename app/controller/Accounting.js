/**
 * @class NavixyPanel.controller.Settings
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Accounting', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'AccountingController',

    views: [
        'accounting.Export1c',
        'accounting.Payments1c',
        'accounting.Accounting'
    ],

    refs: [
        {
            ref: 'Payments1c',
            selector: 'paymentst1c'
        },
        {
            ref: 'Export1c',
            selector: 'export1c'
        }
    ],

    init: function () {
        this.callParent(arguments);

        this.control({
            'export1c' : {
                formsubmit: this.onExport1cSubmit,
                reportsubmit: this.onExport1cReport
            },
            'paymentst1c' : {
                formsubmit: this.onPayments1cSubmit,
            }
        });

        this.handle({
            'accounting' : {
                fn: this.handleAccounting,
                access: 'generate'
            }
        });

        this.menuConfig = {
            text: _l.get('accounting.menu_text'),
            target: 'accounting'
        };
    },

    handleAccounting: function () {
        this.fireContent({
            xtype: 'accountingmain'
        });
    },

    onExport1cSubmit: function (form, formValues) {
        this.openExport(Ext.API.get1cDownloadLink({
            params: formValues
        }), formValues);
    },

    openExport: function (link, values) {
        var aEl = document.createElement("a"),
            fileName = Ext.String.format('navixy.1c.export.{0}.{1}.xml', values.month, values.year);

        aEl.download = fileName;
        aEl.href = link;
        aEl.click();
    },

    onExport1cReport: function (form, formValues) {
        Ext.MessageBox.show({
            title: _l.get('accounting.report_msg.title'),
            msg: Ext.String.format(_l.get('accounting.report_msg.text'), Ext.Date.format(formValues.date, 'F Y')),
            width: 600,
            buttons: Ext.MessageBox.OKCANCEL,
            icon: Ext.MessageBox.QUESTION,
            fn: function (result) {
                if (result == "ok") {
                    this.sendClientsReport(formValues);
                }
            },
            scope: this
        });
    },

    sendClientsReport: function (values) {
        if (values.date) {
            Ext.API.doExportDelivery(values.date);
        }
    },

    onPayments2cSubmit: function (form, formValues) {
        Ext.API.doPaymentExport({
            params: formValues,
            callback: this.afterPaymentExport,
            failure: this.afterPaymentExportFailure,
            scope: this
        });
    },

    onPayments1cSubmit: function (form, formValues) {
        this.openPaymentsExport(Ext.API.get1cPaymentDownloadLink({
            params: formValues
        }), formValues);
    },

    openPaymentsExport: function (link, values) {
        var aEl = document.createElement("a"),
            fileName = Ext.String.format('navixy.1c.export.{0}.{1}.xml', values.from, values.to);

        aEl.download = fileName;
        aEl.href = link;
        aEl.click();
    },

    afterPaymentExportFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.tariff')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.getPayments1c().showSubmitErrors(errCode, errors, errDescription);
    }

});