/**
 * @class NavixyPanel.view.settings.MenuEditorWindow
 * @extends NavixyPanel.view.components.AbstractWindowSelect
 */
Ext.define('NavixyPanel.view.settings.components.MenuEditorWindow', {
  extend: 'NavixyPanel.view.components.AbstractWindowSelect',
  alias: 'widget.menueditorwindow',
  xtype: 'menu-editor-window',
  cls: 'menu-editor-window',
  closeAction: 'destroy',
  hash: Ext.API.authKey,
  maximized: true,
  minimizable: false,
  modal: true,
  layout: 'fit',

  getTexts: function () {
    return {
      windowTitle: _l.get('settings.edit_form.menu_editor'),
    };
  },

  getItems: function () {
    var appLink = this.getApplicationLink();
    var html = appLink ? '<iframe src="' + appLink + '"></iframe>' : '';

    return [
      {
        xtype: 'component',
        layout: 'fit',
        html: html,
      },
    ];
  },

  getApplicationLink: function () {
    var PAGE_NAME = 'MenuEditor';
    var domain = Ext.getStore('Dealer').first().get('domain');
    var data = Ext.apply({
      company_url: domain,
      hash: this.hash,
      page: PAGE_NAME,
    });
    var locale = Locale.Manager.getLocale();
    var link = new Ext.Template(Config.links.panelUrlTpl).apply(data);

    return !!domain && Ext.String.urlAppend(link, 'locale=' + locale);
  },
});
