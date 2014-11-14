'use strict';


angular.module('churchMouseApp')
    .directive('tabbedContent', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'scripts/components/tabbedContent/tabbed-content.html'
        };
    })
    .directive('tabbedPane', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            link: function(scope) {
                window.console.log('asfasdf');
            },
            templateUrl: 'scripts/components/tabbedContent/tabbed-pane.html'
        }
    });
