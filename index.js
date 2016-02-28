
var Promise = require('any-promise')
var bcrypt = require('bcrypt')

exports.hash = function (password, salt) {
  salt = salt || 10
  return new Promise(function (resolve, reject) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return reject(err)
      resolve(hash)
    })
  })
}

exports.compare = function (expected, hash) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(expected, hash, function (err, res) {
      if (err) return reject(err)
      resolve(res)
    })
  })
}
