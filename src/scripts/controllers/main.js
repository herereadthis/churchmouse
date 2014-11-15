'use strict';


angular.module('churchMouseApp')
    .controller('MainController', [
        '$scope',
        '$window',
        'greeter',
        'Lineage',
        function ($scope, $window, greeter, Lineage) {

        // $window.console.log('asdf');
        $scope.awesomeThings = [
            '12345678',
            'AngularJS',
            'Karma'
        ];
        // $window.console.log('asdf');
        $scope.masters = Lineage.query();
        // greeter service!
        greeter.greet('world');
    }]);
