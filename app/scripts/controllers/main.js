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
                src: '/images/placeholder_1008x567.jpg',
                description: 'image'
            },
            {
                id: 1,
                src: '/images/placeholder_1600x1280.jpg',
                description: 'image'
            },
            {
                id: 2,
                src: '/images/placeholder_1008x567.jpg',
                description: 'image'
            },
            {
                id: 3,
                src: '/images/placeholder_1008x567.jpg',
                description: 'image'
            },
            {
                id: 4,
                src: '/images/placeholder_1008x567.jpg',
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
