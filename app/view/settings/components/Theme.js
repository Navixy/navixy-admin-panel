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
    oldColor: null,
    initComponent: function () {
        this.items = this.getItems();
        this.callParent(arguments);
    },
    afterLayout: function () {
        if (this.oldColor !== this.iphoneColor) {
            this.fillColor(this.iphoneColor);
            window.removeEventListener('resize', this.fillIphoneAgain.bind(this), false)
            window.addEventListener('resize', this.fillIphoneAgain.bind(this), false)
            this.oldColor = this.iphoneColor;
        }
        this.callParent(arguments);
        this.fillIphoneAgain();
    },
    onBeforeDestroy: function (field) {
        window.removeEventListener('resize', this.fillIphoneAgain.bind(this), false)
    },

    fillIphoneAgain: function (timeout) {
        setTimeout(function () {
            this.fillColor(this.iphoneColor)
        }.bind(this), 250);
    },

    fillColor: function (color) {
        var iphoneImg = document.querySelector('.theme-image-iphone__object');
        if (iphoneImg) {
            try {
                Ext.waitFor(function () {
                    return iphoneImg.contentDocument && iphoneImg.contentDocument.getElementsByClassName('theme-color').length > 0;
                }, function () {
                    var needChangeColor = iphoneImg.contentDocument.getElementsByClassName('theme-color');
                    for (var i = 0; i < needChangeColor.length; i++) {
                        needChangeColor[i].setAttribute('fill', color);
                    }
                }, this);
            } catch (e) {
                console.log(e.stack);
            }
        }
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
                margin: '15 0 0 0',
                height: 420,
                layout: {
                    type: 'hbox',
                    align: 'top'
                },
                listeners: {
                    'click': {
                        fn: function (event, element) {
                            var el = Ext.get(element);

                            if (el && el.hasCls('form-img-preview-small')) {
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
                            xtype: 'image'
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
