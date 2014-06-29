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
        'accounting.Accounting'
    ],

    refs: [
        {
            ref: 'Export1c',
            selector: 'export1c'
        }
    ],

//    stores: ['Settings'],
//    models: ['Settings'],
//    mainStore: 'Settings',

    init: function () {
        this.callParent(arguments);

        this.control({
            'export1c' : {
                formsubmit: this.onExport1cSubmit,
                reportsubmit: this.onExport1cReport
            }
        });

        this.handle({
            'accounting' : {
                fn: this.handleAccounting,
                access: 'generate'
            }
        });

        this.menuConfig = {
            text: _l.accounting.menu_text,
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
            title: _l.accounting.report_msg.title,
            msg: Ext.String.format(_l.accounting.report_msg.text, Ext.Date.format(formValues.date, 'F Y')),
            width: 600,
            buttons: Ext.MessageBox.OKCANCEL,
            icon: Ext.MessageBox.QUESTION,
            fn: Ext.bind(this.sendClientsReport, this, [formValues])
        });
    },

    sendClientsReport: function (values) {
        if (values.date) {
            Ext.API.doExportDelivery(values.date);
        }
    }
});