'use strict';


angular.module('churchMouseApp')
    .controller('FaqController', ['$scope', 'Faqs', function ($scope, Faqs) {

        $scope.awesomeThings = [
            '12345678',
            'AngularJS',
            'Karma'
        ];
        $scope.faq = Faqs.query();
    }]);
