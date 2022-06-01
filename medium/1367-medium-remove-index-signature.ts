/**
 * Remove Index Signature 移除索引
 */

/* _____________ Your Code Here _____________ */
// for non-IndexSignature, K is "xxx" type string
// for IndexSignature, K is either string, number, symbol
type RemoveIndexSignature<T extends Record<string, any>> = {
  [K in keyof T as K extends `${infer S}` ? S : never]: T[K];
};

/* _____________ Test Cases _____________ */

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
};

type FooBar = {
  [key: symbol]: any;
  foobar(): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type Result1 = RemoveIndexSignature<Foo>; // { foo(): void }
type Result2 = RemoveIndexSignature<Bar>; // { bar(): void }
type Result3 = RemoveIndexSignature<FooBar>; // { foobar(): void }
type Result4 = RemoveIndexSignature<Baz>; // { bar(): void; baz: string }
