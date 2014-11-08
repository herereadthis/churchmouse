'use strict';

/* Filters */
// angular.module('churchMouseFilters', []).filter('returnHtml', ['$sce'], function($sce) {
//     // return HTML in JSON as actual HTML
//     return function(text) {
//         return text;
//     };
// });

angular.module('churchMouseFilters', []).filter('foobar', function() {
    // return HTML in JSON as actual HTML
    return function(input) {
        if (input === 1) {
            return 'one';
        }
        else if (input === 2) {
            return 'two';
        }
        else if (input === 3) {
            return 'three';
        }
        else if (input === 4) {
            return 'four';
        }
        else {
            return 'number';
        }
    };
});
