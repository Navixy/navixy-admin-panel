/**
 * @class NavixyPanel.view.codes.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.codes.List', {
    extend: 'NavixyPanel.view.components.AbstractList',

    alias: 'widget.codeslist',
    store: 'ActivationCodes',

    viewPageSize: 20,

    hasSelection: true,

    applyListeners: function () {
        this.on('beforeselect', this.handleCellSelect, this);
        this.on('selectionchange', this.afterCellSelect, this);

        this.callParent(arguments);
    },

    handleCellSelect: function (grid, record, index, eOpts) {
        return !record.get('activated');
    },

    afterCellSelect: function (grid, records, eOpts) {
        var btnCmp = this.getEditBnt(),
            btnTip = this.getEditBntTip(),
            lastType = records[0] ? records[0].get('device_type') : false,
            canEdit = !!lastType,
            text = _l.get('codes.list.select_req');

        Ext.iterate(records, function (record) {
            if (record.get('device_type') !== lastType) {
                canEdit = false;
                return false;
            } else {
                lastType = record.get('device_type');
            }
        }, this);

        if (!canEdit) {
            btnCmp.disable();
            btnTip.update(_l.get('codes.list.same_type_req'));
        }

        if (!lastType) {
            btnCmp.disable();
            btnTip.update(_l.get('codes.list.select_req'));
        }

        if (canEdit) {
            btnCmp.enable();
            btnTip.update('');
        }
    },

    afterEdit: function (assigned, succesed, noDeselect) {
        var btnTip = this.getEditBntTip();

        if (!noDeselect) {
            this.getSelectionModel().deselectAll();
        }

        btnTip.update(!assigned
            ? Ext.String.format(_l.get('codes.list.after_create_success'), Ext.util.Format.units(succesed, 'codes', true))
            : assigned !== succesed
                ? Ext.String.format(_l.get('codes.list.after_edit_failure'), succesed, Ext.util.Format.units(assigned - succesed, 'codes', true))
                : Ext.String.format(_l.get('codes.list.after_edit_success'), Ext.util.Format.units(succesed, 'codes', true))
        );
    },

    getTexts: function () {
        return {
            emptyData: _l.get('codes.list.empty_text'),
            editBtnRole: 'edit-button',
            editBtnText: _l.get('codes.list.edit_btn'),
            createBtnRole: 'create-button',
            createBtnText: _l.get('codes.list.create_btn'),
            reloadBtnRole: 'reload-button',
            reloadBtnText: _l.get('codes.list.reload_btn')
        };
    },

    getTopBar: function () {

        var canCreate = Ext.checkPermission('codes', 'read,create');

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
                            me.fireCreateAction();
                        }
                    },
                    {
                        xtype: 'button',
                        iconCls: 'edit-button',
                        margin: canCreate ? '0 0 0 10' : 0,
                        disabled: true,
                        role: this.texts.editBtnRole,
                        text: this.texts.editBtnText,
                        handler: function () {
                            me.fireEditAction();
                        }
                    },
                    {
                        xtype: 'container',
                        role: 'edit-btn-tip',
                        margin: '0 0 0 20',
                        html: _l.get('codes.list.select_req')
                    },
                    '->',
                    {
                        xtype: 'container',
                        margin: '0 20 0 20',
                        html: '<span class="icon-help" style="color:#0f5491;font-size:12px; padding: 5px"></span><a href="' + _l.get('codes.list.faq_link') + '" target="_blank">' + _l.get('codes.list.faq_text') + '</a>'
                    },
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

    getEditBnt: function () {
        return this.down('[role="' + this.texts.editBtnRole + '"]');
    },

    getReloadBnt: function () {
        return this.down('[role="' + this.texts.reloadBtnRole + '"]');
    },

    getEditBntTip: function () {
        return this.down('[role="edit-btn-tip"]');
    },

    fireCreateAction: function () {
        this.fireEvent('createcodes');
    },

    fireEditAction: function () {
        var sm = this.getSelectionModel(),
            selected = sm.getSelection();

        this.fireEvent('editcodes', selected);
    },

    fireReloadAction: function () {
        this.getReloadBnt().disable();
        Ext.defer(function () {
            try {
                this.getReloadBnt().enable();
            } catch (e) {}
        }, 5000, this);
        this.fireEvent('reload');
    },

    getColumnsConfig: function () {

        var codeTpl = [
                '{code}',
                '<tpl if="edited">',
                    '<span class="red">{[_l.get("codes.list.edited_tip")]}</span>',
                '</tpl>'
            ],
            codeDeviceTpl = [
                '{device_type:deviceEncode}'
            ],
            codeAmountTpl = [
                '{money_amount:emptyEncode}'
            ],
            codeBonusTpl = [
                '{bonus_amount:emptyEncode}'
            ],
            codeFreeDaysTpl = [
                '<tpl if="free_days">',
                    '{free_days:daysEncode}',
                '<tpl else>',
                    '<span class="gray nopad">{[_l.get("no")]}</span>',
                '</tpl>'
            ],
            codeStatusDaysTpl = [
                '<tpl if="activated">',
                    '<span class="red nopad">{[_l.get("codes.fields.status.activated")]}</span> <a>{[Ext.util.Format.deviceLabelEncode(values.device_type, values.device_id)]}</a>',
                '<tpl else>',
                    '<span class="gray nopad">{[_l.get("codes.fields.status.no_activated")]}</span>',
                '</tpl>'
            ];

        return [
            {
                text: _l.get('codes.fields.code'),
                dataIndex: 'code',
                xtype: 'templatecolumn',
                tpl: codeTpl,
                flex: 2
            },
            {
                text: _l.get('codes.fields.activated'),
                dataIndex: 'activated',
                xtype: 'templatecolumn',
                tpl: codeStatusDaysTpl,
                flex: 2
            },
            {
                text: _l.get('codes.fields.tariff_name'),
                dataIndex: 'tariff_name',
                flex: 2
            },
            {
                text: _l.get('codes.fields.device_type'),
                xtype: 'templatecolumn',
                tpl: codeDeviceTpl,
                dataIndex: 'device_type',
                width: 120
            },
            {
                text: _l.get('codes.fields.money_amount'),
                xtype: 'templatecolumn',
                tpl: codeAmountTpl,
                dataIndex: 'money_amount',
                width: 60
            },
            {
                text: _l.get('codes.fields.bonus_amount'),
                xtype: 'templatecolumn',
                tpl: codeBonusTpl,
                dataIndex: 'bonus_amount',
                width: 60
            },
            {
                text: _l.get('codes.fields.free_days'),
                xtype: 'templatecolumn',
                tpl: codeFreeDaysTpl,
                dataIndex: 'free_days',
                minWidth: 155,
                resizable: false,
                flex: 1
            }
        ];
    },

    toggleActiveFilter: function (cmp, state) {
        this[!state ? 'addOptFilter' : 'removeOptFilter']('activated', false);
    },

    toggleNoActiveFilter: function (cmp, state) {
        this[!state ? 'addOptFilter' : 'removeOptFilter']('activated', true);
    },

    toggleTrackersFilter: function (cmp, state) {
        this[!state ? 'addOptFilter' : 'removeOptFilter']('device_type', /[^tracker]/);
    },

    toggleCamerasFilter: function (cmp, state) {
        this[!state ? 'addOptFilter' : 'removeOptFilter']('device_type', /[^camera]/);
    },

    toggleSocketsFilter: function (cmp, state) {
        this[!state ? 'addOptFilter' : 'removeOptFilter']('device_type', /[^socket]/);
    },

    toggleAllFilters: function (cmp, state) {
        var menu = cmp.up();

        menu.items.each(function (item) {
            if (item.getXType() === 'menucheckitem') {
                item.setChecked(true);
            }
        });
    },

    addOptFilter: function (field, value) {
        this.store.addOptFilter(field, value);
    },

    removeOptFilter: function (field, value) {
        this.store.removeOptFilter(field, value);
    }
});
