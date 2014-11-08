'use strict';

/**
 * @ngdoc overview
 * @name churchMouseApp
 * @description
 * # churchMouseApp
 *
 * Main module of the application.
 */
angular
    .module('churchMouseApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/funtime', {
            templateUrl: 'views/funtime.html',
            controller: 'FunTimeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
