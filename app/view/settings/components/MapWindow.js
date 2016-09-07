/**
 * @class NavixyPanel.view.components.AbstractWindowSelect
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.MapWindow', {
    extend: 'NavixyPanel.view.components.AbstractWindowSelect',
    requires: [
        'NavixyPanel.plugins.ComboGoogleFilter'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    height: '75%',
    width: 1250,
    margin: '0 0 0 -8',
    xtype: 'map-edit-window',

    mapWait: null,
    firstUpdate: false,
    formValues: null,
    record: null,

    prepareComboStore: function () {
        var allowed = this.record.get('maps'),
            store = Ext.getStore('MapTypes').getClone();

        store.clearFilter();
        store.filter([
            {
                filterFn: function(record) {
                    return Ext.Array.indexOf(allowed, record.get('type')) > -1;
                }
            }
        ]);

        return store;
    },

    getItems: function () {
        return [
            {
                xtype: 'panel',
                ui: 'light',
                bodyStyle: 'padding: 20px 20px 10px 20px; border-bottom: 1px solid #EEE',
                html: _l.get("settings.edit_form.map_window.header")
            },
            {
                xtype: 'form',
                layout: 'hbox',
                ui: 'light',
                bodyStyle: 'padding: 10px 20px 20px 20px',
                role: 'form',
                defaults: {
                    xtype: 'textfield',
                    labelAlign: 'top',
                    labelSeparator: '',

                    ui: 'light',
                    listeners: {
                        change: this.updateMap,
                        scope: this
                    }
                },
                items: [
                    {
                        name: 'map_type',
                        xtype: 'combobox',
                        fieldLabel: _l.get('settings.fields.maps_default.type'),
                        store: this.prepareComboStore(),
                        editable: false,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'type',
                        margin: '5 10 0 0',
                        flex: 4,
                        plugins: [
                            {
                                ptype: 'googlefilter',
                                disabled: !this.record.isEmptyGoogleClientId()
                            }
                        ]
                    },
                    {
                        name: 'map_location_lat',
                        fieldLabel: _l.get('settings.fields.maps_default.location_lat'),
                        vtype: 'numeric',
                        minLength: 0,
                        maxLength: 100,
                        maxValue: 180,
                        value: 0,
                        margin: '5 10 0 0',
                        flex: 2
                    },
                    {
                        name: 'map_location_lng',
                        fieldLabel: _l.get('settings.fields.maps_default.location_lng'),
                        vtype: 'numeric',
                        minLength: 0,
                        maxLength: 100,
                        maxValue: 180,
                        value: 0,
                        margin: '5 10 0 0',
                        flex: 2
                    },
                    {
                        name: 'map_zoom',
                        fieldLabel: _l.get('settings.fields.maps_default.zoom'),
                        xtype: 'numberfield',
                        allowBlank: true,
                        maxValue: 17,
                        margin: '5 0 0 0',
                        flex: 1
                    },
                    {
                        xtype: 'container',
                        flex: 4
                    }
                ]
            },
            {
                xtype: 'map',
                flex: 1
            }
        ];
    },

    getForm: function () {
        return this.down("form").getForm();
    },

    getMap: function () {
        return this.down("map");
    },

    updateMap: function () {
        if (!this.getMap().mapReady && !this.firstUpdate && !this.mapWait && (this.mapWait = true)) {
            this.getMap().on('mapready', this.setSettingsToMap, this, {single: true});
        } else {
            this.setSettingsToMap();
        }
    },

    setSettingsToMap: function () {
        this.mapWait = false;
        this.getMap().updateSettings(this.getForm().getValues());
    },

    applyMapListeners: function () {
        try {
            Ext.Map.on(this.getMap().getMap(), {
                'zoomchange': this.getSettingsFromMap,
                scope: this
            });
        } catch (e) {
            console.error(e);
        }
        this.getMap().on('centerchange', this.getSettingsFromMap, this);
    },

    afterRender: function () {
        this.callParent(arguments);

        this.firstUpdate = true;
        this.getForm().setValues(this.formValues);
        this.waitMapInit(function () {
            this.updateMap();
            this.applyMapListeners();
        });
    },

    waitMapInit: function (callback, scope) {
        var me = this;
        setTimeout(function () {
            me.firstUpdate = false;
            callback.call(scope || me);
        }, 100);
    },

    getSettingsFromMap: function () {
        var map = this.getMap();

        this.getForm().setValues({
            'map_zoom': map.getZoom(),
            'map_location_lat': map.getMarkerPosition().lat.toFixed(6),
            'map_location_lng': map.getMarkerPosition().lng.toFixed(6)
        });
    },


    getBottomBar: function () {
        return [
            '->',
            {
                text: this.texts.saveBtn,
                scale: 'medium',
                formBind: true,
                margin: '0 5',
                handler: Ext.bind(this.sendForm, this)
            },
            {
                text: _l.get('back_form_btn'),
                scale: 'medium',
                ui: 'gray',
                margin: '0 5',
                handler: Ext.bind(this.close, this)
            }
        ];
    },

    sendForm: function () {
        var form = this.getForm();

        if (form.isValid()) {
            this.fireEvent('formsubmit', this, form.getValues(), this.record);
            if (this.closeOnSelect) {
                this.close();
            }
        }
    },

    getTexts: function () {
        var lp = _l.get("settings.edit_form.map_window");
        return {
            windowTitle: lp.get("title"),
            header: lp.get("header"),
            saveBtn: lp.get("save_btn")
        };
    }
});
