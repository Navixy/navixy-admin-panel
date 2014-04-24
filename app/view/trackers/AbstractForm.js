/**
 * @class NavixyPanel.view.trackers.AbstractForm
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.AbstractForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',

    getTitle: function () {
        return _l.trackers.edit_form.title;
    },

    getSaveBtnTitle: function () {
        return _l.trackers.edit_form.save_btn;
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
                fieldLabel: _l.trackers.fields.label,
                name: 'label',

                minLength: 1,
                maxLength: 60
            },
            {
                fieldLabel: _l.trackers.fields.deleted,
                name: 'deleted',
                xtype: 'checkbox'
            },
            {
                fieldLabel: _l.trackers.fields.blocked,
                name: 'blocked',
                xtype: 'checkbox'
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                fieldLabel: _l.trackers.fields.creation_date,
                name: 'creation_date',
                disabled: true
            },
            {
                fieldLabel: _l.trackers.fields.model,
                name: 'model',
                disabled: true
            },
            {
                fieldLabel: _l.trackers.fields.device_id,
                name: 'device_id',
                disabled: true
            },
            {
                fieldLabel: _l.trackers.fields.phone_exp,
                name: 'phone',
                disabled: true
            }
        ];
    },

    getNEItems: function () {
        return [];
    },

    gatSaveTarget: function () {
        return 'tracker/' + this.record.getId();
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