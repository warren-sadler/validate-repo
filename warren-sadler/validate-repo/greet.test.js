const test = require('node:test');
const assert = require('node:assert');
const greet = require('./greet');

test('greet returns the correct greeting for Kiln', () => {
  assert.strictEqual(greet('Kiln'), 'Hello, Kiln!');
});

// Regression test: trim surrounding whitespace but preserve internal spaces
test('greet trims surrounding whitespace from the name', () => {
  assert.strictEqual(greet('  Ada Lovelace  '), 'Hello, Ada Lovelace!');
});
