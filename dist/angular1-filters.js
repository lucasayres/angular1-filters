(function() {
    'use strict';

    angular.module('angular1-filters', []);
}());

(function() {
    'use strict';

    angular.module('angular1-filters')
        .filter('reverse', [function() {
            function reverseArray(items) {
                return items.slice().reverse();
            }

            function reverseString(input) {
                var i, result = '';
                for (i = 0; i < input.length; i++) {
                    result = input.charAt(i) + result;
                }
                return result;
            }

            return function(input) {
                if (Array.isArray(input)) {
                    return reverseArray(input);
                }

                if (typeof input === 'string' || input instanceof String) {
                    return reverseString(input);
                }

                return input;
            };
        }]);
}());
