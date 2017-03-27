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
                name: _l.get('currency.gbp'),
                priority: 5
            },
            {
                type: "BRL",
                name: _l.get('currency.brl'),
                priority: 5
            },
            {
                type: "HUF",
                name: _l.get('currency.huf'),
                priority: 5
            },
            {
                type: "HKD",
                name: _l.get('currency.hkd'),
                priority: 5
            },
            {
                type: "DKK",
                name: _l.get('currency.dkk'),
                priority: 5
            },
            {
                type: "EUR",
                name: _l.get('currency.eur'),
                priority: 1
            },
            {
                type: "ILS",
                name: _l.get('currency.ils'),
                priority: 5
            },
            {
                type: "INR",
                name: _l.get('currency.inr'),
                priority: 5
            },
            {
                type: "IDR",
                name: _l.get('currency.idr'),
                priority: 5
            },
            {
                type: "CAD",
                name: _l.get('currency.cad'),
                priority: 5
            },
            {
                type: "CNY",
                name: _l.get('currency.cny'),
                priority: 5
            },
            {
                type: "KRW",
                name: _l.get('currency.krw'),
                priority: 5
            },
            {
                type: "MYR",
                name: _l.get('currency.myr'),
                priority: 5
            },
            {
                type: "MXN",
                name: _l.get('currency.mxn'),
                priority: 5
            },
            {
                type: "NZD",
                name: _l.get('currency.nzd'),
                priority: 5
            },
            {
                type: "NOK",
                name: _l.get('currency.nok'),
                priority: 5
            },
            {
                type: "PKR",
                name: _l.get('currency.pkr'),
                priority: 5
            },
            {
                type: "PLN",
                name: _l.get('currency.pln'),
                priority: 5
            },
            {
                type: "RUB",
                name: _l.get('currency.rub'),
                priority: 2
            },
            {
                type: "SGD",
                name: _l.get('currency.sgd'),
                priority: 5
            },
            {
                type: "USD",
                name: _l.get('currency.usd'),
                priority: 0
            },
            {
                type: "TWD",
                name: _l.get('currency.twd'),
                priority: 5
            },
            {
                type: "THB",
                name: _l.get('currency.thb'),
                priority: 5
            },
            {
                type: "TRY",
                name: _l.get('currency.try'),
                priority: 5
            },
            {
                type: "PHP",
                name: _l.get('currency.php'),
                priority: 5
            },
            {
                type: "CZK",
                name: _l.get('currency.czk'),
                priority: 5
            },
            {
                type: "CLP",
                name: _l.get('currency.clp'),
                priority: 5
            },
            {
                type: "SEK",
                name: _l.get('currency.sek'),
                priority: 5
            },
            {
                type: "CHF",
                name: _l.get('currency.chf'),
                priority: 5
            },
            {
                type: "ZAR",
                name: _l.get('currency.zar'),
                priority: 5
            },
            {
                type: "JPY",
                name: _l.get('currency.jpy'),
                priority: 5
            },
            {
                type: "KZT",
                name: _l.get('currency.kzt'),
                priority: 3
            },
            {
                type: "BYR",
                name: _l.get('currency.byr'),
                priority: 3
            },
            {
                type: "AUD",
                name: _l.get('currency.aud'),
                priority: 5
            },
            {
                type: "TJS",
                name: _l.get('currency.tjs'),
                priority: 5
            },
            {
                type: "UAH",
                name: _l.get('currency.uah'),
                priority: 4
            },
            {
                type: "LTL",
                name: _l.get('currency.ltl'),
                priority: 5
            },
            {
                type: "LVL",
                name: _l.get('currency.lvl'),
                priority: 5
            },
            {
                type: "KGS",
                name: _l.get('currency.kgs'),
                priority: 5
            },
            {
                type: "TMT",
                name: _l.get('currency.tmt'),
                priority: 5
            },
            {
                type: "UZS",
                name: _l.get('currency.uzs'),
                priority: 5
            },
            {
                type: "MDL",
                name: _l.get('currency.mdl'),
                priority: 5
            },
            {
                type: "GEL",
                name: _l.get('currency.gel'),
                priority: 5
            },
            {
                type: "AMD",
                name: _l.get('currency.amd'),
                priority: 5
            },
            {
                type: "AZN",
                name: _l.get('currency.azn'),
                priority: 5
            },
            {
                type: "ALL",
                name: _l.get('currency.all'),
                priority: 5
            },
            {
                type: "AFN",
                name: _l.get('currency.afn'),
                priority: 5
            },
            {
                type: "ARS",
                name: _l.get('currency.ars'),
                priority: 5
            },
            {
                type: "AWG",
                name: _l.get('currency.awg'),
                priority: 5
            },
            {
                type: "BSD",
                name: _l.get('currency.bsd'),
                priority: 5
            },
            {
                type: "BBD",
                name: _l.get('currency.bbd'),
                priority: 5
            },
            {
                type: "BZD",
                name: _l.get('currency.bzd'),
                priority: 5
            },
            {
                type: "BMD",
                name: _l.get('currency.bmd'),
                priority: 5
            },
            {
                type: "BOB",
                name: _l.get('currency.bob'),
                priority: 5
            },
            {
                type: "BAM",
                name: _l.get('currency.bam'),
                priority: 5
            },
            {
                type: "BWP",
                name: _l.get('currency.bwp'),
                priority: 5
            },
            {
                type: "BGN",
                name: _l.get('currency.bgn'),
                priority: 5
            },
            {
                type: "BND",
                name: _l.get('currency.bnd'),
                priority: 5
            },
            {
                type: "KHR",
                name: _l.get('currency.khr'),
                priority: 5
            },
            {
                type: "KYD",
                name: _l.get('currency.kyd'),
                priority: 5
            },
            {
                type: "COP",
                name: _l.get('currency.cop'),
                priority: 5
            },
            {
                type: "CRC",
                name: _l.get('currency.crc'),
                priority: 5
            },
            {
                type: "HRK",
                name: _l.get('currency.hrk'),
                priority: 5
            },
            {
                type: "CUP",
                name: _l.get('currency.cup'),
                priority: 5
            },
            {
                type: "DOP",
                name: _l.get('currency.dop'),
                priority: 5
            },
            {
                type: "XCD",
                name: _l.get('currency.xcd'),
                priority: 5
            },
            {
                type: "EGP",
                name: _l.get('currency.egp'),
                priority: 5
            },
            {
                type: "SVC",
                name: _l.get('currency.svc'),
                priority: 5
            },
            {
                type: "EEK",
                name: _l.get('currency.eek'),
                priority: 5
            },
            {
                type: "FKP",
                name: _l.get('currency.fkp'),
                priority: 5
            },
            {
                type: "FJD",
                name: _l.get('currency.fjd'),
                priority: 5
            },
            {
                type: "GHC",
                name: _l.get('currency.ghc'),
                priority: 5
            },
            {
                type: "GIP",
                name: _l.get('currency.gip'),
                priority: 5
            },
            {
                type: "GTQ",
                name: _l.get('currency.gtq'),
                priority: 5
            },
            {
                type: "GGP",
                name: _l.get('currency.ggp'),
                priority: 5
            },
            {
                type: "GYD",
                name: _l.get('currency.gyd'),
                priority: 5
            },
            {
                type: "HNL",
                name: _l.get('currency.hnl'),
                priority: 5
            },
            {
                type: "ISK",
                name: _l.get('currency.isk'),
                priority: 5
            },
            {
                type: "IRR",
                name: _l.get('currency.irr'),
                priority: 5
            },
            {
                type: "IMP",
                name: _l.get('currency.imp'),
                priority: 5
            },
            {
                type: "JMD",
                name: _l.get('currency.jmd'),
                priority: 5
            },
            {
                type: "JEP",
                name: _l.get('currency.jep'),
                priority: 5
            },
            {
                type: "KPW",
                name: _l.get('currency.kpw'),
                priority: 5
            },
            {
                type: "LAK",
                name: _l.get('currency.lak'),
                priority: 5
            },
            {
                type: "LBP",
                name: _l.get('currency.lbp'),
                priority: 5
            },
            {
                type: "LRD",
                name: _l.get('currency.lrd'),
                priority: 5
            },
            {
                type: "MKD",
                name: _l.get('currency.mkd'),
                priority: 5
            },
            {
                type: "MUR",
                name: _l.get('currency.mur'),
                priority: 5
            },
            {
                type: "MNT",
                name: _l.get('currency.mnt'),
                priority: 5
            },
            {
                type: "MZN",
                name: _l.get('currency.mzn'),
                priority: 5
            },
            {
                type: "NAD",
                name: _l.get('currency.nad'),
                priority: 5
            },
            {
                type: "NPR",
                name: _l.get('currency.npr'),
                priority: 5
            },
            {
                type: "ANG",
                name: _l.get('currency.ang'),
                priority: 5
            },
            {
                type: "NIO",
                name: _l.get('currency.nio'),
                priority: 5
            },
            {
                type: "NGN",
                name: _l.get('currency.ngn'),
                priority: 5
            },
            {
                type: "OMR",
                name: _l.get('currency.omr'),
                priority: 5
            },
            {
                type: "PAB",
                name: _l.get('currency.pab'),
                priority: 5
            },
            {
                type: "PYG",
                name: _l.get('currency.pyg'),
                priority: 5
            },
            {
                type: "PEN",
                name: _l.get('currency.pen'),
                priority: 5
            },
            {
                type: "QAR",
                name: _l.get('currency.qar'),
                priority: 5
            },
            {
                type: "RON",
                name: _l.get('currency.ron'),
                priority: 5
            },
            {
                type: "SHP",
                name: _l.get('currency.shp'),
                priority: 5
            },
            {
                type: "SAR",
                name: _l.get('currency.sar'),
                priority: 5
            },
            {
                type: "RSD",
                name: _l.get('currency.rsd'),
                priority: 5
            },
            {
                type: "SCR",
                name: _l.get('currency.scr'),
                priority: 5
            },
            {
                type: "SBD",
                name: _l.get('currency.sbd'),
                priority: 5
            },
            {
                type: "SOS",
                name: _l.get('currency.sos'),
                priority: 5
            },
            {
                type: "LKR",
                name: _l.get('currency.lkr'),
                priority: 5
            },
            {
                type: "SRD",
                name: _l.get('currency.srd'),
                priority: 5
            },
            {
                type: "SYP",
                name: _l.get('currency.syp'),
                priority: 5
            },
            {
                type: "TTD",
                name: _l.get('currency.ttd'),
                priority: 5
            },
            {
                type: "TRL",
                name: _l.get('currency.trl'),
                priority: 5
            },
            {
                type: "TVD",
                name: _l.get('currency.tvd'),
                priority: 5
            },
            {
                type: "UYU",
                name: _l.get('currency.uyu'),
                priority: 5
            },
            {
                type: "VEF",
                name: _l.get('currency.vef'),
                priority: 5
            },
            {
                type: "VND",
                name: _l.get('currency.vnd'),
                priority: 5
            },
            {
                type: "YER",
                name: _l.get('currency.yer'),
                priority: 5
            },
            {
                type: "ZWD",
                name: _l.get('currency.zwd'),
                priority: 5
            },
            {
                type: "MAD",
                name: _l.get('currency.mad'),
                priority: 5
            },
            {
                type: "XOF",
                name: _l.get('currency.xof'),
                priority: 5
            },
            {
                type: "XAF",
                name: _l.get('currency.xaf'),
                priority: 5
            },
            {
                type: "AED",
                name: _l.get('currency.aed'),
                priority: 5
            }
        ];

        this.callParent(arguments);
    }

});