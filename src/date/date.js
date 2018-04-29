(function() {
    'use strict';

    angular.module('angular1-filters')
        .filter('date', ['$filter', function($filter) {
            return function(input, format) {
                if (input === null) {
                    return '';
                }
                format = format ? format : '';
                return ($filter('date')(new Date(input), format)).toUpperCase();
            };
        }]);
}());
