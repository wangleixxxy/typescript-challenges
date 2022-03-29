/**
 * 可串联构造器
 * 在 JavaScript 中我们很常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给他附上类型吗？
 * 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。
 * 你需要提供两个函数 option(key, value) 和 get()。
 * 在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。
 */

/**
 * 你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。
 * 你可以假设 key 只接受字符串而 value 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。
 * 同样的 key 只会被使用一次。
 */

type Chainable<T = {}> = {
  // option<K extends string, V = unknown>(key: K, value: V): Chainable<T & Record<K, V>>
  // 或者自己实现Record
  option<K extends string, V = unknown>(key: K, value: V): Chainable<T & { [P in K]: V}>
  get(): T
}



declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

type Result1 = typeof result1 // Expected1
type Result2 = typeof result2 // Expected2


type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}
