(function() {
    requirejs.config({
        paths: {
            "Analytics": "../components/greeneyes/src/js/google_analytics_universal",
            // jQuery
            "jquery": '../components/jquery/dist/jquery.min',
        }
    });
    require(['Analytics'],
        function(Analytics) {
        return Analytics.track();
    });
}).call(this);
