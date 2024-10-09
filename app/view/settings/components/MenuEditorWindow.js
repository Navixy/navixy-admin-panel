/**
 * @class NavixyPanel.view.settings.MenuEditorWindow
 * @extends NavixyPanel.view.components.AbstractWindowSelect
 */
Ext.define('NavixyPanel.view.settings.components.MenuEditorWindow', {
  extend: 'NavixyPanel.view.components.AbstractWindowSelect',
  alias: 'widget.menueditorwindow',
  cls: 'menu-editor-window',
  closeAction: 'destroy',
  height: '100%',
  width: '100%',
  maximized: true,
  minimizable: false,
  fixed: true,
  modal: false,
  hasChanges: false,
  margin: '0 0 0 0',

  initComponent: function () {
    this.addListeners();
    this.callParent(arguments);
  },

  getTexts: function () {
    return {
      windowTitle: _l.get('settings.edit_form.menu_editor'),
    };
  },

  getIframeElement: function () {
    var el = Ext.getElementById('menu-editor');

    return el ? el : null;
  },

  getItems: function () {
    var appLink = this.getApplicationLink();
    var html = appLink ? '<iframe id="menu-editor" src="' + appLink + '"></iframe>' : '';

    return [
      {
        xtype: 'component',
        flex: 1,
        html: html,
      },
    ];
  },

  getApplicationLink: function () {
    var appLink = Config.links.panelUrlTpl || './new-panel/#/{page}?panel_session_key={hash}&showSidebar=false'
    var PAGE_NAME = 'menu-editor';
    var domain = Ext.getStore('Dealer').first().get('domain');
    var data = Ext.apply({
      hash: Ext.API.authKey,
      page: PAGE_NAME,
    });
    var locale = Locale.Manager.getLocale();
    var link = new Ext.Template(appLink).apply(data);

    return !!domain && Ext.String.urlAppend(link, 'locale=' + locale);
  },

  afterRender: function () {
    var me = this,
      isIE = Ext.isIE || Ext.isIE11;

    window[isIE ? 'onhashchange' : 'onpopstate'] = function () {
      me.close();
    };

    window.onmessage = function (messageEvent) {
      var data = JSON.parse(messageEvent.data);

      me.hasChanges = data.hasChanges;

      if (data.hasChanges) {
        window.onbeforeunload = function (unloadEvent) {
          unloadEvent.returnValue = '';
          return '';
        };

        me.on('beforeclose', me.onBeforeClose, me);
      } else {
        window.onbeforeunload = null;
        me.removeListener('beforeclose', me.onBeforeClose, me);
      }
    };

    this.callParent(arguments);
  },

  destroy: function () {
    window.onpopstate = null;
    window.onhashchange = null;
    window.onbeforeunload = null;
    window.onmessage = null;

    this.callParent(arguments);
  },

  onBeforeClose: function () {
    var me = this;

    if (!me.hasChanges) {
      return true;
    }

    var menuEditorIFrame = this.getIframeElement();

    menuEditorIFrame.contentWindow.postMessage(JSON.stringify({ showDialog: true }), '*');

    window.onmessage = function (messageEvent) {
      var data = JSON.parse(messageEvent.data);

      if (data.canClose) {
        me.hasChanges = false;
        me.close();
      }
    };

    return false;
  },

  addListeners: function () {
    this.on('beforeadd', function () {
      Ext.getBody().addCls('no-scroll');
    }, this);

    this.on('beforedestroy', function () {
      Ext.getBody().removeCls('no-scroll');
    }, this);
  },
});
