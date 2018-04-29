(function() {
    'use strict';

    angular.module('angular1-filters', []);
}());

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

    angular.module('angular1-filters')
        .filter('cep', [function() {
            return function(input) {
                var i,
                    tam = 8,
                    str = input + '',
                    jump = tam - str.length;
                if (str.length < tam) {
                    for (i = 0; i < jump; i++) {
                        str = '0' + str;
                    }
                }
                str = str.replace(/\D/g, '');
                str = str.replace(/^(\d{5})(\d)/, "$1-$2");
                return str;
            };
        }]);

    angular.module('angular1-filters')
        .filter('cnpj', [function() {
            return function(input) {
                var i,
                    tam = 14,
                    str = input + '',
                    jump = tam - str.length;
                if (str.length < tam) {
                    for (i = 0; i < jump; i++) {
                        str = '0' + str;
                    }
                }
                str = str.replace(/\D/g, '');
                str = str.replace(/^(\d{2})(\d)/, '$1.$2');
                str = str.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                str = str.replace(/\.(\d{3})(\d)/, '.$1/$2');
                str = str.replace(/(\d{4})(\d)/, '$1-$2');
                return str;
            };
        }]);

    angular.module('angular1-filters')
        .filter('cpf', [function() {
            return function(input) {
                var i,
                    tam = 11,
                    str = input + '',
                    jump = tam - str.length;
                if (str.length < tam) {
                    for (i = 0; i < jump; i++) {
                        str = '0' + str;
                    }
                }
                str = str.replace(/\D/g, '');
                str = str.replace(/(\d{3})(\d)/, "$1.$2");
                str = str.replace(/(\d{3})(\d)/, "$1.$2");
                str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                return str;
            };
        }]);

    angular.module('angular1-filters')
        .filter('cpfCnpj', ['$filter', function($filter) {
            return function(input) {
                var i,
                    tam,
                    jump,
                    str = input + '';
                if (str.length <= 11) {
                    tam = 11;
                    jump = tam - str.length;
                    if (str.length < tam) {
                        for (i = 0; i < jump; i++) {
                            str = '0' + str;
                        }
                    }
                    str = str.replace(/\D/g, '');
                    str = str.replace(/(\d{3})(\d)/, "$1.$2");
                    str = str.replace(/(\d{3})(\d)/, "$1.$2");
                    str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                } else {
                    tam = 14;
                    jump = tam - str.length;
                    if (str.length < tam) {
                        for (i = 0; i < jump; i++) {
                            str = '0' + str;
                        }
                    }
                    str = str.replace(/\D/g, '');
                    str = str.replace(/^(\d{2})(\d)/, '$1.$2');
                    str = str.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                    str = str.replace(/\.(\d{3})(\d)/, '.$1/$2');
                    str = str.replace(/(\d{4})(\d)/, '$1-$2');
                }
                return str;
            };
        }]);

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

    angular.module('angular1-filters')
        .filter('join', [function() {
            return function(input, separator) {
                if (!Array.isArray(input)) {
                    return input;
                }

                var filtered = [];
                input.forEach(function(item) {
                    if (item) {
                        filtered.push(item);
                    }
                });

                return filtered.join(separator || ',');
            };
        }]);

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

    angular.module('angular1-filters')
        .filter('phone', [function() {
            return function(input) {
                var str = input + '';
                str = str.replace(/\D/g, '');
                if (str.length === 11) {
                    str = str.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                } else {
                    str = str.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                }
                return str;
            };
        }]);

    angular.module('angular1-filters')
        .filter('replace', [function() {
            function isString(input) {
                return typeof input === 'string' || input instanceof String;
            }

            return function(input, searchValue, newValue) {
                if (!isString(input) || !isString(searchValue) || !isString(newValue))
                    return input;

                return input.split(searchValue).join(newValue);
            };
        }]);

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
