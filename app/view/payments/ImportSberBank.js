/**
 * @class NavixyPanel.view.payments.ImportSberBank
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.payments.ImportSberBank', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    alias: 'widget.import-sberbank',

    accept: {
        format: 'CSV',
        accept: '.csv'
    },

    getTitle: function () {
        return _l.get('payments.import_sberbank.title');
    },

    getSaveBtnTitle: function () {
        return _l.get('payments.import_sberbank.save_btn');
    },


    getButtons: function () {

        var saveBtn = this.getSaveBtnTitle(),
            result = [];

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    scale: 'medium',
                    formBind: true,
                    disabled: true,
                    margin: '10 5',
                    handler: Ext.bind(this.sendForm, this)
                }
            );
        }

        return result;
    },

    getErrorsContainer: function () {
        return this.down("container[role=upload-errors]");
    },

    getNWItems: function () {

        var me = this;

        return [
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
                xtype: "filefield",
                name: "file",
                allowBlank: false,
                fieldLabel: Ext.String.format(_l.get('payments.import_sberbank.fields.file_title'), 'CSV', Config.uploadLimit || 16),
                msgTarget: "under",
                labelAlign: "top",
                buttonText: _l.get('payments.import_sberbank.upload_btn'),
                buttonConfig: {
                    padding: "3 10 3 10"
                },
                listeners: {
                    change: function(field, value){
                        var node = Ext.DomQuery.selectNode('input[id=' + field.getInputId() + ']');
                        node.value = value.replace("C:\\fakepath\\","");
                    }
                }
            }
        ];
    },

    afterFileUploadFailure: function (response) {
        var status = response.status,
            errors = response.errors || [],
            errCode = status.code,
            errDescription = _l.get('errors.settings')[errCode] || _l.get('errors')[errCode] || status.description || false;

        this.showUploadError(errDescription);
    },

    showUploadError: function (errDescription) {
        this.getErrorsContainer().show();
        this.getErrorsContainer().down("component[role=error-text]").update(_l.get('payments.import_sberbank.error_text') + (errDescription  ? ": " + errDescription : ""));
    }
});
