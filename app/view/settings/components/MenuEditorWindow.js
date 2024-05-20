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
  hash: null,
  maximized: true,
  minimizable: false,
  modal: false,

  getItems: function () {
    return [
      {
        xtype: 'panel',
        ui: 'light',
        html: '<div id="menu-editor-app"></div>',
      },
    ];
  },
});
