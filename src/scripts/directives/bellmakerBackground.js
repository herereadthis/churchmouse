'use strict';

// inspired by http://jsfiddle.net/jaredwilli/SfJ8c/
angular.module('churchMouseApp')
    .directive('bellmakerBackground', ['$window', function($window) {
        // window.console.log($window.width());
        return {
            scope: {
                bellmakerBackground: '='
            },
            link: function(scope, element) {
                var w, offsetX;

                w = angular.element($window);

                // if passing array, put it in quotes, eg. ="'[1,2,3,4]'"
                offsetX = JSON.parse(scope.bellmakerBackground);
                // window.console.log(offsetX.length);

                scope.backgroundPos = function(offsetX, offsetY) {
                    var windowWidth, windowHeight, breakpoints, bellmaker, x,
                        _i, bellIndex, bgPos;

                    breakpoints = [768, 1024, 1280, 1440];
                    bellmaker = [768, 960, 1152, 1344];

                    offsetY = offsetY || '50%';

                    scope.windowDimensions = {
                        w: w.width(),
                        h: w.height()
                    };

                    windowHeight = scope.windowDimensions.h;
                    windowWidth = scope.windowDimensions.w;

                    if (windowWidth >= breakpoints[0]) {
                        for (_i in breakpoints) {
                            if (windowWidth >= breakpoints[_i]) {
                                bellIndex = _i;
                            }
                        }
                        if (offsetX.length === bellmaker.length) {
                            x = offsetX[bellIndex];
                            window.console.log(x, bellIndex);
                        }
                        else {
                            x = offsetX;
                            // window.console.log(x);
                        }
                        bgPos = Math.round((windowWidth - bellmaker[bellIndex]) / 2) + x;
                        element.css({
                            backgroundPosition: bgPos + 'px ' + offsetY
                        });
                    }

                };
                scope.backgroundPos(offsetX);

                w.on('resize', function() {
                    scope.backgroundPos(offsetX);
                });
            }
        };
    }]);