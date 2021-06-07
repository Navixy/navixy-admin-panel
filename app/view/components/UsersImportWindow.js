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
    bodyPadding: '10 25',
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
    filesize: 10485760, //Bytes

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
                        labelWidth: 100,
                        maxWidth: 500,
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
                    '<div class="message-box no-btm-margin">',
                    '<div class="x-message">{msg}</div>',
                    '</div>'
                ],
                data: {
                    msg: this.locale.get('file_params')
                }
            },
            {
                xtype: "container",
                role: "success-message",
                layout: {
                    type: "vbox",
                    align: "stretch"
                },
                hidden: true,
                items: [
                    {
                        xtype: "component",
                        baseCls: "result-message green-text text-center",
                        role: "success-text",
                        margin: "0 0 3 0"
                    }
                ]
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
                        baseCls: "result-message orange-text text-center",
                        role: "error-text",
                        margin: "0 0 3 0"
                    }
                ]
            },
            
        ];
        return items;
    },

    validateFile: function(field, value) {
        this.getSuccessContainer().hide();
        this.getErrorsContainer().hide();
        var form = this.getForm();
        // here will be additional validations.
        form.isValid() && this.down('button[action=upload]').setDisabled(false);
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
                    success: function (a, response) {
                        this.onImportSuccess(response.result);
                    },
                    failure: function (a, response) {
                        this.onImportFailure(response.result);
                    }
                }
            );
        } else {
            Ext.getCmp('import_file').markInvalid()
        }
    },

    onImportSuccess: function (result) {
        var successMsg = this.locale.get('success_msg') + result.total;
        this.getSuccessContainer().show();
        this.getSuccessContainer().down("component[role=success-text]").update(successMsg);
        this.down('button[action=upload]').setDisabled(true);
        this.fireEvent('import_successful');
    },

    getSuccessContainer: function() {
        return this.down("container[role=success-message]");
    },

    onImportFailure: function (response) {
        var formats = this.acceptFormats
            rowError = response.row_number,
            errCode = response.status.code;
    
        var errTitle = this.locale.get('errors.codes')[errCode] ?
            this.locale.get('errors.codes')[errCode]
            : this.locale.get('errors.codes')[6];
        
        var errDescription = rowError ? 
            ' (' +this.locale.get('errors.row_number') + rowError + ')'
            : '';
        var errMessage = errTitle + errDescription;

        this.down("container[role=form]").down("filefield").fileInputEl.set({
            accept: formats
        });
        this.showUploadError(errMessage);
        
    },

    getErrorsContainer: function () {
        return this.down("container[role=upload-errors]");
    },

    showUploadError: function (errMessage) {
        this.getErrorsContainer().show();
        this.getErrorsContainer().down("component[role=error-text]").update(this.locale.get('errors.msg') + ' ' + errMessage);
        this.down('button[action=upload]').setDisabled(true);
    }
});