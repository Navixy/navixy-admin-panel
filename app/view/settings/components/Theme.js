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
            window.addEventListener('resize', function () {
                setTimeout(function () {
                    this.fillColor(this.iphoneColor)
                }.bind(this), 250);
            }.bind(this))
            this.oldColor = this.iphoneColor;
        }
        this.callParent(arguments);
    },

    fillColor: function (color) {
        var iphoneImg = document.querySelector('.theme-image-iphone__object');
        if (iphoneImg) {
            try {
                Ext.waitFor(function () {
                    return iphoneImg.contentDocument.getElementsByClassName('theme-color').length > 0;
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
            default_src = previews && previews.length && Ext.String.format(tpl, themeName, previews.shift()),
            result = default_src ? {
                role: 'previews-container',
                xtype: 'container',
                cls: 'test-test',
                layout: {
                    type: 'hbox',
                    align: 'top'
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
                        xtype: 'component',
                        width: 195,
                        cls: 'theme-image-iphone',
                        html: '<object type="image/svg+xml" data="images/themes/iphone.svg" class="theme-image-iphone__object" />'
                    }
                ]
            }
                : null;

        return result;
    }
});
