
var assert = require('assert')
var bcrypt = require('..')

describe('bcrypt', function () {
  describe('.hash', function () {
    it('(password)', function () {
      return bcrypt.hash('password').then(function (hash) {
        assert(typeof hash === 'string')
      })
    })

    it('(password, salt)', function () {
      return bcrypt.hash('password', 10).then(function (hash) {
        assert(typeof hash === 'string')
      })
    })
  })

  describe('.compare', function () {
    it('should return `true` for valid passwords', function () {
      return bcrypt.hash('password').then(function (hash) {
        return bcrypt.compare('password', hash)
      }).then(function (valid) {
        assert(valid === true)
      })
    })

    it('should return `false` for iinvalid passwords', function () {
      return bcrypt.hash('password').then(function (hash) {
        return bcrypt.compare('kljasdjfhaskdf', hash)
      }).then(function (valid) {
        assert(valid === false)
      })
    })
  })
})
