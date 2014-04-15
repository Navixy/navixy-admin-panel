/**
 * @class NavixyPanel.view.user.USerCreate
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.users.UserCreate', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    alias: 'widget.usercreate',
    requires: [
        'NavixyPanel.view.widgets.fields.TimeZoneCombo',
        'NavixyPanel.view.widgets.fields.LocaleField',
        'NavixyPanel.plugins.InputMask'
    ],

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

        if (items[2] && items[2].items && items[2].items[2]) {
            items[2].items[2].role = 'legal_fields';
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
                padding: '10 0'
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
                xtype: 'combobox',
                fieldLabel: _l.users.fields.legal_type,
                store: this.legalTypesStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type',
                listeners: {
                    change: function() {
                        me.changeLegalStatus(this.getValue() === "sole_trader");
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
                padding: '10 0'
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
                fieldLabel: _l.users.fields.phone,
                name: 'phone',
                plugins: [new NavixyPanel.plugins.InputMask('9 (999) 999-999')],
                minLength: 10,
                maxLength: 15
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
                minLength: 6
            }

        ];
    },

    getSWItems: function () {
        return [
            {
                xtype: 'container',
                cls: 'block_header',
                html: _l.users.create_form.legal_fields,
                padding: '10 0'
            },
            {
                fieldLabel: _l.users.fields.tin,
                name: 'tin',
                minLength: 9,
                maxLength: 12,
                vtype: 'alphanum'
            },
            {
                fieldLabel: _l.users.fields.iec,
                name: 'iec',
                minLength: 4,
                maxLength: 10
            },
            {
                xtype: 'container',
                height: 10
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
                minLength: 6
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
    }
});