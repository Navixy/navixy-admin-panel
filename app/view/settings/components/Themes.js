/**
 * @class NavixyPanel.view.settings.components.Themes
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.Themes', {
    extend: 'Ext.Container',
    xtype: 'settings-themes',
    padding: '40 40 0 45',

    record: null,
    editable: true,
    brandingWeb: true,
    brandingMobile: true,
    defaultTheme: 'metromorph',

    initComponent: function () {
        this.title = _l.get('settings.themes.title');
        this.store = Ext.getStore('Themes');
        this.mobile_store = Ext.getStore('MobileThemes');

        var customTheme = Config.customThemes && Config.customThemes[Ext.getStore('Dealer').first().getId()];

        if (customTheme) {
            this.store.add(customTheme)
        }

        this.items = this.getItems();

        // scroll jumps on update layout fix
        this.on({
            afterlayout: {
                fn: function () {
                    this.height = this.getHeight();
                },
                single: true,
                scope: this
            }
        });

        this.callParent(arguments);
    },

    getItems: function () {

        return [
            {
                xtype: 'component',
                cls: 'block_hint',
                html: _l.get('settings.themes.main_info')
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'streach'
                },
                defaults: {
                    xtype: 'container'
                },
                items: [
                    {
                        xtype: 'blockheader',
                        html: _l.get('settings.themes.web_title'),
                        width: "100%",
                        padding: '30 0 10 0'
                    },
                    {
                        layout: {
                            type: 'hbox',
                            align: 'streach'
                        },
                        defaults: {
                            xtype: 'container'
                        },
                        items: [
                            this.getWItems(),
                            this.getEItems()
                        ]
                    },
                    {
                        xtype: 'blockheader',
                        html: _l.get('settings.themes.mobile_title'),
                        width: "100%",
                        padding: '30 0 10 0'
                    },
                    {
                        layout: {
                            type: 'hbox',
                            align: 'streach'
                        },
                        defaults: {
                            xtype: 'container'
                        },
                        items: [
                            this.getAWItems(),
                            this.getAEItems()
                        ]
                    }
                ]
            }
        ]
    },

    getAWItems: function () {

        return {
            layout: {
                type: 'vbox',
                align: 'streach'
            },
            margin: '10 0 0 0',
            width: 300,
            items: [
                {
                    xtype: 'settings-mobile-theme-field',
                    width: 300,
                    store: this.mobile_store,
                    name: 'app_color_theme',
                    disabled: !this.brandingMobile,
                    listeners: {
                        select: this.onMobileSelect,
                        scope: this
                    }
                }
            ]
        }
    },

    getAEItems: function () {

        return {
            layout: {
                type: 'vbox',
                align: 'streach'
            },
            flex: 1,

            items: [
                {
                    xtype: 'settings-mobile-theme',
                    height: 460,
                    disabled: !this.brandingMobile
                }
            ]
        }

    },

    getWItems: function () {

        return {
            layout: {
                type: 'vbox',
                align: 'streach'
            },
            margin: '10 0 0 0',
            width: 300,
            items: [
                {
                    xtype: 'settings-theme-field',
                    width: 260,
                    store: this.store,
                    name: 'color_theme',
                    disabled: !this.brandingWeb,
                    listeners: {
                        select: this.onSelect,
                        scope: this
                    }
                },
                {
                    xtype: 'component',
                    cls: 'block_hint',
                    margin: '15 10 5',
                    width: 260,

                    hidden: true,
                    role: 'theme-description'
                }
            ]
        }
    },

    getEItems: function () {

        return {
            layout: {
                type: 'vbox',
                align: 'streach'
            },
            flex: 1,

            items: [
                {
                    xtype: 'container',
                    height: 460,
                    disabled: !this.brandingWeb,
                    role: 'preview-container'
                }
            ]
        }

    },

    onMobileSelect: function () {
        var preview = this.getMobilePreviewsContainer(),
            record = this.getMobileSelectedRecord();

        preview.updateData(record);
    },

    onSelect: function () {
        var preview = this.getPreviewsContainer(),
            description = this.getDescriptionContainer(),
            button = this.getPreviewsButton(),
            record = this.getSelectedRecord();

        if (preview) {
            preview.insert(0, {
                xtype: 'settings-theme',
                padding: '5 0 20 12',
                record: this.getSelectedRecord(),
                // image blinking fix
                hidden: true,
                listeners: {
                    render: {
                        fn: function () {
                            this.show();
                            if (preview.items.length > 1) {
                                preview.remove(preview.items.last(), true);
                            }
                        },
                        single: true,
                        delay: 100
                    }
                }
            });
        }

        if (description && record.get('description')) {
            description.update(record.get('description'));
            description.show()
        } else {
            description.hide();
        }

        if (button) {
            button[record.get('login') ? 'show' : 'hide']();
        }
    },

    getPreviewsContainer: function () {
        return this.down('[role=preview-container]');
    },

    getMobilePreviewsContainer: function () {
        return this.down('settings-mobile-theme');
    },

    getMobileSelectedRecord: function () {
        return this.mobile_store.findRecord('name', this.getMobileValue());
    },

    getMobileValue: function () {
        return this.getMobileField().getValue() || this.defaultTheme;
    },

    getMobileField: function () {
        return this.down('settings-mobile-theme-field').down('[name=app_color_theme]');
    },

    getPreviewsButton: function () {
        return this.down('[role=preview-btn]');
    },

    getDescriptionContainer: function () {
        return this.down('[role=theme-description]');
    },

    getField: function () {
        return this.down('settings-theme-field').down('[name=color_theme]');
    },

    getValue: function () {
        return this.getField().getValue() || this.defaultTheme;
    },

    getSelectedRecord: function () {
        return this.store.findRecord('name', this.getValue());
    }
});
