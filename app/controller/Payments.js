/**
 * @class NavixyPanel.controller.Payments
 * @extends Ext.app.Controller
 * Description
 */

Ext.define('NavixyPanel.controller.Payments', {
    extend: 'NavixyPanel.controller.Abstract',
    id: 'PaymentsController',

    views: [
        'payments.ImportSberBank',
    ],

    refs: [
        {
            ref: 'ImportSberBank',
            selector: 'import-sberbank'
        }
    ],

    init: function () {
        this.callParent(arguments);

        this.control({
            'import-sberbank' : {
                formsubmit: this.onImportSberBankSubmit
            }
        });

        this.handle({
            'payments' : {
                fn: this.handlePayments,
                access: 'generate'
            }
        });

        this.menuConfig = {
            text: _l.get('payments.menu_text'),
            target: 'payments'
        };
    },

    handlePayments: function () {
        this.fireContent({
            xtype: 'import-sberbank'
        });
    },

    onImportSberBankSubmit: function (form, formValues) {

        var waitMsg = _l.get('payments.upload_loading'),
            form = form.getForm();

        if (form.isValid()) {
            Ext.API.importSberbank(
                form,
                {
                    waitMsg: waitMsg,
                    scope: this,
                    success: function (a, actions) {
                        this.afterSberbankImport(actions);
                    },
                    failure: function (a, actions) {
                        this.getImportSberBank().afterFileUploadFailure()
                    }
                }
            );
        }
    },

    afterSberbankImport: function (result) {
    }
});