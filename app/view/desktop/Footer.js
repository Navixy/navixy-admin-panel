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
        var mainCopyright = Ext.String.format(_l.get('main_copyright'), moment().year());
        var paasCopyright = _l.get(Ext.isNavixy() ? 'main_copyright' : 'paas_main_copyright');
        this.items = [
            {
                xtype: 'container',
                padding: 20,
                html: Ext.isNavixy() ? mainCopyright : paasCopyright
            }
        ];

        this.callParent(arguments);
    }
});