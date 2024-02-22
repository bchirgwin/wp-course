import { describe, expect, test } from '@jest/globals';
import { isOldEnough } from './02-age-verify';

describe('isOldEnough', () => {
  test('Age of 17 should be false', () => {
    expect(isOldEnough(17)).toBe(false);
  });

  test('Age of 18 should be true', () => {
    expect(isOldEnough(18)).toBe(true);
  });

  test('Age of 19 should be true', () => {
    expect(isOldEnough(19)).toBe(true);
  });
});
