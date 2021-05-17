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
    msg: '',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    buttonTextKeys: {
        import: "submit",
        cancel: "cancel"
    },
    acceptFormats: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .csv',

    initComponent: function () {
        this.locale = _l.get('users_import_message_box');
        this.buttons = this.getButtons();
        this.items = this.getItems();
        this.callParent(arguments);
    },

    getButtons: function () {
        return [{
            text: this.locale.get(this.buttonTextKeys.import),
            action: 'upload',
            disabled: true,
            formBind: true,
            handler: this.fireUploadFile,
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
                    '<div class="x-message">{msg}</div>',
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
                                    accept: this.acceptFormats
                                });
                            },

                            change: function (field, value) {
                                var node = Ext.DomQuery.selectNode('input[id=' + field.getInputId() + ']');
                                node.value = value.replace("C:\\fakepath\\", "");
                                this.validateFile(field, value)
                            },
                            scope: this
                        }
                    }
                ]
            },
            {
                xtype: 'component',
                tpl: [
                    '<div class="message-box">',
                    '<div class="x-message">{msg}</div>',
                    '</div>'
                ],
                data: {
                    msg: this.locale.get('file_params')
                }
            },
            {
                xtype: "container",
                role: "upload-errors",
                layout: {
                    type: "vbox",
                    align: "stretch"
                },
                hidden: true,
                items: [
                    {
                        xtype: "component",
                        baseCls: "red-text text-center",
                        role: "error-text",
                        margin: "0 0 3 0"
                    }
                ]
            },
            
        ];
        return items;
    },

    validateFile: function(field, value) {
        var hasErrors = false;
        var form = this.getForm();
        form.isValid() && this.down('button[action=upload]').setDisabled(hasErrors);
    },

    getForm: function () {
        return this.down("container[role=form]").getForm();
    },

    fireUploadFile: function () {
        var form = this.getForm()
        if (form.isValid()) {
            Ext.API.uploadImportUsers(
                form,
                {
                    waitMsg: this.locale.get('process_msg'),
                    scope: this,
                    success: function (a, actions) {
                        this.onImportSuccess();
                    },
                    failure: function (a, actions) {
                        this.onImportFailure(actions.result);
                    }
                }
            );
        } else {
            Ext.getCmp('import_file').markInvalid(_l.get('users.corrupt.alert.confirm_login_error'))
        }
    },

    onImportSuccess: function () {
        this.close();
    },

    onImportFailure: function (response) {
             var formats = this.acceptFormats
                //  status = response.status,
                // errors = response.errors || [],
                // errCode = status.code,
                // errDescription = _l.get('errors.settings')[errCode] || _l.get('errors')[errCode] || status.description || false;
            
            this.down("container[role=form]").down("filefield").fileInputEl.set({
                accept: formats
            });
            this.showUploadError();
        
    },

    getErrorsContainer: function () {
        return this.down("container[role=upload-errors]");
    },

    showUploadError: function () {
        this.getErrorsContainer().show();
        this.getErrorsContainer().down("component[role=error-text]").update(this.locale.get('error_msg'));
    }
});