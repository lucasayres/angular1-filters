# Angular1-filters

A collection of useful filters for [AngularJS](http://angularjs.org/).

## Install

You can install the latest version of `angular1-filters` with `npm`:


```bash
$ npm install algular1-filters --save
```

After running just put inside the modules of your application:

```javascript
var app = angular.module('myApp', ['ngSanitize','angular1-filters']);
```

## How to use

To apply a filter:

```html
{{value | name_of_filter}}
```

## Filters

The included filters are:

- [`reverse`](#reverse)

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

## Demo Page

More examples in http://lucasayres.github.io/angular1-filters
