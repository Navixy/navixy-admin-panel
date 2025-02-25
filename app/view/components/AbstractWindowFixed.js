/**
 * @class NavixyPanel.view.components.AbstractWindowFixed
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractWindowFixed', {
    extend: 'Ext.window.Window',
    alias: 'widget.abstractwindowfixed',
    resizable: false,
    shadow: false,
    modal: true,
    maximizable: false,
    minimizable: false,
    draggable: false,
    layout: 'fit',
    height: '100%',
    width: '100%',
    margin: '0 0 0 0',
    closeAction: 'destroy',

    initComponent: function () {
        this.addListeners();

        Ext.util.History.addListener('change', function () {
            this.close();
        }, this, { single: true });

        this.callParent(arguments);
    },

    addListeners: function () {
        this.on('beforeshow', function () {
            Ext.get(Ext.getDoc().dom.documentElement).addCls('no-scroll');
            Ext.getBody().addCls('no-scroll');
        }, this);

        this.on('beforeclose', function () {
            Ext.get(Ext.getDoc().dom.documentElement).removeCls('no-scroll');
            Ext.getBody().removeCls('no-scroll');
        }, this);
    },
});
