/**
 * @class NavixyPanel.store.Dealer
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Dealer', {
    extend: 'Ext.data.Store',
    storeId: 'Dealer',
    fields: [
        "parent_dealer_id",
        "contract_type",
        "effective_dealer_id",
        "title",
        "legal_name",
        "active_amount",
        "active_limit",
        "locale",
        "domain",
        "favicon",
        "logo",
        "subpaas",
        "seller_currency",
        "demo_tariff",
        "store_period",
        "allow_branding",
        "features",
        "default_user_time_zone",
        {
            name: 'active_amount_own',
            type: 'number'
        }, {
            name: 'active_amount_subpaas',
            type: 'number'
        }, {
            name: 'paas_activation_date',
            type: 'date',
            format: 'Y-m-d'
        }, {
            name: 'tracker_tariff_end_date',
            type: 'date',
            format: 'Y-m-d'
        }, {
            name: 'license_balance',
            defaultValue: 500
        }, {
            name: 'block_status',
            defaultValue: 'NOT_BLOCKED'
        }, {
            name: 'tariff',
            defaultValue: {}
        }, {
            name: 'tutorial',
            defaultValue: false
        }, {
            name: 'fsm',
            defaultValue: false
        }
    ],

    enableTutorial: function () {
        this.first().set('tutorial', true);
    },

    isTutorial: function () {
        return this.first().get('tutorial');
    },

    isExponentialAvailable: function () {
        var record = this.first(),
            tariff = record && record.get('tariff');
        var tariffPermissions = Ext.checkPermission('paas_tariff', 'read')
        return tariff && tariff.algorithm === "exponential" && tariffPermissions && !this.isSubPaas();
    },

    isPlainPricesAvailable: function () {
        var record = this.first(),
            tariff = record && record.get('tariff');
        var tariffPermissions = Ext.checkPermission('paas_tariff', 'read')
        return tariff && tariff.algorithm === "plain" && tariffPermissions && !this.isSubPaas();
    },

    getPlainPrices: function () {
        var record = this.first(),
            tariff = record && record.get('tariff');
        return {
            currency: tariff.currency,
            min_license_pay: tariff.min_license_pay,
            license_price: tariff.license_price
        }
    },

    isStandalone: function () {
        var record = this.first();
        return record.get('id') === 1
    },

    setGoogleClientId: function (google_client_id) {
        this.google_client_id = google_client_id
    },

    isPremiumGis: function () {
        return this.hasPremiumGis() || (!!this.google_client_id && ['none', 'basic'].includes(this.getGisPackage()))
    },

    getGisPackage: function () {
        var record = this.first()
        var tariff = record && record.get('tariff')
        return tariff && tariff.gis_package
    },

    hasPremiumGis: function () {
        var record = this.first(),
            tariff = record && record.get('tariff')

        return tariff && tariff.premium_gis
    },

    getImgUrl: function (field) {
        var record = this.first(),
            value = record.get(field),
            isUrl = new RegExp('http://|https://', 'i').test(value)

        return value
            ? isUrl
                ? value
                : Ext.API.getGlobalApiUrl({ action: value })
            : null
    },

    getLogo: function () {
        return this.getImgUrl('logo') || false
    },

    getFavicon: function () {
        return this.getImgUrl('favicon') || false
    },

    isSubPaas: function () {
        return this.first().get('subpaas')
    },

    isSubPaasAvailable: function () {
        var dealer = this.first().getData();
        return !dealer.subpaas && this.getFeature('subpaas') && Ext.checkPermission('subpaas', 'read')
    },


    isSubpaasReportsAvailable: function (callback, scope) {
        if (!this.isSubPaasAvailable()) {
            this.subpaasReporsAvailable = false
            callback.call(scope || this, this.subpaasReporsAvailable)
            return
        }

        if (this.subpaasReporsAvailable) {
            callback.call(scope || this, this.subpaasReporsAvailable)
            return
        }

        this.subpaasReporsAvailable = false

        Ext.API.getSubPaasList({
            params: {
                order_by: 'block_type',
                limit: 1,
                ascending: true
            },
            callback: function (result) {
                if (result.count > 1) {
                    this.subpaasReporsAvailable = true
                } else if (result.count) {
                    var subpaases = result.list
                    if (subpaases[0].block_type !== 'INITIAL_BLOCK') {
                        this.subpaasReporsAvailable = true
                    }
                }

                callback.call(scope || this, this.subpaasReporsAvailable)
            },
            scope: this
        })
    },

    hasFsm: function () {
        return this.getFeature('fsm');
    },

    hasB2f: function () {
        return this.getFeature('b2f');
    },

    getFeature: function (feature_name) {
        var record = this.first(),
            features = record && record.get("features");

        return Ext.Array.contains(features, feature_name);
    }
})
