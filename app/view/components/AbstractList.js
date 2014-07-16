/**
 * @class NavixyPanel.view.components.AbstractList
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.abstractlist',
    requires: [
        'NavixyPanel.utils.store.NavixyPaging',
        'NavixyPanel.utils.store.NavixyListFilter'
    ],
    viewConfig: {
        autoScroll: false,
        stripeRows: false,
        deferEmptyText: false,
        enableTextSelection: true
    },

    bodyStyle: {
        border: 'none'
    },

    ui: 'light',

    store: null,

    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,

    disableSelection: true,

    createBtn: false,
    hasEdit: false,
    showEmpty: true,
    searchTitle: null,
    noTBar: false,
    hasFilter: true,
    hasSelection: false,

    texts: null,

    filter: null,
    search: null,
    storeSearch: false,

    viewPageSize: null,

    initComponent: function () {

        var defaultTexts = {
            editToolTip: _l.list.edit_tool,
            createBtnRole: 'create-btn',
            createBtnText: _l.list.create_btn_text,
            emptyData: _l.list.empty_text,
            panelTitle: null,

            searchTitle: this.searchTitle || _l.list.search_title,
            searchEmptyTitle: _l.list.search_empty_title,
            searchTitleTpl: _l.list.search_title_tpl,
            searchEmptyTitleTpl: _l.list.search_empty_title_tpl
        };

        this.texts = Ext.applyIf(this.getTexts(), defaultTexts);

        this.emptyText = this.texts.emptyData;

        this.title = this.title || this.texts.panelTitle;

        this.initStore();

        this.tbar = this.getTopBar();

        this.bbar = this.getBottomBar();

        this.columns = {
            items: Ext.Array.merge(this.getToolsColumns(), this.getColumnsConfig()),
            defaults: {
                menuDisabled: true
            }
        };

        this.addSelection();

        this.applyListeners();

        this.callParent(arguments);
    },

    addSelection: function () {
        if (this.hasSelection) {
            this.disableSelection = false;

            this.selModel = Ext.create('Ext.selection.CheckboxModel', {
                checkOnly: true,
                injectCheckbox: this.hasEdit ? 1: 0,

                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                    var baseCSSPrefix = Ext.baseCSSPrefix;
                    metaData.tdCls = baseCSSPrefix + 'grid-cell-special ' + baseCSSPrefix + 'grid-cell-row-checker';
                    return !record.get('activated') ? '<div class="' + baseCSSPrefix + 'grid-row-checker">&#160;</div>' : '';
                },

                updateHeaderState: function () {
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
        }
    },

    initStore: function () {

        var storeName = Ext.isString(this.store)
            ? this.store
            : this.store.self.getName();

        if (storeName) {
            this.store = Ext.getStore(storeName).getClone(this.getStoreConfig());
        }
    },

    getStoreConfig: function () {
        var config = {
            onlySearch: this.storeSearch
        };

        if (this.filter || this.search) {
            var filters = config.filters = [];
        }

        if (this.filter) {
            var root = this.filter.root || 'data',
                filterConfig,
                filtersConfig = !Ext.isArray(config)
                    ? [config]
                    : config;

            Ext.iterate(this.filter, function(name, value) {
                if (name === 'root') {
                    return true;
                }

                filterConfig = Ext.isObject(value)
                    ? value
                    : {
                    property: name,
                    value: value,
                    root: root
                };

                filters.push(
                    Ext.create('Ext.util.Filter',
                        Ext.apply(
                            {},
                            filterConfig
                        )
                    )
                );
            }, this);
        }

        if (this.viewPageSize) {
            config.pageSize = this.viewPageSize;
        }

        return config;
    },

    getTexts: function () {
        return {};
    },

    getColumnsConfig: function () {
        return [];
    },

    getToolsColumns: function () {
        return this.hasEdit
            ? [
            {
                xtype: 'toolcolumn',
                width: 31,
                action: 'edit',
                tip: this.texts.editToolTip
            }
        ]
            : [];
    },

    getTopBar: function () {

        var barConfig = {
            padding: '0 0 10 0',
            border: 0,
            ui: 'light',
            height: 36,
            items: []
        };

        if (this.createBtn) {
            barConfig.items.push({
                xtype: 'button',
                iconCls: 'add-button',
                role: this.texts.createBtnRole,
                text: this.texts.createBtnText
            });
        }

        if (this.hasFilter) {
            barConfig.items.push('->');
            barConfig.items.push({
                xtype: 'navixylistfilter',
                margin: '0 -2 0 0',
                width: 200,
                listeners: {
                    filter: this.applyListFilter,
                    clear: this.removeListFilter,
                    scope: this
                }
            });
        }

        return !this.noTBar && barConfig;
    },

    getBottomBar: function () {
        return {
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'navixypaging',
                    store: this.store
                }
            ]
        };
    },

    applyListeners: function () {
        this.on('cellclick', this.handleCellClick, this);
        this.on('afterrender', this.applySearchView, this);

        if (this.hasSelection) {
            this.on('beforeselect', this.handleCellSelect, this);
            this.on('selectionchange', this.afterCellSelect, this);
        }
    },

    handleCellSelect: Ext.emptyFn,
    afterCellSelect: Ext.emptyFn,

    applySearchView: function () {
        if (this.search || this.storeSearch) {
            this.store.on('load', function () {
                var resultsCnt = this.store.getTotalCount(),
                    moduleTitle = Ext.String.format('<span class="search-title">{0}</span>', this.texts.searchTitle);

                this.setTitle(
                    Ext.String.format(resultsCnt ? this.texts.searchTitleTpl: this.texts.searchEmptyTitleTpl, moduleTitle, Ext.util.Format.units(resultsCnt, 'entries', true))
                );

                if (resultsCnt) {
                    this.expand(false);
                }
            }, this, {single: true});
        }
    },

    handleCellClick: function (table, td, cellIndex, record) {
        var tdEl = Ext.get(td),
            isTool = tdEl.hasCls('tool-column'),
            isEdit = isTool && tdEl.hasCls('edit'),
            isCheckbox = tdEl.down('.x-grid-row-checker');

        if (isCheckbox) {
            this.fireEvent('checkboxclick', record);
        } else if (isEdit) {
            this.fireEvent('editclick', record);
        } else {
            this.fireEvent('actionclick', record);
        }
    },

    applyListFilter: function (filterValue) {
        if (filterValue) {
            this.store.addSearchFilter(filterValue);
        } else {
            this.removeListFilter();
        }
    },

    removeListFilter: function () {
        this.store.removeSearchFilter();
    }
});
