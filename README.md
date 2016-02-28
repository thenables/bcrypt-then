
# bcrypt-then

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[bcrypt](https://github.com/ncb000gt/node.bcrypt.js/) as promised.

## API

Only implements two methods:

### bcrypt.hash(password, [iterations]).then( hash => )

Hash a password with a # of `iterations`, defaulting to `10`.

```js
bcrypt.hash('password', 15).then(function (hash) {

})
```

### bcrypt.compare(password, hash).then( valid => )

Compare a password with a bcrypt hash.
Returns a boolean.

```js
bcrypt.compare('password', user.password).then(function (valid) {
  assert(valid)
})
```

[npm-image]: https://img.shields.io/npm/v/bcrypt-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bcrypt-then
[github-tag]: http://img.shields.io/github/tag/thenables/bcrypt-then.svg?style=flat-square
[github-url]: https://github.com/thenables/bcrypt-then/tags
[travis-image]: https://img.shields.io/travis/thenables/bcrypt-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/thenables/bcrypt-then
[coveralls-image]: https://img.shields.io/coveralls/thenables/bcrypt-then.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/thenables/bcrypt-then
[david-image]: http://img.shields.io/david/thenables/bcrypt-then.svg?style=flat-square
[david-url]: https://david-dm.org/thenables/bcrypt-then
[license-image]: http://img.shields.io/npm/l/bcrypt-then.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/bcrypt-then.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/bcrypt-then
