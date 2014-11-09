'use strict';

/**
 * @ngdoc function
 * @name churchMouseApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the churchMouseApp
 */

angular.module('churchMouseApp')
    .controller('FormsCtrl', ['$scope', function ($scope) {
        $scope.foo = 'foo';
        $scope.master = {};

        $scope.save = function(user) {
            $scope.master = angular.copy(user);
        };
        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        }
    }]);
