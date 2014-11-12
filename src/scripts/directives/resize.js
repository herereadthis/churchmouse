'use strict';

// draws heavily from http://jsfiddle.net/jaredwilli/SfJ8c/
angular.module('churchMouseApp')
    .directive('resize', ['$window', function($window) {
        /*
        return {
            link: function(scope, element, attrs) {
                var w, breakpoints, bellmaker, getWindowDimensions;

                w = $window;

                breakpoints = [768, 1024, 1280, 1440];
                bellmaker = [768, 960, 1152, 1344];


                var foop = scope.getWindowDimensions();
            }
            controller: function(scope) {
                $scope.getWindowDimensions = function() {
                    return {
                        'h': w.height(),
                        'w': w.width()
                    };
                };
            }
        };
        */
        return function(scope) {
            var w = angular.element($window);
            scope.breakpoints = [768, 1024, 1280, 1440];
            scope.bellmaker = [768, 960, 1152, 1344];
            scope.getWindowDimensions = function() {
                return {
                    'h': w.height(),
                    'w': w.width()
                };
            };
            scope.$watch(scope.getWindowDimensions, function(dimensions) {
                scope.windowHeight = dimensions.h;
                scope.windowWidth = dimensions.w;

                scope.backgroundPosition = function() {
                    var _i, bellIndex, bgPos;
                    if (scope.windowWidth >= scope.breakpoints[0]) {
                        for (_i in scope.breakpoints) {
                            if (scope.windowWidth >= scope.breakpoints[_i]) {
                                bellIndex = _i;
                            }
                        }
                        bgPos = Math.round((scope.windowWidth - scope.bellmaker[bellIndex]) / 2) - 2;
                        return {
                            'background-position': bgPos + 'px'
                        };
                    }
                };
            }, true);
            w.on('resize', function() {
                scope.$apply();
            });
        };
    }]);