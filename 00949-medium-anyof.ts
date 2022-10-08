// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<
    Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<
    Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

// ============= Your Code Here =============
/**
 * 如果数组里面有Boolean类型，使用true判断，可以实现，但是并不是所有用例都是boolean类型的
 * 还需要判断数字、字符串、对象、空数组类型
 */
// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest]
//   ? F extends true
//     ? true
//     : AnyOf<Rest>
//   : false;

/**
 * 方法1，使用递归值判断
 * 如果是false值，继续递归判断
 */
type FalsyVal = [] | Record<string, never> | '' | 0 | false;
type AnyOf1<T extends readonly any[]> = T extends [infer F, ...infer Rest]
  ? F extends FalsyVal
    ? AnyOf<Rest>
    : true
  : false;

/**
 * 方法2，类型判断
 */
type isFalsy<T> = T extends [] | Record<string, never> | '' | 0 | false
  ? true
  : false;
/**
 * 如果是空值，就是false
 */
type AnyOf<T extends readonly any[]> = isFalsy<T[number]> extends true
  ? false
  : true;
