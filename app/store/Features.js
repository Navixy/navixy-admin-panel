/**
 * @class NavixyPanel.store.Features
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Features', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name', 'free', 'group'],
    constructor: function () {
        this.data = [
            {
                type: "app_tasks",
                "name": Ext.isNavixy() ? Ext.String.format(_l.get('features.app_tasks_link'), _l.get('features.app_tasks')) : _l.get('features.app_tasks'),
                group: "apps"
            },
            {
                type: "app_fleet",
                "name": _l.get('features.app_fleet'),
                group: "apps"
            },
            {
                type: "report_scheduled",
                "name": Ext.isNavixy() ? Ext.String.format(_l.get('features.report_scheduled_link'), _l.get('features.report_scheduled')) : _l.get('features.report_scheduled'),
                group: "features"
            },
            {
                type: "event_notification",
                "name": _l.get('features.event_notification'),
                group: "features"
            },
            {
                type: "geocoding",
                "name": _l.get('features.geocoding'),
                group: "features"
            },
            {
                type: "lbs",
                "name": _l.get('features.lbs'),
                group: "features"
            },
            {
                type: "map_layers",
                "name": _l.get('features.map_layers'),
                group: "features"
            },
            {
                type: "retranslation",
                "name": _l.get('features.retranslation'),
                group: "features"
            },
            {
                type: "report_xls",
                "name": _l.get('features.report_xls'),
                group: "features"
            },
            {
                type: "routing",
                "name": _l.get('features.routing'),
                group: "features"
            },
            {
                type: "ui_mobile",
                "name": _l.get('features.ui_mobile'),
                group: "features"
            },
            {
                type: "weblocator",
                "name": _l.get('features.weblocator'),
                group: "features"
            },
            {
                type: "chat",
                "name": _l.get('features.chat'),
                group: "features"
            },
            {
                type: "batch_operations",
                "name": _l.get('features.batch_operations'),
                group: "features"
            },
            {
                type: "statuses",
                "name": _l.get('features.statuses'),
                group: "features"
            },
            {
                type: "api",
                "name": _l.get('features.api'),
                group: "misc"
            },
            {
                type: "custom_maps",
                "name": _l.get('features.custom_maps'),
                group: "misc"
            },
            {
                type: "priority_support",
                "name": _l.get('features.priority_support'),
                group: "misc"
            },
            {
                type: "multilevel_access",
                "name": _l.get('features.multilevel_access'),
                group: "misc"
            }
        ];

        this.callParent(arguments);
    }
});