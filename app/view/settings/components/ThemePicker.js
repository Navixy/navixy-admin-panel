/**
 * @class NavixyPanel.view.settings.components.ThemePicker
 * @extends Ext.Container
 * Description
 */
Ext.define('NavixyPanel.view.settings.components.ThemePicker', {
    extend: 'Ext.Component',
    requires: 'Ext.XTemplate',
    xtype: 'settings-theme-picker',

    componentCls : Ext.baseCSSPrefix + 'theme-picker',

    selectedCls: Ext.baseCSSPrefix + 'theme-picker-selected',

    itemCls: Ext.baseCSSPrefix + 'theme-picker-item',

    value : null,

    clickEvent :'click',

    allowReselect : false,

    renderTpl: [
        '<tpl for="themes">',
            '<div class="{parent.itemCls}-container">',
                '<a href="#" role="button" theme="{name}" class="theme-{name} {parent.itemCls}" hidefocus="on">',
                    '<div class="{parent.itemCls}-inner" style="background:#{left}"></div>',
                    '<div class="{parent.itemCls}-inner" style="background:#{right}"></div>',
                '</a>',
                '<div class="{parent.itemCls}-label"><p>{title}</p></div>',
            '</div>',
        '</tpl>'
    ],

    initComponent : function(){
        var me = this;

        me.callParent(arguments);
        me.addEvents(
            'select'
        );

        if (me.handler) {
            me.on('select', me.handler, me.scope, true);
        }
    },


    initRenderData : function(){
        var me = this;
        return Ext.apply(me.callParent(), {
            itemCls: me.itemCls,
            themes: me.themes
        });
    },

    onRender : function(){
        var me = this,
            clickEvent = me.clickEvent;

        me.callParent(arguments);

        me.mon(me.el, clickEvent, me.handleClick, me, {delegate: 'a'});

        if(clickEvent != 'click'){
            me.mon(me.el, 'click', Ext.emptyFn, me, {delegate: 'a', stopEvent: true});
        }
    },

    afterRender : function(){
        var me = this,
            value;

        me.callParent(arguments);
        if (me.value) {
            value = me.value;
            me.value = null;
            me.select(value, true);
        }
    },

    handleClick : function(event, target){
        var me = this,
            theme;

        event.stopEvent();
        if (!me.disabled) {
            theme = target.getAttribute("theme");
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
        }
    },

    clear: function(){
        var me = this,
            value = me.value,
            el;

        if (value && me.rendered) {
            el = me.el.down('a.theme-' + value);
            el.removeCls(me.selectedCls);
        }
        me.value = null;
    },

    getValue: function(){
        return this.value || null;
    }
});