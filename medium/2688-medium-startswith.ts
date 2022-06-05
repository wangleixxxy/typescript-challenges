/**
 * StartsWith
 * 实现StartsWith<T, U>,接收两个string类型参数,然后判断T是否以U开头,根据结果返回true或false
 */

/* _____________ 你的代码 _____________ */

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}`
  ? true
  : false;

/* _____________ 测试用例 _____________ */
type Result1 = StartsWith<'abc', 'ac'>; // false
type Result2 = StartsWith<'abc', 'ab'>; // true
type Result3 = StartsWith<'abc', 'abcd'>; // false
type Result4 = StartsWith<'abc', ''>; // true
type Result5 = StartsWith<'abc', ' '>; // false

// ----
/* _____________ 你的代码 _____________ */

type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}`
  ? true
  : false;

/* _____________ 测试用例 _____________ */
type Result6 = EndsWith<'abc', 'bc'>; // true
type Result7 = EndsWith<'abc', 'abc'>; // true
type Result8 = EndsWith<'abc', 'd'>; // false
