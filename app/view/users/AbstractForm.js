/**
 * @class NavixyPanel.view.user.UserAbstractForm
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

    backTarget: 'users',

    getTitle: function () {
        return _l.users.create_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.users.create_form.save_btn;
    },

    getClearBtnTitle: function () {
        return _l.users.create_form.clear_btn;
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
                {type: "sole_trader", "name": _l.users.fields.sole_trader},
                {type: "legal_entity", "name": _l.users.fields.legal_entity},
                {type: "individual", "name": _l.users.fields.individual}
            ]
        });

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.users.create_form.main_fields,
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.users.fields.login,
                name: 'login',

                vtype: 'email',
                minLength: 2,
                maxLength: 100,

                validateOnChange: false
            },
            {
                fieldLabel: _l.users.create_form.password,
                name: 'password',
                inputType: 'password',

                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.users.create_form.password_repeat,
                inputType: 'password',
                allowBlank: false,

                minLength: 6,
                maxLength: 20,

                validator: function(value) {
                    var pass_val = me.down('*[name=password]').getValue();
                    return value === pass_val || _l.users.create_form.password_mismatched;
                }
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                xtype: 'localefield',
                fieldLabel: _l.users.create_form.language,
                name: 'locale'
            },
            {
                xtype: 'timezoneselect',
                fieldLabel: _l.users.create_form.time_zone,
                name: 'time_zone'
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                name: 'legal_type',
                xtype: 'combobox',
                fieldLabel: _l.users.fields.legal_type,
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
        return [];
    },

    getSEItems: function () {
        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.users.create_form.contact_fields,
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.users.fields.first_name,
                name: 'first_name',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.middle_name,
                name: 'middle_name',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.last_name,
                name: 'last_name',
                minLength: 2,
                maxLength: 100
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                name: 'phone',
                xtype: 'phonefield',
                fieldLabel: _l.users.fields.phone
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                fieldLabel: _l.users.fields.post_country,
                name: 'post_country',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.post_region,
                name: 'post_region',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.post_city,
                name: 'post_city',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.post_street_address,
                name: 'post_street_address',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.post_index,
                name: 'post_index',
                minLength: 6,
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
                html: _l.users.create_form.legal_fields,
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.users.fields.legal_name,
                name: 'legal_name',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.tin,
                name: 'tin',
                minLength: 9,
                maxLength: 12,
                vtype: 'numeric'
            },
            {
                fieldLabel: _l.users.fields.iec,
                name: 'iec',
                minLength: 4,
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
                        text: _l.users.create_form.copy_address,
                        handler: function () {
                            me.copyAddress();
                        }
                    }
                ]
            },
            {
                fieldLabel: _l.users.fields.registered_country,
                name: 'registered_country',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.registered_region,
                name: 'registered_region',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.registered_city,
                name: 'registered_city',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.registered_street_address,
                name: 'registered_street_address',
                minLength: 2,
                maxLength: 100
            },
            {
                fieldLabel: _l.users.fields.registered_index,
                name: 'registered_index',
                minLength: 6,
                vtype: 'numeric'
            }
        ];
    },

    changeLegalStatus: function (soleStatus) {
        var legal_container = this.down('[role="legal_fields"]');

        if (legal_container) {
            legal_container[soleStatus ? 'hide' : 'show']();
            legal_container.items.each(function(item) {
                if (Ext.isString(item.name)) {
                    item.allowBlank = soleStatus;
                    if (soleStatus) {
                        item.validate();
                    }
                }
            }, this);
        }
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

    showSubmitErrors: function (errCode, errors, errDescription) {
        var errLocale = _l.errors[errCode] || false,
            codesMap = {
                206: 'login'
            };

        if (errors && Ext.isObject(errLocale) && errLocale.errors ) {
            Ext.iterate(errors, function(error) {
                var errText = error.error,
                    errParameter = error.parameter || '',
                    field;

                errParameter = errParameter.split(".");
                errParameter = errParameter[1] || false;

                field = errParameter
                    ? this.down('[name="' + errParameter + '"]')
                    : false;

                if (field) {
                    field.markInvalid(errLocale.errors[errParameter] || errText)
                }
            }, this);
        } else if (codesMap[errCode]) {
            var errText = errLocale || errDescription,
                errParameter = codesMap[errCode],
                field = this.down('[name="' + errParameter + '"]');

            if (field && errText) {
                field.markInvalid(errLocale || errDescription);
            }
        }
    }
});