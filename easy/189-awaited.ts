/**
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
 * 在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 
 * 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 * 原文：https://dev.to/macsikora/series/4717
 */



type X = Promise<string>
type Y = Promise<{ field: number }>

// 要实现 Transform
type Transform<A> = A extends Promise<infer Inner> ? Inner : never
// 实现2
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<infer V> ? V : U
  : never

type ResultX = Transform<X>; // ResultX type equals string
type ResultY = Transform<Y>; // ResultY type equals { field: number }
type Result = Transform<Promise<string>> // Result is string type

type ResultX2 = MyAwaited<X>; // string
type ResultY2 = MyAwaited<Y>; // { field: number }

// ------------------------------------------------------------------------

// 1. info的例子
type InsideArray<A> = A extends Array<infer Inside> ? Inside : never
type Str = InsideArray<Array<string>>; // Str is string

// 2. 将info用于自定义类型
type Surprise<A> = { inside: A }
type UnpackSurprise<S> = S extends Surprise<infer Inside> ? Inside : never
type Num = UnpackSurprise<Surprise<number>> // Num is number

// 3. info获取映射类型属性
type User = {
  id: number,
  name: string,
}

type Doc = {
  id: string,
}

type GetProperty<T, Prop extends keyof T> = T extends { [K in Prop]: infer Value } ? Value : never

type UserId = GetProperty<User, 'id'> // number
type UserName = GetProperty<User, 'name'> // string
type DocId = GetProperty<Doc, 'id'> // string

// 4. 可以使用许多类型变量和推断出它们
// 推断出3个参数类型，放在元组中
type ABC<A, B, C> = { a: A, b: B, c: C }
type ABCIntoTuple<T> 
  = T extends ABC<infer A, infer B, infer C> ? [A, B, C] : never
type Example = ABC<string, boolean, number>
type ExampleTuple = ABCIntoTuple<Example> // [string, boolean, number]

// 5. 关于never 永远不会达到，例如函数永远不会返回
// type Transform<A> = A extends Promise<infer Inner> ? Inner : never
// type OhGosh = Transform<string> // OhGosh evaluates to never

// 6.
// type Transform<A extends Promise<any>> = A extends Promise<infer Inner> ? Inner : never
// type OhGosh = Transform<string> // compilation error
