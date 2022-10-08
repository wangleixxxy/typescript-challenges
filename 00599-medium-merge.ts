// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

// ============= Your Code Here =============
/**
 * 直接写，报错
 */
// type Merge<F, S> = {
//   [P in keyof F | keyof S]: P extends keyof F ? F[P] : S[P];
// }

/**
 * 改为S覆盖F的key，还是不行
 */
// type Merge<F, S> = {
//   [P in keyof F | keyof S]: P extends keyof S ? S[P] : F[P];
// };

/**
 * 显示F、S的类型，还是报错
 */
// type Merge<
//   F extends Record<string, unknown>,
//   S extends Record<string, unknown>
// > = {
//   [P in keyof F | keyof S]: P extends keyof F ? F[P] : S[P];
// };

/**
 * key改为any，还是报错
 */
// type Merge<
//   F extends Record<any, unknown>,
//   S extends Record<any, unknown>
// > = {
//   [P in keyof F | keyof S]: P extends keyof F ? F[P] : S[P];
// };

/**
 * 先用S的，再使用F的
 */
type Merge<
  F extends Record<keyof any, unknown>,
  S extends Record<keyof any, unknown>
> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K];
};
