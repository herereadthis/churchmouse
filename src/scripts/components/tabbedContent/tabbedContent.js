'use strict';


angular.module('churchMouseApp')
    .directive('tabbedContent', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                orientation: '@'
            },
            controller: function($scope) {
                $scope.panes = [];

                $scope.select = function(pane) {
                    angular.forEach($scope.panes, function(pane) {
                        // now each pane object has a "title" and a "selected"
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                // "this" is the controller constructor
                this.addPane = function(pane) {
                    window.console.log('fooo');
                    // panes is $scope.panes, which is initially an empty array
                    if ($scope.panes.length === 0) {
                        $scope.select(pane);
                    }
                    $scope.panes.push(pane);
                };
            },
            link: function(scope, element) {
                element.addClass(scope.orientation);
            },
            templateUrl: 'scripts/components/tabbedContent/tabbed-content.html'
        };
    })
    .directive('tabbedPane', function() {
        return {
            require: '^tabbedContent',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@',
            },
            link: function(scope, element, attrs, tabsCtrl) {

                tabsCtrl.addPane(scope);
            },
            templateUrl: 'scripts/components/tabbedContent/tabbed-pane.html'
        }
    });
