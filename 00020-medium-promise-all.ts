// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];

// ============= Your Code Here =============
// declare function PromiseAll(values: any): any

declare function PromiseAll<V extends any[]>(
  values: readonly [...V]
): Promise<{
  [P in keyof V]: V[P] extends Promise<infer R> ? R : V[P];
}>;

// https://github.com/type-challenges/type-challenges/issues/3444
// 第一步 确保PromiseAll接受PromiseLike对象数组的函数。
// declare function PromiseAll<V extends any[]>(values: V): any

// 第二步 任何数组的值类型转换成一个元组,然后用元组的结果返回一个Promise
// declare function PromiseAll<V extends any[]>(values: readonly [...V]): Promise<V>
// const a = PromiseAll([1, 2, Promise.resolve(3)])
// type A = typeof a // Promise<[number, number, Promise<number>]>

// 第三步 从元组元素中提取Promise结果类型 这是一个resolved的Promise
// declare function PromiseAll<V extends any[]>(values: readonly [...V]): Promise<{
//   [P in keyof V]: V[P] extends Promise<infer R> ? R : V[P]
// }>

/*
翻译：
关于 readonly [...V]
1. 元组可以有其他元素,这必须是一个数组/Tuple类型, 所以我们使用[…V] 转化 tuple类型的类型参数。
*/
// declare function PromiseAll<V extends any[]>(values: [...V]): V
// const a = PromiseAll([1, 2, Promise.resolve(3)])
// type A = typeof a // Promise<[number, number, Promise<number>]>

// if not
// declare function PromiseAll<V extends any[]>(values: V): V
// const a = PromiseAll([1, 2, Promise.resolve(3)])
// type A = typeof a // (number | Promise<number>)[]

/*
2. params[1, 2, 3] as const 将 readonly tuple类型推断,这不会是兼容可变tuple类型,所以我们添加前缀 readonly
*/
// declare function PromiseAll<V extends any[]>(values: [...V]): V
// const a = PromiseAll([1, 2, Promise.resolve(3)] as const) // error
