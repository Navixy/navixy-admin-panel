/**
 * @class NavixyPanel.view.widgets.SearchField
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.widgets.SearchField', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.searchfield',
    ui: 'toolbar-trigger',
    enterMode: true,
    triggerCls: 'search',
    componentCls: 'search-field small',
    width: 200,

    initComponent: function () {
        this.emptyText = _l.get('search_empty_text') || 'Enter search query';
        this.callParent(arguments);
    },

    afterRender: function () {
        var nav = new Ext.util.KeyNav(this.el, {
                "enter": this.doSearch,
                scope: this
            });

        this.callParent(arguments);
    },

    onTriggerClick: function () {
        this.doSearch();
    },

    doSearch: function () {
        var value = this.getValue();

        if (value.length) {
            this.fireEvent('search', value);
            this.setValue('');
        }
    }
})
;