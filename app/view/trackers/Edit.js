/**
 * @class NavixyPanel.view.trackers.Edit
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.Edit', {
    extend: 'NavixyPanel.view.trackers.AbstractForm',
    alias: 'widget.trackeredit',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.trackers.edit_form.title,
            ' #{id}: {label}'
        );
        return titleTpl.apply(this.getRecordData());
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