/**
 * Absolute
 * 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。
 */

/* _____________ 你的代码 _____________ */

// 方法1
// type Absolute<T extends number | string | bigint> =
//   `${T}` extends `-${infer R}` ? Absolute<R> : `${T}`;

// 方法2
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;

/* _____________ 测试用例 _____________ */

type Result1 = Absolute<0>; // '0'
type Result2 = Absolute<-0>; // '0'
type Result3 = Absolute<10>; // '10'
type Result4 = Absolute<-5>; // '5'
type Result5 = Absolute<'0'>; // '0'
type Result6 = Absolute<'-0'>; // '0'
type Result7 = Absolute<'10'>; // '10'
type Result8 = Absolute<'-5'>; // '5'
type Result9 = Absolute<-1_000_000n>; // '1000000'
type Result10 = Absolute<9_999n>; // '9999'
