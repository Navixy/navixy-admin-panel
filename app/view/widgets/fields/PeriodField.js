/**
 * @class NavixyPanel.view.widgets.fields.PeriodField
 * @extends Ext.container.Container
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.PeriodField', {
    extend: 'Ext.container.Container',
    alias: 'widget.periodfield',

    layout: 'hbox',

    fname: null,
    allowBlank: true,
    yearsLimit: 3,

    fieldLabel: null,
    labelWidth: 200,
    ui: null,
    numberWidth: 80,
    margin: '0 0 5 0',

    initComponent: function () {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['name', 'period'],
            data: [

                {
                    "name": _l.get('units_combination.days')[1],
                    "period": "d"
                },
                {
                    "name": _l.get('units_combination.months')[1],
                    "period": "m"
                },
                {
                    "name": _l.get('units_combination.years')[1],
                    "period": "y"
                }

            ]
        });

        this.items = [
            {
                xtype: 'numberfield',
                role: 'period_value',
                ui: this.ui,
                fieldLabel: this.fieldLabel,
                labelWidth: this.labelWidth,
                width: this.width - this.numberWidth,
                allowBlank: true,
                minValue: 0,
                listeners: {
                    change: {
                        fn: this.updateField,
                        scope: this
                    }
                }
            },
            {
                xtype: 'container',
                width: 5
            },
            {
                xtype: 'combobox',
                role: 'period_size',
                ui: this.ui,
                width: this.numberWidth - 5,
                allowBlank: true,
                store: this.store,
//                cls: 'second_trigger',
                listeners: {
                    change: {
                        fn: this.changePeriodSize,
                        scope: this
                    }
                },
                editable: false,
                queryMode: 'local',
                autoSelect: true,
                forceSelection: true,
                displayField: 'name',
                valueField: 'period'
            },
            {
                xtype: 'textfield',
                role: 'period_result',
                hidden: true,
                name: this.fname,
                allowBlank: this.allowBlank,
                listeners: {
                    change: this.setValues,
                    scope: this
                }
            }
        ];

        this.callParent(arguments);
    },

    getPeriodSize: function () {
        return this.down('[role="period_size"]');
    },

    getPeriodValue: function () {
        return this.down('[role="period_value"]');
    },

    getPeriodResult: function () {
        return this.down('[role="period_result"]');
    },

    changePeriodSize: function (cmp, type) {
        var valueField = this.getPeriodValue(),
            value = valueField.getValue(),
            maxValue = this.yearsLimit;

        switch (type) {
            case 'd':
                maxValue = 365 * this.yearsLimit;
                break;
            case 'm':
                maxValue = 12 * this.yearsLimit;
                break;
            case 'y':
                maxValue = this.yearsLimit;
                break;
        }

        valueField.setMaxValue(maxValue);

        if (value > maxValue) {
            valueField.setValue(maxValue);
        }

        this.updateField();
    },

    updateField: function () {
        var field = this.getPeriodResult(),
            periodField = this.getPeriodSize(),
            valueField = this.getPeriodValue();

        field.suspendEvents();
        field.setValue(valueField.getValue() + periodField.getValue());
        field.resumeEvents();
    },

    setValues: function (cmp, value) {
        var units = Ext.util.Format.unitsParse(value),
            periodField = this.getPeriodSize(),
            valueField = this.getPeriodValue();

        valueField.setValue(units.value);
        periodField.setValue(units.period);
    },
});
