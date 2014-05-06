/**
 * @class NavixyPanel.store.TariffDefaults
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.TariffDefaults', {
    extend: 'Ext.data.Store',
    storeId: 'TariffDefaults',

    fields: [
        {
            name: 'tariff_id',
            type: 'int'
        },
        {
            name: 'activation_bonus',
            type: 'int'
        },
        {
            name: 'free_days',
            type: 'int'
        },
        {
            name: 'id',
            type: 'string'
        }
    ],

    getDeviceDefaults: function (type) {
        var device = this.findRecord('id', type),
            tariff_id = device && device.get('tariff_id');

        return {
            tariff: tariff_id ? Ext.getStore('Tariffs').findRecord('id', tariff_id) : null,
            tariff_id: tariff_id || null,
            activation_bonus: device.activation_bonus || 0,
            free_days: device.free_days || 0
        };
    },

    getDeviceTypes: function () {
        var list = [];

        this.each(function (device) {

            list.push(Ext.apply(this.getDeviceDefaults(device.get('id')), {name: device.get('id')}));
        }, this);

        return list;
    },

    getDefaultTariffs: function (isRecord) {
        var list = {};

        Ext.iterate(this.getDeviceTypes(), function (device) {
            list[device.name] = isRecord ? device.tariff : device.tariff_id;
        }, this);

        return list;
    },

    isDefaultTariff: function (tariffId) {
        return  tariffId
            && !!this.findRecord('tariff_id', Ext.isNumber(tariffId) ? tariffId : tariffId.get('id') || null);
    }
});