/**
 * @class NavixyPanel.view.settings.components.MobileTheme
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.MobileTheme', {
    extend: 'Ext.Container',
    xtype: 'settings-mobile-theme',
    padding: '0 0 0 12',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'container'
    },

    record: null,

    initComponent: function () {
        this.items = this.getItems();

        this.callParent(arguments);
    },

    afterRender: function () {
        this.updateData();
        this.callParent(arguments);
    },

    updateData: function (record) {
        if (!Ext.isEmpty(record)) {
            this.record = record
        }
        if (this.record) {
            this.updateColors();
        }
    },

    updateColors: function () {
        var color = this.record.get('color');

        Ext.waitFor(
            function () {
                var ready = true;

                try {
                    this.iterateSvg(function (svg_embed) {
                        var doc = svg_embed.dom.getSVGDocument();
                        ready = ready && doc && doc.getElementsByClassName('theme_fill').length > 0;
                    }, this);
                } catch (e) {}

                return ready;

            }, function() {
                this.iterateSvg(function (svg_embed) {
                    var doc = svg_embed.dom.getSVGDocument(),
                        elements = doc.getElementsByClassName('theme_fill');

                    for (var i = 0; i < elements.length; i++)
                    {
                        elements[i].setAttribute("fill", "#" + color);
                    }
                }, this);
        }, this);
    },

    iterateSvg: function (callback, scope) {
        try {
            if (!Ext.isEmpty(callback)) {
                this.getEl().select('object.svg_template').each(callback, scope || this);
            }
        } catch (e) {}
    },

    getItems: function (pathTpl) {
        var result = [
                {
                    role: 'mobile-previews-container',
                    xtype: 'container',
                    cls: 'form-img-preview-phone-bg-holder',
                    margin: '17 0 0 0',
                    height: 460,
                    width: 203,
                    layout: {
                        type: 'hbox',
                        align: 'streach'
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: 430,
                            width: 203,
                            html : '<object data="images/themes/iphone.svg" width="100%" height="100%" alt="" class="svg_template"></object>',
                            cls: 'svg_template',
                            role: 'phone-picture'
                        }
                    ]
                },
                {
                    role: 'tablet-previews-container',
                    xtype: 'container',
                    cls: 'form-img-preview-tablet-bg-holder',
                    margin: '17 0 0 35',
                    height: 460,
                    width: 612,
                    layout: {
                        type: 'hbox',
                        align: 'streach'
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: 430,
                            width: 612,
                            html : '<object data="images/themes/ipad.svg" width="100%" height="100%" alt="" class="svg_template"></object>',
                            cls: 'svg_template',
                            role: 'tablet-picture'
                        }
                    ]
                }
            ];
        return result;
    }
});