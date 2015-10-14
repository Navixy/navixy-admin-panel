/**
 * @class NavixyPanel.view.settings.components.Map
 * @extends Ext.Container
 * Description
 */

Ext.define('NavixyPanel.view.settings.components.Map', {
    extend: 'Ext.Container',
    xtype: 'settings-map',

    requires: ['NavixyPanel.view.settings.components.MapWindow'],

    record: null,

    initComponent: function () {
        this.mapsStore = Ext.getStore('MapTypes');
        this.mapsStore.setAllowedMaps(this.record.get('allowed_maps') || []);
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getMapsList: function () {

        var result = [];

        this.mapsStore.each(function (mapRecord) {
            result.push({
                boxLabel: mapRecord.get('name'),
                name: 'maps',
                inputValue: mapRecord.get('type'),
                role: mapRecord.get('free') ? 'map-free' : 'map-unfree'
            });
        }, this);

        return result;
    },

    getDefaultMapField: function () {
        return this.down('[name="map_type"]');
    },

    getUnFreeMaps: function () {

        return this.query('[role="map-unfree"]');
    },

    setFreeMaps: function () {
        var store = this.mapsStore,
            defMap = this.getDefaultMapField();

        store.filter('free', true);

        if (!store.findRecord('type', defMap.getValue())) {
            this.getDefaultMapField().setValue(store.first().get('type'))
        }

        Ext.iterate(this.getUnFreeMaps(), function (field) {
            field.hide();
        }, this);
    },

    unSetFreeMaps: function () {
        var store = this.mapsStore;

        store.removeFilter();

        Ext.iterate(this.getUnFreeMaps(), function (field) {
            field.show();
        }, this);
    },

    getItems: function () {
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_maps_title')
            },
            {
                xtype: 'checkboxgroup',
                role: 'map_types_select',
                fieldLabel: _l.get('settings.fields.maps_title') + Ext.getHintSymbol(_l.get('settings.edit_form.maps_hint')),
                allowBlank: false,
                columns: 1,
                vertical: true,
                margin: '0 0 50 10',
                ui: 'light',
                items: this.getMapsList()
            },
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_maps_defaults_title') + Ext.getHintSymbol(_l.get('settings.edit_form.maps_defaults_hint'))
            },
            {
                name: 'map_type',
                xtype: 'combobox',
                fieldLabel: _l.get('settings.fields.maps_default.type'),
                store: this.mapsStore,
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'type'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        name: 'map_location_lat',
                        fieldLabel: _l.get('settings.fields.maps_default.location_lat'),
                        xtype: 'textfield',
                        allowBlank: true,
                        vtype: 'numeric',
                        minLength: 0,
                        maxLength: 100,
                        maxValue: 180,
                        value: 0,
                        margin: '5 10 0 0',
                        labelAlign: 'top',
                        labelSeparator: '',
                        flex: 2
                    },
                    {
                        name: 'map_location_lng',
                        fieldLabel: _l.get('settings.fields.maps_default.location_lng'),
                        xtype: 'textfield',
                        allowBlank: true,
                        vtype: 'numeric',
                        minLength: 0,
                        maxLength: 100,
                        maxValue: 180,
                        value: 0,
                        margin: '5 10 0 0',
                        labelAlign: 'top',
                        labelSeparator: '',
                        flex: 2
                    },
                    {
                        name: 'map_zoom',
                        fieldLabel: _l.get('settings.fields.maps_default.zoom'),
                        xtype: 'numberfield',
                        allowBlank: true,
                        maxValue: 17,
                        margin: '5 0 0 0',
                        labelAlign: 'top',
                        labelSeparator: '',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'default',

                padding: 3,
                margin: '20 0 0 10',
                text: _l.get('settings.edit_form.map_edit_btn'),
                scope: this,
                handler: this.fireEditMap
            }
        ];
    },

    fireEditMap: function () {
        this.fireEvent('map-edit', this, this.record)
    },

    updateSettingsFromMap: function (settings) {
        var fieldsMap = ['map_type', 'map_zoom', 'map_location_lat', 'map_location_lng'],
            field;

        Ext.Array.each(fieldsMap, function(value, key) {
            field = this.down("[name=" + value + "]");

            if (field && !Ext.isEmpty(settings[value])) {
                field.suspendEvents(false);
                field.setValue(settings[value]);
                field.resumeEvents();
            }
        }, this);
    }
});