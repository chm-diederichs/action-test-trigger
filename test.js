const test = require('brittle')
const trigger = require('./')

test('pass', t => {
  t.not(trigger())
})
