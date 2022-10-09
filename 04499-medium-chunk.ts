// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

// ============= Your Code Here =============
// type Chunk = any

/**
 * https://github.com/type-challenges/type-challenges/issues/16479
 */
/**
 * T 必须参数
 * U 层级
 * S 比较结果，并保存递归中产生的结果片段
 * V 最终结果
 */
// type Chunk<
//   T extends any[],
//   U extends number = 1,
//   S extends any[] = [],
//   V extends any[] = []
// > = T extends [infer F, ...infer R] ? any : V;

/**
 * 递归
 * 每次递归，把 T 中的一个元素拿出来，放入 S 中，
 * 当 S 的长度和 U 不相同时，继续递归
 * 当 S 的长度和 U 相同时，把 S 放入结果数组 V 中，并清空 S
 */
// type Chunk<
//   T extends any[],
//   U extends number = 1,
//   S extends any[] = [],
//   V extends any[] = []
// > = T extends [infer F, ...infer R]
//   ? S['length'] extends U
//     ? Chunk<R, U, [F], [...V, S]>
//     : Chunk<R, U, [...S, F], V>
//   : V;

/**
 * 1、那么当 T 为空时，S 中就会残留未被推入 V 中的元素
 * 2、另外，如果 T 为空，并且 S 也为空，说明最开始传入的 T 就是一个空数组。
 */
// type Chunk<
//   T extends any[],
//   U extends number = 1,
//   S extends any[] = [],
//   V extends any[] = []
// > = T extends [infer F, ...infer R]
//   ? S['length'] extends U
//     ? Chunk<R, U, [F], [...V, S]>
//     : Chunk<R, U, [...S, F], V>
//   : S['length'] extends 0
//   ? V
//   : [...V, S];

/**
 * 简化掉 V
 */
type Chunk<
  T extends any[],
  U extends number = 1,
  S extends any[] = []
> = T extends [infer F, ...infer R]
  ? S['length'] extends U
    ? [S, ...Chunk<T, U>]
    : Chunk<R, U, [...S, F]>
  : S['length'] extends 0
  ? S
  : [S];
