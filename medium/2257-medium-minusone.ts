/**
 * MinusOne 减1
 * 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
 */
/* _____________ 你的代码 _____________ */

type MinusOne0<T extends number, A extends any[] = []> =
  // [...A, any, any, any, any]['length'] extends T ? [...A, any, any, any]['length'] :
  // [...A, any, any, any]['length'] extends T ? [...A, any, any]['length'] :
  [...A, any, any]['length'] extends T
    ? [...A, any]['length']
    : [...A, any]['length'] extends T
    ? A['length']
    : MinusOne<T, [...A, any, any /*, any, any */]>;

// ts对递归层级有限制
type MinusOne<T extends number, U extends unknown[] = []> = [
  ...U,
  unknown
]['length'] extends T
  ? U['length']
  : MinusOne<T, [...U, unknown]>;

/* _____________ 测试用例 _____________ */
type Result1 = MinusOne<1>; // 0
type Result2 = MinusOne<55>; // 54
type Result3 = MinusOne<3>; // 2
type Result4 = MinusOne<100>; // 99
type Result5 = MinusOne<1101>; // 1100
type Result6 = MinusOne<999>; // 1100
