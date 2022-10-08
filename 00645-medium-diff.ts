// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];

// ============= Your Code Here =============
/**
 * 只考虑了key存在于O1，不存在于O的情况，O1中的key多于O中的
 */
// type Diff<O extends Record<any, unknown>, O1 extends Record<any, unknown>> = {
//   [P in keyof O as P extends O1 ? never : P]: P extends keyof O ? O[P] : O1[P];
// };

/**
 * 方法1
 * Omit的实现
 */
// type Diff<O, O1> = {
//   [P in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>]: P extends keyof O
//     ? O[P]
//     : P extends keyof O1
//     ? O1[P]
//     : never;
// };

/**
 * 方法2
 */
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;
