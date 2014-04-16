/**
 * @class NavixyPanel.view.user.USerCreate
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.users.UserEdit', {
    extend: 'NavixyPanel.view.users.UserCreate',
    alias: 'widget.useredit',
    id: 'UserEdit',

    destroyOnClose: true,

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
            {
                fieldLabel: _l.users.fields.login,
                name: 'login',
                disabled: true
            },
            config.pop()
        ];
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