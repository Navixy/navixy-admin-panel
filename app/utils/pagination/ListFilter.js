 /**
 * @class NavixyPanel.utils.pagination.ListFilter
 * @extends NavixyPanel.view.widgets.Searcher
 * Description
 */


Ext.define('NavixyPanel.utils.pagination.ListFilter', {
    extend: 'NavixyPanel.view.widgets.Searcher',
    alias: 'widget.listfilter',
    ui: 'toolbar-trigger',
    cls: 'small',
    changeDelay: 300,
    enterMode: true,

    viewDefaultPageSize: null,
    viewDefaultPage: null,
    viewFilteredPageSize: 10000,

    clear: function () {
        this.callParent(arguments);
        this.onClear();
    },
    setView: function (view, searchFields) {
        this.callParent(arguments);
        this.searchFields = this.getModelSearchFields() || searchFields ;
    },

    resolveValues: function (textfield, value) {
        var me = this,
            val = value || me.getValue();

        if (me.beforeSearch) {
            me.beforeSearch();
        }

        if (val) {
            try {
                me.search(val);
            } catch (e) {
                Ext.log(e.stack);
            }

            if (me.onsearch) {
                setTimeout(me.onsearch, me.changeDelay);
            }
        } else {
            if (me.onClear) {
                Ext.defer(me.onClear, me.changeDelay, me);
            }

            me.clear();
        }

    },

    getParent: function () {
        return this.findParentByType('abstractlist') || false;
    },

    getParentBBar: function () {
        var parent = this.getParent();

        return parent && parent.down('toolbar[dock="bottom"]');
    },

    getParentStore: function () {
        var parent = this.getParent(),
            view = parent && parent.getView();

        return view && view.store;
    },

    getModelSearchFields: function () {
        var store = this.getParentStore(),
            record = store && this.getParentStore().first();

        return record && record.fieldForSearch;
    },

    getInitialPageSize: function () {
        var store = this.getParentStore();

        return store && store.pageSize;
    },

    getInitialPage: function () {
        var store = this.getParentStore();

        return store && store.currentPage;
    },

    changeStoreConfig: function () {
        if (!this.viewDefaultPageSize) {
            if (this.getParentBBar()) {
                this.getParentBBar().hide();
            }
            this.viewDefaultPageSize = this.getInitialPageSize();
            this.viewDefaultPage = this.getInitialPage();
            this.getParentStore().setPageSize(this.viewFilteredPageSize);
            this.getParentStore().loadPage(1);
        }
    },

    restoreStoreConfig: function () {
        if (this.viewDefaultPageSize) {
            this.getParentStore().setPageSize(this.viewDefaultPageSize);
            this.getParentStore().loadPage(this.viewDefaultPage);
            if (this.getParentBBar()) {
                this.getParentBBar().show();
            }
            this.viewDefaultPageSize = null;
        }
    },

    beforeSearch: function () {
        this.changeStoreConfig();
    },

    onClear: function () {
        this.restoreStoreConfig();
    }
})
;