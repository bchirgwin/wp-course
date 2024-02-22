import { describe, it, expect } from '@jest/globals';
import { removeDuplicates } from './04-removeDups';

describe('removeDuplicates', () => {
  it('[1,2,3,3,4,4,5,5,6,6] should equal [1,2,3,4,5,6]', () => {
    expect(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
