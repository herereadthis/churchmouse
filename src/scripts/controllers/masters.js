'use strict';

angular.module('churchMouseApp')
    .controller('MastersController', ['$scope', '$http', function($scope, $http) {
        $http.get('/json/masters.json').success(function(data) {
            $scope.masters = data;
        });
        $scope.foo = 'foo';
        $scope.toggleMaster = function(masterId) {
            var _i, index;
            for (_i in $scope.masters) {
                if ($scope.masters[_i].id === masterId) {
                    index = _i;
                    break;
                }
            }
            $scope.master = $scope.masters[index];
            $scope.masterDescription = $scope.master.description;
        };
    }]);