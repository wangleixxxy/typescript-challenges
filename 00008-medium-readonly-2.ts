// ============= Test Cases =============
import type { Alike, Expect } from './test-utils';

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============
/**
 * k 为空时不成立，尝试错误❌
 */
// type MyReadonly2<T, K extends keyof T> = {
//   readonly [key in K]: T[key];
// } & Omit<T, K>;

/**
 * 尝试错误❌
 */
// type MyReadonly2<T, K extends keyof T> = K extends keyof T
//   ? {
//       readonly [key in K]: T[key];
//     } & Omit<T, K>
//   : {
//       readonly [key in K]: T[key];
//     };

/**
 * 1. Readonly和Pick的结合，直接使用，后2个测试用例都能通过
 * 2. 第一个用例，没有提供K，写的时候需要默认为T中所有key都是readonly
 * （题目描述：如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。）
 */
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;

/**
 * 下方为之前的笔记
 */
// 普通Readonly只有一个参数类型，这里有两个
// 实现
// 问题1： K 是如何实现可选  xxx = never
// 问题2： 已经是 readonly的如何判断 当成普通属性看待

// 1. 基本实现
// 忽略T中K的属性，剩余的属性
// T中K的属性都是readonly的
type MyReadonly20<T, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;
// -------------------------

// 2. 抄答案
// first 获取 T中的K属性，排除T中的K属性，k可以是任意值，如果是T中的属性，则设置为never
type MyExclude2<T, K> = T extends K ? never : T;
// MyOmit 删除对象中的key， 删除T中的包含K的值
type MyOmit2<T, K extends keyof T> = {
  [key in MyExclude2<keyof T, K>]: T[key];
};

// 用于处理无值的情况，无参数则为T的所有key
type MyReadonly21<T, K extends keyof T = keyof T> = {
  readonly [p in K]: T[p];
} & {
  [key in keyof MyOmit2<T, K>]: T[key];
};
// --------------------------

// 自己实现
type MyReadonly3<T, K extends keyof T = keyof T> = {
  readonly [p in K]: T[p];
} & {
  [key in keyof MyOmit<T, K>]: T[key];
};

// 删除T的所有key中K的属性
type MyOmit<T, K extends keyof T> = {
  // [key in MyExclude<T, K>]: T[key]
  [key in MyExclude<keyof T, K>]: T[key];
};

// type MyExclude<T, K extends keyof T> = {
//   [p in keyof K extends K ? never : p]: T[p]
// }
// T，K是同一类的类型
// !!! 从T中排除K，T中有，但是K中没有的，就要返回never,
// !!! T中有，K中也有的，返回T
type MyExclude<T, K> = T extends K ? never : T;
