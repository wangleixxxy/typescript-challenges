// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>
];

// ============= Your Code Here =============
/**
 * 转换为字符串，使用infer
 * 注意：返回的是字符串类型
 */
type Absolute2<T extends number | string | bigint> =
  `${T}` extends `-${infer R}` ? Absolute<R> : `${T}`;

// 方法2
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;
