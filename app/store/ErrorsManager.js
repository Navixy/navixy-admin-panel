/**
 * @class NavixyPanel.store.ErrorsManager
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.ErrorsManager', {
    extend: 'Ext.data.Store',
    loginToken: 'login',
    fields: [
        {
            name: 'codes'
        },
        {
            name: 'callback'
        }
    ],

    errorStatuses: {
        FATAL_ERROR: true
    },

    maybeLoadErrors: function () {
        if (!this.getCount()) {
            this.loadData(this.getErrors());
        }
    },

    loadData: function () {
        this.callParent(arguments);
        this.fireEvent('ready', this);
    },

    getErrors: function () {
        return [
            {
                codes: [1, 5, 6, 101, 102, 111, 112, 201,
                        202, 203, 204, 205, 206, 207, 208,
                        209, 210, 211, 212, 213, 214, 215,
                        216, 217, 218, 219, 220, 221, 222,
                        223, 224, 225, 226, 227, 228, 229,
                        230, 231, 232, 233, 234, 235, 236,
                        238, 240,
                        "upload_exeption"],
                callback: this.showCornerMessage
            },
            {
                codes: [2, 3, 4, 11, 12, 103, 'no_hash'],
                callback: this.redirectToAuth
            },
            {
                codes: [7],
                callback: this.showInvalidParameterMsg
            }
        ];
    },

    getStartPageUrl: function () {
        return this.getAppRoot() + '../' + this.startPage;
    },

    // TODO : Auth form here
    redirectToAuth: function (code) {
//        Ext.Navigator.goTo(this.loginToken);
    },

    goToStartPage: function () {
        if (this.authKeyName) {
            Ext.util.Cookies.clear(this.authKeyName);
        }

        try {
            window.top.location.href(this.getStartPageUrl());
        } catch (e) {
            window.top.location.href = this.getStartPageUrl();
        }
    },

    getAppRoot: function () {
        return [Ext.Loader.getPath('NavixyPanel'), '../'].join('/');
    },

    getErrorByCode: function (code) {
        this.maybeLoadErrors();

        var result = null;

        this.each(function (error) {
            if (Ext.Array.contains(error.get('codes'), code)) {
                result = error;
                return false;
            }
        });

        return result;
    },

    fireError: function (code, requestConfig, response) {

        var error = this.getErrorByCode(code);

        if (error) {
            try {
                var callback = error.get('callback');

                if (callback) {
                    return callback.call(this, code, requestConfig, response);
                }
            } catch (e) {
                Ext.log(e.stack);
            }
        }
    },

    showInvalidParameterMsg: function (code, parameters, response) {
        var localeErrorPart = _l.errors[code],
            msg = [],
            needToShow = false;

        Ext.each(response.errors, function (error) {
            if (localeErrorPart.errors[error.parameter]) {
                needToShow = true;
            }
            msg.push('<p>', localeErrorPart.errors[error.parameter], '</p>');
        }, this);

        Ext.Notice.msg({title: needToShow ? localeErrorPart.title : null,
            msg: needToShow ? msg.join('') : _l.errors[code].default_msg });
    },

    showCornerMessage: function (code, requestConfig) {
        var trackerLabel = '';

        if (requestConfig && requestConfig.tracker_id) {
            trackerLabel = Ext.getStore('sTrackers')
                .getById(requestConfig.tracker_id)
                .get('label');
        }

        var message = {
            title: _l.error_occured,
            msg: [trackerLabel ? trackerLabel + ': ' : '', _l.errors[code]].join('')
        };

        Ext.Notice.msg(message);
    }
});