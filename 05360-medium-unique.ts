// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
];

// ============= Your Code Here =============
// type TupleToUnion<T> = T extends any[] ? T[number] : T;
// type Unique<T, K = TupleToUnion<T>, Res extends any[] = []> = T extends [
//   infer F,
//   ...infer R
// ]
//   ? F extends K
//     ? Unique<R, K, [...Res, F]>
//     : Unique<R, K, Res>
//   : Res;

// type a = TupleToUnion<[1, 1, 2, 2, 3, 3]>; // 1 | 2 | 3

/**
 * 判断是否包含
 */
type Includes<T extends any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;
/**
 * 遍历原来数组，判断每一项是否在结果数组中
 * 最后返回结果数组
 */
type Unique<T extends unknown[], Result extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Includes<Result, F> extends true
    ? Unique<R, Result>
    : Unique<R, [...Result, F]>
  : Result;
