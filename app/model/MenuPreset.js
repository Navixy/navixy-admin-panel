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
        var title = record.get('preset').title;

        return _l.get(title) || title;
      },
    },
    {
      name: 'isDefault',
      convert: function (me, record) {
        var assignments = record.get('assignments');

        for (var i = 0; i < assignments.length; i++) {
          if ('default' === assignments[i].type) {
            return true;
          }
        }

        return false;
      },
    },
  ],
});

