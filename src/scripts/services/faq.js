'use strict';

var faqService = angular.module('faqService', []);

faqService.factory('Faqs', ['$resource', function($resource) {
        return $resource('/json/faq.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: false
            }
        });
    }]);