/**
 * Readonly 2
 * 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
 * K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
 */

// 普通Readonly只有一个参数类型，这里有两个
// 实现
// 问题1： K 是如何实现可选  xxx = never
// 问题2： 已经是 readonly的如何判断 当成普通属性看待

// 1. 基本实现
// 忽略T中K的属性，剩余的属性
// T中K的属性都是readonly的
type MyReadonly20<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>
// -------------------------

// 2. 抄答案
// first 获取 T中的K属性，排除T中的K属性，k可以是任意值，如果是T中的属性，则设置为never
type MyExclude2<T, K> = T extends K ? never : T;
// MyOmit 删除对象中的key， 删除T中的包含K的值
type MyOmit2<T, K extends keyof T> = {
  [key in MyExclude2<keyof T, K>] :T[key]
}

// 用于处理无值的情况，无参数则为T的所有key
type MyReadonly21<T, K extends keyof T = keyof T> = {
  readonly [p in K]: T[p]
} & {
  [key in keyof MyOmit2<T, K>] : T[key]
}
// --------------------------

// 自己实现
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [p in K]: T[p]
} & {
  [key in keyof MyOmit<T, K>]: T[key]
}

// 删除T的所有key中K的属性
type MyOmit<T, K extends keyof T> = {
  // [key in MyExclude<T, K>]: T[key]
  [key in MyExclude<keyof T, K>]: T[key]
} 

// type MyExclude<T, K extends keyof T> = {
//   [p in keyof K extends K ? never : p]: T[p]
// }
// T，K是同一类的类型
// !!! 从T中排除K，T中有，但是K中没有的，就要返回never, 
// !!! T中有，K中也有的，返回T
type MyExclude<T, K> = T extends K ? never : T


// 验证
type Result1 = MyReadonly2<Todo1> // Readonly<Todo1>
type Result2 = MyReadonly2<Todo1, 'title' | 'description'> // Expected
type Result3 = MyReadonly2<Todo2, 'title' | 'description'> // Expected

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
