'use strict';

angular.module('churchMouseApp')
    .controller('MastersController', ['$scope', 'Lineage', function($scope, Lineage) {
        $scope.masters = Lineage.query();
        $scope.masters.$promise.then(function(result) {
            $scope.masters = result;
            $scope.selectedTab = $scope.masters[0].id;
            $scope.initialDescription = $scope.masters[0].description;
            $scope.masterDescription = $scope.initialDescription;
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
                $scope.selectedTab = $scope.masters[index].id;
            };
        });
    }]);
/*
    .controller('MastersController', ['$scope', '$http', function($scope, $http) {
        $http.get('/json/masters.json').success(function(data) {
            $scope.masters = data;
            $scope.selectedTab = $scope.masters[0].id;
            $scope.initialDescription = $scope.masters[0].description;
            $scope.masterDescription = $scope.initialDescription;

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
                $scope.selectedTab = $scope.masters[index].id;
            };
        });
    }]);
    */