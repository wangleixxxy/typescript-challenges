/**
 * Diff
 * 获取两个接口类型中的差值属性。
 */

/* _____________ 你的代码 _____________ */

// type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;
type Diff<O, O1> = {
  [P in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};

/* _____________ 测试用例 _____________ */
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

type Result1 = Diff<Foo, Bar>; // { gender: number }
type Result1 = Diff<Bar, Foo>; // { gender: number }
type Result1 = Diff<Foo, Coo>; // { age: string; gender: number }
type Result1 = Diff<Coo, Foo>; // { age: string; gender: number }
