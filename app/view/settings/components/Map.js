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
    googleMapsTypes: ['roadmap', 'hybrid', 'satellite'],
    initComponent: function () {
        this.mapsStore = Ext.getStore('MapTypes');
        this.mapsStore.setAllowedMaps(this.record.get('allowed_maps') || []);
        this.items = this.getItems();
        this.callParent(arguments);
    },

    getMapsList: function () {
        var notPremium = !Ext.getStore('Dealer').isPremiumGis(),
            googleMapsAlert = _l.get('settings.edit_form').get(Ext.isNavixy() ? 'google_maps_alert' : 'paas_google_maps_alert'),
            result = [],
            googleMapsTypes = this.googleMapsTypes;

        this.mapsStore.each(function (mapRecord) {
            var name = mapRecord.get('name'),
                disabled = false;

            if (Ext.Array.contains(googleMapsTypes, mapRecord.get('type'))) {
                disabled = notPremium;

                if (disabled) {
                    name += [' <span class="checkbox-invalid-tip">', _l.get('premium_gps_caution'),
                             '</span>'].join("");
                }

                name += Ext.getHintSymbol(googleMapsAlert + (disabled ? _l.get('settings.fields.domain_google_key_details') : ""));
            }
            result.push({
                boxLabel: name,
                name: 'maps',
                cls: 'map-type-checkbox',
                disabled: disabled || !mapRecord.get('free'),
                inputValue: mapRecord.get('type'),
                shadowField: true
            });
        }, this);

        return result;
    },

    applyPaasMapsAvailability: function (isPaasDomain) {
        var me = this,
            isPremiumGis = Ext.getStore('Dealer').isPremiumGis();

        this.query('checkboxgroup[role=map_types_select] checkbox').forEach(function (checkbox) {
            var mapType = checkbox.inputValue,
                mapRecord = me.mapsStore.getById(mapType),
                isPaidMapDisabledForPaas = mapRecord && !mapRecord.get('free') && isPaasDomain,

                needToDisable = (Ext.Array.contains(me.googleMapsTypes, mapType) && !isPremiumGis && !isPaasDomain) ||
                    isPaidMapDisabledForPaas

            checkbox.setDisabled(needToDisable);

            if (checkbox.getValue() && isPaidMapDisabledForPaas) {
                checkbox.setValue(false);
            }

            var paasDisabledMapMsg = Ext.String.format(_l.get('settings.fields.paas_maps_is_unavailable'),
                Ext.Array.from(Config.paas_domain).map(function (domain) {
                    return '*.' + domain;
                }).join(', ')
            );

            if (checkbox.rendered) {
                checkbox.getEl().set({
                    'data-qtip': isPaidMapDisabledForPaas ? paasDisabledMapMsg : ''
                });
            } else {
                checkbox.labelAttrTpl = 'data-qtip="' + ( isPaidMapDisabledForPaas ? paasDisabledMapMsg : '') + '"';
            }
        });

        var defaultMapField = this.down('combobox[name="map_type"]'),
            defaultMapRecord = this.mapsStore.getById(defaultMapField.getValue());

        if (isPaasDomain && defaultMapRecord && !defaultMapRecord.get('free')) {
            defaultMapField.setValue(this.mapsStore.findRecord('free', true).get('type'));
        }

    },

    fillCheckboxesFromRecord: function (name, checkboxes) {
        var result = [];
        var value = this.record.get(name);
        for (var i = 0; i < checkboxes.length; i++) {
            result.push({
                name: name,
                boxLabel: checkboxes[i][1],
                inputValue: checkboxes[i][0],
                shadowField: true
            })
        }
        return result;
    },

    getLBSValue: function () {
        return this.record.get('lbs_providers')[0] || 'disabled';
    },

    getItems: function () {
        if (!Config.google_key) {
            Config.google_key = {
                allow: false,
                get_key_link: _l.get('settings.fields.get_key_link')
            };
        }

        var isNavixy = Ext.isNavixy(),
            mapHint = _l.get('settings.edit_form').get(isNavixy ? 'maps_hint': 'paas_maps_hint'),
            googleKeyLink = isNavixy ? '<a href="' + _l.get('settings.fields.domain_google_key_link') + '" target="_blank">' + _l.get('settings.fields.domain_google_key_help') + '</a>' : '',
            google_client_id_link = isNavixy ? Ext.String.format(_l.get('settings.fields.google_client_id_link'), Config.google_key.get_key_link) : '',
            premium_gis_link = isNavixy ? Ext.String.format(_l.get('settings.fields.premium_gis_link'), Config.google_key.get_key_link) : '';

        var isPremiumGis = Ext.getStore('Dealer').getGisPackage() === 'premium';
        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_maps_title')
            },
            {
                xtype: 'checkboxgroup',
                role: 'map_types_select',
                fieldLabel: _l.get('settings.fields.maps_title') + Ext.getHintSymbol(mapHint) + googleKeyLink,
                allowBlank: false,
                columns: 1,
                vertical: true,
                margin: '0 0 50 10',
                ui: 'light',
                items: this.getMapsList(),
                listeners: {
                    validitychange: function (cmp, isValid) {
                        var btn = this.down('[role="map-edit-button"]');
                        if (btn) {
                            btn.setDisabled(!isValid);
                        }
                    },
                    scope: this
                }
            }, Config.google_key.allow ? {
                name: 'google_client_id',
                fieldLabel: Ext.String.format(_l.get('settings.fields.google_client_id'), google_client_id_link),
                minLength: 2,
                maxLength: 100
            } : {
                xtype: 'hiddefield',
                name: 'google_client_id'
            }, isPremiumGis ? undefined : {
                xtype: 'component',
                html: Ext.String.format(_l.get('settings.fields').get(isNavixy ? 'premium_gis' : 'paas_premium_gis'), premium_gis_link)
            },
            Util.navixyPermissions('manage', 'geocoder') ? {
                xtype: 'checkboxgroup',
                name: 'geocoders',
                role: 'geocoder_select',
                fieldLabel: _l.get('settings.fields.geocoder'),
                allowBlank: true,
                columns: 1,
                vertical: true,
                margin: '0 0 50 10',
                items: this.fillCheckboxesFromRecord('geocoders', [
                    ['google', 'Google'],
                    ['yandex', 'Yandex'],
                    ['progorod', 'Progorod'],
                    ['osm', 'OpenStreetMap'],
                    ['locationiq', 'LocationIQ']
                ]),
                listeners: {
                    change: this.onGisFieldsChange,
                    scope: this
                }
            } : undefined,
            Util.navixyPermissions('manage', 'route_provider') ? {
                xtype: 'checkboxgroup',
                name: 'route_providers',
                role: 'route_provider_select',
                fieldLabel: _l.get('settings.fields.route_provider'),
                allowBlank: true,
                columns: 1,
                vertical: true,
                margin: '0 0 50 10',
                items: this.fillCheckboxesFromRecord('route_providers', [
                    ['google', 'Google'],
                    ['osrm', 'OSRM'],
                    ['progorod', 'Progorod']
                ]),
                listeners: {
                    change: this.onGisFieldsChange,
                    scope: this
                }
            } : undefined,
            Util.navixyPermissions('manage', 'lbs') ? {
                xtype: 'combobox',
                role: 'lbs_select',
                width: 300,
                fieldLabel: _l.get('settings.fields.geolocation'),
                editable: false,
                queryMode: 'local',
                margin: '0 0 50 10',
                displayField: 'name',
                valueField: 'type',
                value: this.getLBSValue(),
                store: Ext.create('Ext.data.Store', {
                    fields: ['type', 'name'],
                    data: [
                        {
                            type: 'disabled',
                            name: '—'
                        },
                        {
                            type: 'google',
                            name: 'Google'
                        },
                        {
                            type: 'mozilla',
                            name: 'Mozilla location services'
                        },
                        {
                            type: 'yandex',
                            name: 'Yandex'
                        }
                    ],
                }),
                listeners: {
                    change: this.onGisFieldsChange,
                    scope: this
                }
            } : undefined,
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
                readOnly: true,
                shadowField: true,
                cls: 'shadow-disabled x-item-disabled',
                plugins: [
                    {
                        ptype: 'googlefilter',
                        disabled: !this.record.isEmptyGoogleClientId()
                    }
                ]
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
                role: 'map-edit-button',
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

        this.updatedRecord(this.getRecordChanges());
        this.fireEvent('map-edit', this, this.record, values);
    },

    updateSettingsFromMap: function (settings) {
        var field;

        Ext.Array.each(this.fieldsMap, function (value, key) {
            field = this.down("[name=" + value + "]");

            if (field && !Ext.isEmpty(settings[value])) {
                //field.suspendEvents(false);
                field.setValue(settings[value]);
                //field.resumeEvents();
            }
        }, this);
    },

    getRecordChanges: function () {
        var changesSpec = [
            { field: 'map_types_select', getter: 'maps', recordField: 'maps' },
            { field: 'geocoder_select', getter: 'geocoders', recordField: 'geocoders' },
            { field: 'route_provider_select', getter: 'route_providers', recordField: 'route_providers' },
            { field: 'lbs_select', getter: null, recordField: 'lbs_providers' }
        ]
        var changes = []
        Ext.Array.each(changesSpec, function (changeInfo) {
            var field = this.down('component[role="' + changeInfo.field + '"]'),
                value = field && field.getValue();

            if (value && changeInfo.getter) {
                value = value[changeInfo.getter]
            }
            value = Ext.isArray(value) ? value : [value];

            if (JSON.stringify(this.record.get(changeInfo.recordField)) !== JSON.stringify(value)) {
                changes.push({ field: changeInfo.recordField, value: value})
            }
        }, this);

        return changes
    },

    updatedRecord: function (changes) {
        Ext.Array.each(changes, function (changeInfo) {
            this.record.set(changeInfo.field, changeInfo.value);
        }, this);
        return this.record;
    },

    onGisFieldsChange: function () {
        this.updatedRecord(this.getRecordChanges())
        Ext.getFirst('settingsedit').renderGisFields()
    }
});
