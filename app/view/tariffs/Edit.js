/**
 * @class NavixyPanel.view.tariffs.Edit
 * @extends NavixyPanel.view.tariffs.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.tariffs.Edit', {
    extend: 'NavixyPanel.view.tariffs.AbstractForm',
    alias: 'widget.tariffedit',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('tariffs.edit_form.title'),
            ' #{id}: {name}'
        );
        return titleTpl.apply(this.getRecordData());
    },

    getSaveBtnTitle: function () {
        return _l.get('tariffs.edit_form.save_btn');
    },

    getClearBtnTitle: function () {
        return false;
    },


    applyRecordData: function () {
        var recordData = this.getRecordData(),
            fieldName, fieldValue, fieldType;

        if (recordData) {
            this.iterateFields(function(field) {
                fieldName = field.name;
                fieldType = field.getXType();
                fieldValue = recordData[fieldName];

                if (fieldValue !== 'undefined') {
                    field.setValue(fieldValue);
                }

                if (fieldName === 'device_type' && this.record.hasDevices()) {
                    field.setDisabled(true);
                }
            });
        }

        this.getForm().isValid();
    }
});