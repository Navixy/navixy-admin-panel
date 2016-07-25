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
        var users = [],
            dealers = [],
            tpl = new Ext.XTemplate(
                '<span style="font-weight: bold;">ID: {subject_id}</span>',
                '<span style="color: #555"> - {error_message}</span><br>'
            );

        Ext.iterate(this.errors, function (error) {
            if (error.subject_type === 'user') {
                users.push(tpl.apply(error));
            }
        }, this);

        if (users.length) {
            users.unshift(['<h2>', _l.get('accounting.form.export1c.errors_window.users_list'),':</h2>'].join(""))
        }

        Ext.iterate(this.errors, function (error) {
            if (error.subject_type === 'dealer') {
                dealers.push(tpl.apply(error));
            }
        }, this);

        if (dealers.length) {
            dealers.unshift(['<h2>', _l.get('accounting.form.export1c.errors_window.dealers_list'),':</h2>'].join(""))
        }

        return {
            xtype: 'panel',
            ui: 'light',
            autoScroll: true,
            layout: 'fit',
            items: {
                padding: 20,
                xtype: 'container',
                autoScroll: true,
                html: users.concat(dealers).join("<br>")
            }
        }
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
