/**
 * @class NavixyPanel.view.subpaas.AbstractForm
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.subpaas.AbstractForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',

    getTitle: function () {
        return _l.get('subpaas.create_form.title')
    },

    getSaveBtnTitle: function () {
        return _l.get('subpaas.create_form.save_btn')
    },

    getClearBtnTitle: Ext.emptyFn,

    getItems: function () {
        var items = this.callParent(arguments)

        return items
    },

    getNWItems: function () {
        var me = this

        return [
            {
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('subpaas.create_form.main_fields'),
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.get('subpaas.fields.title'),
                name: 'title',
                minLength: 2,
                maxLength: 50,
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false
            },
            {
                fieldLabel: _l.get('subpaas.fields.email'),
                name: 'email',
                labelSeparator: Util.getRequiredSeparator(),
                vtype: 'email',
                minLength: 2,
                maxLength: 100
            },

            {
                fieldLabel: _l.get('subpaas.fields.link_monitoring'),
                name: 'link_monitoring',
                minLength: 2,
                maxLength: 100,
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false,
                validator: function (domain) {
                    return Util.validateDomain(domain) || _l.get('errors.7.errors.domain')
                }
            }, {
                xtype: 'component',
                padding: '6 12',
                margin: '0 0 10 210',
                cls: 'subpaas-hint',
                width: 240,
                html: '<a href="' + _l.get('settings.fields.domain_help_link') + '" target="_blank">' + _l.get('settings.fields.domain_help') + '</a>'
            },
            {
                fieldLabel: _l.get('subpaas.fields.password'),
                name: 'password',
                labelSeparator: Util.getRequiredSeparator(),
                inputType: 'password',
                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('subpaas.fields.password_repeat'),
                inputType: 'password',
                labelSeparator: Util.getRequiredSeparator(),
                allowBlank: false,
                minLength: 6,
                maxLength: 20,
                validator: function (value) {
                    var pass_val = me.down('*[name=password]').getValue()
                    return value === pass_val || _l.get('subpaas.create_form.password_mismatched')
                }
            }
        ]
    },

    getNEItems: function () {
        return [
            {
                xtype: 'container',
                html: _l.get('required_fields'),
                cls: 'block_sup',
                padding: '10 20 20 0'
            }
        ]
    },

    getSEItems: function () {
        return [
            {
                xtype: 'component',
                cls: 'block_header',
                html: _l.get('subpaas.create_form.misc_fields'),
                padding: '10 0 20 0'
            },
            {
                fieldLabel: _l.get('subpaas.fields.jur_name'),
                name: 'jur_name',
                minLength: 2,
                maxLength: 100,
                allowBlank: true
            },

            {
                fieldLabel: _l.get('subpaas.fields.jur_country'),
                name: 'jur_country',
                minLength: 2,
                maxLength: 100,
                allowBlank: true
            }
        ]
    },

    gatSaveTarget: function (value) {
        return 'subpaas/' + (value || this.record.getId())
    }
})
