'use strict';


angular.module('churchMouseApp')
    .controller('TimeController', ['$scope', function ($scope) {
        $scope.foo = 'foo';
        $scope.format = 'M/d/yy h:mm:ss a';
    }])
    .directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
        return {
            // directives that want to manipulate the DOM use Link function
            // scope is scope object
            // element is the element that the directive matches
            // is a hash object with key-value pairs of normalized attribute 
            // names and their corresponding attribute values....what?
            link: function(scope, element, attrs) {
                var format,
                    timeoutId,
                    updateTime;

                updateTime = function() {
                    element.text(dateFilter(new Date(), format));
                };
                scope.$watch(attrs.myCurrentTime, function(value) {
                    format = value;
                    updateTime();
                });

                element.on('$destroy', function() {
                    $interval.cancel(timeoutId);
                });

                // start the UI update process; save the timeoutId for cancelling
                timeoutId = $interval(function() {
                    updateTime();
                }, 1000);
            }
        };
    }]);
