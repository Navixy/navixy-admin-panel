/**
 * @class Base.view.widgets.ClickableComponent
 * @extends Ext.Component
 * Description
 */

Ext.define('NavixyPanel.view.widgets.ClickableComponent', {
    extend: 'Ext.Component',
    alias: 'widget.clickable',
    tip: null,
    tipAnchor: '',
    handler: Ext.emptyFn,
    initComponent: function () {
        this.addEvents(['click']);
        this.callParent(arguments);
    },

    afterRender: function () {
        var me = this;

        this.getEl().on('click', function () {

            me.fireEvent('click', me);

            try {
                this.handler.call(me.scope || this, me);
            } catch (e) {
                Ext.log(e.stack);
            }
        }, this);

        this.callParent(arguments);

    },

    afterFirstLayout: function () {
        this.callParent(arguments);
        this.initTips();
    },

    setTip: function (msg, tipConfig) {

        var config = {
            target: this.getEl(),
            html: msg
        };

        if (tipConfig) {
            Ext.apply(config, tipConfig);
        }

        this.tipCmp = Ext.create('Ext.tip.ToolTip', config);
    },

    updateTip: function (msg) {
        if (this.tipCmp) {
            this.tipCmp.update(msg);
        }
    },

    initTips: function () {
        if (this.tip) {
            this.setTip(this.tip, this.tipAnchor);
        }
    },

    removeTip: function () {
        if (this.tipCmp) {
            this.tipCmp.destroy();
            this.tipCmp = null;
        }
    }
});