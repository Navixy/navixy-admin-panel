/**
 * @class NavixyPanel.view.user.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.users.Edit', {
    extend: 'NavixyPanel.view.users.AbstractForm',
    alias: 'widget.useredit',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.users.edit_form.title,
            ' #{id}: {last_name} {first_name} {middle_name}'
        );
        return titleTpl.apply(this.getRecordData());
    },

    getSaveBtnTitle: function () {
        return _l.users.edit_form.save_btn;
    },

    getClearBtnTitle: function () {
        return false;
    },

    getNWItems: function () {
        var config = this.callParent(arguments);

        return [
            config.shift(),
            config.shift(),
            config[2],
            config.pop()
        ];
    }
});