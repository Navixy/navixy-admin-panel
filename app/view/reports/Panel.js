/**
 * @class NavixyPanel.view.bundles.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.reports.Panel', {
    extend: 'Ext.Container',
    alias: 'widget.reports-panel',
    layout: {
        type: 'fit'
    },
    items: {
        xtype: 'active-trackers-grid'
    }
});
