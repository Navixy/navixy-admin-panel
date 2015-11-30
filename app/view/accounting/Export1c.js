/**
 * @class NavixyPanel.view.accounting.Export1c
 * @extends NavixyPanel.view.components.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.accounting.Export1c', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: [
        'NavixyPanel.view.widgets.fields.MonthField'
    ],
    alias: 'widget.export1c',

    getTitle: function () {
        return false;
    },

    getSaveBtnTitle: function () {
        return _l.get('accounting.form.export1c.save_btn');
    },

    getReportBtnTitle: function () {
        return _l.get('accounting.form.export1c.report_btn');
    },

    getButtons: function () {

        var saveBtn = this.getSaveBtnTitle(),
            reportBtn = this.getReportBtnTitle(),
            canSendReports = Ext.checkPermission('accounting', 'send_email'),
            result = [];

        if (saveBtn) {
            result.push(
                {
                    text: saveBtn,
                    scale: 'medium',
                    formBind: true,
                    disabled: true,
                    margin: '10 5',
                    handler: Ext.bind(this.sendForm, this)
                }
            );
        }

        if (reportBtn && canSendReports) {
            result.push(
                {
                    text: reportBtn,
                    scale: 'medium',
                    margin: '10 5',
                    disabled: true,
                    formBind: true,
                    handler: Ext.bind(this.sendReport, this)
                }
            );
        }

        return result;
    },

    sendReport: function () {
        var form = this.getForm();

        if (form.isValid()) {
            this.fireEvent('reportsubmit', this, this.getProcessedValues(), this.record);
        }
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function(field) {
            if (field.is('monthfield')) {
                values[field.name] = field.getValue();
                values.year = Ext.Date.format(field.getValue(), 'Y');
                values.month = Ext.Date.format(field.getValue(), 'm');
            }
        });

        return values;
    },

    isValid: function() {
        var me = this,
            invalid;
        Ext.suspendLayouts();
        invalid = me.getFields().filterBy(function(field) {
            return !field.validate();
        });
        Ext.resumeLayouts(true);
        return invalid.length < 1;
    },

    getNWItems: function () {

        return [
            {
                margin: '30 0 10 0',
                fieldLabel: _l.get('accounting.form.export1c.fields.last_act'),
                name: 'last_act_id',

                vtype: 'numeric',
                minLength: 1,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('accounting.form.export1c.fields.month'),
                xtype: 'monthfield',
                name: 'date',
                format: 'F, Y'
            }
        ];
    }
});