/**
 * @class NavixyPanel.view.user.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.sub_paas.ChangePassword', {
    extend: 'NavixyPanel.view.sub_paas.AbstractForm',
    alias: 'widget.userchangepassword',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('users.password_form.title'),
            ' #{id}: {last_name} {first_name} {middle_name}'
        );
        return titleTpl.apply(this.getRecordData());
    },

    getSaveBtnTitle: function () {
        return _l.get('users.password_form.save_btn');
    },

    getBackBtnTitle: function () {
        return _l.get('users.password_form.return_btn');
    },

    getClearBtnTitle: function () {
        return false;
    },

    getNWItems: function () {

        var me = this;

        return [
            {
                xtype: 'container',
                cls: 'block_header',
                padding: '10 0 30 0'
            },
            {
                fieldLabel: _l.get('users.fields.password'),
                name: 'new_password',
                inputType: 'password',

                minLength: 6,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('users.fields.password_repeat'),
                inputType: 'password',

                minLength: 6,
                maxLength: 20,

                validator: function (value) {
                    var pass_val = me.down('textfield[name=new_password]').getValue();
                    return value === pass_val || _l.get('users.fields.password_mismatched');
                }
            },
        ];
    },

    getNEItems: function () {
        return [];
    },

    getSWItems: function () {
        return { items: [] };
    },

    getSEItems: function () {
        return [];
    },

});
