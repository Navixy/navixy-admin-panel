/**
 * @class NavixyPanel.view.bundles.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.reports.active_trackers.SubpaasActiveList', {
    extend: 'Ext.grid.Panel',
    ui: 'light',
    alias: 'widget.subpaas-active-trackers-grid',
    store: 'SubpaasActiveTrackersStat',
    requires: [
        'NavixyPanel.plugins.grid.ColumnAutoResizer',
        'NavixyPanel.plugins.grid.filter.GridFilterBar',
        'NavixyPanel.view.widgets.DivActionColumn',
        'NavixyPanel.plugins.grid.feature.MultiGroupingSummary'
    ],

    plugins: [
        {
            ptype: 'filterbar',
            updateBuffer: 300,
            showShowHideButton: true,
            renderHidden: false,
            showHideButtonIconCls: 'icon-filter filter-visibility'
        }
    ],

    features: [Ext.create('NavixyPanel.plugins.grid.feature.MultiGrouping', {
        id: 'multi-group-subpaas',
        groupHeaderTpl: '{name}',
        enableGroupingMenu: false,
        startCollapsed: true
    })],

    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false,
        enableTextSelection: true
    },

    columnLines: true,


    addColumnsMenuButton: Ext.emptyFn,

    getColumnsConfig: function () {
        return {
            plugins: [{
                ptype: 'gridautoresizer'
            }],
            defaults: {
                filter: 'disabled'
            },

            items: [{
                xtype: 'divactioncolumn',
                width: 70,
                hideable: false,
                draggable: false,
                groupable: false,
                menuDisabled: true,
                items: [{
                    iconCls: 'open_tracker_tool icon-location',
                    glyph: 1,
                    tooltip: _l.get('reports.active_trackers.open_tracker'),
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex)
                        Ext.Nav.shift('tracker/' + rec.get('tracker_id'))
                    }
                }]
            }, {
                header: _l.get('reports.active_trackers.month'),
                width: 143,
                groupHeaderTpl: new Ext.XTemplate('{name} (',
                    _l.get('reports.active_trackers.count_label'),
                    ' {[this.getRealActiveCount(values)]})', {
                        getRealActiveCount: function (values) {
                            return values.children.length ? values.children[0].get('amount') : 0
                        }
                    }
                ),
                renderer: function (yearMonth) {
                    return Ext.Date.format(moment(yearMonth + '-01').toDate(), 'F Y')
                },
                dataIndex: 'month',
                filter: {
                    type: 'disabled',
                    value: _l.get('list.search_title') + ':'
                }

            }, {
                header: _l.get('trackers.fields.user_id'),
                width: 150,
                groupHeaderTpl: ['{columnName}: {name} (',
                    _l.get('reports.active_trackers.count_label'),
                    ' {[values.children.length]})'],

                dataIndex: 'user_id',
                filter: {
                    type: 'string',
                    emptyText: _l.get('trackers.fields.user_id'),
                    maskRe: /[0-9]/
                }

            },
                {
                    header: _l.get('trackers.fields.tracker_id'),
                    width: 150,
                    dataIndex: 'tracker_id',
                    filter: {
                        type: 'string',
                        emptyText: _l.get('trackers.fields.tracker_id'),
                        maskRe: /[0-9]/
                    }

                },
                {
                    header: _l.get('trackers.fields.label'),
                    flex: 1,
                    dataIndex: 'label',
                    filter: {
                        type: 'string',
                        emptyText: _l.get('trackers.fields.label')
                    }

                },
                {
                    header: _l.get('trackers.fields.device_id'),
                    flex: 1,
                    dataIndex: 'device_id',
                    filter: {
                        type: 'string',
                        emptyText: _l.get('trackers.fields.device_id')
                    }
                }
            ]
        }
    },

    initComponent: function () {
        this.emptyText = _l.get('reports.active_trackers.empty')
        this.columns = this.getColumnsConfig()
        this.minHeight = 300
        this.callParent(arguments)
    }
})
