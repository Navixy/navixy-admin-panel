/**
 * @class NavixyPanel.store.Features
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Features', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name', 'free'],
    constructor: function () {
        this.data = [
            {
                type: "api",
                "name": _l.get('features.api'),
                free: true
            },
            {
                type: "app_tasks",
                "name": _l.get('features.app_tasks'),
                free: true
            },
            {
                type: "app_fleet",
                "name": _l.get('features.app_fleet'),
                free: true
            },
            {
                type: "batch_operations",
                "name": _l.get('features.batch_operations')
            },
            {
                type: "custom_maps",
                "name": _l.get('features.custom_maps'),
                free: true
            },
            {
                type: "event_notification",
                "name": _l.get('features.event_notification'),
                free: true
            },
            {
                type: "geocoding",
                "name": _l.get('features.geocoding'),
                free: true
            },
            {
                type: "lbs",
                "name": _l.get('features.lbs'),
                free: true
            },
            {
                type: "map_layers",
                "name": _l.get('features.map_layers')
            },
            {
                type: "multilevel_access",
                "name": _l.get('features.multilevel_access')
            },
            {
                type: "priority_support",
                "name": _l.get('features.priority_support')
            },
            {
                type: "retranslation",
                "name": _l.get('features.retranslation')
            },
            {
                type: "report_xls",
                "name": _l.get('features.report_xls')
            },
            {
                type: "report_scheduled",
                "name": _l.get('features.report_scheduled')
            },
            {
                type: "routing",
                "name": _l.get('features.routing')
            },
            {
                type: "ui_mobile",
                "name": _l.get('features.ui_mobile')
            },
            {
                type: "weblocator",
                "name": _l.get('features.weblocator')
            },
            {
                type: "chat",
                "name": _l.get('features.chat')
            }
        ];

        this.callParent(arguments);
    }
});