Ext.define('NavixyPanel.model.Security', {
    extend: 'NavixyPanel.model.Abstract',

    fields: [
        {
            name: 'type',
            type: 'string',
        },
        {
            name: 'factor_types',
            defaultValue: [],
        },
    ],
});
