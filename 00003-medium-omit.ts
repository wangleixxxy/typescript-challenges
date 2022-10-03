// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Expected1, Omit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
/**
 * 错误答案
 */
// type MyOmit<T, K extends keyof T> = {
//   [key in K]: key extends K ? never : T[key];
// };

/**
 * 方法1
 * 先排除T中的K类型，是key的集合，再使用Pick输出结果对象类型
 */
type MyOmit1<T, K> = MyPick<T, MyExclude<keyof T, K>>;

/**
 * 如果key是属于K的，输出结果，K可能是联合类型
 * K中的key也一定是在T对象中
 */
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
/**
 * 从T中排除那些属于U类型的key
 */
type MyExclude<T, U> = T extends U ? never : T;

/**
 * 方法2
 */
type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};
