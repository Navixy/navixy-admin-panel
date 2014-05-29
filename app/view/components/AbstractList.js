/**
 * @class NavixyPanel.view.components.AbstractList
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.abstractlist',
    requires: [
        'NavixyPanel.utils.pagination.CustomPaging',
        'NavixyPanel.utils.pagination.ListFilter',
        'NavixyPanel.view.widgets.PageSize'
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

    texts: null,

    filter: null,
    search: null,

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

        this.applyListeners();

        this.callParent(arguments);
    },

    afterRender: function () {
        this.applyViewToSearcher();
        this.callParent(arguments);
    },

    applyViewToSearcher: function () {
        var filterer = this.down('listfilter');

        if (filterer) {
            filterer.setView(this.getView());
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
        var config = {};

        if (this.filter || this.search) {
            var filters = config.parentFilters = [];
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

        if (this.search) {

            var searchReq = this.search;
            filters.push(
                Ext.create('Ext.util.Filter', {
                    filterFn: function (record) {
                        var searchHash = record.fieldForSearch && record.getFieldsString(record.fieldForSearch, true);
                        return searchHash && searchHash.indexOf(searchReq.toLowerCase()) >= 0;
                    }
                })
            );
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
                xtype: 'listfilter',
                margin: '0 -2 0 0',
                width: 200
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
                    xtype: 'pagesize'
                },
                {
                    xtype: 'custompaging',
                    store: this.store
                }
            ]
        };
    },

    applyListeners: function () {
        this.on('cellclick', this.handleCellClick, this);
        this.on('afterrender', this.applySearchView, this);
    },

    applySearchView: function () {
        if (this.search) {
            var resultsCnt = this.store.tCount(),
                moduleTitle = Ext.String.format('<span class="search-title">{0}</span>', this.texts.searchTitle);

            this.setTitle(
                Ext.String.format(resultsCnt ? this.texts.searchTitleTpl: this.texts.searchEmptyTitleTpl, moduleTitle, Ext.util.Format.units(resultsCnt, 'entries', true))
            );

            if (!this.showEmpty && !resultsCnt) {
                this.collapse();
            }
        }
    },

    handleCellClick: function (table, td, cellIndex, record) {
        var tdEl = Ext.get(td),
            isTool = tdEl.hasCls('tool-column'),
            isEdit = isTool && tdEl.hasCls('edit');

        if (isEdit) {
            this.fireEvent('editclick', record);
        } else {
            this.fireEvent('actionclick', record);
        }
    }
});
