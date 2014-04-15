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
    editable: false,

    store: 'TimeZones',

    displayField: 'description',
    valueField: 'zone_id',

    tpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '<div class="x-boundlist-item">{description} {[this.getOffsetStr(values.base_offset)]}</div>',
        '</tpl>',
        {
            getOffsetStr: function (offset) {
                var int_offset = parseInt(offset) || 0;
                return 'UTC' + (int_offset >= 0 ? "+" : '') + int_offset;
            }
        }
    ),

    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '{description:htmlEncode} {[this.getOffsetStr(values.base_offset)]}',
        '</tpl>',
        {
            getOffsetStr: function (offset) {
                var int_offset = parseInt(offset) || 0;
                return 'UTC' + (int_offset >= 0 ? "+" : '') + int_offset;
            }
        }
    ),


    initComponent: function () {
        if (this.store) {

            if (typeof this.store === 'string') {
                this.store = Ext.getStore(this.store);
            }

            this.callParent(arguments);
        }
    }
})
;
