// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>
];

// ============= Your Code Here =============
/**
 * 拆分的不对
 */
// type Trunc<T extends number | string> = `${T}` extends `${infer F}${infer R}`
//   ? F extends '.'
//     ? T
//     : Trunc<R>
//   : '';

/**
 * 最后一个用例无法通过，全是整数的情况
 */
// type Trunc<T extends number | string> = `${T}` extends `${infer F}.${infer R}`
//   ? F
//   : T;

/**
 * 最后改为 `${T}`
 */
type Trunc<T extends number | string> = `${T}` extends `${infer F}.${infer R}`
  ? F
  : `${T}`;
