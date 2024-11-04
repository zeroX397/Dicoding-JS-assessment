import sum from './index.js';
import assert from 'node:assert';
import test from 'node:test';

console.log('Both positives')
console.log(sum(3, 5))
console.log(sum(10, 20), '\n')
test('Sum should return the sum of two (+) numbers', () => {
  assert.strictEqual(sum(3, 5), 8);
  assert.strictEqual(sum(10, 20), 30);
});

console.log('Any is not a number')
console.log(sum(3, '5'))
console.log(sum('a', 20), '\n')
test('Sum should return 0 if any parameter is not a number', () => {
  assert.strictEqual(sum(3, '5'), 0);
  assert.strictEqual(sum('a', 5), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(3, undefined), 0);
  assert.strictEqual(sum([], {}), 0);
});

console.log('Any negatives')
console.log(sum(-3, 5))
console.log(sum(6, -9), '\n')
test('Sum should return 0 if any parameter is a (-) number', () => {
  assert.strictEqual(sum(-3, 5), 0);
  assert.strictEqual(sum(6, -9), 0);
  assert.strictEqual(sum(-3, -5), 0);
});

console.log('Zero (0) is a valid')
console.log(sum(0, 7))
console.log(sum(4, 0), '\n')
test('Sum should handle zero as a valid input', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(3, 0), 3);
  assert.strictEqual(sum(0, 0), 0);
});
