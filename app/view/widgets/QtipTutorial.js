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
    constrainPosition: true,

    autoDestroy: true,
    anchor: 'right',
    autoHide: false,
    closable: true,

    anchorOffset: 4,
    maxWidth: 180,

    ui: 'tutorial',
    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;

        Ext.EventManager.onWindowResize(function(w, h){
            if (me.isVisible()) {
                me.hide();
                me.show();
            }
        });

        this.callParent(arguments);
    },


    setTarget: function(target) {
        var me = this;

        if (me.anchor) {
            me.anchorTarget = me.target;
        }
    },
});