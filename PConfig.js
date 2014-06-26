Config = {
    apiProfiles: {
        japi: {
            apiRoot: 'http://api.test.gdemoi.ru/panel',
            apiUrlTpl: ['{apiRoot}/{handler}/{action}']
        }
    },

    appRedirect: {
        authProperty: 'hash',
        appPage: 'main',
        loginPage: 'login'
    },

    links: {
        monUrlTpl: ['http://{company_url}/pro/demo/?session_key={hash}'],
    },

    terminalHost: 'ws://api.test.gdemoi.ru:8383/',
    paas_domain: '.navixy.ru',
    oldVersionURL: 'http://panel2.navixy.com/',
    optDeliveryLink: 'http://api.test.gdemoi.ru/',

    custom_code: function(){
        if(window.location.host === 'panel.navixy.com'){
            (function (d, w, c) {(w[c] = w[c] || []).push(function() {try {w.yaCounter25349690 = new Ya.Metrika({id:25349690,clickmap:true,trackLinks:true,accurateTrackBounce:true});} catch(e) { }});var n = d.getElementsByTagName("script")[0],s = d.createElement("script"),f = function () { n.parentNode.insertBefore(s, n); };s.type = "text/javascript";s.async = true;s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";if (w.opera == "[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); }})(document, window, "yandex_metrika_callbacks");

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-36561636-4', 'navixy.com');
            ga('send', 'pageview');
        }
    }
};
