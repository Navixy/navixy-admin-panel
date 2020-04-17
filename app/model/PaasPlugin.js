/**
 * @class NavixyPanel.model.PaasPlugin
 * @extends NavixyPanel.model.Abstract
 * Description
 */

Ext.define('NavixyPanel.model.PaasPlugin', {
    extend: 'NavixyPanel.model.Abstract',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'type', type: 'string'},
        {name: 'ui_module', type: 'string'}
    ]
});