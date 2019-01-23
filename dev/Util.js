Ext.define('Dev.Util', {
    alternateClassName: 'Util',
    singleton: true,
    dependencies: ['NavixyPermissions'],

    getRequiredSeparator: function () {
        return '<span style="color:red">*</span>:';
    },

    formatDate: function (date) {
      return date ? Ext.Date.formatISO(date, Ext.util.Format.dateFormat) : ''
    },

    navixyPermissions: function (action, feature) {
        var permissionStore = NavixyPermissions.default;
        var gisPackage = Ext.getStore('Dealer').getGisPackage();
        var gisPackageRole = permissionStore.gisPackageToRoleConverter(gisPackage);
        var roles = [gisPackageRole];
        if (Locale.Manager.getLocale() === 'ru') {
            roles.push('ru-user');
        }
        return permissionStore.can(roles, action, feature);
    },
});
