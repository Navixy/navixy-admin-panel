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
                    disabled: true,
                    margin: '10 5',
                    role: 'save-btn',
                    action: 'getacts',
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
                    action: 'sendreport',
                    handler: Ext.bind(this.sendReport, this)
                }
            );
        }

        return result;
    },

    sendReport: function () {
        this.fireEvent('reportsubmit', this, this.getProcessedValues(), this.record);
    },

    getProcessedValues: function () {
        var values = this.getValues();

        this.iterateFields(function (field) {
            if (field.is('monthfield')) {
                values[field.name] = field.getValue();
                values.year = Ext.Date.format(field.getValue(), 'Y');
                values.month = Ext.Date.format(field.getValue(), 'm');
            }
        });

        if (Ext.isEmpty(values.check_subject_tax_identity)) {
            values.check_subject_tax_identity = true;
        }

        return values;
    },

    sendForm: function () {
        if (this.isValid()) {
            this.callParent(arguments);
        }
    },

    isValid: function () {
        var requiredFields = ['last_act_id', 'date'],
            valid = true;

        Ext.each(requiredFields, function (fieldName) {
            var field = this.down('field[name=' + fieldName + ']');

            if (!field.isValid()) {
                valid = false;
                return false;
            }

            if (!field.getValue()) {
                field.markInvalid(field.blankText);
                valid = false;
                return false;

            }
        }, this);

        return valid;
    },

    getNWItems: function () {

        return [
            {
                margin: '30 0 10 0',
                fieldLabel: _l.get('accounting.form.export1c.fields.last_act'),
                name: 'last_act_id',
                vtype: 'numeric',
                listeners: {
                    change: function () {
                        this.down('button[action=getacts]').setDisabled(!this.isValid())
                    },
                    scope: this
                },
                allowBlank: true,
                minLength: 1,
                maxLength: 20
            },
            {
                fieldLabel: _l.get('accounting.form.export1c.fields.month'),
                xtype: 'monthfield',
                listeners: {
                    change: function (monthfield) {
                        this.down('button[action=getacts]').setDisabled(!this.isValid())
                        this.down('button[action=sendreport]').setDisabled(!monthfield.isValid())
                    },
                    scope: this
                },
                maxValue: moment().add(1, 'day').toDate(),
                name: 'date',
                value: Ext.Date.formatISO(moment().subtract('months', 1), "F, Y"),
                format: 'F, Y'
            },
            {
                fieldLabel: _l.get('accounting.form.export1c.fields.check'),
                xtype: 'checkbox',
                name: 'check_subject_tax_identity',
                inputValue: false,
                value: false
            }
        ];
    }
});