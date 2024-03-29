// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
];

// ============= Your Code Here =============
// type Reverse<T extends any[], U extends any[] = []> = T extends [
//   infer F,
//   ...infer Rest
// ]
//   ? Reverse<Rest, [F, ...U]>
//   : U;

/**
 * 方法2
 */
type Reverse<T> = T extends [...infer R, infer K] ? [K, ...Reverse<R>] : [];
