[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-state.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-state) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-state/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-state)

# bespoke-state

Slide-specific deck styles for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Style your entire deck differently based on the active slide.

Classes specified in `data-bespoke-state` attributes will be added to the deck's parent element when the slide is activated.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-state/master/dist/bespoke-state.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-state/master/dist/bespoke-state.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  state = require('bespoke-state');

bespoke.from('article', [
  state()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.state()
]);
```

Finally, add `data-bespoke-state` attributes to your slides.

```html
<article>
  <section>
    Regular deck style
  </section>
  <section data-bespoke-state="special">
    Special deck style
  </section>
  <section data-bespoke-state="super special">
    Super special deck style
  </section>
  <section>
    Regular deck style
  </section>
</article>
```

## Package managers

### npm

```bash
$ npm install bespoke-state
```

### Bower

```bash
$ bower install bespoke-state
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
