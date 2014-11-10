'use strict';

// draws heavily from http://jsfiddle.net/jaredwilli/SfJ8c/
angular.module('churchMouseApp')
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.lineage = {
            name: 'lineage',
            foo: 'foo',
            bar: 'bar'
        };
    }])
    .directive('pageArticle', function() {
        return {
            restrict: 'A',
            scope: {
                articleName: '='
            },
            templateUrl: '/views/page-article.html'
        };
    });