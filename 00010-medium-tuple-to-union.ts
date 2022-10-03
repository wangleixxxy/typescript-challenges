// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

// ============= Your Code Here =============
/**
 * 方法1
 */
// type TupleToUnion<T extends readonly any[]> = T[number]

/**
 * 方法2
 */
type TupleToUnion<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F | TupleToUnion<R>
  : never;
