Ext.define('NavixyPanel.view.components.SlidablePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.slidablepanel',
    baseCls: 'slidable-panel',
    width: 400,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    slideFx: true,
    destroyOnClose: true,
    duration: 300,
    slideType: 'right',
    heightOffset: 0,
    getPanelHeight: function () {
        return this.renderTo.getHeight() - this.heightOffset;
    },

    initComponent: function () {
        this.style = {
            opacity: 0
        };

        this.cls += ' ' + this.slideType;

        this.height = this.getPanelHeight();

        this.callParent(arguments);
    },

    updateHeight: function () {
        this.setHeight(this.getPanelHeight());
    },

    afterRender: function () {
        this.callParent(arguments);
        this.styles = {
            right: {
                style: {
                    right: this.width * -1
                },
                offestProperty: 'width',
                property: 'right',
                direction: 'r'
            },
            bottom: {
                style: {
                    bottom: this.height * -1
                },
                offestProperty: 'height',
                property: 'bottom',
                direction: 'b'
            },
            left: {
                style: {
                    left: this.width * -1
                },
                offestProperty: 'width',
                property: 'left',
                direction: 'l'
            }
        };

    },

    afterFirstLayout: function () {
        this.callParent(arguments);
        if (!this.hidden) {
            this.slideOn();
        }
    },

    showPanel: function () {
        var el = this.getEl();

        setTimeout(function () {
            el.setOpacity(1);
        }, 20);

        if (!this.slideFx) {
            el.setStyle(this.styles[this.slideType].style);
        }
    },

    hidePanel: function () {

        if (this.destroyOnClose) {
            this.destroy();
        } else {
            this.getEl().setOpacity(0);
        }
    },

    slideOn: function () {
        var me = this;

        this.showPanel();

        if (this.slideFx) {
            this.getEl().slideIn(this.styles[this.slideType].direction, this.getFxOptions({
                callback: function () {
                    me.fireEvent('slidein', me);
                    me.fireEvent('collapsechanged', me, true);
                    me.collapsed = false;
                }
            }));
        } else {
            Ext.create('Ext.fx.Anim', this.getAnimOptions(true));
        }
    },

    slideOff: function (callback, scope, fast) {

        var me = this,
            callbackFn = function () {
                if (Ext.isFunction(callback)) {
                    callback.apply(scope || me);
                }
                me.hidePanel();
                me.fireEvent('slideout', me);
                me.fireEvent('collapsechanged', me, false);
                me.collapsed = true;
            },
            options = {
                callback: callbackFn,
                duration: fast ? 0 : this.duration
            };

        if (this.slideFx) {

            this.getEl().slideOut(this.styles[this.slideType].direction, this.getFxOptions(options));
        } else {

            Ext.create('Ext.fx.Anim', this.getAnimOptions(false, options));
        }

        return me;

    },

    getFxOptions: function (options) {
        return Ext.apply({
            duration: this.duration,
            easing: 'ease'
        }, options || {});
    },

    getAnimOptions: function (direction, options) {
        var me = this,
            target = this.getEl(),
            duration = this.duration,
            offset = this[this.styles[this.slideType].offestProperty] * -1,
            config = {
                target: target,
                duration: duration,
                from: {},
                to: {},
                callback: function () {
                    me.fireEvent('slidein', me);
                    me.fireEvent('collapsechanged', me, true);
                    me.collapsed = false;
                }
            };

        config.from[this.styles[this.slideType].property] = direction ? offset : 0;
        config.to[this.styles[this.slideType].property] = direction ? 0 : offset;

        return Ext.apply(config, options);
    }
});