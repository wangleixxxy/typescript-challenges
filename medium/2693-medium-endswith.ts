/**
 * EndsWith
 * 实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false
 */

/* _____________ 你的代码 _____________ */

type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}`
  ? true
  : false;

/* _____________ 测试用例 _____________ */
type Result6 = EndsWith<'abc', 'bc'>; // true
type Result7 = EndsWith<'abc', 'abc'>; // true
type Result8 = EndsWith<'abc', 'd'>; // false
