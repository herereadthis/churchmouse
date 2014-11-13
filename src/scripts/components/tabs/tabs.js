'use strict';


angular.module('churchMouseApp')
    .controller('TabsController', function() {
    })
    .directive('myTabs', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'scripts/components/tabs/my-tabs.html'
        }
    });

