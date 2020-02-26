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
        'Lib.flot.Axislabels'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    ui: 'light',
    bodyPadding: 20,
    buttonAlign: 'center',
    height: 440,
    cls: 'main-exponential',

    prices: null,
    current: null,
    tipContainer: null,

    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                height: this.height - 90,
                id: 'graph-holder'
            }
        ];

        this.title = _l.get('exponential.title');

        this.getPrices();
        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);
    },

    getHolderDom: function () {
        var container = this.down("#graph-holder"),
            el = container && container.getEl(),
            dom = el && el.dom;

        return dom || false;
    },

    getPrices: function () {
        Ext.API.getDealerPrices({
            callback: function (list) {
                this.prices = list;
                this.updateGraph();
            },
            failure: this.hideOnFailure,
            scope: this
        })
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

        this.current = $.plot(this.getHolderDom(), this.collectGraphData(), {
            yaxis:{
                alignTicksWithAxis: 1,
                position: "left",
                axisLabel: _l.get('exponential.yaxis'),
                tickFormatter: function (val) {
                    return val.toFixed()
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

    bindGraphEvents: function () {
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
                opacity: 0.80
            }
        });

        var yaxis_str = _l.get('exponential.yaxis'),
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
                yaxis_str + ": " + item.datapoint[1]
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
