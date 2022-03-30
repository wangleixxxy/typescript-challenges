/**
 * 追加参数
 * 实现一个泛型 AppendArgument<Fn, A>，
 * 对于给定的函数类型 Fn，以及一个任意类型 A，
 * 返回一个新的函数 G。
 * G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。
 */

// 实现
// 1. 获取函数的参数 + 返回 infer
// 2. 合并参数 [...A, ...B]
type AppendArgument<Fn extends (...args: any) => any, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>

// 获取函数的参数
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
// 获取函数返回值
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any // 没有返回值时返回any

// 另一种实现
type AppendArgument2<Fn, A> = Fn extends (...args: infer Args) => infer R ? (...args: [...Args, A]) => R : never

// 验证
type Case1 = AppendArgument<(a: number, b: string) => number, boolean> // Result1
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined> // Result2
type Result2 = (x: undefined) => void
