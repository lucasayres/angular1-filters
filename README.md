# Angular1-filters

[![npm version](https://img.shields.io/npm/v/angular1-filters.svg)](https://www.npmjs.com/package/angular1-filters)
[![Bower version](https://img.shields.io/bower/v/angular1-filters.svg)](https://bower.io/search/?q=angular1-filters)

[![NPM](https://nodei.co/npm/angular1-filters.png?downloads=true&stars=true)](https://nodei.co/npm/angular1-filters/)

A collection of useful filters for [AngularJS](http://angularjs.org/).

## Install

You can install the latest version of `angular1-filters` with `npm` or `bower`:

### npm

```bash
$ npm install --save angular1-filters
```

### bower

```bash
$ bower install --save angular1-filters
```

After running just put inside the modules of your application:

```javascript
var app = angular.module('myApp', ['ngSanitize', 'angular1-filters']);
```

## How to use

To apply a filter:

```html
{{value | name_of_filter}}
```

## Filters

The included filters are:

- [`age`](#age)
- [`cep`](#cep)
- [`cnpj`](#cnpj)
- [`cpf`](#cpf)
- [`cpfCnpj`](#cpfCnpj)
- [`join`](#join)
- [`money`](#money)
- [`percentage`](#percentage)
- [`phone`](#phone)
- [`replace`](#replace)
- [`reverse`](#reverse)

### age

A filter that converts date to age.

```html
Input:
{{ '1993-04-01' | age }}
{{ '01/04/1993' | age }}
{{ new Date('1993-04-01') | age }}

Output:
25
25
25
```

### cep

A filter to return a number formatted as a cep.

```html
Input:
{{ '47658245' | cep }}

Output:
47658-245
```

### cnpj

A filter to return a number formatted as a cnpj.

```html
Input:
{{ '71619383000129' | cnpj }}

Output:
71.619.383/0001-29
```

### cpf

A filter to return a number formatted as a cpf.

```html
Input:
{{ '08369635040' | cpf }}

Output:
083.696.350-40
```

### cpfCnpj

A filter to return a number formatted as a cpf or cnpj.

```html
Input:
{{ '08369635040' | cpfCnpj }}
{{ '71619383000129' | cpfCnpj }}

Output:
083.696.350-40
71.619.383/0001-29
```

### join

A filter to join an array into a string.
**Parameters:** join : [separator (default ',')]

```html
Input:
{{ [1, 2, 3] | join }}
{{ [1, null, 2, undefined, 3] | join }}
{{ [1, 2, 3] | join:', ' }}

Output:
1,2,3
1,2,3
1, 2, 3
```

### money

A filter to return a float formatted as a money.
**Parameters:** money : [symbol (default '')] : [precision (default 2)] : [decimals (default '.')] : [thousands (default ',')]

```html
Input:
{{ 1000000 | money }}
{{ 1000000 | money : 'R$ ' : 2 : ',' : '.' }}
{{ 1000000 | money : '$ ' : 2 : '.' : ',' }}

Output:
1,000,000.00
R$ 1.000.000,00
$ 1,000,000.00
```

### percentage

A filter to return a number formatted as a percentage.
**Parameters:** percentage : [decimals (default 2)]

```html
Input:
{{ 100 | percentage }}
{{ 100 | percentage : 0 }}
{{ null | percentage }}
{{ undefined | percentage }}
{{ 0 | percentage : 0 }}
{{ 10.5 | percentage }}

Output:
100,00%
100%
0,00%
0,00%
0%
10,50%
```

### phone

A filter to return a number formatted as a phone.

```html
Input:
{{ '71999999999' | phone }}
{{ '7199999999' | phone }}

Output:
(71) 99999-9999
(71) 9999-9999
```

### replace

A filter to replace string content.
**Parameters:** replace : [searchValue] : [newValue]

```html
Input:
{{ 'abcdfff' | replace : 'f' : 'e' }}
{{ 'lucas' | replace : 'lucas' : 'ayres' }}

Output:
abcde
ayres
```

### reverse

A filter to reverse order of arrays or strings.

```html
Input:
{{ 'abcde' | reverse }}
{{ [1, 2, 3] | reverse }}

Output:
edcba
[3, 2, 1]
```
