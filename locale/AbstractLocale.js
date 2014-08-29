/**
 * @class Locale.AbstractLocale
 *
 */

Ext.define('Locale.AbstractLocale', {

    get: (function () {
        var getMethod = function (target, justTarget) {
            if (Ext.isEmpty(target)) {
                return  null;
            }
            var returnResult = null;

            //TODO: don't scare
            String.prototype.get = function (args) {
                return args;
            };

            function getNode(partsArray, root) {
                var currentPart = partsArray.shift(),
                    nextRoot = root[currentPart];

                if (nextRoot) {
                    if (partsArray.length) {
                        return getNode(partsArray, nextRoot);
                    } else {
                        return nextRoot;
                    }
                } else {
                    return  null;
                }
            }

            try {
                var parts = target.split('.'),
                    result = justTarget ? this[target] : getNode(parts, this);

                if (result) {
                    if (typeof result === 'string' || result instanceof Array) {
                        returnResult = result;
                    } else {
                        returnResult = Ext.apply({
                            get: Ext.bind(getMethod, result)
                        }, result);
                    }
                } else {
                    returnResult = target;
                }

            } catch (e) {
                Ext.logger(e.stack);
                return target;
            }

            return returnResult;
        };

        return getMethod;
    })()

});