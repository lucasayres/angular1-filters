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
- [`date`](#date)
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

### date

A filter to formats a date to a specified format.

**Parameters:** date : [format (default '')]

```format``` string can be composed of the following elements:

* ```'yyyy'```: 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
* ```'yy'```: 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
* ```'y'```: 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
* ```'MMMM'```: Month in year (January-December)
* ```'MMM'```: Month in year (Jan-Dec)
* ```'MM'```: Month in year, padded (01-12)
* ```'M'```: Month in year (1-12)
* ```'LLLL'```: Stand-alone month in year (January-December)
* ```'dd'```: Day in month, padded (01-31)
* ```'d'```: Day in month (1-31)
* ```'EEEE'```: Day in Week,(Sunday-Saturday)
* ```'EEE'```: Day in Week, (Sun-Sat)
* ```'HH'```: Hour in day, padded (00-23)
* ```'H'```: Hour in day (0-23)
* ```'hh'```: Hour in AM/PM, padded (01-12)
* ```'h'```: Hour in AM/PM, (1-12)
* ```'mm'```: Minute in hour, padded (00-59)
* ```'m'```: Minute in hour (0-59)
* ```'ss'```: Second in minute, padded (00-59)
* ```'s'```: Second in minute (0-59)
* ```'sss'```: Millisecond in second, padded (000-999)
* ```'a'```: AM/PM marker
* ```'Z'```: 4 digit (+sign) representation of the timezone offset (-1200-+1200)
* ```'ww'```: Week of year, padded (00-53). Week 01 is the week with the first Thursday of the year
* ```'w'```: Week of year (0-53). Week 1 is the week with the first Thursday of the year
* ```'G'```, ```'GG'```, ```'GGG'```: The abbreviated form of the era string (e.g. 'AD')
* ```'GGGG'```: The long form of the era string (e.g. 'Anno Domini')
* ```'medium'```: equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 PM)
* ```'short'```: equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 PM)
* ```'fullDate'```: equivalent to 'EEEE, MMMM d, y' for en_US locale (e.g. Friday, September 3, 2010)
* ```'longDate'```: equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010)
* ```'mediumDate'```: equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
* ```'shortDate'```: equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
* ```'mediumTime'```: equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 PM)
* ```'shortTime'```: equivalent to 'h:mm a' for en_US locale (e.g. 12:05 PM)

```html
Input:
{{ date_expression | date }}
{{ date_expression | date : 'yyyy-MM-dd' }}
{{ date_expression | date : 'dd/MM/yyyy' }}
{{ date_expression | date : 'dd/MM/yyyy h:mm' }}

Output:
Apr 01, 1993
1993-04-01
01/04/1993
01/04/1993 15:00
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

## Contributing

- Any contribution is appreciated.
- If you are planning to add a new filter (or any other feature), please open an issue before.
- Do you need a specific filter? Please open an issue that we will develop for you.

#### Submitting a Pull Request (PR)

1. Clone the project:
  ```
  $ git clone https://github.com/lucasayres/angular1-filters.git
  ```

2. Make your changes in a new git branch:
  ```
  $ git checkout -b my-branch master
  ```

3. Add your changes.

4. Push your branch to Github.

5. Create a PR to master.
