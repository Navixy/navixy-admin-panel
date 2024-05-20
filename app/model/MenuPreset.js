/**
 * @class NavixyPanel.model.MenuPreset
 * @extends NavixyPanel.model.Abstract
 * */
Ext.define('NavixyPanel.model.MenuPreset', {
  extend: 'NavixyPanel.model.Abstract',
  idProperty: 'id',

  fields: [
    'owner',
    'preset',
    'assignments',
    {
      name: 'id',
      convert: function (value, record) {
        return record.get('preset').id;
      },
    },
    {
      name: 'title',
      convert: function (me, record) {
        return record.get('preset').title;
      },
    },
  ],
});

