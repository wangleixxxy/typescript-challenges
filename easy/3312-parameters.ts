/**
 * Parameters
 * 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
 */

// 获取函数的参数 放入一个元组中
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// 内置实现
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// 验证
const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

type Result1 = MyParameters<typeof foo> // [string, number]
type Result2 = MyParameters<typeof bar> // [boolean, {a: 'A'}]
type Result3 = MyParameters<typeof baz> // []
