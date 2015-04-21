'use strict';


angular.module('churchMouseApp')
    .directive('bannerCarousel', ['$window', function($window) {
        return {
            restrict: 'E',
            scope: {
                imageCarousel: '=bannerImages'
            },
            controller: function($scope) {
                window.console.log($scope.imageCarousel.length);
            },
            link: function(scope, element) {
                element.addClass(scope.orientation);

                var container;

                container = {};

                // container.element = $(element).find('a');
                // window.console.log($(element).html());
                // container.w = container.element.width();


                scope.getContDim = function() {
                    if (container.w === undefined) {
                        var getCont = $(element).find('li:first-child').children('a');
                        container.w = getCont;
                        container.h = 0.75 * container.w;
                    }
                };

                // $window.console.log(container);

                scope.setImg = function(image) {
                    $window.console.log(image.id);
                    scope.getContDim();
                    var contRatio, imgRatio;

                    contRatio = container.h / container.w;
                    imgRatio = image.h / image.w;
                    

                };
            },
            templateUrl: 'scripts/directives/bannerCarousel.html'
        };
    }]
);
