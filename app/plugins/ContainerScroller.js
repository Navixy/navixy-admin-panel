/**
 * @class Base.plugins.ContainerScroller
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.plugins.ContainerScroller', {
    alias: 'plugin.containerscroller',
    buttonCls: 'scroll-button',
    scrollIncrement: 30,
    init: function (container) {
        container.layout.overflowHandler = new Ext.layout.container.boxOverflow.Scroller(container.layout, {
            wheelIncrement: this.scrollIncrement,
            scrollRepeatInterval: 30,
            scrollIncrement: this.scrollIncrement
        });

        container.on('boxready', this.applyScrollersStyle, this);
        container.on('resize', this.applyScrollersStyle, this);
    },

    applyScrollersStyle: function (container) {
        var el = container.getEl(),
            scrollers = el.select('.x-box-scroller');

        if (container.layout.type === 'hbox') {

            scrollers.setHeight(el.getHeight());
            scrollers.setStyle({
                'line-height': el.getHeight() + 'px'
            });
        } else {
            scrollers.setWidth(el.getWidth());
        }
    }
});
