// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];

// ============= Your Code Here =============
/**
 * https://github.com/type-challenges/type-challenges/issues/17172
 */
type Zip<T, U> = T extends [infer F, ...infer R]
  ? U extends [infer K, ...infer KR]
    ? [[F, K], ...Zip<R, KR>]
    : []
  : [];
