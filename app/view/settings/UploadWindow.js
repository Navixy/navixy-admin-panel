/**
 * @class NavixyPanel.view.settings.UploadWindow
 * @extends Ext.Window
 * Description
 */
Ext.define("NavixyPanel.view.settings.UploadWindow", {
    extend: "Ext.Window",
    alias: "widget.uploadwindow",
    modal: true,
    autoShow: true,
    border: true,
    resizable: false,
    draggable: true,
    width: 500,
    height: 300,
    closable: true,
    closeAction: "destroy",
    constrain: true,
    bodyPadding: "0 6",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    padding: 10,
    icon: null,
    fileType: null,

    typesMap: {
        logo: {
            format: 'PNG',
            accept: 'image/png'
        },
        monitoring_logo: {
            format: 'PNG',
            accept: 'image/png'
        },
        document_logo: {
            format: 'PNG',
            accept: 'image/png'
        },
        favicon: {
            format: 'ICO',
            accept: 'image/x-icon'
        },
        login_wallpaper: {
            format: 'PNG, JPG',
            accept: 'image/jpeg, image/png'
        },
        desktop_wallpaper: {
            format: 'PNG, JPG',
            accept: 'image/jpeg, image/png'
        }
    },

    initComponent: function () {
        this.constrainTo = Ext.getBody();

        this.title = Ext.String.format(_l.get('settings.upload_form.title'), _l.get('settings.upload_form.titles')[this.fileType]);
        this.defaultHeight = this.height;

        this.buttons = [
            {
                text: _l.get('settings.upload_form.save_btn'),
                action: "upload_file",
                formBind: true,
                handler: this.fireUploadFile,
                scope: this
            },
            {
                text: _l.get('settings.upload_form.cancel_btn'),
                handler: this.close,
                scope: this
            }
        ];

        var fileFormat = this.typesMap[this.fileType].format,
            fileAccept = this.typesMap[this.fileType].accept;

        this.items = [
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
                        baseCls: "red-text",
                        role: "error-text",
                        margin: "0 0 3 0"
                    }
                ]
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
                        xtype: "hidden",
                        name: "type",
                        value: this.fileType
                    },
                    {
                        xtype: "component",
                        baseCls: "gray-text",
                        role: "error-text",
                        html: _l.get('settings.upload_form.tips')[this.fileType],
                        margin: "0 0 3 0"
                    },
                    {
                        xtype: "filefield",
                        name: "file",
                        allowBlank: false,
                        fieldLabel: Ext.String.format(_l.get('settings.upload_form.img_title'), fileFormat, Config.uploadLimit || 10),
                        msgTarget: "under",
                        labelAlign: "top",
                        buttonText: _l.get('settings.upload_form.upload_btn'),
                        buttonConfig: {
                            padding: "3 10 3 10"
                        },
                        listeners: {
                            afterrender: function (field) {
                                field.fileInputEl.set({
                                    accept: fileAccept
                                });
                            },
                            change: function (field, value) {
                                var node = Ext.DomQuery.selectNode('input[id=' + field.getInputId() + ']');
                                node.value = value.replace("C:\\fakepath\\", "");
                            }
                        }
                    }]
            }
        ];

        this.callParent(arguments);
    },

    getForm: function () {
        return this.down("container[role=form]").getForm();
    },

    getErrorsContainer: function () {
        return this.down("container[role=upload-errors]");
    },

    fireUploadFile: function () {
        var waitMsg = _l.get('settings.edit_form.upload_loading'),
            form = this.getForm();

        if (form.isValid()) {
            Ext.API.uploadSettingsImage(
                form,
                {
                    waitMsg: waitMsg,
                    scope: this,
                    success: function (a, actions) {
                        this.afterFileUpdate(this.fileType, actions.result.success);
                    },
                    failure: function (a, actions) {
                        this.afterFileUpdateFailure(this.fileType, actions.result);
                    }
                }
            );
        }
    },
    // TODO fix update after api ready
    afterFileUpdate: function (type, success) {
        if (success) {
            Ext.getStore('Settings').loadRecord(null, function (settingsRecord) {
                this.fireEvent('fileupload', type, settingsRecord);
                this.close();
            }, this);
        }
    },

    afterFileUpdateFailure: function (type, response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.settings')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.down("container[role=form]").down("filefield").fileInputEl.set({
            accept: this.typesMap[this.fileType].accept
        });

        this.showUploadError(errDescription);
    },

    showUploadError: function (errDescription) {
        this.getErrorsContainer().show();
        this.getErrorsContainer().down("component[role=error-text]").update(_l.get('settings.upload_form.error_text') + (errDescription ? ": " + errDescription : ""));
    }
});