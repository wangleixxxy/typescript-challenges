// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<['a', 'b', 'c'], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];

// ============= Your Code Here =============

/**
 * 尝试失败
 */
// type TupleToNestedObject<T extends readonly any[], U> = {
//   [P in T[number]]: any;
// };

type TupleToNestedObject<T, U> = T extends [infer F, ...infer Rest]
  ? F extends string | number | symbol
    ? { [K in F]: TupleToNestedObject<Rest, U> }
    : U
  : U;
