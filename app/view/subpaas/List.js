/**
 * @class NavixyPanel.view.subpaas.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.subpaas.List', {
    extend: 'NavixyPanel.view.components.AbstractList',
    alias: 'widget.subpaaslist',

    store: 'SubPaas',
    stateId: 'SubPaasList',

    getTexts: function () {
        return {
            createBtnText: _l.get('subpaas.list.create_btn_text'),
            emptyData: _l.get('subpaas.list.empty_text')
        }
    },

    getColumnsConfig: function () {
        var subpaasCardTpl = [
            '<span class="icon"></span>',
            '<a>',
            '{title:htmlEncode}',
            '</a>'
        ]

        var statusTPL = [
            '<span class="subpaas-status--{block_type}">',
            '{[_l.get("subpaas.block_status")[values.block_type]]}',
            '</span>'
        ]

        return [
            {
                text: _l.get('subpaas.fields.subpaas_id'),
                dataIndex: 'subpaas_id',
                align: 'center',
                width: 60
            },
            {
                text: _l.get('subpaas.fields.title'),
                xtype: 'templatecolumn',
                tpl: subpaasCardTpl,
                dataIndex: 'title',
                sortable: true,
                flex: 1
            }, {
                text: _l.get('subpaas.fields.jur_name'),
                dataIndex: 'jur_name',
                flex: 1
            },
            {
                text: _l.get('subpaas.fields.login'),
                dataIndex: 'login',
                width: 120
            },
            {
                text: _l.get('subpaas.fields.block_type'),
                xtype: 'templatecolumn',
                tpl: statusTPL,
                dataIndex: 'block_type',
                width: 150
            },
            {
                text: _l.get('subpaas.fields.creation_date'),
                dataIndex: 'creation_date',
                renderer: function (value) {
                    return Ext.Date.formatISO(value, Ext.util.Format.dateFormat)
                },
                width: 120
            },
            {
                text: _l.get('subpaas.list.users'),
                columns: [{
                    text: _l.get('subpaas.list.users_count'),
                    dataIndex: 'users_count',
                    align: 'center',
                    sortable: true,
                    width: 80
                }, {
                    text: _l.get('subpaas.list.active_users_count'),
                    dataIndex: 'active_users_count',
                    sortable: true,
                    align: 'center',
                    width: 80
                }]
            }, {
                text: _l.get('subpaas.list.trackers'),
                columns: [{
                    text: _l.get('subpaas.list.trackers_count'),
                    dataIndex: 'trackers_count',
                    sortable: true,
                    align: 'center',
                    width: 80
                }, {
                    text: _l.get('subpaas.list.active_trackers_count'),
                    dataIndex: 'active_trackers_count',
                    sortable: true,
                    align: 'center',
                    width: 80
                }]
            }
        ]
    }
})
