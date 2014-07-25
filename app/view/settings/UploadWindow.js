/**
 * @class NavixyPanel.view.settings.UploadWindow
 * @extends Ext.Window
 * Description
 */
Ext.define("NavixyPanel.view.settings.UploadWindow", {
    extend: "Ext.Window",
    alias: "widget.uploadwindow",
    modal:  true,
    autoShow:  true,
    border:  true,
    resizable: false,
    draggable:  true,
    width:  500,
    height:  300,
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
        favicon: {
            format: 'ICO',
            accept: 'image/x-icon'
        },
        login_wallpaper: {
            format: 'PNG, JPG',
            accept: 'image/jpeg, image/png'
        },
        wrapper_wallpaper: {
            format: 'PNG, JPG',
            accept: 'image/jpeg, image/png'
        }
    },

    initComponent: function() {
        this.constrainTo = Ext.getBody();

        this.title = Ext.String.format(_l.settings.upload_form.title, _l.settings.upload_form.titles[this.fileType]);
        this.defaultHeight = this.height;

        this.buttons = [
            {
                text: _l.settings.upload_form.save_btn,
                action: "upload_file",
                disabled: true,
                handler: this.fireUploadFile,
                scope: this
            },
            {
                text: _l.settings.upload_form.cancel_btn,
                handler: this.close,
                scope: this
            }
        ];

        var fileFormat = this.typesMap[this.fileType].format,
            fileAccept = this.typesMap[this.fileType].accept;

        this.items = [
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
                        xtype: "filefield",
                        name: "file",
                        allowBlank: false,
                        fieldLabel: Ext.String.format(_l.settings.upload_form.img_title, fileFormat, Config.uploadLimit || 10),
                        msgTarget: "under",
                        labelAlign: "top",
                        buttonText: _l.settings.upload_form.upload_btn,
                        buttonConfig: {
                            padding: "3 10 3 10"
                        },
                        listeners: {
                            afterrender: function(field) {
                                field.fileInputEl.set({
                                    accept: fileAccept
                                });
                            },
                            change: function(field, value){
                                var node = Ext.DomQuery.selectNode('input[id=' + field.getInputId() + ']');
                                node.value = value.replace("C:\\fakepath\\","");
                            }
                        }
                    }]
            }
        ];

        this.callParent(arguments);
    }
});