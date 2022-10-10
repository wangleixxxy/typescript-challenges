// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<
    Equal<
      Combination<['foo', 'bar', 'baz']>,
      | 'foo'
      | 'bar'
      | 'baz'
      | 'foo bar'
      | 'foo bar baz'
      | 'foo baz'
      | 'foo baz bar'
      | 'bar foo'
      | 'bar foo baz'
      | 'bar baz'
      | 'bar baz foo'
      | 'baz foo'
      | 'baz foo bar'
      | 'baz bar'
      | 'baz bar foo'
    >
  >
];

// ============= Your Code Here =============
/**
 * https://github.com/type-challenges/type-challenges/issues/16695
 */
type Combination<
  T extends string[],
  All extends string = T[number],
  Current extends string = All
> = Current extends string
  ? Current | `${Current} ${Combination<[], Exclude<All, Current>>}`
  : never;
type test = Combination<['foo', 'bar', 'baz']>;

// type Combination<
//   T extends string[],
//   All = T[number],
//   One = All
// > = One extends string
//   ? One | `${One} ${Combination<[], Exclude<All, One>>}`
//   : never;
// type test = Combination<['foo', 'bar', 'baz']>;

/**
 * https://github.com/type-challenges/type-challenges/issues/12024
 */
// type Combination<
//   T extends string[],
//   U = T[number],
//   A = U
// > = U extends infer U extends string
//   ? `${U} ${Combination<T, Exclude<A, U>>}` | U
//   : never;
// type test = Combination<['foo', 'bar', 'baz']>;

/**
 * https://github.com/type-challenges/type-challenges/issues/11075
 */
// type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
//   ? [F, ...Subsequence<R>] | Subsequence<R>
//   : [];

// type Join<
//   T extends Array<unknown>,
//   U extends string | number,
//   S extends string = ''
// > = T extends [infer F extends string | number, ...infer R]
//   ? Join<R, U, S extends '' ? `${F}` : `${S}${U}${F}`>
//   : S;

// type Permutation<T extends keyof any> = [T] extends [never]
//   ? []
//   : {
//       [TT in T]: [TT, ...Permutation<Exclude<T, TT>>];
//     }[T];

// type Combination<T extends string[]> = Exclude<
//   Join<Subsequence<Permutation<T[number]>>, ' '>,
//   ''
// >;

// type test = Combination<['foo', 'bar', 'baz']>;
