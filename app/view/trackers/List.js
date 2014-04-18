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
        var trackerLabelTpl = '<a>{label:htmlEncode}</a>',
            trackerModelTpl = '{source.model:htmlEncode}';

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
                flex: 2
            },
            {
                text: _l.trackers.fields.model,
                xtype: 'templatecolumn',
                tpl: trackerModelTpl,
                dataIndex: 'source.model',
                flex: 1
            }
        ];
    }
});
