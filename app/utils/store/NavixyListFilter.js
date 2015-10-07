/**
 * @class NavixyPanel.view.widgets.NavixyListFilter
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.utils.store.NavixyListFilter', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.navixylistfilter',
    ui: 'toolbar-trigger',
    onclear: null,
    onsearch: null,
    beforeSearch: null,
    changeDelay: 300,
    enterMode: false,
    triggerCls: 'clear',
    componentCls: 'searcher',

    cls: 'small',

    initComponent: function () {
        this.emptyText = _l.get('searcher_empty_text') || 'Enter search query';
        this.callParent(arguments);
    },

    search: function (val) {
        this.fireEvent('filter', val);
    },

    clear: function () {
        this.setValue('');
        this.fireEvent('clear');
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
                Ext.logger(e.stack);
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
        this.clear();
    }
})
;