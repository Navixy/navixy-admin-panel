/**
 * @class NavixyPanel.view.desktop.AboutPopup
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.desktop.AboutPopup', {
    extend: 'Ext.window.Window',
    alias: 'widget.about-popup',
    modal: true,
    shadow: false,
    resizable: false,
    draggable: false,
    layout: 'fit',
    autoShow: true,
    height: 600,
    width: 400,

    initComponent: function () {
        this.title = 'About Navixy Admin Panel';

        this.items = [{
            xtype: 'component',
            cls: 'x-panel-body-light',
            autoScroll: true,
            padding:20,
            html: "<p>Navixy Admin Panel is the web-based administration interface used by authorized staff to manage users, roles, and configuration settings in the Navixy telematics platform.</p>" +
                "<p>The front-end of this admin console is released as open-source software under the GNU General Public License version 3 (GPLv3).</p>" +
                "<p>You can access the complete corresponding source code for this admin console at: <a href='https://github.com/navixy/navixy-admin-panel'>https://github.com/navixy/navixy-admin-panel</a></p>"
        }]

        this.bbar = ['->',
            {
                xtype: 'button',
                text: 'Close',
                handler: function () {
                    this.close();
                },
                scope: this
            }
        ]

        this.callParent(arguments);
    }

})
