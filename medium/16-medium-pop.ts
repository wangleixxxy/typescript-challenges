/**
 * 出堆
 * 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
 */

// 实现
type Pop<T extends any[]> = T extends [...infer R, unknown] ? R : never
// type Pop<T extends any[]> = T extends [...infer R, unknown] ? [...R] : never

// 验证
type Result1 = Pop<[3, 2, 1]> // [3, 2]
type Result2 = Pop<['a', 'b', 'c', 'd', ]> // ['a', 'b', 'c']
