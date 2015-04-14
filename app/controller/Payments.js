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
                access: 'import_payments'
            }
        });

        this.menuConfig = {
            text: _l.get('payments.menu_text'),
            target: 'payments'
        };
    },

    registerMenu: function (config) {
        console.log(this.getModuleName());
        if (Ext.checkPermission(this.getModuleName(), 'import_payments') && Ext.checkPermission('users', 'update') && Ext.checkPermission('transactions', 'create') && this.menuConfig && this.menuConfig.target) {

            this.menuConfig.eventName = this.getHandlerEventConfig(this.menuConfig.target);

            var menuText = this.menuConfig.text || this.getModuleName(),
                menuTarget = Ext.Nav.makeToken(this.getHandlerEventPath(this.menuConfig.target));

            this.application.fireEvent('menuregister', {
                name: this.getModuleName(),
                text: menuText,
                target: menuTarget
            });
        }
    },

    handlePayments: function () {
        this.fireContent({
            xtype: 'import-sberbank'
        });
    },

    onImportSberBankSubmit: function (form, formValues) {

        var waitMsg = _l.get('payments.import_sberbank.upload_loading'),
            form = form.getForm();

        if (form.isValid()) {
            Ext.API.importSberbank(
                form,
                {
                    waitMsg: waitMsg,
                    scope: this,
                    success: function (a, actions) {
                        this.afterSberbankImport(actions.result);
                    },
                    failure: function (a, actions) {
                        this.afterSberbankImportFailure(actions.result);
                    }
                }
            );
        }
    },

    afterSberbankImport: function (response) {
        var value = response.value;
        Ext.MessageBox.show({
            title: _l.get('payments.import_sberbank.success_msg'),
            msg: Ext.String.format(_l.get('payments.import_sberbank.success_dsc'), value['date'], value['count'], value['sum']),
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    },

    afterSberbankImportFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.payment')[errCode] || _l.get('errors')[errCode] || status.description || false;

        if (errors.length && errCode == '242') {
            errDescription = [errDescription, '<br>', Ext.String.format(_l.get('payments.import_sberbank.errors.242'), errors[0]['line'], errors[0]['column'], errors[0]['message'])].join('');
        }

        Ext.MessageBox.show({
            title: _l.get('error') + ' #' + errCode,
            msg: errDescription,
            closable: false,
            buttons: Ext.MessageBox.OK
        });
    }
});