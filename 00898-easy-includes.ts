// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>
  >,
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

// ============= Your Code Here =============
// type Includes<T extends readonly any[], U> = U extends [...T] ? true : false; // 不能判断值
// type Includes1<T extends readonly any[], U> = U extends [infer X, ...infer Y] // 这里是T，不应该是U
//   ? Equal<X, U> extends true
//     ? true
//     : Includes<Y, U>
//   : false;

type Includes1<T extends readonly any[], U> = T extends [infer X, ...infer Y]
  ? Equal<X, U> extends true
    ? true
    : Includes<Y, U>
  : false;

/**
 * 首先拿出一个X, 剩余的为Y, 检查U是否在X中，如果在X中，直接返回
 * 如果不在X中，递归执行是否在Y中
 * 不满足的最后返回false
 */
/**
 * 方法在 type-challenges/utils下的方法，原方法就是这么实现的
 * 泛型T，用来约束函数，如果X 和 Y相同，返回的都是1或者都是2，这样就可以证明X和Y相同了
 */
type Equal123<X, Y> = ((<T>() => T) extends X ? 1 : 2) extends (
  (<T>() => T) extends Y ? 1 : 2
)
  ? true
  : false;
