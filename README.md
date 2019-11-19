# smol-jsonp

small, promise-based, zero-dependency jsonp library for browsers. ~330b gzip

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/smol-jsonp.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/smol-jsonp
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install smol-jsonp
```

## Usage

```js
var jsonp = require('smol-jsonp')

async function main () {
  // does <script src="http://some-jsonp-url?query=etc&callback={NAME}"></script>
  var result = await jsonp('http://some-jsonp-url?query=etc')
  // does <script src="http://some-jsonp-url?cb={NAME}"></script>
  var result2 = await jsonp('http://some-jsonp-url', { param: 'cb' })
}
```

This package uses a global variable `window.__jsonpCallbacks` to register callbacks. Do not touch it.

## License

[Apache-2.0](LICENSE.md)
