/**
 * @class NavixyPanel.view.trackers.TrackerSettingsWindow
 * @extends NavixyPanel.view.components.AbstractList
 * Description
 */

Ext.define('NavixyPanel.view.trackers.TrackerSettingsWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    alias: 'widget.trackersettingswindow',
    cls: 'tracker-settings-window',
    closeAction: 'destroy',
    hash: null,
    tracker_id: null,

    getItems: function () {
        var appName = 'pconfig',
            appLink = Ext.Nav.getApplicationLink(this.hash, appName, {
                tracker_id: this.tracker_id
            }),
            content = appLink && appLink.indexOf(appName) > -1 ? '<iframe src="' + appLink +'"></iframe>' : '';

        return [{
            xtype: 'component',
            html: content,
            flex: 1
        }];
    },

    getTexts: function () {
        return {
            windowTitle: _l.get('trackers.card.links.tracker_settings')
        };
    },

    afterRender: function () {
        this.callParent(arguments);

        var me = this,
            isIE = Ext.isIE || Ext.isIE11;

        window[isIE ? 'onhashchange' : 'onpopstate'] = function () {
            me.close();
        };
    },

    destroy: function () {
        window.onpopstate = null;
        window.onhashchange = null;

        this.callParent(arguments);
    }
});
