/**
 * @class NavixyPanel.view.desktop.Desktop
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Desktop', {
    extend: 'Ext.Container',
    alias: 'widget.maindesktop',
    layout: 'card',
    flex: 1,

    initComponent: function () {
        this.callParent(arguments);
    }
});
