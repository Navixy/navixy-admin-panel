/**
 * @class NavixyPanel.view.accounting.ExportErrorsWindow
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.accounting.ExportErrorsWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.export-errors',
    modal: true,
    shadow: false,
    resizable: false,
    draggable: false,
    layout: 'fit',
    autoShow: true,
    height: '75%',
    width: 1250,
    margin: '0 0 0 -8',
    errors: [],

    initComponent: function () {

        var defaultTexts = {
            windowTitle: null
        };

        this.title = _l.get('accounting.form.export1c.errors_window.title');

        this.items = this.getItems();

        this.bbar = this.getBottomBar();

        this.callParent(arguments);
    },

    getItems: function () {
        return {
            xtype: 'component',
            cls: 'x-panel-body-light',
            autoScroll: true,
            padding: 20,
            tpl: [
                '<tpl for=".">',
                    '<h2>{title}:</h2><br>',
                    '<tpl for="items">',
                        '<span style="font-weight: bold;">ID: {subject_id}</span>',
                        '<span style="color: #555"> - {error_message}</span><br><br>',
                    '</tpl>',
                '</tpl>'
            ],
            data: [
                {
                    title: _l.get('accounting.form.export1c.errors_window.users_list'),
                    items: Ext.Array.filter(this.errors, function (item) {return item.subject_type === 'user'})
                },
                {
                    title: _l.get('accounting.form.export1c.errors_window.dealers_list'),
                    items: Ext.Array.filter(this.errors, function (item) {return item.subject_type === 'dealer'})
                }
            ]
        };
    },

    getBottomBar: function () {
        return [
            {
                xtype: 'button',
                text: _l.get('accounting.form.export1c.errors_window.close'),
                handler: function () {
                    this.close();
                },
                scope: this
            }
        ]
    }
});
