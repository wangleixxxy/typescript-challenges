// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

// ============= Your Code Here =============
// type MyParameters<T extends (...args: any[]) => any> = T extends (
//   ...args: infer A // 可以使用A表示，arguments的缩写，但是使用P语义更合适一些
// ) => any
//   ? A
//   : []; // 这里是永远不会到达的，用never表示，前面的infer已经能够挖出所有参数类型了

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// 内置实现
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
