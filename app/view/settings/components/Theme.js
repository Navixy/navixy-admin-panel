/**
 * @class NavixyPanel.view.settings.components.Theme
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.Theme', {
    extend: 'Ext.Container',
    xtype: 'settings-theme',
    padding: '0 0 20 0',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'container'
    },

    record: null,

    defaultPreviewsPathTpl: 'images/themes/{0}/{1}.jpg',

    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getItems: function (pathTpl) {
        var tpl = pathTpl || this.defaultPreviewsPathTpl,
            previews = Ext.Array.clone(this.record.get('images')),
            themeName = this.record.get('name'),
            subItems = [],
            default_src = previews && previews.length && Ext.String.format(tpl, themeName, previews.shift()),
            result = default_src ? {
                role: 'previews-container',
                xtype: 'container',
                cls: 'test-test',
                layout: {
                    type: 'hbox',
                    align: 'streach'
                },
                items: [
                    {
                        xtype: 'image',
                        src: default_src,
                        width: 490,
                        height: 276,
                        cls: 'theme-image-monitor__content'
                    },
                    {
                        xtype: 'image',
                        src: 'images/themes/monitor.svg',
                        cls: 'theme-image-monitor',
                        width: 600,
                        height: 400
                    },
                    {
                        xtype: 'image',
                        width: 195,
                        cls: 'theme-image-iphone',
                        src: 'images/themes/iphone.svg'
                    }
                ]
            }
                : null;

        return result;
    }
});
