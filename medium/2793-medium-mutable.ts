/**
 * Mutable 可变的
 * 实现一个通用的类型 Mutable<T>，使类型 T 的全部属性可变（非只读）。
 */

/* _____________ 你的代码 _____________ */

// readonly前面加个减号，表示非只读
type Mutable<T extends Readonly<object> | ReadonlyArray<unknown>> = {
  -readonly [P in keyof T]: T[P];
};

/* _____________ 测试用例 _____________ */
interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type Result1 = Mutable<Readonly<Todo1>>; // Todo1
type Result2 = Mutable<Readonly<List>>; // List

type Result3 = Mutable<'string'>;
type Result4 = Mutable<0>;
