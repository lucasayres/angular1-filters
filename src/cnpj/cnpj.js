(function() {
    'use strict';

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
}());
