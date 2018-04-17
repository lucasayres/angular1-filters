(function() {
    'use strict';

    angular.module('angular1-filters')
        .filter('age', [function() {
            return function(input) {
                var ageDiffMs = Date.now() - new Date(input).getTime();
                var ageDate = new Date(ageDiffMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            };
        }]);
}());
