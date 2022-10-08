// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol('foobar');
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];

// ============= Your Code Here =============
/**
 * 尝试错误❌
 */
// type RemoveIndexSignature<T> = {
//   [key in keyof T]: key extends string | symbol ? never : T[key]
// }

/**
 * for non-IndexSignature, K is "xxx" type string
 * for IndexSignature, K is either string, number, symbol
 */
// 2、3测试用例过不去
// type RemoveIndexSignature<T> = {
//   [K in keyof T as K extends `${infer S}` ? S : never]: T[K];
// };

type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};
