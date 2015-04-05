'use strict';

// draws heavily from http://jsfiddle.net/jaredwilli/SfJ8c/
angular.module('churchMouseApp')
    .controller('pageArticleController', ['$scope', function($scope) {
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
            link: function(scope, element, attrs) {
                element.find('.bellmaker_container').css({
                    height: 'auto',
                    minHeight: '0'
                });
            },
            templateUrl: '/scripts/components/pageArticle/page-article.html'
        };
    });