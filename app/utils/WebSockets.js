
Ext.define('NavixyPanel.utils.WebSockets',{

    location:null,

    constructor: function(config) {
        Ext.apply(this,config);
    },

    initConnection: function(location, config) {

        if (this.connection) {
            this.connection.close();
        }
        if (config) {
            Ext.apply(this, config);
        }

        this.connect(this.locataion || location);
    },

    connect: function(location) {
        this.connection = new WebSocket(location);
        this.connection.onopen = this.onOpen;
        this.connection.onmessage = this.onMessage;
        this.connection.onclose = this.onClose;
        this.connection.onerror = this.onError;
    },

    disconnect: function() {
        if (this.connection) {
            this.connection.close();
        }
    },

    onOpen: function() {
        console.log('onOpen');
    },

    onMessage : function(msg) {
        console.log('onMessage', arguments);
    },

    onClose: function(msg) {
        this.connection = null;
        console.log('onClose');
    },

    onError: function(e) {
        console.log(e);
    },

    send: function(msg) {
        this.connection.send(msg);
    }
});
