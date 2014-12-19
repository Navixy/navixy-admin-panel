/**
 * @class NavixyPanel.view.bundles.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.bundles.List', {
    extend: 'NavixyPanel.view.components.AbstractList',
    alias: 'widget.bundleslist',

    store: 'Bundles',

    getTexts: function () {
        return {
            createBtnText: _l.get('bundles.list.scan_btn_text'),
            emptyData: _l.get('bundles.list.empty_text'),
            editToolTip: _l.get('bundles.list.unassign')
        };
    },

    getToolsColumns: function () {
        return this.hasEdit
            ? [
            {
                xtype: 'toolcolumn',
                width: 31,
                action: 'remove',
                tip: this.texts.editToolTip
            }
        ]
            : [];
    },

    handleCellClick: function (table, td, cellIndex, record) {
        var tdEl = Ext.get(td),
            isTool = tdEl.hasCls('tool-column'),
            isEdit = isTool && tdEl.hasCls('remove'),
            isCheckbox = tdEl.down('.x-grid-row-checker');

        if (isCheckbox) {
            this.fireEvent('checkboxclick', record);
        } else if (isEdit) {
            this.fireEvent('editclick', record);
        } else {
            this.fireEvent('actionclick', record);
        }
    },

    getTopBar: function () {

        var canCreate = Ext.checkPermission('tracker_bundles', 'read,update');

        var me = this,
            barConfig = {
                padding: '0 0 10 0',
                border: 0,
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'add-button',
                        hidden: !this.createBtn || !canCreate,
                        role: this.texts.createBtnRole,
                        text: this.texts.createBtnText,
                        handler: function () {
                            me.fireScanAction();
                        }
                    },
                    '->',
                    {
                        xtype: 'navixylistfilter',
                        margin: '0 -2 0 0',
                        width: 200,
                        listeners: {
                            filter: this.applyListFilter,
                            clear: this.removeListFilter,
                            scope: this
                        }
                    }
                ]
            };

        return !this.noTBar && barConfig;
    },

    fireScanAction: function () {
        this.fireEvent('bundlescan')
    },

    getColumnsConfig: function () {
        return [
            {
                text: _l.get('bundles.fields.id'),
                dataIndex: 'id',
                width: 60
            },
            {
                text: _l.get('bundles.fields.imei'),
                dataIndex: 'imei',
                flex: 1
            },
            {
                text: _l.get('bundles.fields.iccid'),
                dataIndex: 'iccid',
                flex: 1
            },
            {
                text: _l.get('bundles.fields.order_id'),
                dataIndex: 'order_id',
                renderer: function (value) {
                    return value || ''
                },
                width: 120
            },
            {
                text: _l.get('bundles.fields.model_code'),
                dataIndex: 'model_code',
                width: 120
            },
            {
                text: _l.get('bundles.fields.assign_time'),
                dataIndex: 'assign_time',
                renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
                width: 180
            }
        ];
    }
});
