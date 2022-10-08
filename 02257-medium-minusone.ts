// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

// ============= Your Code Here =============
/**
 * 错误，最后一个用例无法通过
 */
// type MinusOne<T extends number, U extends unknown[] = []> = [
//   ...U,
//   unknown
// ]['length'] extends T
//   ? U['length']
//   : MinusOne<T, [...U, unknown]>;

// More, refer to https://github.com/microsoft/TypeScript/issues/49459
type MinusOne<T extends number, ARR extends unknown[] = []> = 0 extends 1
  ? never
  : [...ARR, 1]['length'] extends T
  ? ARR['length']
  : MinusOne<T, [...ARR, 1]>;
