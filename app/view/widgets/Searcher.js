/**
 * @class NavixyPanel.view.widgets.Searcher
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.widgets.Searcher', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.searcher',
    ui: 'toolbar-trigger',
    onclear: null,
    onsearch: null,
    beforeSearch: null,
    enterMode: false,
    changeDelay: 100,
    view: null,
    triggerCls: 'clear',
    componentCls: 'searcher',
    searchFields: [],
    searchListener: null,

    initComponent: function () {
        this.emptyText = _l.searcher_empty_text || 'Enter search query';
        this.callParent(arguments);
    },

    search: function (val) {
        var me = this,
            view = me.view;

        me.removeFilter();
        me.applyFilter(val);

        me.searchListener = view.store.addListener('update', function () {
            me.applyFilter(val);
        }, me, {destroyable: true});
    },

    clear: function () {
        this.setValue('');
        this.view.clearFilter();
        this.removeFilter();
        this.saveState();
    },

    applyFilter: function (val) {
        var me = this,
            view = me.view,
            searchVal = val.toLowerCase();

        view.clearFilter();

        if (me.searchFields.length) {
            view.filterViewBy(function (record, node) {
                var find = false;

                try {
                    if (record.getFieldsString(me.searchFields, true).indexOf(searchVal) >= 0) {
                        find = true;
                    }
                } catch (e) {
                    Ext.log(e.message, e.stack);
                }

                return find;
            });
        }
    },

    removeFilter: function () {
        if (this.searchListener) {
            Ext.destroy(this.searchListener);
        }
    },

    filterByExistValue: function () {
        var value = this.getValue();

        if (value) {
            this.search(value);
        }
    },

    setView: function (view, searchFields) {
        this.view = view;
        this.searchFields = searchFields;

        this.view.on({
            itemupdate: this.filterByExistValue,
            itemadd: this.filterByExistValue,
            refresh: this.filterByExistValue,
            scope: this
        });
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
            if (me.onclear) {
                setTimeout(me.onclear, me.changeDelay);
            }

            me.clear();
        }

    },

    afterRender: function () {
        var me = this,
            nav = new Ext.util.KeyNav(me.el, {
                "enter": me.resolveValues,
                scope: this
            });

        if (!me.enterMode) {

            me.on('change', me.resolveValues, this, {
                buffer: me.changeDelay
            });
        }

        this.callParent(arguments);
    },

    onTriggerClick: function () {
        var me = this,
            view = me.view;

        this.suspendEvents();

        this.clear();

        view.fireEvent('filtered', view);

        this.resumeEvents(false);

    },

    setNewConfig: function (config) {
        var me = this, i;

        for (i in config) {
            if (config.hasOwnProperty(i)) {
                me[i] = config[i];
            }
        }
    }

})
;