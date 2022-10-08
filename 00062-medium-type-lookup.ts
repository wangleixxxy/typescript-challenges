// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>
];

// ============= Your Code Here =============
/**
 * 应该返回U，不是返回T
 */
// type LookUp<U, T> = U extends { type: T } ? T : never;
/**
 * 实现1
 */
type LookUp<U, T> = U extends { type: T } ? U : never;

/**
 * 实现2不成功
 */
// type LookUp<U, T> = U extends infer A | infer B
//   ? A extends { type: T }
//     ? T
//     : B extends { type: T }
//     ? T
//     : never
//   : never;
