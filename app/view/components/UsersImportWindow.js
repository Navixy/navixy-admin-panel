/**
 * @class NavixyPanel.view.components.UsersImportWindow
 * @extends Ext.Window
 * Description
 */

Ext.define('NavixyPanel.view.components.UsersImportWindow', {
    extend: 'Ext.Window',
    alternateClassName: 'Ext.UsersImportWindow',
    cls: 'message-box-with-alert message-box-with-input',
    closeAction: 'destroy',
    modal: true,
    resizable: false,
    draggable: false,
    width: 500,
    buttonAlign: 'center',
    bodyPadding: '10 25 10',
    submitAction: function () {
        var form = this.getForm()
        // Check for file rules
        if (form.isValid()) {
            Ext.API.uploadImportUsers(
                form,
                {
                    waitMsg: "Файл загружается",
                    scope: this,
                    success: function (a, actions) {
                        this.onImportSuccess(actions.result.success);
                    },
                    failure: function (a, actions) {
                        this.onImportFailure(actions.result);
                    }
                }
            );
        } else {
            // Set validation errors
            Ext.getCmp('import_file').markInvalid(_l.get('users.corrupt.alert.confirm_login_error'))
        }
    },
    msg: '',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    buttonTextKeys: {
        import: "submit",
        cancel: "cancel"
    },

    initComponent: function () {
        this.locale = _l.get('users_import_message_box');
        this.buttons = this.getButtons();
        this.items = this.getItems();
        this.callParent(arguments);
    },

    getButtons: function () {
        return [{
            text: this.locale.get(this.buttonTextKeys.import),
            action: 'submit',
            handler: Ext.bind(this.submitAction, this, [this]),
            disabled: true,
            scope: this
        }, {
            text: this.locale.get(this.buttonTextKeys.cancel),
            handler: this.close,
            scope: this
        }];
    },

    getItems: function () {
        var items = [
            {
                xtype: 'component',
                tpl: [
                    '<div class="message-box">',
                    '<div class="x-message-warning">{msg}</div>',
                    '</div>'
                ],
                data: {
                    msg: this.msg
                }
            },
            {
                xtype: "form",
                role: "form",
                layout: {
                    type: "vbox",
                    align: "stretch"
                },
                items: [
                    {
                        xtype: 'filefield',
                        name: 'file',
                        labelWidth: 50,
                        maxWidth: 400,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: this.locale.get('file_input_label'),
                        emptyText: this.locale.get('blank_input_label'),
        
                        listeners: {
                            afterrender: function (field) {
                                field.fileInputEl.set({
                                    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .csv'
                                });
                            },
                            change: function (cbx, value) {
                                // var node = Ext.DomQuery.selectNode("input[name='import_file']");
                                // node.value = value.replace("C:\\fakepath\\","");
                                this.validateFile(cbx, value)
                            },
                            scope: this
                        }
                    }
                ]
            }
            
        ];
        return items;
    },

    validateFile: function(cbx, value) {
        var hasErrors = false;
        var form = this.getForm();
        form.isValid() && this.down('button[action=submit]').setDisabled(hasErrors);
    },

    onImportSuccess: function (response) {
        debugger
        console.log('success import')
    },

    onImportFailure: function (response) {
        debugger
        console.log('failed import')
    },

    getForm: function () {
        return this.down("container[role=form]").getForm();
    },
});