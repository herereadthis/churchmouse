'use strict';

/**
 * @ngdoc function
 * @name churchMouseApp.controller:FunTimeCtrl
 * @description
 * # FunTimeCtrl
 * Controller of the churchMouseApp
 */

angular.module('churchMouseApp')
    .controller('FunTimeCtrl', function ($scope, $http) {
        $http.get('/json/masters.json').success(function(data) {
            $scope.masters = data;
        });
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
