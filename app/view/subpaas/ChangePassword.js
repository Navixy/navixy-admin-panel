/**
 * @class NavixyPanel.view.subpaas.Edit
 * @extends NavixyPanel.view.subpaas.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.subpaas.ChangePassword', {
    extend: 'NavixyPanel.view.subpaas.AbstractForm',
    alias: 'widget.subpaaschangepassword',

    getTitle: function () {
        var titleTpl = new Ext.XTemplate(
            _l.get('subpaas.password_form.title'),
            ' #{subpaas}: {title}'
        )
        return titleTpl.apply(this.getRecordData())
    },

    getSaveBtnTitle: function () {
        return _l.get('subpaas.password_form.save_btn')
    },

    getBackBtnTitle: function () {
        return _l.get('subpaas.password_form.return_btn')
    },

    getClearBtnTitle: function () {
        return false
    },

    getNWItems: function () {
        var me = this

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                padding: '10 0 30 0'
            },
            {
                fieldLabel: _l.get('subpaas.password_form.password'),
                name: 'new_password',
                inputType: 'password',
                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('subpaas.password_form.password_repeat'),
                inputType: 'password',
                minLength: 6,
                maxLength: 20,
                validator: function (value) {
                    var pass_val = me.down('textfield[name=new_password]').getValue()
                    return value === pass_val || _l.get('subpaas.fields.password_mismatched')
                }
            }
        ]
    },

    getNEItems: function () {
        return []
    },

    getSWItems: function () {
        return { items: [] }
    },

    getSEItems: function () {
        return []
    },

    afterFirstLayout: function () {
        this.callParent(arguments)
        this.query('textfield').map(function (field) {
            field.clearInvalid()
        })
    }

})
