var PRESET_OWNER = {
  DEALER: 'dealer',
  PLATFORM: 'platform',
  USER: 'user',
};

var ASSIGNMENT_TYPE = {
  DEFAULT: 'default',
  MASTER: 'master',
  EVERYONE: 'everyone',
  SECURITY_GROUP: 'security_group',
  USERS: 'users',
};

/**
 * @class NavixyPanel.store.SectionMenuPresets
 * @extends Ext.data.Store
 * */
Ext.define('NavixyPanel.store.MenuPresets', {
  extend: 'NavixyPanel.store.Abstract',
  model: 'NavixyPanel.model.MenuPreset',
  autoLoad: true,
  remoteFilter: false,
  remoteSort: false,
  batch: false,
  storeId: 'MenuPresets',

  sorters: {
    property: 'preset.id',
    direction: 'ASC',
  },

  api: {
    read: 'getMenuPresetsList',
  },

  proxy: {
    type: 'navixy',
  },

  getDefaultPreset: function () {
    var data = this.getData();
    var defaultPreset = null;

    for (var i = 0; i < data.length; i++) {
      var preset = data[i];
      for (var j = 0; j < preset.assignments.length; j++) {
        var assignment = preset.assignments[j];

        if (assignment.type === ASSIGNMENT_TYPE.DEFAULT) {
          defaultPreset = preset;
          break;
        }
      }

      if (defaultPreset) {
        break;
      }
    }

    if (defaultPreset) {
      return defaultPreset;
    } else {
      for (var k = 0; k < data.length; k++) {
        if (data[k].owner === PRESET_OWNER.PLATFORM) {
          return data[k];
        }
      }
    }
  },

  getPresetOfUserId: function (userID) {
    var data = this.getData();

    for (var i = 0; i < data.length; i++) {
      var preset = data[i];

      if (preset.assignments.length === 0) {
        continue;
      }

      for (var j = 0; j < preset.assignments.length; j++) {
        var assignment = preset.assignments[j];

        if (ASSIGNMENT_TYPE.USERS === assignment.type && assignment.ids.indexOf(userID) >= 0) {
          return preset;
        }
      }
    }

    return this.getDefaultPreset();
  },
});
