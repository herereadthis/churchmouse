'use strict';

/**
 * @ngdoc function
 * @name churchmouseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the churchmouseApp
 */
angular.module('churchmouseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
