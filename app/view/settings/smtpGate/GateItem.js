/**
 * @class NavixyPanel.view.settings.avangate.Subscription
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.smtpgate.GateItem', {
    extend: 'Ext.Container',
    alias: 'widget.smtp-gate-item',

    cls: 'smtp-gate-panel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    gate_id: null,
    settings: null,
    checked: false,
    initComponent: function () {
        var localePart = _l.get('settings.email_gateways');

        this.items = [{
            xtype: 'radio',
            name: 'gate_id',
            checked: this.checked,
            inputValue: this.gate_id,
            margin: '0 15 0 0',
            boxLabel: '<b>' + localePart.get('default_label') + '</b>',
            listeners: {
                change: function (rb, checked) {
                    this.down('fieldset').setDisabled(!checked);

                    this.query('field[allowBlank=false]').forEach(function (field) {
                        field.clearInvalid();
                    });
                },
                scope: this
            }
        }, {
            xtype: 'fieldset',
            margin: '5 0 5 30',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                margin: '5 0'
            },
            listeners: {
                'afterrender': function (fieldset) {
                    fieldset.setDisabled(!this.down('radio[name=gate_id]').getValue());
                },
                delay: 100,
                single: true,
                scope: this
            },
            padding: 10,
            cls: 'light-fieldset',
            items: [{
                xtype: 'radiogroup',
                fieldLabel: localePart.get('encryption.label'),
                vertical: false,
                defaults: {
                    width: 100
                },
                name: 'encryption',
                listeners: {
                    'change': function (rg, data) {
                        var port = rg.down('radio[inputValue=' + data.encryption + ']').port;

                        this.portField.setValue(port)
                    },
                    scope: this
                },
                items: [
                    {
                        boxLabel: localePart.get('encryption.none'),
                        name: 'encryption',
                        port: 25,
                        inputValue: 'none',
                        checked: true
                    },
                    {
                        boxLabel: localePart.get('encryption.ssl'),
                        port: 465,
                        name: 'encryption',
                        inputValue: 'ssl'
                    },
                    {
                        boxLabel: localePart.get('encryption.tls'),
                        name: 'encryption',
                        port: 587,
                        inputValue: 'tls'
                    }
                ]
            }, {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                margin: '5 0 10 0',
                items: [{
                    xtype: 'textfield',
                    allowBlank: false,
                    validateBlank: true,
                    fieldLabel: localePart.get('host_label'),
                    name: 'host',
                    width: 250,
                    margin: '0 10 0 0',
                    emptyText: localePart.get('host_placeholder')
                }, {
                    xtype: 'numberfield',
                    hideTrigger: true,
                    fieldLabel: localePart.get('port_label'),
                    name: 'port',
                    width: 150,
                    labelWidth: 80,
                    value: 25
                }]
            }, {
                xtype: 'checkbox',
                boxLabel: localePart.get('auth_label'),
                name: 'auth',
                inputValue: true,
                uncheckedValue: false,
                listeners: {
                    'change': function (rg, checked) {
                        this.userField.setDisabled(!checked);
                        this.passwordField.setDisabled(!checked);
                    },
                    scope: this
                }
            }, {
                xtype: 'textfield',
                name: 'user',
                disabled: true,
                fieldLabel: localePart.get('user')
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                disabled: true,
                fieldLabel: localePart.get('password')
            }]
        }
        ];

        this.callParent(arguments);
    },

    afterRender: function () {
        this.userField = this.down('textfield[name=user]');
        this.passwordField = this.down('textfield[name=password]');
        this.portField = this.down('numberfield[name=port]');
        this.gatetIdRadio = this.down('radio[name=gate_id]');

        this.hostField = this.down('textfield[name=host]');
        this.authCheckbox = this.down('checkbox[name=auth]');
        this.encryptionRadioGroup = this.down('radiogroup[name=encryption]');
        this.callParent(arguments);
    },

    afterFirstLayout: function () {
        if (this.settings) {
            this.setValues(this.settings)
        }
        this.callParent(arguments);
    },

    isValid: function () {
        var valid = true;

        Ext.each(this.query('field'), function (field) {
            if (!field.isValid()) {
                valid = false;
                return false;
            }
        });

        return valid;
    },

    setGateId: function (gateId) {
        this.gate_id = gateId;
        this.gatetIdRadio.inputValue = gateId;
    },

    getValues: function () {
        if (!this.isValid() || !this.gatetIdRadio.getValue()) {
            return null;
        }

        var authEnabled = this.authCheckbox.getValue(),
            smtpSettings = {
                id: this.gate_id,
                label: 'Custom smtp',
                "provider": "smtp",
                "leasable": false,
                "params": {
                    "default_from_address": null,
                    "mail.smtp.user": authEnabled ? this.userField.getValue() : null,
                    "mail.smtp.password": authEnabled ? this.passwordField.getValue() : null,
                    "mail.smtp.host": this.hostField.getValue(),
                    "mail.smtp.port": this.portField.getValue(),
                    "mail.smtp.ssl.port": this.portField.getValue(),
                    "mail.smtp.auth": authEnabled,
                    "mail.debug": false,
                    "mail.smtp.starttls.enable": false,
                    "mail.smtp.starttls.required": false,
                    "mail.smtp.use_ssl": false,
                    "mail.smtp.timeout": 60000,
                    "mail.smtp.connectiontimeout": 60000,
                    "mail.transport.protocol": "smtp"
                }
            },
            encription = this.encryptionRadioGroup.getValue().encryption;

        switch (encription) {
            case 'none':
                Ext.apply(smtpSettings.params, {
                    "mail.smtp.use_ssl": false,
                    "mail.smtp.starttls.enable": false
                });

                break;
            case 'ssl':
                Ext.apply(smtpSettings.params, {
                    "mail.smtp.use_ssl": true,
                    "mail.smtp.starttls.enable": false
                });
                break;
            case 'tls':
                Ext.apply(smtpSettings.params, {
                    "mail.smtp.use_ssl": false,
                    "mail.smtp.starttls.enable": true
                });

                break;
        }

        return smtpSettings;

    },

    setValues: function (settings) {
        var smptpSettings = settings.params;
        this.userField.setValue(smptpSettings['mail.smtp.user'])
        this.passwordField.setValue(smptpSettings['mail.smtp.password']);

        this.authCheckbox.setValue(smptpSettings['mail.smtp.auth']);

        var encryption = 'none';

        switch (true) {
            case smptpSettings['mail.smtp.use_ssl']:
                encryption = 'ssl';

                break;

            case  smptpSettings['mail.smtp.starttls.enable']:
                encryption = 'tls';
                break;
        }

        this.encryptionRadioGroup.setValue({
            encryption: encryption
        });

        this.hostField.setValue(smptpSettings['mail.smtp.host']);
        this.portField.setValue(smptpSettings['mail.smtp.port']);

    }

});