'use strict';

var lineageService = angular.module('lineageService', []);

lineageService.factory('Lineage', ['$resource', function($resource) {
        return $resource('/json/masters.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: true
            }
        });
    }]);