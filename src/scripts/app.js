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
        'ngTouch',
        'churchMouseFilters',
        'financeServices',
        'greeterService',
        'lineageService'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            title: '',
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/drag', {
            templateUrl: 'scripts/components/drag/my-draggable.html',
            controller: 'DragController'
        })
        .when('/foobar', {
            templateUrl: 'scripts/components/foobar/foobar-view.html',
            controller: 'FoobarController'
        })
        .when('/funtime', {
            templateUrl: 'scripts/components/funtime/funtime.html',
            controller: 'FunTimeCtrl'
        })
        .when('/invoice', {
            templateUrl: 'views/invoice.html',
            controller: 'InvoiceCtrl'
        })
        .when('/forms', {
            templateUrl: 'views/forms.html',
            controller: 'FormsCtrl'
        })
        .when('/tabs', {
            templateUrl: 'scripts/components/tabs/tabs.html',
            controller: 'TabsController'
        })
        .when('/time', {
            templateUrl: 'views/time.html',
            controller: 'TimeController'
        })
        .when('/transclude', {
            title: 'Transclude View',
            templateUrl: 'scripts/components/transclude/transclude.html',
            controller: 'TranscludeController'
        })
        .otherwise({
            redirectTo: '/'
        });
    })
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            var viewTitle = current.$$route.title,
                defaultTitle = 'Northern Virginia Kyudo Renmei';
            $rootScope.title = defaultTitle;
            if (viewTitle !== '') {
                $rootScope.title = viewTitle + ' &mdash; ' + defaultTitle;
            }
        });
    }]);
