/**
 * @class NavixyPanel.view.components.AbstractWindowSelect
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.desktop.password-change-dialog.PasswordChangeDialog', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    xtype: 'password-change-dialog',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: 250,
    width: 500,
    margin: '0 0 0 -8',
    mapWait: null,
    firstUpdate: false,
    formValues: null,
    record: null,
    ui: 'default',

    getItems: function () {
        var lp = _l.get('settings.edit_form')
        var me = this
        return [{
            xtype: 'form',
            ui: 'light',
            height: 200,
            items: [
                {
                    xtype: 'container',
                    padding: 20,
                    style: 'background-color:#fff',
                    defaults: {
                        ui: 'light',
                        xtype: 'textfield',
                        inputType: 'password',
                        labelWidth: 160,
                        width: 400,
                        allowBlank: false
                    },
                    items: [{
                        fieldLabel: _l.get('settings.fields.password'),
                        name: 'new_password',
                        minLength: 6,
                        maxLength: 20
                    },
                        {
                            fieldLabel: _l.get('settings.fields.password_repeat'),
                            name: 'password',
                            minLength: 6,
                            maxLength: 20,

                            validator: function (value) {
                                var pass_val = me.down('textfield[name=new_password]').getValue();
                                return value === pass_val || _l.get('settings.fields.password_mismatched');
                            }
                        },
                        {
                            fieldLabel: _l.get('settings.fields.password_old'),
                            name: 'old_password'
                        }
                    ]
                }
            ]
        }, this.getBottomBar()]
    },

    getForm: function () {
        return this.down("form").getForm();
    },

    getBottomBar: function () {
        return [
            '->',
            {
                text: this.texts.saveBtn,
                scale: 'medium',
                formBind: true,
                action: 'pass_submit',
                handler: Ext.bind(this.sendForm, this)
            },
            {
                text: _l.get('back_form_btn'),
                scale: 'medium',
                ui: 'gray',
                margin: '0 5',
                handler: Ext.bind(this.close, this)
            }
        ];
    },

    sendForm: function () {
        var form = this.getForm();
        console.log(form.isValid())
        if (form.isValid()) {
            this.fireEvent('formsubmitpassword', this, form.getValues(), this.record);
            if (this.closeOnSelect) {
                this.close();
            }
        }
    },

    getTexts: function () {
        var lp = _l.get("settings.edit_form");
        return {
            windowTitle: lp.get("password_fields"),
            saveBtn: lp.get("pass_save_btn")
        };
    }
});
