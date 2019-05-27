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
    cls: 'subpaas-list',
    afterRender: function () {
        this.callParent(arguments)
        this.disableCreateBtn()
    },

    disableCreateBtn: function () {
        this.down('button[role=create-subpaas-btn]').disable()
    },
    initComponent: function () {
        this.viewConfig.getRowClass = function (record) {
            return 'subpaas-row-' + record.get('block_type')
        }
        this.callParent(arguments)
    },

    getToolsColumns: function () {
        var toolTpl = new Ext.XTemplate(
            '<tpl if="block_type === \'INITIAL_BLOCK\'">',
            '<span class="pay-tool" data-qtip="{[this.resolveTooltip(values)]}"></span>',
            '</tpl>',

            '<tpl if="block_type === \'NOT_BLOCKED\'">',
            '<span class="login-tool" data-qtip="',
            _l.get('subpaas.card.links.session_text'),
            '"></span>',
            '</tpl>', {
                resolveTooltip: function () {
                    return Ext.getStore('Dealer').first().get('seller_currency') === 'RUB' ? _l.get('subpaas.card.links.invoice_view') : _l.get('subpaas.card.links.avangate_pay')
                }
            })


        return [{
            xtype: 'toolcolumn',
            width: 30,
            sortable: false,
            hideable: false,
            draggable: false,
            menuDisabled: true,
            action: 'edit',
            resizable: false,
            tip: this.texts.editToolTip
        }, {
            xtype: 'templatecolumn',
            width: 30,
            sortable: false,
            resizable: false,
            hideable: false,
            draggable: false,
            menuDisabled: true,
            tdCls: 'tool-column action',
            tpl: toolTpl
        }]
    },

    handleCellClick: function (table, td, cellIndex, record) {
        var tdEl = Ext.get(td),
            isTool = tdEl.hasCls('tool-column'),
            isEdit = isTool && tdEl.hasCls('edit'),
            isAction = isTool && tdEl.hasCls('action')

        if (isAction) {
            this.fireEvent('actionclick', record)
        } else if (isEdit) {
            this.fireEvent('editclick', record)
        } else {
            this.fireEvent('viewclick', record)
        }
    },


    getTexts: function () {
        return {
            createBtnRole: 'create-subpaas-btn',
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

        var columns = [
            {
                text: _l.get('subpaas.fields.subpaas_id'),
                dataIndex: 'subpaas_id',
                align: 'center',
                width: 100
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
                sortable: false,
                hideable: false,
                columns: [{
                    text: _l.get('subpaas.list.users_count'),
                    dataIndex: 'users_count',
                    menuDisabled: true,
                    align: 'center',
                    sortable: false,
                    width: 80
                }, {
                    text: _l.get('subpaas.list.active_users_count'),
                    dataIndex: 'active_users_count',
                    sortable: false,
                    menuDisabled: true,
                    align: 'center',
                    width: 80
                }]
            }, {
                text: _l.get('subpaas.list.trackers'),
                hideable: false,
                sortable: false,
                columns: [{
                    text: _l.get('subpaas.list.trackers_count'),
                    dataIndex: 'trackers_count',
                    sortable: false,
                    align: 'center',
                    width: 80
                }, {
                    text: _l.get('subpaas.list.active_trackers_count'),
                    dataIndex: 'active_trackers_count',
                    sortable: false,
                    align: 'center',
                    width: 80
                }]

            }
        ]


        return columns.map(function (col) {
            col.draggable = false
            col.menuDisabled = true
            return col
        })
    }
})
