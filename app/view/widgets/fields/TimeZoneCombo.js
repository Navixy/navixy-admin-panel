/**
 * @class User.view.form.TimeZoneCombo
 * @extends Ext.form.field.ComboBox
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.TimeZoneCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.timezoneselect',

    cls: '',

    applyValueMethod: 'select',
    queryMode: 'local',

    store: 'TimeZones',
    displayField: 'description',
    valueField: 'zone_id',
    forceSelection: true,
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="x-boundlist-item">{description} {[this.getOffsetStr(values.base_offset, values.dst_offset)]}</div>',
        '</tpl>',
        {
            getOffsetStr: function (offset, dst) {
                var int_offset = parseFloat(offset) || 0,
                    time = ("" + int_offset).split("."),
                    minutes = time[1] && time[1] / 100 * 60,
                    date_str = time[0] + (minutes ? ":" + minutes + (minutes < 10 ? "0" : "") : "");

                return 'UTC' + (int_offset >= 0 ? "+" : '') + date_str + (dst ? ' (DST+1)' : '');
            }
        }
    ),

    displayTpl: new Ext.XTemplate(
        '<tpl for=".">',
        '{description} {[this.getOffsetStr(values.base_offset, values.dst_offset)]}',
        '</tpl>',
        {
            getOffsetStr: function (offset, dst) {
                var int_offset = parseFloat(offset) || 0,
                    time = ("" + int_offset).split("."),
                    minutes = time[1] && time[1] / 100 * 60,
                    date_str = time[0] + (minutes ? ":" + minutes + (minutes < 10 ? "0" : "") : "");

                return 'UTC' + (int_offset >= 0 ? "+" : '') + date_str + (dst ? ' (DST+1)' : '');
            }
        }
    ),

    initComponent: function () {
        if (this.store) {

            if (typeof this.store === 'string') {
                this.store = Ext.getStore(this.store);
            }
            this.value = Ext.getStore('Dealer').first().get('default_user_time_zone');
            this.callParent(arguments);
        }
    }
})
;
