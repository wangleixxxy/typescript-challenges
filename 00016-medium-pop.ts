// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>
];

// ============= Your Code Here =============
/**
 * 空数字无法通过测试用例，即第三个用例无法通过
 */
// type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : never;

/**
 * 三元表达式最后写为[],即可满足条件
 */
type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : [];
