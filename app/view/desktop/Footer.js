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
    requires: ['NavixyPanel.view.desktop.AboutPopup'],

    // TODO: Footer and copyright styles;
    // TODO: Return "terms of use" to the footer when the text is ready
    initComponent: function () {
        var copyright = this.isNavixy() ? _l.get('main_copyright') : _l.get('paas_main_copyright')
        var privacyPolicy = this.isNavixy() ? _l.get('privacy_policy') : ''
        var copyrightCmp = '<span>' + copyright + '</span>'
        // var privacyPolicy = Ext.isNavixy() ? (_l.get('privacy_policy') + ' | ') : '';
        // var links = _l.get('terms_of_service');
        // var copyrightCmp = '<span style="margin-right:2px">' + copyright + '</span>';

        this.items = [
            {
                xtype: 'container',
                padding: 20,
                style: { textAlign: 'center' },
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                items: [{
                    xtype: 'component',
                    html: copyrightCmp + ' ' + privacyPolicy
                }, {
                    xtype: 'clickable',
                    html: '<a>About Navixy Admin Panel</a>',
                    listeners: {
                        click: this.showAboutPopup
                    }
                }]
            }
        ]

        this.callParent(arguments)
    },
    isNavixy: function () {
        return Config.hideNavixyLogo && /navixy\.(com|ru)/gi.test(location.hostname) || !Config.hideNavixyLogo
    },
    showAboutPopup: function  () {
        Ext.widget('about-popup')
    }

})
