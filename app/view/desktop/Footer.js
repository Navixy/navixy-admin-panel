/**
 * @class NavixyPanel.view.desktop.Footer
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.Footer', {
    extend: 'Ext.Container',
    alias: 'widget.mainfooter',
    layout: {
        type: 'vbox',
        pack: 'end',
        align: 'center'
    },

    // TODO: Footer and copyright styles;
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                padding: 20,
                html: _l.get(Ext.isNavixy() ? 'main_copyright' : 'paas_main_copyright')
            }
        ];

        this.callParent(arguments);
    }
});