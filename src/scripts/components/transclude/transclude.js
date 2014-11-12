'use strict';


angular.module('churchMouseApp')
    .controller('TranscludeController', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.foobar = {
            foo: 'foo',
            bar: 'bar'
        };
        $scope.firstName = 'tobias';

        $scope.hideDialog = function() {
            $scope.dialogIsHidden = true;
            $timeout(function() {
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    }])
    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                // & binding triggers expression
                'close': '&onClose'
            },
            templateUrl: 'scripts/components/transclude/my-dialog.html'
        };
    });


