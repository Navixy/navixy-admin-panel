/**
 * @class NavixyPanel.store.Currencies
 * @extends Ext.data.Store
 * Description
 */

Ext.define('NavixyPanel.store.Currencies', {
    extend: 'Ext.data.Store',
    fields: ['type', 'name', 'priority'],
    sorters: [
        {
            property: 'priority',
            direction: 'ASC'
        },
        {
            property: 'name',
            direction: 'ASC'
        }
    ],
    constructor: function () {
        this.data = [
            {
                type: "GBP",
                "name": _l.get('currency.gbp'),
                priority: 5
            },
            {
                type: "BRL",
                "name": _l.get('currency.brl'),
                priority: 5
            },
            {
                type: "HUF",
                "name": _l.get('currency.huf'),
                priority: 5
            },
            {
                type: "HKD",
                "name": _l.get('currency.hkd'),
                priority: 5
            },
            {
                type: "DKK",
                "name": _l.get('currency.dkk'),
                priority: 5
            },
            {
                type: "EUR",
                "name": _l.get('currency.eur'),
                priority: 1
            },
            {
                type: "ILS",
                "name": _l.get('currency.ils'),
                priority: 5
            },
            {
                type: "INR",
                "name": _l.get('currency.inr'),
                priority: 5
            },
            {
                type: "IDR",
                "name": _l.get('currency.idr'),
                priority: 5
            },
            {
                type: "CAD",
                "name": _l.get('currency.cad'),
                priority: 5
            },
            {
                type: "CNY",
                "name": _l.get('currency.cny'),
                priority: 5
            },
            {
                type: "KRW",
                "name": _l.get('currency.krw'),
                priority: 5
            },
            {
                type: "MYR",
                "name": _l.get('currency.myr'),
                priority: 5
            },
            {
                type: "MXN",
                "name": _l.get('currency.mxn'),
                priority: 5
            },
            {
                type: "NZD",
                "name": _l.get('currency.nzd'),
                priority: 5
            },
            {
                type: "NOK",
                "name": _l.get('currency.nok'),
                priority: 5
            },
            {
                type: "PKR",
                "name": _l.get('currency.pkr'),
                priority: 5
            },
            {
                type: "PLN",
                "name": _l.get('currency.pln'),
                priority: 5
            },
            {
                type: "RUB",
                "name": _l.get('currency.rub'),
                priority: 2
            },
            {
                type: "SGD",
                "name": _l.get('currency.sgd'),
                priority: 5
            },
            {
                type: "USD",
                "name": _l.get('currency.usd'),
                priority: 0
            },
            {
                type: "TWD",
                "name": _l.get('currency.twd'),
                priority: 5
            },
            {
                type: "THB",
                "name": _l.get('currency.thb'),
                priority: 5
            },
            {
                type: "TRY",
                "name": _l.get('currency.try'),
                priority: 5
            },
            {
                type: "PHP",
                "name": _l.get('currency.php'),
                priority: 5
            },
            {
                type: "CZK",
                "name": _l.get('currency.czk'),
                priority: 5
            },
            {
                type: "CLP",
                "name": _l.get('currency.clp'),
                priority: 5
            },
            {
                type: "SEK",
                "name": _l.get('currency.sek'),
                priority: 5
            },
            {
                type: "CHF",
                "name": _l.get('currency.chf'),
                priority: 5
            },
            {
                type: "ZAR",
                "name": _l.get('currency.zar'),
                priority: 5
            },
            {
                type: "JPY",
                "name": _l.get('currency.jpy'),
                priority: 5
            },
            {
                type: "KZT",
                "name": _l.get('currency.kzt'),
                priority: 3
            },
            {
                type: "BYR",
                "name": _l.get('currency.byr'),
                priority: 3
            },
            {
                type: "AUD",
                "name": _l.get('currency.aud'),
                priority: 5
            },
            {
                type: "TJS",
                "name": _l.get('currency.tjs'),
                priority: 5
            },
            {
                type: "UAH",
                "name": _l.get('currency.uah'),
                priority: 4
            },
            {
                type: "LTL",
                "name": _l.get('currency.ltl'),
                priority: 5
            },
            {
                type: "LVL",
                "name": _l.get('currency.lvl'),
                priority: 5
            },
            {
                type: "KGS",
                "name": _l.get('currency.kgs'),
                priority: 5
            },
            {
                type: "TMT",
                "name": _l.get('currency.tmt'),
                priority: 5
            },
            {
                type: "UZS",
                "name": _l.get('currency.uzs'),
                priority: 5
            },
            {
                type: "MDL",
                "name": _l.get('currency.mdl'),
                priority: 5
            },
            {
                type: "GEL",
                "name": _l.get('currency.gel'),
                priority: 5
            },
            {
                type: "AMD",
                "name": _l.get('currency.amd'),
                priority: 5
            },
            {
                type: "AZN",
                "name": _l.get('currency.azn'),
                priority: 5
            }
        ];

        this.callParent(arguments);
    }

});