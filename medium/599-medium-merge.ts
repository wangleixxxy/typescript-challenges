/**
 * Merge
 * 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。
 */
/* _____________ 你的代码 _____________ */

type Merge<
  F extends Record<keyof any, unknown>,
  S extends Record<keyof any, unknown>
> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K];
};

/* _____________ 测试用例 _____________ */

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type Restult1 = Merge<Foo, Bar>; // { a: number, b: number, c: boolean }
