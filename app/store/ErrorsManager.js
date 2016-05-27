/**
 * @class NavixyPanel.store.ErrorsManager
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.ErrorsManager', {
    extend: 'Ext.data.Store',
    loginToken: 'login',
    storeId: 'ErrorsManager',
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
                        209, 210, 211, 212, 213, 214,
                        216, 217, 218, 219, 220, 221, 222,
                        223, 224, 225, 226, 227, 228, 229,
                        230, 231, 232, 233, 234, 235, 236,
                        238, 240,
                        "upload_exeption"],
                callback: this.showErrorMessage
            },
            {
                codes: [2, 3, 4, 11, 103, 'no_hash'],
                callback: this.redirectToAuth
            },
            {
                codes: [12, 13],
                callback: Ext.emptyFn
            },
            {
                codes: [7],
                callback: this.showErrorMessage
            },
            {
                codes: [215],
                callback: this.showErrorDescription
            }
        ];
    },

    getStartPageUrl: function () {
        return this.getAppRoot() + '../' + this.startPage;
    },

    redirectToAuth: function (code) {
        if (!Ext.util.Cookies.get('debug') && Ext.API.hasAuthKey()) {
            Ext.Msg.show({
                msg: _l.get('errors')[code],
                buttons: Ext.Msg.OK,
                wait: true,
                fn: this.goToStartPage,
                scope: this,
                waitConfig: {
                    interval: 500,
                    duration: 3000,
                    increment: 6,
                    text: _l.get('auth.reloading_soon'),
                    scope: this,
                    fn: this.goToStartPage
                }
            });
        }

        //retrun fatal error
        return this.errorStatuses.FATAL_ERROR;
    },

    goToStartPage: function (code) {
        if (this.authKeyName) {
            Ext.util.Cookies.clear(this.authKeyName);
        }

        location.reload();
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
        } else {
            this.showErrorMessage(code, requestConfig, response);
        }
    },

    showErrorDescription: function (code, parameters, response) {
        var desc = response && response.status && response.status.description,
            localeErrorPart = _l.get('errors')[code];

        Ext.MessageBox.show({
            title: _l.get('error'),
            msg: desc || localeErrorPart
        });
    },

    showErrorMessage: function (code, parameters, response) {
        var desc = response && response.status && response.status.description,
            localeErrorPart = _l.get('errors')[code],
            msg = [localeErrorPart && localeErrorPart["title"] ? localeErrorPart["title"] : ""],
            needToShow = false;

        Ext.each(response.errors, function (error) {
            msg.push('<p>', localeErrorPart.errors[error.parameter] || [error.parameter, ':',
                                                                        error.error].join(" "), '</p>');
        }, this);

        Ext.MessageBox.show({
            title: _l.get('error'),
            msg: [( msg.length ? msg.join('') : _l.get('errors')[code].default_msg) || _l.get('errors')[code] || desc].join('')
        });
    },

    showInvalidParameterMsg: function (code, parameters, response) {
        var localeErrorPart = _l.get('errors')[code],
            msg = [],
            needToShow = false;

        Ext.each(response.errors, function (error) {
            if (localeErrorPart.errors[error.parameter]) {
                needToShow = true;
            }
            msg.push('<p>', localeErrorPart.errors[error.parameter], '</p>');
        }, this);

        Ext.Notice.msg({
            title: needToShow ? localeErrorPart.title : null,
            msg: needToShow ? msg.join('') : _l.get('errors')[code].default_msg
        });
    },

    showCornerMessage: function (code, requestConfig) {
        var trackerLabel = '';

        if (requestConfig && requestConfig.tracker_id) {
            trackerLabel = Ext.getStore('sTrackers')
                .getById(requestConfig.tracker_id)
                .get('label');
        }

        var message = {
            title: _l.get('error_occured'),
            msg: [trackerLabel ? trackerLabel + ': ' : '', _l.get('errors')[code]].join('')
        };

        Ext.Notice.msg(message);
    }
});