/**
 * @class NavixyPanel.view.desktop.Exponential
 * @extends Ext.form.Panel
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Exponential', {
    extend: 'Ext.form.Panel',
    alias: 'widget.exponential_grapth',
    dependencies: [
        'Lib.flot.Canvas',
        'Lib.flot.Colorhelpers',
        'Lib.flot.Flot',
        'Lib.flot.Saturated',
        'Lib.flot.Browser',
        'Lib.flot.DrawSeries',
        'Lib.flot.UiConstants',
        'Lib.flot.Hover',
        'Lib.flot.Axislabels'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    ui: 'light',
    bodyPadding: 20,
    buttonAlign: 'center',
    cls: 'main-exponential main-search',

    prices: null,
    current: null,
    tipContainer: null,

    currency: '',

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                height: 300,
                id: 'graph-holder'
            },
            {
                xtype: 'form',
                margin: '20 0 0 0',
                ui: 'light',
                layout: {
                    type: 'hbox',
                    pack: 'end'
                },
                items: [
                    {
                        role: 'exp-min',
                        xtype: 'numberfield',
                        hideTrigger: true,
                        allowBlack: false,

                        grow: true,
                        growMax: 90,
                        growMin: 90,

                        margin: '0 20 0 0',
                        height: 31,
                        minWidth: 'auto',
                        labelWidth: 'auto',

                        ui: 'light',
                        cls: 'search-field',
                        labelAlign: 'right',
                        labelStyle: 'white-space: nowrap; font-size: 16px; line-height: 33px',

                        vtype: 'numeric',
                        minValue: 0,

                        fieldLabel: _l.get('exponential.start')
                    },
                    {
                        role: 'exp-max',
                        xtype: 'numberfield',
                        hideTrigger: true,
                        allowBlack: false,

                        grow: true,
                        growMax: 90,
                        growMin: 90,

                        margin: '0 10 0 0',
                        height: 31,
                        minWidth: 'auto',
                        labelWidth: 'auto',

                        ui: 'light',
                        cls: 'search-field',
                        labelAlign: 'right',
                        labelStyle: 'white-space: nowrap; font-size: 16px; line-height: 33px',

                        fieldLabel: _l.get('exponential.end')
                    },
                    {
                        role: 'exp-submit',
                        xtype: 'button',
                        cls: 'search-btn',
                        height: 33,

                        text: _l.get('exponential.update_btn'),

                        disabled: true,
                        formBind: true,
                        handler: this.getPrices,
                        scope: this
                    }
                ]
            }
        ];

        this.title = _l.get('exponential.title');

        this.currency = Ext.getStore('Dealer').first().get('seller_currency');

        this.getPrices();
        this.callParent(arguments);
    },

    formatPrice: function (value) {
        return Ext.String.format(_l.get('currencies_tpls')[this.currency], Ext.util.Format.number(value, '0.00'))
    },


    getSubmitBtn: function () {
        return this.down("[role=exp-submit]");
    },


    disableSubmit: function () {
        this.getSubmitBtn().disable()
    },

    enableSubmit: function () {
        this.getSubmitBtn().enable()
    },


    getHolderDom: function () {
        var container = this.down("#graph-holder"),
            el = container && container.getEl(),
            dom = el && el.dom;

        return dom || false;
    },

    getPrices: function () {
        if (this.rendered) {
            this.disableSubmit();
        }

        Ext.API.getDealerPrices({
            params: this.getLimits(),
            callback: function (list) {
                this.prices = list;
                this.updateData();
            },
            failure: this.hideOnFailure,
            scope: this
        })
    },

    getLimits: function () {
        return this.prices
            ? {
                start_amount: this.getMinField().getValue(),
                end_amount: this.getMaxField().getValue()
            }
            : null
    },


    updateData: function () {
        this.updateLimits();
        this.enableSubmit();
        this.updateGraph();
    },

    updateLimits: function () {
        if (!this.prices) {
            return;
        }

        var minField = this.getMinField(),
            maxField = this.getMaxField(),
            minValue = this.prices[0]['amount'],
            maxValue = this.prices[this.prices.length - 1]['amount'];

        minField.setValue(minValue);
        minField.setMaxValue((maxValue - 100) > 0 ? (maxValue - 100): maxValue);

        maxField.setValue(maxValue);
        maxField.setMinValue(minValue + 100);
        maxField.setMaxValue(maxValue * 5);
    },

    getMinField: function () {
        return this.down("[role=exp-min]");
    },

    getMaxField: function () {
        return this.down("[role=exp-max]");
    },


    hideOnFailure: function () {
        this.hide()
    },


    collectGraphData: function () {
        var lines = [],
            result = [
            {
                data: [],
                lines: {
                    show: true,
                    lineWidth: 3
                },
                color: "#edc240",
                shadowSize: 2
            }
        ];

        for (var id in this.prices) {
            result[0].data.push([this.prices[id]['amount'], this.prices[id]['price']])
        }

        return result;
    },


    updateGraph: function () {
        if (this.current) {
            this.current.shutdown();
            this.current = null;
        }

        var me = this;

        this.current = $.plot(this.getHolderDom(), this.collectGraphData(), {
            yaxis:{
                alignTicksWithAxis: 1,
                position: "left",
                axisLabel: _l.get('exponential.yaxis'),
                tickFormatter: function (val) {
                    return me.formatPrice(val)
                }
            },
            xaxis:
            {
                axisLabel: _l.get('exponential.xaxis'),
                position: 'bottom'
            },
            grid: {
                hoverable: true
            }
        });

        this.bindGraphEvents();
    },

    getCurrencyName: function () {
        var store = Ext.getStore('Dealer').first().get('seller_currency')
    },


    bindGraphEvents: function () {
        if (!this.tipContainer) {
            this.tipContainer = Ext.create('Ext.tip.ToolTip', {
                target: 'body',
                autoShow: true,
                hidden: true,
                floating: true,
                shadow: false,
                style: {
                    position: "absolute",
                    border: "1px solid #fdd",
                    "background-color": "#fee",
                    opacity: 1
                }
            });
        }

        var me = this,
            yaxis_str = _l.get('exponential.yaxis'),
            xaxis_str = _l.get('exponential.xaxis'),
            tip = this.tipContainer;

        $(this.getHolderDom()).bind("plothovercleanup", function (event, pos, item) {
            tip.hide();
        });

        $(this.getHolderDom()).bind("plothover", function (event, pos, item) {
            if (!item) {
                tip.hide();
                return;
            }
            tip.update(
                xaxis_str + ": " + item.datapoint[0] +
                "<br>" +
                yaxis_str + ": " + me.formatPrice(item.datapoint[1])
            );
            tip.showAt([item.pageX + 10, item.pageY + 10]);
        });
    },

    destroy: function () {
        if (this.current) {
            this.current.shutdown();
            this.current = null;
        }

        if (this.tipContainer) {
            this.tipContainer.destroy();
        }

        this.callParent(arguments);
    }
});
