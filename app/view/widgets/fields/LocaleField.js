/**
 * @class NavixyPanel.view.widgets.LocaleField
 * @extends NavixyPanel.view.widgets.fields.LocaleCombo
 * Description
 */

Ext.define('NavixyPanel.view.widgets.fields.LocaleField', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.localefield',

    queryMode: 'local',
    displayField: 'text',
    valueField: 'id',

    editable: false,

    initComponent: function () {
        this.store = Locale.Manager.getAvailableForUI();
        this.value = Ext.getStore('Dealer').first().get('locale');
        this.callParent(arguments);
    }
});
