// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>
];

// ============= Your Code Here =============
/**
 * 如果使用 数组长度，使用一个Res数组，保存之前的值
 */
// type IndexOf<T extends any[], U> = T extends [infer F, ...infer R]
//   ? F extends U
//     ? any
//     : IndexOf<R, U>
//   : any;

type IndexOf<T extends any[], U, Res extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Equal<F, U> extends true
    ? Res['length']
    : IndexOf<R, U, [...Res, F]>
  : -1;
