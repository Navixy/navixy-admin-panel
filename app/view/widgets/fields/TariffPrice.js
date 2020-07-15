/**
 * @class User.view.form.FakeField
 * @extends Ext.container.Container
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.TariffPrice', {
    extend: 'Ext.container.Container',
    alias: 'widget.tariffprice',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    fieldConfig: null,

    textCls: null,

    name: null,
    tariffPrices: null,
    currency: null,
    dontShowButton: false,

    disabledValue: 9999999999.99,
    disabledValue_min: 999999.99,
    disabledValue_alt: 9999999999,

    na: false,
    lastPrice: null,

    initComponent: function () {
        //this.na = this.tariffPrices && Ext.isEmpty(this.tariffPrices[this.name]);

        this.items = this.getItems();

        this.callParent(arguments);
    },

    getItems: function () {
        var isNa = this.na;

        return [
            Ext.apply({
                role: 'field',
                name: this.name,
                hidden: isNa,
                listeners: {
                    disable: !isNa ? this.onDisable : Ext.emptyFn,
                    enable: !isNa ? this.onEnable : Ext.emptyFn,
                    change: !isNa ? this.onChange : Ext.emptyFn,
                    scope: this
                }
            },
                this.fieldConfig || {}
            ),
            {
                xtype: 'component',
                role: 'fake-text',
                width: 100,
                style: 'height: 28px; padding: 7px 5px 3px',
                html: isNa ? _l.get("na") : "",
                hidden: !isNa
            },
            {
                xtype: 'button',
                role: 'disable-btn',
                ui: 'gray',
                width: 95,
                margin: '0 5',
                text: _l.get("forbid"),
                handler: this.disablePrice,
                scope: this,
                hidden: true
            },
            {
                xtype: 'button',
                role: 'enable-btn',
                width: 95,
                margin: '0 5',
                text: _l.get("allow"),
                handler: this.enablePrice,
                scope: this,
                hidden: true
            }
        ];
    },

    disablePrice: function () {
        var field = this.getField(),
            text = this.getText();

        this.lastPrice = field.getValue();

        text.show();
        text.update(_l.get('forbidden'));

        field.setValue(this.disabledValue);
        field.hide();
    },

    enablePrice: function () {
        var field = this.getField(),
            text = this.getText();

        text.hide();
        text.update('');

        field.setValue(this.lastPrice || 0);
        field.show();
    },

    getText: function () {
        return this.down('[role=fake-text]');
    },

    getField: function () {
        return this.down('[role=field]');
    },

    getDisableBtn: function () {
        return this.down('[role=disable-btn]');
    },

    getEnableBtn: function () {
        return this.down('[role=enable-btn]');
    },

    onChange: function () {
        var field = this.getField(),
            text = this.getText();

        if (!this.na) {
            if (!this.dontShowButton && (field.getValue() >= this.disabledValue_min || field.getValue() == this.disabledValue_alt)) {
                this.getEnableBtn().show();
                this.getDisableBtn().hide();

                text.show();
                text.update(_l.get('forbidden'));

                field.setValue(this.disabledValue);
                field.hide();
            } else {
                this.getEnableBtn().hide();
                !this.dontShowButton && this.getDisableBtn().show();
            }
        }
    },

    onDisable: function () {
        if (!this.na) {
            this.updateText();
            this.getField().hide();
            this.getText().show();

            this.onChange();

            this.getDisableBtn().hide();
            this.getEnableBtn().hide();
        }
    },

    onEnable: function () {
        if (!this.na) {
            this.getField().show();
            this.getText().hide();
            this.onChange();
        }
    },

    updateText: function () {
        var field = this.getField(),
            text = this.getText();

        if (field.getValue() < this.disabledValue_min || field.getValue() != this.disabledValue_alt) {
            text.update(Ext.String.format(_l.get('currencies_tpls')[this.currency], Ext.util.Format.number(field.getValue(), '0.00')));
        }
    }
})
    ;
