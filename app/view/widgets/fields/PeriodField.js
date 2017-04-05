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
    yearsLimit: 100,

    fieldLabel: null,
    labelWidth: 200,
    ui: null,
    numberWidth: 80,
    margin: '0 0 5 0',
    initDisabled: false,

    textCls: null,

    defaultVal: 3,

    limit: null,

    initComponent: function () {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['name', 'period'],
            data: [
                {
                    "name": Ext.util.Format.units(1, 'hours'),
                    "period": "h"
                },
                {
                    "name": Ext.util.Format.units(1, 'days'),
                    "period": "d"
                },
                {
                    "name": Ext.util.Format.units(1, 'months'),
                    "period": "m"
                },
                {
                    "name": Ext.util.Format.units(1, 'years'),
                    "period": "y"
                }

            ]
        });

        this.items = [
            {
                xtype: 'component',
                role: 'fake-text',
                cls: this.textCls || "",
                hidden: true,
                padding: '1 0 0 5'
            },
            {
                xtype: 'numberfield',
                role: 'period_value',
                ui: this.ui,
                fieldLabel: this.fieldLabel,
                labelWidth: this.labelWidth,
                width: this.width - this.numberWidth,
                allowBlank: Ext.isDefined(this.allowBlank) ? this.allowBlank : true,
                allowDecimals: false,
                minValue: 0,
                disabled: this.initDisabled,
                value: this.defaultVal,
                listeners: {
                    change: {
                        fn: this.updateField,
                        scope: this
                    },
                    disable: this.onDisable,
                    enable: this.onEnable,
                    scope: this
                },
                validator: this.validatePeriod
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
                disabled: this.initDisabled,
                store: this.store,
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
                valueField: 'period',
                value: "m"
            },
            {
                xtype: 'textfield',
                role: 'period_result',
                hidden: true,
                name: this.fname,
                allowBlank: this.allowBlank,
                value: this.defaultVal + 'm',
                listeners: {
                    change: this.setValues,
                    scope: this
                }
            }
        ];

        this.callParent(arguments);
    },

    validatePeriod: function (value) {
        var me = this.up('periodfield'),
            result = true;

        if (me.limit) {
            var size_value = me.getPeriodSize().getValue(),
                size = size_value && size_value.toUpperCase(),
                duration = moment.duration(["P", value, size].join("")),
                duration_days = duration && duration.asDays(),
                limit_days = moment.duration(me.limit).asDays();

            result = limit_days - duration_days < 0 ? _l.get("wrong_period") : true;
        }

        return result;
    },

    getText: function () {
        return this.down('[role=fake-text]');
    },

    onDisable: function () {
        this.updateText();
        this.getPeriodSize().hide();
        this.getPeriodValue().hide();
        this.getPeriodResult().hide();

        this.getText().show();
    },

    onEnable: function () {
        this.getPeriodSize().show();
        this.getPeriodValue().show();
        this.getPeriodResult().show();
        this.getText().hide();
    },

    updateText: function () {
        var text = this.getText(),
            field = this.getPeriodResult(),
            periodField = this.getPeriodSize(),
            valueField = this.getPeriodValue(),
            size;

        switch (periodField.getValue()) {
            case 'h':
                size = 'hours';
                break;
            case 'd':
                size = 'days';
                break;
            case 'm':
                size = 'months';
                break;
            case 'y':
                size = 'years';
                break;
        }

        text.update(Ext.util.Format.units(valueField.getValue(), size, true));
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

        valueField.validate();
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
    }
});
