# Angular1-filters

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

- [`reverse`](#reverse)
- [`money`](#money)

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

### money

A filter to add money mask.  
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
