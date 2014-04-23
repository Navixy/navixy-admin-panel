/**
 * @class NavixyPanel.view.trackers.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.trackers.List', {
    extend: 'NavixyPanel.view.components.AbstractList',

    alias: 'widget.trackerslist',
    store: 'Trackers',

    getTexts: function () {
        return {
            emptyData: _l.trackers.list.empty_text
        };
    },

    getColumnsConfig: function () {
        var trackerLabelTpl = [
                '<a>{label:htmlEncode}</a>',
                '<tpl if="clone">',
                    '<span class="scaled lighten">{[_l.trackers.fields.options.clone]}</span>',
                '</tpl>',
                '<tpl if="deleted">',
                    '<span class="scaled red">{[_l.trackers.fields.options.deleted]}</span>',
                '</tpl>'
            ],
            trackerStatusTpl = [
                '<span class="{connection_status}">{[_l.trackers.fields.statuses[values.connection_status]]}</span>',
            ];

        return [
            {
                text: _l.trackers.fields.tracker_id,
                dataIndex: 'id',
                width: 60
            },
            {
                text: _l.trackers.fields.label,
                xtype: 'templatecolumn',
                tpl: trackerLabelTpl,
                dataIndex: 'label',
                flex: 1
            },
            {
                text: _l.trackers.fields.connection_status,
                xtype: 'templatecolumn',
                tpl: trackerStatusTpl,
                dataIndex: 'connection_status',
                width: 100
            },
            {
                text: _l.trackers.fields.model,
                dataIndex: 'model',
                width: 120
            },
            {
                text: _l.trackers.fields.device_id,
                dataIndex: 'device_id',
                width: 140
            },
            {
                text: _l.trackers.fields.phone,
                dataIndex: 'phone',
                width: 140
            },
            {
                text: _l.trackers.fields.creation_date_short,
                dataIndex: 'creation_date',
                width: 90
            }
        ];
    }
});
