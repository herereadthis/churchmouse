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
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'humanTimeFilter'
  ])
  .config(
  [
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/human-time', {
          templateUrl: 'scripts/componentDemo/humantime/human-time-view.html',
          controller: 'HumanTimeController'
      })
      .when('/table-sort', {
          templateUrl: 'scripts/componentDemo/tableSort/table-sort-view.html',
          controller: 'TableSortController'
      })
      .otherwise({
        redirectTo: '/'
      });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }]);
