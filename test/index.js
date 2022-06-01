'use strict'

const jsonp = require('../')
const tape = require('tape')

tape('try it', function (t) {
  jsonp('http://localhost:' + process.env.PORT).then(function (result) {
    t.ok(result.ok)
    t.end()
  }).catch(t.fail)
})
