'use strict';


/* services */
var financeServices = angular.module('financeServices', []);

financeServices.factory('currencyConverter', function() {
        var currencies, usdToForeignRates, convert;

        currencies = ['EUR', 'USD', 'CNY'];
        usdToForeignRates = {
            'USD': 1,
            'EUR': 0.74,
            'CNY': 6.09
        };
        convert = function(amount, inCurrency, outCurrency) {
            var conversionRate = usdToForeignRates[outCurrency] / usdToForeignRates[inCurrency];
            return amount * conversionRate;
        };

        return {
            currencies: currencies,
            convert: convert
        };
    });