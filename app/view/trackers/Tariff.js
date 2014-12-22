/**
 * @class NavixyPanel.view.trackers.Tariff
 * @extends NavixyPanel.view.users.AbstractForm
 * Description
 */

Ext.define('NavixyPanel.view.trackers.Tariff', {
    extend: 'NavixyPanel.view.components.AbstractForm',
    requires: ['NavixyPanel.view.widgets.fields.TariffSelect'],
    alias: 'widget.trackertariff',

    getTitle: function () {

        var titleTpl = new Ext.XTemplate(
            _l.get('trackers.tariff_form.title'),
            ' #{id}: {label}'
        );
        return titleTpl.apply(this.getRecordData());
    },

    getSaveBtnTitle: function () {
        return _l.get('trackers.tariff_form.save_btn');
    },

    getClearBtnTitle: function () {
        return false;
    },

    getNWItems: function () {
        var me = this;

        return [
            {
                xtype: 'container',
                height: 20
            },
            {
                fieldLabel: _l.get('trackers.fields.label'),
                name: 'label',
                disabled: true
            },
            {
                fieldLabel: _l.get('trackers.fields.creation_date'),
                name: 'creation_date',
                disabled: true
            },
            {
                fieldLabel: _l.get('trackers.fields.model'),
                name: 'model',
                disabled: true
            },
            {
                fieldLabel: _l.get('trackers.fields.device_id'),
                name: 'device_id',
                disabled: true
            },
            {
                fieldLabel: _l.get('trackers.fields.phone_exp'),
                name: 'phone',
                disabled: true
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                fieldLabel: _l.get('trackers.fields.tariff'),
                name: 'tariff_id',
                xtype: 'tariffselect',
                deviceType: 'tracker',
                trackerRecord: this.record,
                validator: function(value) {
                    var currentTariffId = me.getRecordData().tariff_id
                    return currentTariffId === value
                        ? _l.get('trackers.tariff_form.tariff_invalid')
                        : true;
                }
            },
            {
                boxLabel: _l.get('trackers.tariff_form.repay'),
                name: 'repay',
                xtype: 'checkbox',
                labelWidth: 'auto',
                width: 'auto',
                margin: '0 0 0 180'
            },
            {
                boxLabel: _l.get('trackers.tariff_form.charge'),
                name: 'charge',
                xtype: 'checkbox',
                labelWidth: 'auto',
                width: 'auto',
                margin: '0 0 0 180',
                checked: true
            },
            {
                xtype: 'container',
                html: _l.get('trackers.tariff_form.charge_sup'),
                cls: 'block_sup',
                padding: '0 0 0 210'
            }
        ];
    }
});