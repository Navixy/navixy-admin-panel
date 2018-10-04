/**
 * @class NavixyPanel.view.users.TransactionAdd
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.users.TransactionAdd', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    alias: 'widget.usertransactionadd',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('users.transaction_add.title'),
            ' #{id}: {last_name} {first_name} {middle_name}'
        );
        return titleTpl.apply(this.getRecordData());
    },

    getSaveBtnTitle: function () {
        return _l.get('users.edit_form.save_btn');
    },

    getClearBtnTitle: function () {
        return false;
    },

    getNWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.get('users.fields.user_id'),
                name: 'id',
                disabled: true
            },
            {
                fieldLabel: _l.get('users.fields.login'),
                name: 'login',
                disabled: true
            },
            {
                fieldLabel: _l.get('users.fields.balance'),
                name: 'balance',
                disabled: true
            },
            {
                fieldLabel: _l.get('users.fields.bonus'),
                name: 'bonus',
                disabled: true
            },
            {
                fieldLabel: _l.get('users.transaction_add.description'),
                allowBlank: false,
                name: 'text'
            },
            {
                fieldLabel: _l.get('users.transaction_add.balance') + '<sup>*</sup>',
                name: 'balance_dif',
                allowBlank: true,
                value: 0,
                vtype: 'balance'
            },
            {
                fieldLabel: _l.get('users.transaction_add.bonus') + '<sup>*</sup>',
                name: 'bonus_dif',
                allowBlank: true,
                value: 0,
                vtype: 'balance'
            },
            {
                xtype: 'container',
                html: _l.get('users.transaction_add.value_sup'),
                cls: 'block_sup',
                padding: '10 0 0 160'
            }
        ];
    }
});