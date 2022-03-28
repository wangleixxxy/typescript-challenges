/**
 * 实现 Omit
 * 
 * Omit: 省略
 * 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
 * Omit 会创建一个省略 K 中字段的 T 对象。
 */

// 实现
// 等号后面是返回的类型
type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}

// 官方实现
type AAAMyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>;
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// 从 T 中排出 U
type MyExclude<T, U> = T extends U ? never : T;


// 验证
type Result1 = Omit<Todo, 'description'> // Expected1
type Result2 = MyOmit<Todo, 'description' | 'completed'> // Expected2

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
