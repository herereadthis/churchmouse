'use strict';

angular.module('churchMouseApp')
    .controller('MainCtrl', ['$scope', 'Lineage', function($scope, Lineage) {
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
        $scope.lineage = Lineage.query();
        $scope.lineage.$promise.then(function(result) {
            $scope.lineage = result;
            $scope.selectedTab = $scope.lineage[0].id;
            $scope.initialDescription = $scope.lineage[0].description;
            $scope.masterDescription = $scope.initialDescription;
        });
    }])
    .directive('lineageArticle', function() {
        return {
            // restrict A takes <div my-directive />
            // restrict E takes <my-directive />
            restrict: 'E',
            scope: {
                // = shorthand because attribute is the same name as value in scope
                // e.g., <foo-bar customer-info="naomi" />
                lineageInfo: '=',
                masterDescription: '='
            },
            templateUrl: '/views/lineage.html'
        };
    });