// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];

// ============= Your Code Here =============
type AppendArgument2<Fn, A> = Fn extends (...args: infer Args) => infer R
  ? (...args: [...Args, A]) => R
  : never;

/**
 * 方法2
 */
// 1. 获取函数的参数 + 返回 infer
// 2. 合并参数 [...A, ...B]
// 获取函数的参数
type MyParameters<Fn extends (...args: any) => any> = Fn extends (
  ...args: infer P
) => any
  ? P
  : never;

// 获取函数返回值
type MyReturnType<Fn extends (...args: any) => any> = Fn extends (
  ...args: any
) => infer R
  ? R
  : any;

type AppendArgument<Fn extends (...args: any) => any, A> = (
  ...args: [...MyParameters<Fn>, A]
) => MyReturnType<Fn>;
