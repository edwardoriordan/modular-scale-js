modular-scale-js
================

Modular Scales in JavaScript.

> A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
> —Robert Bringhurst

A modular scale is a sequence of numbers that relate to one another in a meaningful way. See http://alistapart.com/article/more-meaningful-typography for more details. They can be used for things like typesetting, page layout, canvas drawings. See http://modularscale.com for the orginal (I think!) implementation on the web.

### API

Create a ModularScale Object with the desired options. See bellow for example with the default options.

```javascript

var modularScaleGolden = new ModularScale({
  baseSize: 16,
  importantNumber: 100,
  ratio: 'golden',
  roundToDecimalPlaces: 2,
  debug: false
});
```

#### baseSize, importantNumber, ratio

See http://alistapart.com/article/more-meaningful-typography for details as to what these are

#### roundToDecimalPlaces

The number of decimal places to round the outputted values to

#### debug

Show the modular scale in the browser console with link to the similar modular scale in http://modularscale.com

### Get scale value

```javascript

var firstNumberInScale = modularScaleGolden.ms(1);
var secondNumberInScale = modularScaleGolden.ms(2);
var eighthNumberInScale = modularScaleGolden.ms(8);

```

### Get property (baseSize, importantNumber, etc)

```javascript

var whatWastheBaseSizeAgain = modularScaleGolden.get('baseSize');

```

### Set property (baseSize, importantNumber, etc)

```javascript

modularScaleGolden.set('baseSize', 24px);

```

## Examples

### Basic typesetting example

See http://edwardoriordan.github.com/modular-scale-js

### Basic canvas example

Coming soon

## Tests

There are Jasmine tests in the /test folder.

## Addition features required

* Work with various css font units (em, rem, percent, etc)
* Allow multiple important numbers

## Thanks

* Tim Brown (@timbrown) - modularscale.com
* Scott Kellum (@scottkellum) - github.com/Team-Sass/modular-scale
* Mason Wendell (@codingdesigner) - github.com/Team-Sass/modular-scale
* Adam Stacoviak (@adamstac) - github.com/Team-Sass/modular-scale