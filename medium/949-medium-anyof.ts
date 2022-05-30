/**
 * AnyOf
 * 在类型系统中实现类似于 Python 中 any 函数。
 * 类型接收一个数组，如果数组中任一个元素为真，则返回 true，否则返回 false。
 * 如果数组为空，返回 false。
 */

/* _____________ 你的代码 _____________ */

/*
判断true：isFalsy
判断是否对象 判断是否数组：使用一个类型汇总对象或者数组
*/
// type a = Record<'a', { a: string; b: number }>;

// 方法1
type isFalsy<V> = V extends false | 0 | '' | [] | Record<string, never>
  ? true
  : false;
type AnyOf1<T extends readonly any[]> = isFalsy<T[number]> extends true
  ? false
  : true;

// 方法2
type FalsyVal = [] | Record<string, never> | '' | 0 | false;
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer R]
  ? First extends FalsyVal
    ? AnyOf<R>
    : true
  : false;

/* _____________ 测试用例 _____________ */
type Result1 = AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>; // true
type Result2 = AnyOf<[1, '', false, [], {}]>; // true
type Result3 = AnyOf<[0, 'test', false, [], {}]>; // true
type Result4 = AnyOf<[0, '', true, [], {}]>; // true
type Result5 = AnyOf<[0, '', false, [1], {}]>; // true
type Result6 = AnyOf<[0, '', false, [], { name: 'test' }]>; // true
type Result7 = AnyOf<[0, '', false, [], { 1: 'test' }]>; // true
type Result8 = AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>; // true
type Result9 = AnyOf<[0, '', false, [], {}]>; // false
type Result10 = AnyOf<[]>; // false
