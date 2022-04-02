/**
 * 全排列 Permutation
 * 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。
 */

// 实现
// type Permutation<T> = any
// type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : T;

type Permutation<T, C = T> = [T] extends [never]
  ? []
  : C extends infer U
    ? [U, ...Permutation<Exclude<T, U>>]
    : []

// 验证
type Result1 = Permutation<'A'> // ['A']
type Result2 = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
type Result3 = Permutation<'B' | 'A' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
type Result4 = Permutation<never> // []
