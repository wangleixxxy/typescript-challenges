// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>
];

// ============= Your Code Here =============
/**
 * 方法1
 */
type ConstructTuple1<L extends number, Result extends unknown[] = []> = Equal<
  L,
  0
> extends true
  ? Result
  : Equal<L, Result['length']> extends true
  ? Result
  : ConstructTuple<L, [...Result, unknown]>;

/**
 * 方法2
 */
type ConstructTuple<
  L extends number,
  Result extends unknown[] = []
> = Result['length'] extends L
  ? Result
  : ConstructTuple<L, [...Result, unknown]>;
