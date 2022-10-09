// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type TupleToUnion<T> = T extends unknown[] ? T[number] : T;
type Without<T, U, K = TupleToUnion<U>> = T extends [infer F, ...infer R]
  ? F extends K
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : [];

type a = TupleToUnion<1>; // 1
type b = TupleToUnion<[1, 2, 3]>; // 1 | 2 | 3
