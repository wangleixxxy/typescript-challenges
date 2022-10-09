// ============= Test Cases =============
import type { Equal, Expect, NotEqual } from './test-utils';

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>
  >
];

// ============= Your Code Here =============
/**
 * 用例3 无法通过
 * 如果key是 字符串true，转换后要变成 boolean的true
 */
// type Flip<T extends Record<any, any>> = {
//   [P in keyof T as P extends keyof T ? T[P] : never]: P;
// };

/**
 * key必须是字符串类型
 */
type Flip<T extends Record<any, any>> = {
  [P in keyof T as P extends keyof T ? `${T[P]}` : never]: P;
};

// 下面这种方法，判断是值的类型
type Flip2<T> = {
  [key in keyof T as T[key] extends
    | string
    | number
    | bigint
    | boolean
    | null
    | undefined
    ? `${T[key]}`
    : never]: key;
};

type Flip1<T extends Record<string | number | symbol, any>> = {
  [R in keyof T as T[R] extends boolean
    ? `${T[R]}`
    : R extends string | number | symbol
    ? T[R]
    : never]: R;
};
