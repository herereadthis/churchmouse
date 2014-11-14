'use strict';

angular.module('churchMouseApp')
    .controller('LineageArticleController', ['$scope', 'Lineage', function($scope, Lineage) {
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
        window.alert('asdfasfdf');
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
            link: function(scope, element) {
                element.find('.bellmaker_container').css({
                    height: 'auto',
                    minHeight: '0'
                });
            },
            templateUrl: '/views/lineage.html'
        };
    });