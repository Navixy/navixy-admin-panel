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
        'accounting.Accounting',
        'accounting.ExportErrorsWindow'
    ],
    dependencies: [
        'Lib.jquery.jQuery',
        'Lib.jquery.jquery-file-download'
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
        var me = this,
            button = Ext.getFirst('export1c').down('[role=save-btn]'),
            url = Ext.API.get1cDownloadLink({
                params: formValues
            });

        if (button) {
            button.disable()
        }

        $.fileDownload(url)
            .fail(function (responseHtml, url, error) {
                if (button) {
                    button.enable();
                }
                me.handleExportFailure(responseHtml, url, error);
            })
            .done(function () {
                if (button) {
                    button.enable();
                }
            })
    },

    handleExportFailure: function (flatResponse) {
        var responseStr = Ext.isString(flatResponse) && flatResponse.substring(flatResponse.indexOf("{"), flatResponse.lastIndexOf("}")+1),
            response = Ext.decode(responseStr),
            status = response.status,
            errors = response.list;

        if (status.code == 242) {
            this.showExportErrors(response);
        } else {
            Ext.MessageBox.show({
                title: _l.get('error'),
                msg: status.description
            });
        }
    },

    showExportErrors: function (response) {
        var errWindow = Ext.widget('export-errors', {errors: response.list});
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
            Ext.API.doExportDelivery({
                params: {
                    year: Ext.Date.format(values.date, 'Y'),
                    month: Ext.Date.format(values.date, 'm')
                },
                callback: this.afterSendReportsSuccess,
                failure: this.afterSendReportsFailure
            });
        }
    },

    afterSendReportsSuccess: function (response) {
        Ext.MessageBox.show({
            msg: _l.get('accounting.report_success'),
            buttons: Ext.MessageBox.OK
        });
    },

    afterSendReportsFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors')[errCode] || status.description || false;

        this.getExport1c().showSubmitErrors(errCode, errors, errDescription);
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