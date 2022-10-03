// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        }
      ];
    };
  };
};

// ============= Your Code Here =============
/**
 * extends {} 或者 object 都不对
 */
// type DeepReadonly<T> = {
//   readonly [key in keyof T]: T[key] extends object ? DeepReadonly<T[key]> : T[key]
// }

/**
 * 尝试错误❌
 */
// type DeepReadonly<T extends object> = {
//   readonly [key in keyof T]: T[key] extends Record<string, unknown>
//     ? DeepReadonly<T[key]>
//     : T[key];
// };

/**
 * keyof T[key] 如果是never，表示不是对象类型，是普通类型，所以要直接返回T[key]
 * 如果是对象类型，继续递归处理
 */
type DeepReadonly1<T> = {
  readonly [key in keyof T]: keyof T[key] extends never
    ? T[key]
    : DeepReadonly<T[key]>;
};

/**
 * 这个枚举更容易理解
 */
type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Function | string | number | boolean
    ? T[key]
    : DeepReadonly<T[key]>;
};
