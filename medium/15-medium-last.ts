/**
 * 最后一个元素
 * 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。
 */

// 实现
type Last<T extends any[]> = T extends [...any[], infer R] ? R : never

// 验证
type Result1 = Last<[3, 2, 1]> // 1
type Result2 = Last<[() => 123, { a: string }]> // { a: string }
