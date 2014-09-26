'use strict';

/**
 * @ngdoc function
 * @name churchmouseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the churchmouseApp
 */
angular.module('churchmouseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
