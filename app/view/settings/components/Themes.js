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
    defaultTheme: 'metromorph',
    colorCodes: {
        orange_1: '#F44336',
        pink_1: '#E91E63',
        violet_1: '#9C27B0',
        violet_2: '#673AB7',
        blue_1: '#3F51B5',
        blue_2: '#1E96DC',
        blue_3: '#0097A7',
        green_1: '#009688',
        green_2: '#43A047',
        orange_2: '#FFA000',
        orange_3: '#E65100',
        grey_1: '#607D8B',
        green_3: '#97C33C',
        blue_4: '#29ACDF'
    },
    defaultColorName: 'blue_2',
    uniqueIphoneColor: false,
    initComponent: function () {
        this.title = _l.get('settings.themes.title');
        this.store = Ext.getStore('Themes');

        var customTheme = Config.customThemes && Config.customThemes[Ext.getStore('Dealer').first().getId()]
        if (customTheme) {
            this.store.add(customTheme)
        }
        this.currentIphoneColor = this.colorCodes[this.defaultColorName];
        var dealerStore = Ext.getStore('Dealer');
        var dealer = dealerStore && dealerStore.first();
        this.allowBranding = dealer && dealer.get('allow_branding');

        this.items = this.getItems();
        this.callParent(arguments);

        this.colorPicker = this.down('settings-themes-mobile-color-picker')
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
                disabled: !this.allowBranding,
                name: 'themes_container',
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
            }
        ]
    },

    getWItems: function () {

        return {
            layout: {
                type: 'vbox',
                align: 'streach'
            },
            width: 380,
            items: [
                {
                    xtype: 'blockheader',
                    html: _l.get('settings.themes.main_title'),
                    width: 360,
                    padding: '45 0 12 0',
                    margin: '0 0 25 0'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '',
                    editable: false,
                    labelAlign: 'top',
                    ui: 'light',
                    width: 270,
                    margin: '5 10',

                    store: this.store,
                    queryMode: 'local',
                    displayField: 'title',
                    valueField: 'name',
                    name: 'color_theme',
                    forceValue: !this.allowBranding ? this.defaultTheme : false,
                    listeners: {
                        change: this.onSelect,
                        scope: this
                    }
                },
                {
                    xtype: 'blockheader',
                    html: _l.get('settings.themes.mobile_app'),
                    width: 360,
                    padding: '40 0 12 0',
                    margin: '0 0 25 0'
                },
                {
                    xtype: 'settings-themes-mobile-color-picker',
                    margin: '0 0 0 2',
                    colorCodes: this.colorCodes,
                    activeColor: this.currentIphoneColor,
                    listeners: {
                        changeColor: function(color) {
                            this.currentIphoneColor = color;
                            this.onSelect();
                        }.bind(this)
                    }
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
                    xtype: 'blockheader',
                    html: _l.get('settings.themes.preview_title'),
                    width: '100%',
                    padding: '45 0 12 0',
                    margin: '0 0 25 0'
                },
                {
                    xtype: 'container',
                    height: 420,
                    margin: '0 0 0 -30px',
                    role: 'preview-container'
                }
            ]
        }

    },

    previewLogin: function () {
        var loginUrl = Ext.Nav.getLogin();

        if (loginUrl) {
            var win = window.open('', '_blank');
            win.location = [loginUrl, '?theme=', this.getValue()].join("");

        }
    },

    onSelect: function () {
        var preview = this.getPreviewsContainer(),
            button = this.getPreviewsButton(),
            record = this.getSelectedRecord();
        if (preview) {
            preview.removeAll(true);
            preview.add({
                xtype: 'settings-theme',
                padding: '5 0 20 0',
                record: record,
                iphoneColor: this.currentIphoneColor
            });
        }

        if (button) {
            button[record.get('login') ? 'show' : 'hide']();
        }
    },

    getPreviewsContainer: function () {
        return this.down('[role=preview-container]');
    },

    getPreviewsButton: function () {
        return this.down('[role=preview-btn]');
    },

    getField: function () {
        return this.down('[name=color_theme]');
    },

    getValue: function () {
        if (this.allowBranding) {
            return this.getField().getValue() || this.defaultTheme;
        }
        return this.defaultTheme;
    },

    getSelectedRecord: function () {
        return this.store.findRecord('name', this.getValue());
    },
    setCurrentIphoneColor: function (color) {
        if (!this.allowBranding) {
            color = this.defaultColorName;
        }
        var colorCode = this.colorCodes[color]
        if (!colorCode) {
            colorCode = this.colorCodes[this.defaultColorName];
            this.disablePhone();
            this.uniqueIphoneColor = color;
        }

        this.currentIphoneColor = colorCode;
        this.colorPicker.setActiveColor(colorCode);
        this.onSelect();
    },
    getColorName: function () {
        if (this.uniqueIphoneColor) {
            return this.uniqueIphoneColor;
        }
        var result = this.defaultColorName;
        Ext.iterate(this.colorCodes, function(key, value) {
            if (value === this.currentIphoneColor) {
                result = key;
            }
        }.bind(this))
        return result;
    },

    disablePhone: function () {
        this.colorPicker.disable();
        try {
            Ext.waitFor(function () {
                return document.getElementsByClassName('theme-image-iphone').length > 0;
            }, function () {
               this.down('[role="iphone-image"]').disable();
            }, this);
        } catch (e) {
            console.log(e.stack);
        }
    }
});
