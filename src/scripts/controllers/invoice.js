'use strict';

/**
 * @ngdoc function
 * @name churchMouseApp.controller:FunTimeCtrl
 * @description
 * # FunTimeCtrl
 * Controller of the churchMouseApp
 */

angular.module('churchMouseApp')
    .controller('InvoiceCtrl', ['$scope', 'currencyConverter', function ($scope, currencyConverter) {
        window.console.log('foo');
        $scope.foo = 'foo';
        $scope.quantity = 1;
        $scope.cost = 2;
        $scope.currencies = currencyConverter.currencies;

        $scope.currencies = ['EUR', 'USD', 'CNY'];
        $scope.inCurrency = 'EUR';
        $scope.usdToForeignRates = {
            'USD': 1,
            'EUR': 0.74,
            'CNY': 6.09
        };

        $scope.total = function(outCurrency) {
            // return outCurrency;
            var amount = $scope.quantity * $scope.cost;
            return currencyConverter.convert(amount, $scope.inCurrency, outCurrency);
        };
        // var convertCurrency = function(amount, inCurrency, outCurrency) {
        //     // window.console.log($scope.usdToForeignRates[outCurrency] / $scope.usdToForeignRates[inCurrency]);
        //     // window.console.log(amount);
        //     var conversionRate = $scope.usdToForeignRates[outCurrency] / $scope.usdToForeignRates[inCurrency];
        //     return amount * conversionRate;
        // };
    }]);
