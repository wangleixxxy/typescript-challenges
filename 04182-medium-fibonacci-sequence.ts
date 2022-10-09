// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

// ============= Your Code Here =============
// type Fibonacci<T extends number> = any

/**
 * 初始值
 */
// type Fibonacci<
//   T extends number,
//   No extends 1[] = [1, 1, 1],
//   N_2 extends 1[] = [1],
//   N_1 extends 1[] = [1]
// > = any;

/**
 * 前2项固定值，都是1
 * 中间any的部分就是递归部分
 */
// type Fibonacci<
//   T extends number,
//   No extends 1[] = [1, 1, 1],
//   N_2 extends 1[] = [1],
//   N_1 extends 1[] = [1]
// > = T extends 1 | 2
//   ? 1
//   : T extends No['length']
//   ? [...N_2, ...N_1]['length']
//   : any;

/**
 * https://github.com/type-challenges/type-challenges/issues/16384
 */
type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = T extends 1 | 2
  ? 1
  : T extends No['length']
  ? [...N_2, ...N_1]['length']
  : Fibonacci<T, [...No, 1], N_1, [...N_2, ...N_1]>;
