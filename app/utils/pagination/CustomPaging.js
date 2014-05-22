/**
 * @class NavixyPanel.utils.pagination.CustomPaging
 * @extends Ext.toolbar.Paging
 * Description
 */

Ext.define('NavixyPanel.utils.pagination.CustomPaging', {
    extend: 'Ext.toolbar.Paging',
    alias: 'widget.custompaging',
    displayInfo: false,
    ui: 'light',
    inputItemWidth: 25,
    defaultButtonUI: 'transparent',
    border: 0,

    // Override items of toolbar
    getPagingItems: function() {
        var me = this;

        return [{
            itemId: 'first',
            tooltip: me.firstText,
            overflowText: me.firstText,
            iconCls: Ext.baseCSSPrefix + 'tbar-page-first',
            disabled: true,
            handler: me.moveFirst,
            scope: me
        },{
            itemId: 'prev',
            tooltip: me.prevText,
            overflowText: me.prevText,
            iconCls: Ext.baseCSSPrefix + 'tbar-page-prev',
            disabled: true,
            handler: me.movePrevious,
            scope: me
        },
            me.beforePageText,
            {
                xtype: 'numberfield',
                itemId: 'inputItem',
                name: 'inputItem',
                cls: Ext.baseCSSPrefix + 'tbar-page-number',
                allowDecimals: false,
                minValue: 1,
                hideTrigger: true,
                enableKeyEvents: true,
                keyNavEnabled: false,
                selectOnFocus: true,
                submitValue: false,
                // mark it as not a field so the form will not catch it when getting fields
                isFormField: false,
                width: me.inputItemWidth,
                margins: '-10 2 3 2',
                listeners: {
                    scope: me,
                    keydown: me.onPagingKeyDown,
                    blur: me.onPagingBlur
                },
                height: 22,
                style: {
                    top: '0 !important'
                }
            },{
                xtype: 'tbtext',
                itemId: 'afterTextItem',
                text: Ext.String.format(me.afterPageText, 1)
            },
            {
                itemId: 'next',
                tooltip: me.nextText,
                overflowText: me.nextText,
                iconCls: Ext.baseCSSPrefix + 'tbar-page-next',
                disabled: true,
                handler: me.moveNext,
                scope: me
            },{
                itemId: 'last',
                tooltip: me.lastText,
                overflowText: me.lastText,
                iconCls: Ext.baseCSSPrefix + 'tbar-page-last',
                disabled: true,
                handler: me.moveLast,
                scope: me
            }];
    },

    getPageData : function(){
        var store = this.store,
            filteredCount = store.fCount();
            totalCount = filteredCount ? Math.min(store.getTotalCount(), filteredCount) : store.getTotalCount();

        return {
            total : totalCount,
            currentPage : store.currentPage,
            pageCount: Math.ceil(totalCount / store.pageSize),
            fromRecord: ((store.currentPage - 1) * store.pageSize) + 1,
            toRecord: Math.min(store.currentPage * store.pageSize, totalCount)

        };
    }
});