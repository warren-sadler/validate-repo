const test = require('node:test');
const assert = require('node:assert');
const greet = require('./greet');

test('greet returns the correct greeting for Kiln', () => {
  assert.strictEqual(greet('Kiln'), 'Hello, Kiln!');
});
