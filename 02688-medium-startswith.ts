// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>
];

// ============= Your Code Here =============
/**
 * 测试用例2、4、6不通过，只能通过false的
 * 第一个字母属于U，才能通过
 */
// type StartsWith<
//   T extends string,
//   U extends string
// > = T extends `${infer L}${infer Rest}` ? (L extends U ? true : false) : false;

/**
 * 递归执行，也尝试失败
 */
// type StartsWith<
//   T extends string,
//   U extends string
// > = T extends `${infer L}${infer Rest}`
//   ? L extends U
//     ? StartsWith<Rest, U>
//     : false
//   : false;

type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? true : false;
