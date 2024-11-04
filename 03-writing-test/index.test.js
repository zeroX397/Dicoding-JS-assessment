import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

var hasil = sum(1, 2);
console.log(hasil);

test('Test function sum', () => {
  assert.equal(sum(1, 2), 3);
  assert.equal(sum(-1, -1), -2);
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(10, 5), 15, '10 + 5 should equal 15');
});
