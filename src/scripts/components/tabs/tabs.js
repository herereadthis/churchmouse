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
                        // now each pane object has a "title" and a "selected"
                        pane.selected = false;
                    });
                    pane.selected = true;
                };
                // "this" is the controller constructor
                this.addPane = function(pane) {
                    // panes is $scope.panes, which is initially an empty array
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            },
            link: function(scope, element, attrs) {

                // this will add css to directive element <my-tabs />
                element.css({
                    display: 'block'
                });
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
                // there are 2 <my-pane> directives
                // 1. scope.title = 'hello'
                // 2. scope.title = 'world'
                TabsController.addPane(scope);

                // this will add css to the directive element <my-pane />
                element.css({
                    display: 'block'
                });
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

