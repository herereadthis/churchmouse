'use strict';


angular.module('churchMouseApp')
    .controller('TabsController', ['$scope', function ($scope) {
        $scope.foobar = {
            foo: 'foo',
            bar: 'bar'
        };
    }])
    .directive('myTabs', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope) {
                var panes = $scope.panes = [];

                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function(pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            },
            templateUrl: 'scripts/components/tabs/my-tabs.html'
        };
    })
    .directive('myPane', function() {
        return {
            require: '^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, TabsController) {
                TabsController.addPane(scope);
            },
            templateUrl: 'scripts/components/tabs/my-pane.html'
        }
    });







/*
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
*/

