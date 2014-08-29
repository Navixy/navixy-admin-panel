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

        if (items[1] && items[1].items && items[1].items[1]) {
            items[1].items[1].role = 'legal_fields';
        }

        return items;
    },

    getNWItems: function () {
        var me = this;
        this.legalTypesStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data : [
                {type: "individual", "name": _l.get('users.fields.individual')},
                {type: "legal_entity", "name": _l.get('users.fields.legal_entity')},
                {type: "sole_trader", "name": _l.get('users.fields.sole_trader')}
            ]
        });

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.get('users.create_form.main_fields'),
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.get('users.fields.login'),
                name: 'login',

                vtype: 'email',
                minLength: 2,
                maxLength: 100,

                validateOnChange: false
            },
            {
                fieldLabel: _l.get('users.create_form.password'),
                name: 'password',
                inputType: 'password',

                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('users.create_form.password_repeat'),
                inputType: 'password',
                allowBlank: false,

                minLength: 6,
                maxLength: 20,

                validator: function(value) {
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
                name: 'locale'
            },
            {
                xtype: 'timezoneselect',
                fieldLabel: _l.get('users.create_form.time_zone'),
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
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
                ,listeners: {
                    change: function() {
                        me.changeLegalStatus(this.getValue() === "individual");
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
                labelSeparator: '*:',
                allowBlank: false
            },
            {
                fieldLabel: _l.get('users.fields.first_name'),
                name: 'first_name',
                minLength: 2,
                maxLength: 100,
                labelSeparator: '*:',
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
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_region'),
                name: 'post_region',
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_city'),
                name: 'post_city',
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_street_address'),
                name: 'post_street_address',
                minLength: 1,
                maxLength: 100
            },
            {
                fieldLabel: _l.get('users.fields.post_index'),
                name: 'post_index',
                minLength: 1,
                vtype: 'numeric'
            }

        ];
    },

    getSWItems: function () {
        var me = this;
        return [
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
                minLength: 1,
                maxLength: 12,
                vtype: 'numeric'
            },
            {
                fieldLabel: _l.get('users.fields.iec'),
                name: 'iec',
                minLength: 1,
                maxLength: 10,
                vtype: 'numeric'
            },
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
                vtype: 'numeric',
                allowBlank: true
            }
        ];
    },

    changeLegalStatus: function (soleStatus) {
        var legal_container = this.down('[role="legal_fields"]'),
            ind_fields = [
//                this.down('[name="first_name"]'),
//                this.down('[name="last_name"]'),
                this.down('[name="post_city"]'),
                this.down('[name="post_country"]'),
                this.down('[name="post_region"]'),
                this.down('[name="post_street_address"]'),
                this.down('[name="post_index"]')
            ];

        if (legal_container) {
            legal_container[soleStatus ? 'hide' : 'show']();
            legal_container.items.each(function(item) {
                if (Ext.isString(item.name)) {

                    item.allowBlank = soleStatus;
                    if (soleStatus) {
                        item.validate();
                        item.labelSeparator = ':';
                    } else {
                        item.labelSeparator = '*:';
                    }
                    item.setFieldLabel(item.getFieldLabel());
                }
            }, this);
        }

        Ext.iterate(ind_fields, function (field) {
            field.allowBlank = soleStatus;
            if (soleStatus) {
                field.validate();
                field.labelSeparator = ':';
            } else {
                field.labelSeparator = '*:';
            }

            field.setFieldLabel(field.getFieldLabel());
        }, this);
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
    }
});