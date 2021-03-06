'use strict';

angular.module('churchMouseApp')
    .controller('FoobarController', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
        $scope.naomi = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
        $scope.igor = {
            name: 'Igor',
            address: '123 Somewhere'
        };
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }])
    .directive('fooBar', function() {
        return {
            // restrict A takes <div my-directive />
            // restrict E takes <my-directive />
            restrict: 'E',
            scope: {
                // = shorthand because attribute is the same name as value in scope
                // e.g., <foo-bar customer-info="naomi" />
                customerInfo: '='
            },
            templateUrl: '/scripts/components/foobar/foobar.html'
        };
    });