// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// ============= Your Code Here =============
// type MyExclude<T, U> = any
/**
 * 如果在 T 中的类型在 U 中可以找到，返回 never, 如果在 U 中找不到 T 中的某个类型，就返回这个类型
 * 也就是 T 的范围大，多于 U 的赋值never, 即删除多余的，返回相同的
 */
type MyExclude<T, U> = T extends U ? never : T;

type a = Exclude<'a' | 'b' | 'c', 'a'>;
