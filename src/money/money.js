(function() {
    'use strict';

    angular.module('angular1-filters')
        .filter('money', ['$filter', function($filter) {
            return function(amount, symbol, precision, decimals, thousands) {
                if (!amount) {
                    return 0;
                }
                symbol = symbol ? [symbol, ''].join(' ') : '';
                precision = precision ? precision : 2;
                decimals = decimals ? decimals : '.';
                thousands = thousands ? thousands : ',';
                amount = $filter('currency')(amount, symbol, precision);
                return amount
                    .replace(/\,/g, 'DECIMAL')
                    .replace(/\./g, thousands)
                    .replace(/DECIMAL/g, decimals);
            };
        }]);
}());
