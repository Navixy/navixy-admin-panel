/**
 * @class NavixyPanel.plugins.pagination.Store
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.plugins.pagination.Store', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    autoLoad: false,
    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json'
        }
    },
    loaded: false,

    listeners: {
        refresh: {
            fn: function (store) {
                store.loaded = true;
                store.fireEvent('storeloaded');
            },
            scope: this,
            single: true
        }
    },


    setProxy: function(proxy) {
        var me = this;

        if (proxy instanceof Ext.data.proxy.Proxy) {
            proxy.setModel(me.model);
        } else {
            if (Ext.isString(proxy)) {
                proxy = {
                    type: proxy
                };
            }
            // Fixed proxy of same type model
            if (me.model) {
                Ext.apply(proxy, {
                    model: me.model
                });
            }
            proxy = Ext.createByAlias('proxy.' + proxy.type, proxy);
        }

        me.proxy = proxy;

        return me.proxy;
    },

    loadData: function (data) {
        this[this.count() ? 'waitDataClear': 'updateData'](data);
    },

    updateData: function (data) {
        this.getProxy().data = data;
        this.load();
    },

    waitDataClear: function (data) {

        // Fix clearing for Ext.toolbar.Paging component
        this.getProxy().data = null;
        this.getProxy().clear();

        this.on('bulkremove', function () {this.updateData(data);}, this, {single: true});

        this.removeAll();
    },

    setPageSize: function (recordsCnt, silent) {
        if (recordsCnt) {
            this.pageSize = recordsCnt;
            if (!silent) {
                this.load();
            }
        }
    },

    isLoaded: function () {
        return this.loaded;
    }
});