/**
 * Includes
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
 * 
 * 举例：
 * type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
 */

// 首先拿出一个X, 剩余的为Y, 检查U是否在X中，如果在X中，直接返回
// 如果不在X中，递归执行是否在Y中
// 不满足的最后返回false
type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Y]
  ? Equal<X, U> extends true ? true : Includes<Y, U>
  : false

// 方法在 type-challenges/utils下的方法，原方法就是这么实现的
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

// 验证
type Result1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // true
type Result2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // false
type Result3 = Includes<[1, 2, 3, 5, 6, 7], 7> // true
type Result4 = Includes<[1, 2, 3, 5, 6, 7], 4> // false
type Result5 = Includes<[1, 2, 3], 2> // true
type Result6 = Includes<[1, 2, 3], 1> // true
type Result7 = Includes<[{}], { a: 'A' }> // false
type Result8 = Includes<[boolean, 2, 3, 5, 6, 7], false> // false
type Result9 = Includes<[true, 2, 3, 5, 6, 7], boolean> // false
type Result10 = Includes<[false, 2, 3, 5, 6, 7], false> // true
type Result11 = Includes<[{ a: 'A' }], { readonly a: 'A' }> // false
type Result12 = Includes<[{ readonly a: 'A' }], { a: 'A' }> // false
type Result13 = Includes<[1], 1 | 2> // false
type Result14 = Includes<[1 | 2], 1> // false
type Result15 = Includes<[null], undefined> // false
type Result16 = Includes<[undefined], null> // false
