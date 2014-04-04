/**
 * @class NavixyPanel.view.widgets.LocaleCombo
 * @extends Ext.Base
 * Description
 */

Ext.define('NavixyPanel.view.widgets.LocaleCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.localecombo',

    labelAlign: 'top',

    queryMode: 'local',
    displayField: 'text',
    valueField: 'id',

    initComponent: function () {

        if (this.fieldLabel !== false) {
            this.fieldLabel = _l.auth.locale_title;
        }
        this.store = Locale.Manager.getAvailable();

        this.emptyText = Locale.Manager.getAvailable().findRecord('id', Locale.Manager.getLocaleId()).get('text');

        this.callParent(arguments);
    }
});
