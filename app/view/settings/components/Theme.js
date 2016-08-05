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

    defaultPreviewsPathTpl: 'images/themes/{0}/{1}.png',

    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getItems: function (pathTpl) {
        var tpl = pathTpl || this.defaultPreviewsPathTpl,
            previews = this.record.get('images'),
            themeName = this.record.get('name'),
            subItems = [],
            default_src = previews && previews.length && Ext.String.format(tpl, themeName, previews[0]),
            result = default_src ?
                {
                    role: 'previews-container',
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'streach'
                    },
                    items: [
                        {
                            xtype: 'image',
                            src: default_src,
                            cls: 'form-img-preview',
                            role: 'big-picture',
                            width: 512,
                            height: 364
                        }
                    ]
                }
                : null;

        Ext.iterate(previews, function (img_path, index) {
            if (!index) {
                return true;
            }

            subItems.push({
                src: Ext.String.format(tpl, themeName, img_path)
            });
        }, this);

        if (subItems.length) {
            subItems[0].margin = '0 0 0 2';

            result.items.push(
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        xtype: 'image',
                        cls: 'form-img-preview',
                        width: 170,
                        height: 120,
                        margin: '2 0 0 2',
                        listeners: {
                            afterrender: function (cmp) {
                                var el = cmp.getEl();

                                if (el) {
                                    el.on({
                                        'mouseover': function () {
                                            var bigPicture = cmp.up().up().down("[role=big-picture]"),
                                                newSrc = el.getAttribute('src');

                                            if (bigPicture) {
                                                bigPicture.setSrc(newSrc);
                                            }
                                        },
                                        'mouseout': function () {
                                            var bigPicture = cmp.up().up().down("[role=big-picture]");

                                            if (bigPicture && default_src) {
                                                bigPicture.setSrc(default_src);
                                            }
                                        },
                                        scope: this
                                    });
                                }
                            },
                            scope: this
                        }
                    },
                    items: subItems

                }
            )
        }

        return result;
    }
});