// ============= Test Cases =============
import type { Alike, Expect } from './test-utils';

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get();

const result3 = a.option('name', 'another name').option('name', 123).get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

type Expected3 = {
  name: number;
};

// ============= Your Code Here =============
// type Chainable = {
//   option(key: string, value: any): any;
//   get(): any;
// };

type Chainable0<T = {}> = {
  // 或者自己实现Record
  // option<K extends string, V = unknown>(
  //   key: K,
  //   value: V
  // ): Chainable<T & { [P in K]: V }>;

  /**
   * 用例3无法通过
   */
  // option<K extends string, V = unknown>(
  //   key: K,
  //   value: V
  // ): Chainable<T & Record<K, V>>;
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<(K extends keyof T ? Omit<T, K> : T) & Record<K, V>>;
  get(): T;
};

/**
 * 抄答案
 */

type GetKeyType<T, K extends string, V> = K extends keyof T
  ? T[K] extends V
    ? number // 只要不是 string 类型即可
    : K
  : K;

type Chainable<R = {}> = {
  option<K extends string, V>(
    key: GetKeyType<R, K, V>,
    value: V
  ): Chainable<Omit<R, K> & { [P in K]: V }>;
  get(): R;
};
