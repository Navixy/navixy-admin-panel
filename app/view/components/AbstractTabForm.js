/**
 * @class NavixyPanel.view.components.AbstractTabForm
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.components.AbstractTabForm', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    bodyPadding: '0 0 60 0',
    formRowPadding: '50 0 0 0',

    invalidTabCls: 'invalid-tab',

    getItems: function () {
        return [
            {
                xtype: 'tabpanel',
                plain: true,
                activeTab: 0,
                border: 0,
                width: '100%',
                ui: 'light',
                cls: 'header-tabs',
                defaults: this.getRowDefaults(),
                items: this.getTabs()
            }
        ];
    },

    getTabs: function () {
        return [];
    },

    getRowDefaults: function () {
        return {
            xtype: 'container',
            role: 'tab',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: this.getCellDefaults()
        };
    },

    initComponent: function () {
        this.callParent(arguments);

        this.on('fieldvaliditychange', this.checkInvalidTab, this);
    },

    getTabPanel: function () {
        return this.down('tabpanel');
    },

    checkInvalidTab: function (form) {

        var state = this.getForm().isValid(),
            tabs = !state && this.getInvalidTabs();
        this.updateTabsValid(tabs);
    },

    updateTabsValid: function (tabs) {

        this.getTabPanel().items.each(function (tab) {
            tab.tab.removeCls(this.invalidTabCls);
            this.hideInvalidTabTip(tab.tab);
        }, this);

        Ext.iterate(tabs, function (tab, index) {
            if (!index) {
                this.showInvalidTabTip(tab.tab);
            }
            tab.tab.addCls(this.invalidTabCls);
        }, this);
    },

    getInvalidTabs: function () {
        var form = this.getForm(),
            fields = form.getFields(),
            result = [];

        fields.each(function (field) {
            if (!field.isValid()) {
                var cmp = field.up('[role="tab"]');
                if (cmp.xtype !== 'tabpanel') {
                    result.push(field.up('[role="tab"]'));
                }
            }
        }, this);

        return result;
    },


    hideInvalidTabTip: function (tab) {
        if (tab.toolTip) {
            tab.toolTip.hide();
        }
    },

    showInvalidTabTip: function (tab) {
        if (tab.toolTip) {
            tab.toolTip.update(_l.get('invalid_tab'));
        } else {
            tab.toolTip = Ext.create('Ext.tip.ToolTip', {
                ui: 'bottom',
                html: _l.get('invalid_tab'),
                dismissDelay: 0
            });
        }

        tab.toolTip.showBy(tab, 't-b', [0, 7]);
    }

});