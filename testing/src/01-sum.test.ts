import { describe, expect, test } from '@jest/globals';
import { sum } from './01-sum';

describe('sum module', () => {
  test('add 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
