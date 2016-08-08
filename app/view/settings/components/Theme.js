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
            previews = Ext.Array.clone(this.record.get('images')),
            themeName = this.record.get('name'),
            subItems = [],
            default_src = previews && previews.length && Ext.String.format(tpl, themeName, previews.shift()),
            result = default_src ?
                {
                    role: 'previews-container',
                    xtype: 'container',
                    cls: 'test-test',
                    layout: {
                        type: 'hbox',
                        align: 'streach'
                    },
                    listeners: {
                        'mouseover': {
                            fn: function (event, element) {
                                var el = Ext.get(element);

                                if (el && el.hasCls('form-img-preview')) {
                                    this.down("[role=big-picture]").setSrc(el.getAttribute('src'));
                                }
                            },
                            element: 'el',
                            scope: this
                        },
                        'mouseout': {
                            fn: function () {
                                if (default_src) {
                                    this.down("[role=big-picture]").setSrc(default_src);
                                }
                            },
                            element: 'el',
                            scope: this
                        }
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

        if (result) {
            Ext.iterate(previews, function (img_path, index) {
                subItems.push({
                    margin: index ? '2 0 0 2' : '0 0 0 2',
                    src: Ext.String.format(tpl, themeName, img_path)
                });
            }, this);

            if (subItems.length) {
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
                            height: 120
                        },
                        items: subItems
                    }
                )
            }
        }

        return result;
    }
});