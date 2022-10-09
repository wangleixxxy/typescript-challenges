// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
];

// ============= Your Code Here =============
/**
 * 递归为数组添加元素，当长度优先达到 T 的值时，结果为 false，当长度优先达到 U 的值时，结果为 true
 * https://github.com/type-challenges/type-challenges/issues/17146
 */
type GreaterThan<
  T extends number,
  U extends number,
  Arr extends 0[] = []
> = Arr['length'] extends T
  ? false
  : Arr['length'] extends U
  ? true
  : GreaterThan<T, U, [...Arr, 0]>;

// 小于
type LessThan<
  T extends number,
  U extends number,
  Arr extends 0[] = []
> = Arr['length'] extends T
  ? true
  : Arr['length'] extends U
  ? false
  : LessThan<T, U, [...Arr, 0]>;
