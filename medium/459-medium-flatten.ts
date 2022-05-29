/**
 * Flatten 拉平
 * 在这个挑战,您需要编写一个类型,数组和排拉平数组类型
 */

// 实现
type Flatten<T extends any[], U = []> = T extends [infer First, ...infer R]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<R>]
    : [First, ...Flatten<R>]
  : [];

// 验证
type Result1 = Flatten<[]>; // []
type Result2 = Flatten<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type Result3 = Flatten<[1, [2]]>; // [1, 2]
type Result4 = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
type Result5 = Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>; // [{foo: 'bar'; 2: 10}, 'foobar']
