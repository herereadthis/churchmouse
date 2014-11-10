'use strict';

var lineageService = angular.module('lineageService', []);

lineageService.factory('Lineage', ['$resource', function($resource) {
        window.console.log('asdfasdf');
        return $resource('/json/masters.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: true
            }
        });
    }]);