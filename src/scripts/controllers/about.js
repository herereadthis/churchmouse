'use strict';

/**
 * @ngdoc function
 * @name churchMouseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the churchMouseApp
 */
angular.module('churchMouseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 foo',
      'AngularJS',
      'Karma'
    ];
  });
