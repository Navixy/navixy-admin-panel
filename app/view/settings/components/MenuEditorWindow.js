/**
 * @class NavixyPanel.view.settings.MenuEditorWindow
 * @extends NavixyPanel.view.components.AbstractWindowSelect
 */
Ext.define('NavixyPanel.view.settings.components.MenuEditorWindow', {
  extend: 'NavixyPanel.view.components.AbstractWindowSelect',
  alias: 'widget.menueditorwindow',
  cls: 'menu-editor-window',
  closeAction: 'destroy',
  maximized: true,
  minimizable: false,
  modal: false,

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
        flex: 1,
        html: html,
      },
    ];
  },

  getApplicationLink: function () {
    var PAGE_NAME = 'MenuEditor';
    var domain = Ext.getStore('Dealer').first().get('domain');
    var data = Ext.apply({
      company_url: domain,
      hash: Ext.API.authKey,
      page: PAGE_NAME,
    });
    var locale = Locale.Manager.getLocale();
    var link = new Ext.Template(Config.links.panelUrlTpl).apply(data);

    return !!domain && Ext.String.urlAppend(link, 'locale=' + locale);
  },

  afterRender: function () {
    this.callParent(arguments);

    var me = this,
      isIE = Ext.isIE || Ext.isIE11;

    window[isIE ? 'onhashchange' : 'onpopstate'] = function () {
      me.close();
    };
  },

  destroy: function () {
    window.onpopstate = null;
    window.onhashchange = null;

    this.callParent(arguments);
  }
});
