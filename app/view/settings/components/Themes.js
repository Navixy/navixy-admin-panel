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

    initComponent: function () {
        this.title = _l.get('settings.themes.title');
        this.store = Ext.getStore('Themes');

        var customTheme = Config.customThemes && Config.customThemes[Ext.getStore('Dealer').first().getId()]

        if (customTheme) {
            this.store.add(customTheme)
        }
        
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
                    }
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
            margin: '10 0 0 0',
            width: 300,
            items: [
                {
                    xtype: 'settings-theme-field',
                    width: 260,
                    store: this.store,
                    name: 'color_theme',
                    listeners: {
                        select: this.onSelect,
                        scope: this
                    }
                },
                //{
                //    xtype: 'combobox',
                //    fieldLabel: '',
                //    editable: false,
                //    labelAlign: 'top',
                //    ui: 'light',
                //    width: 260,
                //    margin: '5 10',
                //
                //    store: this.store,
                //    queryMode: 'local',
                //    displayField: 'title',
                //    valueField: 'name',
                //    name: 'color_theme',
                //    listeners: {
                //        change: this.onSelect,
                //        scope: this
                //    }
                //},
                {
                //    xtype: 'button',
                //    iconCls: 'eye-button',
                //    text: _l.get('settings.themes.preview_btn'),
                //    ui: 'default',
                //    scale: 'medium',
                //    width: 260,
                //    margin: '5 10',
                //    role: 'preview-btn',
                //
                //    handler: this.previewLogin,
                //    scope: this
                //}, {
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
                    //height: 420,
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
            description = this.getDescriptionContainer(),
            button = this.getPreviewsButton(),
            record = this.getSelectedRecord();

        if (preview) {
            preview.removeAll(true);
            preview.add({
                xtype: 'settings-theme',
                padding: '5 0 20 10',
                record: this.getSelectedRecord()
            })
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