(function() {
    'use strict';

    angular.module('angular1-filters')
        .filter('percentage', ['$filter', function($filter) {
            return function(input, decimals) {
                decimals = decimals ? decimals : 2;
                if (!input) {
                    return $filter('number')(0, decimals) + '%';
                }
                return $filter('number')(input, decimals) + '%';
            };
        }]);
}());
