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
  autoLoad: false,
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

  getDefaultPreset () {
    var data = this.getData();
    var defaultPreset = data
      .find(function (preset) {
        return preset.assignments.some(function (assigment) {
          return assigment.type === ASSIGNMENT_TYPE.DEFAULT;
        });
      });

    return defaultPreset
      ? defaultPreset
      : data.find(function (preset) {
        return preset.owner === PRESET_OWNER.PLATFORM;
      });
  },
});
