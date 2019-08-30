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
            default_src = previews && previews.length && Ext.String.format(tpl, themeName, previews[0]),
            result = default_src ? {
                role: 'previews-container',
                xtype: 'container',
                cls: 'form-img-preview-bg-holder',
                margin: '10 0 0 0',
                height: 420,
                layout: {
                    type: 'hbox',
                    align: 'streach'
                },
                listeners: {
                    'click': {
                        fn: function (event, element) {
                            var el = Ext.get(element);

                            if (el && el.hasCls('form-img-preview')) {
                                this.down("[role=big-picture]").setSrc(el.getAttribute('src'));

                                this.down("[role=small-picture-container]").items.each(function (el) {
                                    el.removeCls('selected');
                                }, this);

                                el.addCls('selected');
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
                        cls: 'form-img-preview form-img-preview-big',
                        role: 'big-picture'
                    }
                ]
            }
                : null;

        if (result) {
            Ext.iterate(previews, function (img_path, index) {
                subItems.push({
                    cls: index == 0 ? 'form-img-preview form-img-preview-small selected' : 'form-img-preview form-img-preview-small',
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
                            height: 150
                        },
                        role: 'small-picture-container',
                        height: 420,
                        items: subItems
                    }
                )
            }
        }

        return result;
    }
});