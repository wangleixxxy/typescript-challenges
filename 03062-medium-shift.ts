// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
];

// ============= Your Code Here =============
type Shift<T extends any[]> = T extends [infer F, ...infer Rest]
  ? [...Rest]
  : [];

/**
 * 直接返回Rest
 */
type Shift2<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : [];
