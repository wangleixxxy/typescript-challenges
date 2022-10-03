// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
// type MyAwaited<T> = T extends Promise<infer U> ? U : never; // 对于联合类型是不符合的

/**
 * 递归处理
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : never;

/**
 * Promise的例子
 * 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 * 原文：https://dev.to/macsikora/series/4717
 */
