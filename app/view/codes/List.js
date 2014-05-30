/**
 * @class NavixyPanel.view.codes.List
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.codes.List', {
    extend: 'NavixyPanel.view.components.AbstractList',

    alias: 'widget.codeslist',
    store: 'ActivationCodes',

    viewPageSize: 50,

    disableSelection: false,

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
            text = _l.codes.list.select_req;

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
            btnTip.update(_l.codes.list.same_type_req);
        }

        if (!lastType) {
            btnCmp.disable();
            btnTip.update(_l.codes.list.select_req);
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

        btnTip.update(assigned !== succesed
            ? Ext.String.format(_l.codes.list.after_edit_failure, succesed, Ext.util.Format.units(assigned - succesed, 'codes', true))
            : Ext.String.format(_l.codes.list.after_edit_success, Ext.util.Format.units(succesed, 'codes', true))
        );
    },

    getTexts: function () {
        return {
            emptyData: _l.codes.list.empty_text,
            editBtnRole: 'edit-button',
            createBtnText: _l.codes.list.create_btn,
            reloadBtnRole: 'reload-button',
            reloadBtnText: _l.codes.list.reload_btn
        };
    },

    getTopBar: function () {

        var me = this,
            barConfig ={
                padding: '0 0 10 0',
                border: 0,
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'edit-button',
                        disabled: true,
                        role: this.texts.createBtnRole,
                        text: this.texts.createBtnText,
                        handler: function () {
                            me.fireEditAction();
                        }
                    },
                    {
                        xtype: 'container',
                        role: 'edit-btn-tip',
                        margin: '0 0 0 20',
                        html: _l.codes.list.select_req
                    },
                    '->',
                    {

                        role: 'options-btn',
                        iconCls: 'options-button',
                        margin: '0 10 0 0',
                        xtype: 'button',
                        menu: [
                            {
                                text: _l.codes.list.filters.activated,
                                role: 'activated-filter',
                                checked: true,
                                checkHandler: Ext.bind(this.toggleActiveFilter, this)
                            },
                            {
                                text: _l.codes.list.filters.no_activated,
                                checked: true,
                                checkHandler: Ext.bind(this.toggleNoActiveFilter, this)
                            },
                            {
                                text: _l.codes.list.filters.trackers,
                                checked: true,
                                checkHandler: Ext.bind(this.toggleTrackersFilter, this)
                            },
                            {
                                text: _l.codes.list.filters.cameras,
                                checked: true,
                                checkHandler: Ext.bind(this.toggleCamerasFilter, this)
                            },
                            {
                                text: _l.codes.list.filters.sockets,
                                checked: true,
                                checkHandler: Ext.bind(this.toggleSocketsFilter, this)
                            },
                            {
                                text: _l.codes.list.filters.toggle_all,
                                handler: Ext.bind(this.toggleAllFilters, this)
                            }
                        ]
                    },
                    {
//                        xtype: 'button',
//                        iconCls: 'reload-button',
//                        role: this.texts.reloadBtnRole,
//                        text: this.texts.reloadBtnText,
//                        margin: '0 -2 0 0',
//                        handler: function () {
//                            me.fireReloadAction();
//                        }
                        xtype: 'listfilter',
                        margin: '0 -2 0 0',
                        width: 200
                    }
                ]
            };

        return !this.noTBar && barConfig;
    },

    getEditBnt: function () {
        return this.down('[role="' + this.texts.createBtnRole + '"]');
    },

    getReloadBnt: function () {
        return this.down('[role="' + this.texts.reloadBtnRole + '"]');
    },

    getEditBntTip: function () {
        return this.down('[role="edit-btn-tip"]');
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

        this.selModel = Ext.create('Ext.selection.CheckboxModel', {
            checkOnly: true,

            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                var baseCSSPrefix = Ext.baseCSSPrefix;
                metaData.tdCls = baseCSSPrefix + 'grid-cell-special ' + baseCSSPrefix + 'grid-cell-row-checker';
                return !record.get('activated') ? '<div class="' + baseCSSPrefix + 'grid-row-checker">&#160;</div>' : '';
            },

            updateHeaderState: function() {
                // check to see if all records are selected

                var me = this,
                    store = me.store,
                    storeCount = store.getCount(),
                    views = me.views,
                    hdSelectStatus = false,
                    selectedCount = 0,
                    selected, len, i;

                store.each(function (record) {
                    if (record.get('activated')) {
                        --storeCount;
                    }
                }, this);

                if (!store.buffered && storeCount > 0) {
                    selected = me.selected;
                    hdSelectStatus = true;

                    for (i = 0, len = selected.getCount(); i < len; ++i) {
                        if (!me.storeHasSelected(selected.getAt(i))) {
                            break;
                        }
                        ++selectedCount;
                    }
                    hdSelectStatus = storeCount === selectedCount;
                }

                if (views && views.length) {
                    me.toggleUiHeader(hdSelectStatus);
                }
            }
        });

        var codeTpl = [
                '{code}',
                '<tpl if="edited">',
                    '<span class="red">{[_l.codes.list.edited_tip]}</span>',
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
                    '<span class="gray nopad">{[_l.no]}</span>',
                '</tpl>'
            ],
            codeStatusDaysTpl = [
                '<tpl if="activated">',
                    '<span class="red nopad">{[_l.codes.fields.status.activated]}</span> <a>{[Ext.util.Format.deviceLabelEncode(values.device_type, values.device_id)]}</a>',
                '<tpl else>',
                    '<span class="gray nopad">{[_l.codes.fields.status.no_activated]}</span>',
                '</tpl>'
            ];

        return [
            {
                text: _l.codes.fields.code,
                dataIndex: 'code',
                xtype: 'templatecolumn',
                tpl: codeTpl,
                flex: 1
            },
            {
                text: _l.codes.fields.activated,
                dataIndex: 'activated',
                xtype: 'templatecolumn',
                tpl: codeStatusDaysTpl,
                flex: 1
            },
            {
                text: _l.codes.fields.tariff_name,
                renderer: this.tariffRenderer,
                dataIndex: 'tariff_id',
                flex: 1
            },
            {
                text: _l.codes.fields.device_type,
                xtype: 'templatecolumn',
                tpl: codeDeviceTpl,
                dataIndex: 'device_type',
                width: 120
            },
            {
                text: _l.codes.fields.money_amount,
                xtype: 'templatecolumn',
                tpl: codeAmountTpl,
                dataIndex: 'money_amount',
                width: 60
            },
            {
                text: _l.codes.fields.bonus_amount,
                xtype: 'templatecolumn',
                tpl: codeBonusTpl,
                dataIndex: 'bonus_amount',
                width: 60
            },
            {
                text: _l.codes.fields.free_days,
                xtype: 'templatecolumn',
                tpl: codeFreeDaysTpl,
                dataIndex: 'free_days',
                width: 155
            }
        ];
    },

    tariffRenderer: function (value) {
        var tariffStore = Ext.getStore('Tariffs'),
            tariff = tariffStore && tariffStore.getById(value),
            tariffName = tariff && tariff.get('name');

        return tariffName || value;
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
    },

    afterRender: function () {
        this.callParent(arguments);
        this.toggleActiveFilter(null, false);
        this.down('[role="activated-filter"]').setChecked(false);
    }
});
