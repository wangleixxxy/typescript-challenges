// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>
];

// ============= Your Code Here =============
/**
 * 1、判断neve
 * 2、数组可能为空
 */
// type IsTuple<T> = [T] extends [never]
//   ? false
//   : T extends readonly any[] // 这里有问题
//   ? true
//   : false;

/**
 * 方法1
 */
// type IsTuple<T> = [T] extends [never]
//   ? false
//   : T extends readonly [any?]
//   ? true
//   : false;

/**
 * 方法2
 * 判断数组的情况
 */
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [infer F, ...infer Rest] | []
  ? true
  : false;
