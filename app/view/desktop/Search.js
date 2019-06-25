/**
 * @class NavixyPanel.view.desktop.Search
 * @extends Ext.form.Panel
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Search', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchform',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    ui: 'light',
    bodyPadding: 20,
    buttonAlign: 'center',

    cls: 'main-search',

    modulesForSearch: {
        'users': 'userslist',
        'trackers': 'trackerslist',
        'tariffs': 'tariffslist',
        'subpaas': 'subpaaslist'
    },

    searchStr: null,

    initComponent: function () {

        this.items = [
            this.getSearchFieldConfig(),
            this.getSearchResultsConfig()
        ];

        this.title = _l.get('searchTitle');

        this.callParent(arguments);
    },

    afterRender: function () {
        this.callParent(arguments);
        this.searchByConfig();
    },

    searchByConfig: function () {
        if (this.searchStr) {
            this.getSearchField().setValue(this.searchStr);
            this.searchAction();
        }
    },

    updateConfig: function (config) {
        if (config && config.searchStr) {
            this.searchStr = config.searchStr;
            this.searchByConfig();
        }
    },

    getSearchFieldConfig: function () {
        return {
            xtype: 'container',
            role: 'console-action',
            layout: {
                type: 'hbox',
                align: 'top'
            },
            flex: 1,
            items: [
                {
                    role: 'search-field',
                    xtype: 'textfield',
                    height: 33,

                    ui: 'light',
                    cls: 'search-field',

                    emptyText: _l.get('search.empty'),

                    flex: 1,

                    listeners: {
                        afterrender: {
                            fn: function (field) {
                                if (field.el) {
                                    var nav = new Ext.util.KeyNav(field.el, {
                                        "enter": this.searchAction,
                                        scope: this
                                    });
                                }
                            },
                            scope: this
                        }
                    }
                },
                {
                    role: 'search-btn',
                    xtype: 'button',
                    cls: 'search-btn',
                    height: 33,

                    margin: '0 0 0 10',
                    text: _l.get('search.btn'),
                    handler: Ext.bind(this.searchAction, this)
                }
            ]
        };
    },

    getSearchResultsConfig: function () {
        return {
            role: 'search-results',
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            }
        };
    },

    getSearchField: function () {
        return this.down('[role="search-field"]');
    },

    getSearchValue: function () {
        return this.getSearchField().getValue();
    },

    getResultsContainer: function () {
        return this.down('[role="search-results"]');
    },

    renderResults: function (searchResults) {
        Ext.iterate(searchResults, function (result) {
            result.render(this.getResultsContainer().getEl());
        }, this);
    },

    searchAction: function () {
        var searchReq = this.getSearchValue(),
            widgetConfig = {
                collapsed: true,
                storeSearch: true,
                viewPageSize: 10,
                flex: 1,
                margin: '30 0 0 0',
                title: ' ',
                ui: 'light',
                showEmpty: false,
                noTBar: true,
                filter: {
                    '_all': searchReq
                }
            };

        if (searchReq.length) {
            this.clearResults();
            Ext.iterate(this.modulesForSearch, function (moduleName, moduleWidget) {
                if (moduleName === 'subpaas' && !Ext.getStore('Dealer').isSubPaasAvailable()) {
                    return
                }
                if (Ext.checkPermission(moduleName, 'read')) {
                    this.getResultsContainer().add(Ext.widget(
                        moduleWidget,
                        Ext.apply(
                            {
                                searchTitle: _l[moduleName].menu_text
                            },
                            widgetConfig)
                        )
                    );
                }
            }, this);
        }
    },

    clearResults: function () {
        this.getResultsContainer().removeAll(true);
    }
});
