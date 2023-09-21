/**
 * @class NavixyPanel.view.components.AbstractWindowSelect
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.desktop.sa-token.SaTokenDialog', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    xtype: 'sa-token-dialog',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: 200,
    width: 500,
    margin: '0 0 0 -8',
    mapWait: null,
    firstUpdate: false,
    formValues: null,
    record: null,
    ui: 'default',

    afterRender: function () {
        this.callParent(arguments)
        this.loadToken()
    },

    loadToken: function () {
        Ext.API.getSaToken({
            callback: function (token) {
                this.down('textfield').setValue(token)
            },
            scope: this
        })
    },

    getItems: function () {
        var lp = _l.get('settings.edit_form')
        var me = this
        return [{
            xtype: 'container',
            padding: 20,
            height: 150,
            style: 'background-color:#fff',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            ui: 'light',
            defaults: {
                ui: 'light'
            },
            items: [{
                xtype: "component",
                text: "On-premise token:"

            }, {
                xtype: 'textfield',
                fieldLabel: 'On-premise token:',
                labelAlign: 'top',
                readOnly: true,
                role: 'sa_token'
            }]
        }, this.getBottomBar()]
    },

    getBottomBar: function () {
        return [
            '->',
            {
                text: _l.get('close_form_btn'),
                scale: 'medium',
                ui: 'gray',
                margin: '0 5',
                handler: Ext.bind(this.close, this)
            }
        ];
    },

    getTexts: function () {
        var lp = _l.get("sa-token");
        return {
            windowTitle: lp.get("sa-token-title")
        };
    }
})
