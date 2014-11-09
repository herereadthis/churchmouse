'use strict';

angular.module('churchMouseApp')
    .controller('MastersController', ['$scope', '$http', function($scope, $http) {
        $http.get('/json/masters.json').success(function(data) {
            $scope.masters = data;
            $scope.selectedTab = $scope.masters[0].id;
            $scope.initialDescription = $scope.masters[0].description;
            $scope.masterDescription = $scope.initialDescription;
            console.log($scope.initialMaster);


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
        // console.log($scope.initialMaster);
        // $scope.masters = $http.get('/json/masters.json');
        // window.console.log(masters);
        // for (var i in $scope.masters) {
        //     window.console.log($scope.masters[i]);
        // }
        // $scope.activeMaster = $scope.masters[1];
        // window.console.log($scope.masters);
        // $scope.activeTab = function(masterId) {
        //     $scope.activeMaster = masterId;
        // };
    }]);