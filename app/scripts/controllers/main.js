'use strict';

/**
 * @ngdoc function
 * @name churchMouseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the churchMouseApp
 */
angular.module('churchMouseApp')
    .controller('MainCtrl', [
    '$scope', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.imageCarousel = [
            {
                id: 0,
                src: '/images/carousel/dsc4090_1800x1200.jpg',
                description: 'image'
            },
            {
                id: 1,
                src: '/images/carousel/placeholder_1008x567.jpg',
                description: 'image'
            },
            {
                id: 2,
                src: '/images/carousel/va1_432x288.jpg',
                description: 'image'
            },
            {
                id: 3,
                src: '/images/carousel/placeholder_1600x1280.jpg',
                description: 'image'
            },
            {
                id: 4,
                src: '/images/carousel/dsc5138_1800x1200.jpg',
                description: 'image'
            }
        ];
        $scope.getBg = function(image) {
            window.console.log(image.src);
            return {
                backgroundImage: 'url(\'' + image.src + '\')'
            };
        };
    }
    ]
);

