/**
 * @class NavixyPanel.view.settings.components.MobileThemePicker
 * @extends Ext.Container
 * Description
 */
Ext.define('NavixyPanel.view.settings.components.MobileThemePicker', {
    extend: 'Ext.picker.Color',
    xtype: 'settings-mobile-theme-picker',
    componentCls : Ext.baseCSSPrefix + 'mobile-theme-picker',

    store: null,

    themeRe: /(?:^|\s)theme-(.+?)(?:\s|$)/,

    renderTpl: [
        '<tpl for="themes">',
            '<tpl if="!disabled">',
                '<a href="#" class="theme-{name} {parent.itemCls}" hidefocus="on">',
                    '<span class="{parent.itemCls}-inner" style="background:#{color}">&#160;</span>',
                '</a>',
            '</tpl>',
        '</tpl>'
    ],

    initComponent: function () {
        this.callParent(arguments);
    },

    initRenderData : function(){
        var me = this;
        return Ext.apply(me.callParent(), {
            themes: me.store.getData()
        });
    },

    handleClick : function(event, target){
        var me = this,
            theme;

        event.stopEvent();
        if (!me.disabled) {
            theme = target.className.match(me.themeRe)[1];
            me.select(theme);
        }
    },

    select : function(theme, suppressEvent){

        var me = this,
            selectedCls = me.selectedCls,
            value = me.value,
            el;

        if (suppressEvent !== true && theme != value) {
            me.fireEvent('select', me, theme);
        }

        if (!me.rendered) {
            me.value = theme;
            return;
        }


        if (theme != value || me.allowReselect) {
            el = me.el;

            if (me.value) {
                el.down('a.theme-' + value).removeCls(selectedCls);
            }

            el.down('a.theme-' + theme).addCls(selectedCls);
            me.value = theme;
            if (suppressEvent !== true) {
                me.fireEvent('select', me, theme);
            }
        }
    }
});