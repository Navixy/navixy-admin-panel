/**
 * @class NavixyPanel.view.widgets.QtipTutorial
 * @extends Ext.Component
 * Description
 */

Ext.define('NavixyPanel.view.widgets.QtipTutorial', {
    extend: 'Ext.tip.ToolTip',
    alias: 'widget.tutorialqtip',

    trackMouse: false,
    autoShow: true,
    autoAnchor: true,

    autoDestroy: true,
    anchor: 'right',
    autoHide: false,
    closable: true,

    anchorOffset: 4,

    ui: 'tutorial',
    renderTo: Ext.getBody(),

    setTarget: function(target) {
        var me = this;

        if (me.anchor) {
            me.anchorTarget = me.target;
        }
    },
});