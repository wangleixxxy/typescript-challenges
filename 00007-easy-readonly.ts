// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
/**
 * 只需要遍历，添加一个readonly即可
 * 遍历属性用 in
 */
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
