/**
 * 元组转合集
 * 实现泛型TupleToUnion<T>，它返回元组所有值的合集。
 */

// 实现

// 方法1
// type TupleToUnion<T extends readonly unknown[]> = T[number]
// 方法2
type TupleToUnion<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F | TupleToUnion<R>
  : never

// 验证
type Result1 = TupleToUnion<[123, '456', true]> // 123 | '456' | true
type Result2 = TupleToUnion<[123]> // 123
