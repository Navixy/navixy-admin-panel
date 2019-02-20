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
    initComponent: function () {
        this.title = _l.get('settings.themes.title');
        this.store = Ext.getStore('Themes');

        var customTheme = Config.customThemes && Config.customThemes[Ext.getStore('Dealer').first().getId()]

        if (customTheme) {
            this.store.add(customTheme)
        }
        this.currentIphoneColor = this.colorCodes[this.defaultColorName];
        this.items = this.getItems();
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
            width: 320,
            items: [
                {
                    xtype: 'blockheader',
                    html: _l.get('settings.themes.main_title'),
                    width: 300,
                    padding: '30 0 10 0'
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
                    listeners: {
                        change: this.onSelect,
                        scope: this
                    }
                },
                {
                    xtype: 'blockheader',
                    html: _l.get('settings.themes.mobile_app'),
                    width: 300,
                    padding: '30 0 10 0'
                },
                {
                    xtype: 'settings-themes-mobile-color-picker',
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
                    padding: '30 0 10 0'
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
                record: this.getSelectedRecord(),
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
        return this.getField().getValue() || this.defaultTheme;
    },

    getSelectedRecord: function () {
        return this.store.findRecord('name', this.getValue());
    },
    setCurrentIphoneColor: function (color) {
        var colorCode = this.colorCodes[color]
        this.currentIphoneColor = colorCode;
        this.down('settings-themes-mobile-color-picker').setActiveColor(colorCode);
        this.onSelect();
    },
    getColorName: function () {
        var result = this.defaultColorName;
        Ext.iterate(this.colorCodes, function(key, value) {
            if (value === this.currentIphoneColor) {
                result = key;
            }
        }.bind(this))
        return result;
    }
});
