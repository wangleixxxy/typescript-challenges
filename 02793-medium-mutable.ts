// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>
];

// ============= Your Code Here =============
/**
 * Required是用 -? 处理
 */
// type Mutable<T> = {
//   [P in keyof T]-?: T[P];
// };

/**
 * readonly前面加个减号，表示非只读,和Required不一样
 */
type Mutable<T extends Readonly<object> | ReadonlyArray<any>> = {
  -readonly [P in keyof T]: T[P];
};

// =================================================
type a = Readonly<Todo1>;
/**
type a = {
    readonly title: string;
    readonly description: string;
    readonly completed: boolean;
    readonly meta: {
        author: string;
    };
}
 */
type b = Readonly<List>;
/**
type b = readonly [1, 2, 3]
 */
