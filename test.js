const test = require('brittle')
const trigger = require('./')

test('pass', t => {
  t.ok(trigger())
})
