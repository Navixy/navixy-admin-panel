Ext.define('NavixyPanel.view.components.AbstractCard', {
    extend: 'Ext.Container',
    requires: ['NavixyPanel.view.widgets.ClickableComponent'],
    singleCmp: true,

    record: null,
    headerTpl: null,
    singleColumnBody: false,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    stateful: false,

    initComponent: function () {

        if (!this.record) {
            return false;
        }

        this.items = this.getItemsConfig();

        this.callParent(arguments);
    },

    getState: function () {
        return {
            linksCollapsed: !!(this.getLinksPanel() && this.getLinksPanel().getCollapsed()),
            bodyCollapsed: !!(this.getBodyPanel() && this.getBodyPanel().getCollapsed())
        };
    },

    applyState: function (state) {

        this.on('afterlayout', function() {
            this.toggleLinks(state.linksCollapsed);
            this.toggleBody(state.bodyCollapsed);
        }, this, {single: true});
    },

    getItemsConfig: function () {

        var linksConfig = !!this.getLinks(),
            links = linksConfig && this.getLinksPanelConfig(),
            linksCollapser = linksConfig && this.getLinksCollapserConfig();

        return [
            {
                xtype: 'panel',
                ui: 'light',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                bodyPadding: 10,
                title: this.getPanelTitle(),
                items: !linksCollapser
                    ? this.getPanelItemsConfig()
                    : Ext.Array.merge(this.getPanelItemsConfig(), [linksCollapser])
            },
            links
        ];
    },

    getLinksPanelConfig: function () {
        return {
            role: 'links',
            xtype: 'panel',
            ui: 'transparent',
            cls: 'links-panel',
            bodyPadding: '20 10 10 20',

            width: 230,
            defaults: {
                xtype: 'clickable',
                width: 200,
                margin: '0 0 5 0'
            },
            items: this.getLinks()
        };
    },

    getLinksCollapserConfig: function () {
        var me = this;
        return {
            role: 'links-collapser',
            xtype: 'clickable',
            cls: 'links-collapser',
            height: 0,
            width: 0,
            tip: _l.card.links.collapser_tip,
            expTip: _l.card.links.collapser_exptip,
            listeners: {
                click: me.handleLinksCollapseTool,
                scope: me
            }
        };
    },

    getPanelItemsConfig: function () {
        var items = [],
            hasBody = !!(this.prepareBodyLeftData() || this.prepareBodyRightData()),
            headerConfig = {
                role: 'header',
                xtype: 'container',
                padding: '10 10 10 10',
                tpl: this.makeMainTpl(),
                data: this.prepareHeaderData()
            },
            tabPanelConfig = {
                xtype: 'tabpanel',
                ui: 'light',
                border: 0,
                items: this.getTabPanelItems()
            };



        if (hasBody) {
            items = [
                this.getBodyCollapserConfig(),
                {
                    role: 'body',
                    xtype: 'panel',
                    ui: 'transparent',
                    cls: 'card-body',
                    padding: '10',
                    collapseMode: 'mini',
                    layout: {
                        type: 'hbox'
                    },
                    items: this.getBodyItemsConfig()
                },
                {
                    xtype: 'container',
                    height: 40
                }
            ];
        }

        items.unshift(headerConfig);
        items.push(tabPanelConfig);

        return items;
    },

    getBodyItemsConfig: function () {
        var cols = [
            {
                xtype: 'container',
                flex: 1,
                tpl: this.makeMainTpl(),
                data: this.prepareBodyLeftData()
            }
        ];

        if (!this.singleColumnBody) {
            cols.push(
                {
                    xtype: 'container',
                    flex: 1,
                    tpl: this.makeMainTpl(),
                    data: this.prepareBodyRightData()
                }
            );
        }

        return cols;
    },

    getBodyCollapserConfig: function () {
        var me = this;
        //TODO locale
        return {
            role: 'body-collapser',
            xtype: 'clickable',
            cls: 'body-collapser',
            padding: '5 0 5 30',

            html: _l.card.body.title,

            collapsedHtml: _l.card.body.title,
            expandedHtml: _l.card.body.exptitle,

            tip: 'Скрыть доп. информацию',
            expTip: 'Показать доп. информацию',

            listeners: {
                click: me.handBodyCollapseTool,
                scope: me
            }
        };
    },

    makeMainTpl: function () {
        return Ext.create('NavixyPanel.utils.CTemplate',
            '<div class="{main_cls}">',
                '<tpl if="title">',
                    '<div class="title">',
                        '{title:htmlEncode}',
                        '<tpl if="title_add">',
                            '<span class="title-add">{title_add:htmlEncode}</span>',
                        '</tpl>',
                    '</div>',
                '</tpl>',
                '<table class="content-table {table_cls}">',
                    '<tpl for="fields">',
                        '<tpl if="(!values.no_empty && !values.value) || values.value">',
                            '<tr>',
                                '<td',
                                    '<tpl if="right_td_cls">',
                                        ' class="{right_td_cls}"',
                                    '</tpl>',
                                    '>{title:htmlEncode}',
                                '</td>',
                                '<td></td>',
                                '<td',
                                    '<tpl if="left_td_cls">',
                                        ' class="{left_td_cls}"',
                                    '</tpl>',
                                    '<tpl if="no_encode">',
                                        '>{value}',
                                    '<tpl else>',
                                        '>{value:htmlEncode}',
                                    '</tpl>',
                                '</td>',
                            '</tr>',
                        '</tpl>',
                    '</tpl>',
                '</table>',
            '</div>'
        );
    },

    getLinks: Ext.emptyFn,

    getPanelTitle: Ext.emptyFn,

    getTabPanelItems: Ext.emptyFn,


    prepareHeaderData: Ext.emptyFn,

    prepareBodyLeftData: Ext.emptyFn,

    prepareBodyRightData: Ext.emptyFn,


    getLinksCollapser: function () {
        return this.down("[role='links-collapser']");
    },

    getLinksPanel: function () {
        return this.down("[role='links']");
    },

    getBodyCollapser: function () {
        return this.down("[role='body-collapser']");
    },

    getBodyPanel: function () {
        return this.down("[role='body']");
    },

    getRecordId: function () {
        return this.record.getId();
    },

    getRecordData: function () {
        return this.record.getData();
    },

    handleLinksCollapseTool: function () {
        this.toggleLinks();
    },

    toggleLinks: function (forceState) {
        var direction = 'right',
            linksPanel = this.getLinksPanel(),
            collapser = this.getLinksCollapser(),
            isForce = forceState !== undefined,
            collapsed;

        if (linksPanel && collapser) {
            collapsed = !!linksPanel.getCollapsed();

            if (!isForce || (collapsed !== forceState)) {
                linksPanel[collapsed ? 'expand' : 'collapse'](collapsed ? false : direction, false);
                collapser[collapsed ? 'removeCls' : 'addCls']('active');
                collapser.updateTip(collapsed ? collapser.tip : collapser.expTip);
                if (!isForce) {
                    this.saveState();
                }
            }
        }
    },

    handBodyCollapseTool: function (forceState) {
        this.toggleBody();
    },

    toggleBody: function (forceState) {
        var direction = 'top',
            bodyPanel = this.getBodyPanel(),
            collapser = this.getBodyCollapser(),
            isForce = forceState !== undefined,
            collapsed;

        if (bodyPanel && collapser) {
            collapsed = !!bodyPanel.getCollapsed();

            if (!isForce || (collapsed !== forceState)) {
                bodyPanel[collapsed ? 'expand' : 'collapse'](collapsed ? false : direction, false);
                collapser[collapsed ? 'removeCls' : 'addCls']('active');
                collapser.updateTip(collapsed ? collapser.tip : collapser.expTip);
                collapser.update(collapsed ? collapser.collapsedHtml : collapser.expandedHtml);
                if (!isForce) {
                    this.saveState();
                }
            }
        }
    },
});
