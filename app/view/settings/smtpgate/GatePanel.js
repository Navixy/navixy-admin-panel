/**
 * @class NavixyPanel.view.settings.avangate.Subscription
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.settings.smtpgate.GatePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.smtp-gate-panel',
    padding: 30,
    cls: 'smtp-gate-panel',
    requires: ['NavixyPanel.view.settings.smtpgate.GateItem', 'NavixyPanel.view.settings.smtpgate.TestEmailWindow'],
    ui: 'light',

    initComponent: function () {
        var localePart = _l.get('settings.email_gateways');

        this.title = localePart.get('title');

        this.layout = {
            type: 'hbox',
            align: 'stretch'
        };

        this.defaults = {
            xtype: 'container',
            style: 'border:1px solid #e0e0e0',
            padding: 20,
            margin: 20,
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                ui: 'light'
            }
        };

        this.items = [{
            role: 'gates-container',
            items: []
        }, {
            defaults: {
                labelAlign: 'top',
                ui: 'light'
            },
            role: 'email-settings',
            items: [{
                xtype: 'textfield',
                name: 'email_from',
                fieldLabel: _l.get('settings.fields.email_from'),
                minLength: 2,
                maxLength: 100,
                allowBlank: false,
                skipFormValidation: true,
                role: 'permission-field'
            }, {
                xtype: 'textarea',
                name: 'email_footer',
                fieldLabel: _l.get('settings.fields.email_footer'),
                width: 450,
                rows: 10,
                maxLength: 450,
                role: 'permission-field'
            }]
        }];

        this.dockedItems = [{
            xtype: 'container',
            dock: 'bottom',
            style: 'background:white',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'middle'
            },
            defaults: {
                margin: 5
            },

            items: [{
                xtype: 'button',
                scale: 'medium',
                text: localePart.get('save_btn_text'),
                handler: function () {
                    var settings = this.getValues();
                    if (settings) {
                        this.fireEvent('smtp-settings-save-request', settings);
                    }
                },
                scope: this
            }, {
                xtype: 'button',
                scale: 'medium',
                text: _l.get('settings.test_email.send_test_email_btn'),
                handler: function () {
                    Ext.widget('smtp-gate-test-email-win', {
                        renderTo: Ext.getBody()
                    });
                }
            }]
        }, {
            xtype: 'component',
            html: localePart.get('description'),
            dock: 'top'
        }];

        this.callParent(arguments);
    },

    getNotificationsSettings: function () {
        var settings = {};

        Ext.each(this.down('container[role=email-settings]').query('field'), function (field) {
            if (field.isValid()) {
                settings[field.name] = field.getValue();
            } else {
                settings = null;
                return false;
            }
        });

        return settings;
    },

    getValues: function () {
        var selectedGate = this.down('radiogroup[name=gate_id]').getValue().gate_id,
            notificationsSettings = this.getNotificationsSettings(),
            gateSettings = {
                selectedGate: selectedGate,
                notifications: notificationsSettings
            };

        if (!notificationsSettings) {
            return null;
        }

        if (!this.down('radio[inputValue=' + selectedGate + ']').leasable) {
            var settings = this.down('smtp-gate-item[gate_id=' + selectedGate + ']').getValues();

            if (!settings) {
                return null;
            } else {
                gateSettings.settings = settings;
            }

        }

        return gateSettings;
    },

    afterRender: function () {
        this.initGatesRequest();
        this.callParent(arguments);
    },

    initGatesRequest: function () {
        Ext.API.getEmailGates({
            callback: this.constructForm,
            scope: this
        });
    },

    constructForm: function (data) {
        var radiogroup = {
                xtype: 'radiogroup',
                vertical: true,
                columns: 1,
                layout: {
                    type: 'vbox'
                },
                name: 'gate_id'
            },
            items = [];

        Ext.each(data.leasable, function (item, key) {
            items.push({
                boxLabel: ['<span><b>', item.label, '</b>',
                           '<span class="gate-deafult-from">&lt;', item.default_from_address, '&gt;</span>',
                           item.provider === 'mandrill_smtp' ? '<div class="gate_hint">' + Ext.String.format(_l.get('settings.email_gateways.mandril_text'), '<b>' + item.default_from_address + '</b>') + '</div>' : '',
                           '</span>'].join(''),
                name: 'gate_id',
                leasable: true,
                checked: item.id === data.bound_gateway,
                inputValue: item.id
            });
        });

        if (data.own.length) {
            Ext.each(data.own, function (settingsItem, key) {
                items.push({
                    xtype: 'smtp-gate-item',
                    checked: settingsItem.id === data.bound_gateway,
                    settings: settingsItem,
                    gate_id: settingsItem.id
                });
            });
        } else {
            items.push({
                xtype: 'smtp-gate-item',
                leasable: true,
                gate_id: null
            });
        }

        radiogroup.items = items;

        this.down('container[role=gates-container]').add(radiogroup);

    }

});