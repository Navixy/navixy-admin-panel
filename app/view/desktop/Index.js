/**
 * @class NavixyPanel.view.desktop.Index
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Index', {
    extend: 'Ext.Container',
    alias: 'widget.indexpage',

    initComponent: function () {
        var isBlocked = Ext.getStore("Dealer").first() && Ext.getStore("Dealer").first().get("block_status"),
            blockStr = isBlocked.toLowerCase();

        this.items = isBlocked !== "NOT_BLOCKED"
            ? [
                {
                    xtype: 'container',
                    padding: '50 50 0 50',
                    style: 'font-size: 20px; text-align: center',
                    html: _l.get('index_title')
                },
                {
                    xtype: 'container',
                    padding: '15 50 0 50',
                    style: 'font-size: 20px; text-align: center',
                    html: _l.get('index_blocked')[blockStr]
                },
                Ext.checkPermission("paas_payments", "create")
                    ? {
                    xtype: 'container',
                    padding: '25 50 0 50',
                    style: 'font-size: 14px; text-align: center',
                    html: _l.get('index_blocked_payment')
                    }
                    : {},
                {
                    xtype: 'container',
                    padding: '5 50 0 50'
                }
            ]
            : [
                {
                    xtype: 'container',
                    padding: '50 50 0 50',
                    style: 'font-size: 20px; text-align: center',
                    html: _l.get('index_title')
                },
                {
                    xtype: 'container',
                    padding: '5 50 0 50'
                }
            ];


        this.callParent(arguments);
    }
});
