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
            result = [],
            googleMapsTypes = this.googleMapsTypes;

        this.mapsStore.each(function (mapRecord) {
            var name = mapRecord.get('name'),
                disabled = false;

            if (Ext.Array.contains(googleMapsTypes, mapRecord.get('type'))) {
                disabled = notPremium;

                if (disabled) {
                    name += [' <span class="checkbox-invalid-tip">', _l.get('premium_gps_warning_tip'),
                             '</span>'].join("");
                }

                name += Ext.getHintSymbol(_l.get('settings.edit_form.google_maps_alert') + (disabled ? _l.get('settings.fields.domain_google_key_details') : ""));
            }

            result.push({
                boxLabel: name,
                name: 'maps',
                cls: 'map-type-checkbox',
                disabled: disabled || !!mapRecord.get('free'),
                inputValue: !disabled && mapRecord.get('type'),
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

        if (isPaasDomain && !defaultMapRecord.get('free')) {
            defaultMapField.setValue(this.mapsStore.findRecord('free', true));
        }

    },

    getItems: function () {
        if (!Config.google_key) {
            Config.google_key = {
                allow: false,
                get_key_link: _l.get('settings.fields.get_key_link')
            };
        }

        var isNavixy = Ext.isNavixy(),
            googleKeyLink = isNavixy ? '<a href="' + _l.get('settings.fields.domain_google_key_link') + '" target="_blank">' + _l.get('settings.fields.domain_google_key_help') + '</a>' : '',
            google_client_id_link = isNavixy ? Ext.String.format(_l.get('settings.fields.google_client_id_link'), Config.google_key.get_key_link) : '',
            premium_gis_link = isNavixy ? Ext.String.format(_l.get('settings.fields.premium_gis_link'), Config.google_key.get_key_link) : '';

        return [
            {
                xtype: 'blockheader',
                html: _l.get('settings.edit_form.service_maps_title')
            },
            {
                xtype: 'checkboxgroup',
                role: 'map_types_select',
                fieldLabel: _l.get('settings.fields.maps_title') + Ext.getHintSymbol(_l.get('settings.edit_form.maps_hint')) + googleKeyLink,
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
            }, Config.google_key.allow ? undefined : {
                xtype: 'component',
                html: Ext.String.format(_l.get('settings.fields.premium_gis'), premium_gis_link)
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

        this.fireEvent('map-edit', this, this.getUpdatedRecord(), values);
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

    getUpdatedRecord: function () {
        var checkboxgroup = this.down('component[role="map_types_select"]'),
            mapsObject = checkboxgroup && checkboxgroup.getValue();

        if (mapsObject && !Ext.isEmpty(mapsObject.maps)) {
            var maps = Ext.isArray(mapsObject.maps) ? mapsObject.maps : [mapsObject.maps];
            this.record.set('maps', maps);
        }

        return this.record;
    }
});