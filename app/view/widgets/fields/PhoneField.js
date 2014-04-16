/**
 * @class NavixyPanel.view.widgets.LocaleCombo
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.PhoneField', {
    extend: 'Ext.form.field.Text',
    requires: [
        'NavixyPanel.plugins.PhoneMask'
    ],
    alias: 'widget.phonefield',

    plugins: [
        {
            ptype: 'phoneinputmask'
        }
    ],
    minLength: 10,
    maxLength: 15,

    // removing mask form value
    getRawValue: function () {
        return parseInt(this.callParent(arguments).replace(/\D+/g,""));
    },

    validator: function (value) {
        var strValue = value.toString(),
            valueLen = strValue.length;

        return (valueLen >= this.minLength && valueLen <= this.maxLength) || (this.allowBlank && !valueLen) || _l.phone_invalid_msg;
    }
});
