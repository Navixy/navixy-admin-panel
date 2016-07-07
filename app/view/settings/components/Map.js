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

    fieldsMap: ['map_type', 'map_zoom', 'map_location_lat', 'map_location_lng'],

    initComponent: function () {
        this.mapsStore = Ext.getStore('MapTypes');
        this.mapsStore.setAllowedMaps(this.record.get('allowed_maps') || []);
        this.items = this.getItems();

        this.callParent(arguments);
    },

    getMapsList: function () {

        var result = [],
            alertGoogleMapsTypes = ['roadmap', 'hybrid', 'satellite'];

        this.mapsStore.each(function (mapRecord) {
            var name = mapRecord.get('name');

            if (Ext.Array.contains(alertGoogleMapsTypes, mapRecord.get('type'))) {
                name += Ext.getHintSymbol(_l.get('settings.edit_form.google_maps_alert'));
            }

            result.push({
                boxLabel: name,
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
            }, {
                name: 'google_client_id',
                fieldLabel: Ext.String.format(_l.get('settings.fields.google_client_id'), 'https://developers.google.com/maps/documentation/javascript/get-api-key'),
                minLength: 2,
                maxLength: 100
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
                valueField: 'type',
                disabled: true,
                shadowField: true,
                cls: 'shadow-disabled'
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
                        width: 175,
                        disabled: true,
                        shadowField: true,
                        cls: 'shadow-disabled'
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
                        flex: 2,
                        disabled: true,
                        shadowField: true,
                        cls: 'shadow-disabled'
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
                        flex: 1,
                        disabled: true,
                        shadowField: true,
                        cls: 'shadow-disabled'
                    }
                ]
            },

            {
                xtype: 'button',
                ui: 'default',
                iconCls: 'edit-button',
                padding: 3,
                width: 175,
                margin: '20 0 0 10',
                text: _l.get('settings.edit_form.map_edit_btn'),
                scope: this,
                handler: this.fireEditMap
            }
        ];
    },

    fireEditMap: function () {
        var values = {},
            field;

        Ext.Array.each(this.fieldsMap, function (name) {
            field = this.down("[name=" + name + "]");
            values[name] = field.getValue();
        }, this);

        this.fireEvent('map-edit', this, this.record, values)
    },

    updateSettingsFromMap: function (settings) {
        var field;

        Ext.Array.each(this.fieldsMap, function (value, key) {
            field = this.down("[name=" + value + "]");

            if (field && !Ext.isEmpty(settings[value])) {
                field.suspendEvents(false);
                field.setValue(settings[value]);
                field.resumeEvents();
            }
        }, this);
    }
});