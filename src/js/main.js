(function() {
    requirejs.config({
        paths: {
            "Analytics": "../components/greeneyes/src/js/google_analytics_universal"
        }
    });
    require(['Analytics'],
        function(Analytics) {
        return Analytics.track();
    });
}).call(this);
