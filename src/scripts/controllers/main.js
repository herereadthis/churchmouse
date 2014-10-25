'use strict';

/**
 * @ngdoc function
 * @name churchMouseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the churchMouseApp
 */
angular.module('churchMouseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
