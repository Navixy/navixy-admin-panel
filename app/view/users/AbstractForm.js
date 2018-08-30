/**
 * @class NavixyPanel.view.user.AbstractForm
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.users.AbstractForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: [
        'NavixyPanel.view.widgets.fields.TimeZoneCombo',
        'NavixyPanel.view.widgets.fields.LocaleField',
        'NavixyPanel.view.widgets.fields.PhoneField'
    ],

    getTitle: function () {
        return _l.get('users.create_form.title');
    },

    getSaveBtnTitle: function () {
        return _l.get('users.create_form.save_btn');
    },

    getClearBtnTitle: function () {
        return _l.get('users.create_form.clear_btn');
    },

    getItems: function () {
        var items = this.callParent(arguments);

        return items;
    },

    getNWItems: function () {
        var me = this;
        this.legalTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data: [
                {
                    type: "individual",
                    "name": _l.get('users.fields.individual')
                },
                {
                    type: "legal_entity",
                    "name": _l.get('users.fields.legal_entity')
                },
                {
                    type: "sole_trader",
                    "name": _l.get('users.fields.sole_trader')
                }
            ]
        });

        return [
            {
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('users.create_form.main_fields'),
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.get('users.fields.login'),
                name: 'login',
                labelSeparator: Util.getRequiredSeparator(),
                vtype: 'email',
                minLength: 2,
                maxLength: 100,
                validateOnChange: true
            },
            {
                fieldLabel: _l.get('users.create_form.password'),
                name: 'password',
                labelSeparator: Util.getRequiredSeparator(),
                inputType: 'password',
                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('users.create_form.password_repeat'),
                inputType: 'password',
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false,
                minLength: 6,
                maxLength: 20,
                validator: function (value) {
                    var pass_val = me.down('*[name=password]').getValue();
                    return value === pass_val || _l.get('users.create_form.password_mismatched');
                }
            },
            {
                xtype: 'checkbox',
                fieldLabel: _l.get('users.fields.activated_t'),
                name: 'activated',
                checked: true
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                xtype: 'localefield',
                fieldLabel: _l.get('users.create_form.language'),
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false,
                name: 'locale'
            },
            {
                xtype: 'timezoneselect',
                fieldLabel: _l.get('users.create_form.time_zone'),
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false,
                name: 'time_zone'
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                name: 'legal_type',
                xtype: 'combobox',
                fieldLabel: _l.get('users.fields.legal_type'),
                store: this.legalTypesStore,
                editable: false,
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                listeners: {
                    change: function () {
                        me.changeLegalStatus(this.getValue());
                    }
                }
            }
        ];
    },

    getNEItems: function () {
        return [
            {
                xtype: 'container',
                html: _l.get('required_fields'),
                cls: 'block_sup',
                padding: '10 20 20 0'
            }
        ];
    },

    getSEItems: function () {
        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('users.create_form.contact_fields'),
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.get('users.fields.last_name'),
                name: 'last_name',
                minLength: 2,
                maxLength: 100,
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false
            },
            {
                fieldLabel: _l.get('users.fields.first_name'),
                name: 'first_name',
                minLength: 2,
                maxLength: 100,
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false
            },
            {
                fieldLabel: _l.get('users.fields.middle_name'),
                name: 'middle_name',
                minLength: 2,
                maxLength: 100,
                allowBlank: true
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                name: 'phone',
                xtype: 'phonefield',
                fieldLabel: _l.get('users.fields.phone'),
                allowBlank: true
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                fieldLabel: _l.get('users.fields.post_country'),
                name: 'post_country',
                allowBlank: true,
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_region'),
                name: 'post_region',
                allowBlank: true,
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_city'),
                name: 'post_city',
                allowBlank: true,
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_street_address'),
                name: 'post_street_address',
                allowBlank: true,
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_index'),
                allowBlank: true,
                name: 'post_index',
                minLength: 1
            }

        ];
    },

    getSWItems: function () {
        var me = this;

        return {
            role: 'legal_fields',
            items: [
                {
                    xtype: 'container',
                    cls: 'block_header',
                    html: _l.get('users.create_form.legal_fields'),
                    padding: '10 0 20 0',
                    allowBlank: true
                },
                {
                    fieldLabel: _l.get('users.fields.legal_name'),
                    name: 'legal_name',
                    minLength: 1,
                    maxLength: 100
                },
                {
                    fieldLabel: _l.get('users.fields.tin'),
                    name: 'tin',
                    maxLength: 255,
                    maskRe: /[0-9]/,
                    regex: /[0-9]/,
                    allowBlank: true
                },
                {
                    fieldLabel: _l.get('users.fields.iec'),
                    name: 'iec',
                    maxLength: 255,
                    maskRe: /[0-9]/,
                    regex: /[0-9]/,
                    allowBlank: true
                },
                {
                    fieldLabel: _l.get('users.fields.state_reg_num'),
                    name: 'state_reg_num',
                    maxLength: 15,
                    maskRe: /[0-9]/,
                    regex: /[0-9]/,
                    allowBlank: true
                },
                this.getOKPOField(),
                {
                    xtype: 'container',
                    height: 10
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        puck: 'end'
                    },
                    padding: '11 0 5',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1
                        },
                        {
                            xtype: 'button',
                            ui: 'gray',
                            text: _l.get('users.create_form.copy_address'),
                            handler: function () {
                                me.copyAddress();
                            }
                        }
                    ]
                },
                {
                    fieldLabel: _l.get('users.fields.registered_country'),
                    name: 'registered_country',
                    minLength: 1,
                    maxLength: 100
                },
                {
                    fieldLabel: _l.get('users.fields.registered_region'),
                    name: 'registered_region',
                    minLength: 1,
                    maxLength: 100
                },
                {
                    fieldLabel: _l.get('users.fields.registered_city'),
                    name: 'registered_city',
                    minLength: 1,
                    maxLength: 100
                },
                {
                    fieldLabel: _l.get('users.fields.registered_street_address'),
                    name: 'registered_street_address',
                    minLength: 1,
                    maxLength: 100
                },
                {
                    fieldLabel: _l.get('users.fields.registered_index'),
                    name: 'registered_index',
                    minLength: 1,
                    maxLength: 30,
                    allowBlank: true
                }
            ]
        };
    },

    changeLegalStatus: function (soleState) {
        var soleStatus = soleState === "individual",
            labelSeparator = soleStatus ? ':' : Util.getRequiredSeparator(),
            legal_container = this.down('[role="legal_fields"]'),
            ind_fields = [
                this.down('[name="post_city"]'),
                this.down('[name="post_country"]'),
                this.down('[name="post_region"]'),
                this.down('[name="post_street_address"]'),
                this.down('[name="post_index"]')
            ];

        if (legal_container) {
            legal_container[soleStatus ? 'hide' : 'show']();
            legal_container.items.each(function (item) {
                if (Ext.isString(item.name)) {
                    if (Ext.Array.indexOf(['state_reg_num', 'okpo_code'], item.name) < 0) {
                        item.allowBlank = soleStatus;
                        item.labelSeparator = labelSeparator;
                        item.setFieldLabel(item.getFieldLabel());
                    }
                    var isSoleTrader = soleState === 'sole_trader';
                    if (item.name === 'state_reg_num') {
                        item.setFieldLabel(_l.get('users.fields.' + (isSoleTrader ? 'state_reg_num_sole' : 'state_reg_num')));
                        this.updateMaxLength(item, isSoleTrader ? 15 : 13);
                    }
                    if (item.name === 'okpo_code') {
                        this.updateMaxLength(item, isSoleTrader ? 10 : 8);
                        this.updateMinLength(item, isSoleTrader ? 10 : 8);
                    }
                    if (item.name === 'tin') {
                        this.updateMaxLength(item, 10);
                        this.updateMinLength(item, 9);
                    }
                    if (item.name === 'iec') {
                        this.updateMaxLength(item, 9);
                        this.updateMinLength(item, 9);
                    }
                }
            }, this);
        }

        Ext.iterate(ind_fields, function (field) {
            field.allowBlank = soleStatus;
            field.labelSeparator = labelSeparator;
            field.setFieldLabel(field.getFieldLabel());
        }, this);

        if (!soleStatus) {
            var iecField = this.down('[name="iec"]'),
                tinField = this.down('[name="tin"]'),
                nameField = this.down('[name="legal_name"]');

            nameField[soleState === "legal_entity" ? "show" : "hide"]();
            nameField.allowBlank = soleState !== "legal_entity";
            iecField[soleState === "legal_entity" ? "show" : "hide"]();
        }
        this.getForm().isValid();
    },

    updateMaxLength: function (field, maxLength) {
        field.maxLength = maxLength
    },

    updateMinLength: function (field, minLength) {
        field.minLength = minLength
    },

    copyAddress: function () {

        var fieldsMap = {
            post_country: 'registered_country',
            post_index: 'registered_index',
            post_region: 'registered_region',
            post_city: 'registered_city',
            post_street_address: 'registered_street_address'
        };

        Ext.iterate(fieldsMap, function (fieldFromName, fieldToName) {
            var fieldFrom = this.down('[name="' + fieldFromName + '"]'),
                fieldTo = this.down('[name="' + fieldToName + '"]');

            if (fieldFrom && fieldTo) {
                fieldTo.setValue(fieldFrom.getValue());
            }
        }, this);
    },

    gatSaveTarget: function (value) {
        return 'user/' + (value || this.record.getId());
    },

    getOKPOField: function () {
        return Locale.Manager.getLocale() === 'ru' ? {
            fieldLabel: 'ОКПО',
            xtype: 'textfield',
            enforceMaxLength: true,
            maskRe: /[0-9]/,
            regex: /[0-9]/,
            name: 'okpo_code',
            allowBlank: true,
        } : null;
    },

    applyRecordData: function () {
        this.callParent(arguments);
        this.changeLegalStatus(this.down('[name=legal_type]').getValue());
    }
});
