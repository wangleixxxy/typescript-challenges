// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
];

// ============= Your Code Here =============
type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
// 如果是空，返回never,否则返回第一个元素的类型
type First2<T extends (string | number)[]> = T extends [] ? never : T[0];
