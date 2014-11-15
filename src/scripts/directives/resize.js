'use strict';

// inspired by http://jsfiddle.net/jaredwilli/SfJ8c/
angular.module('churchMouseApp')
    .directive('resize', ['$window', function($window) {
        // window.console.log($window.width());
        return {
            link: function(scope, element) {
                var w, breakpoints, bellmaker;

                w = angular.element($window);

                breakpoints = [768, 1024, 1280, 1440];
                bellmaker = [768, 960, 1152, 1344];

                scope.backgroundPos = function() {
                    var windowWidth, windowHeight;

                    scope.windowDimensions = {
                        w: w.width(),
                        h: w.height()
                    };

                    windowHeight = scope.windowDimensions.h;
                    windowWidth = scope.windowDimensions.w;

                    var _i, bellIndex, bgPos;
                    if (windowWidth >= breakpoints[0]) {
                        for (_i in breakpoints) {
                            if (windowWidth >= breakpoints[_i]) {
                                bellIndex = _i;
                            }
                        }
                        bgPos = Math.round((windowWidth - bellmaker[bellIndex]) / 2) - 2;
                        element.css({
                            backgroundPosition: bgPos + 'px'
                        });
                    }

                };
                scope.backgroundPos();

                w.on('resize', function() {
                    scope.backgroundPos();
                });
            }
        };
    }]);