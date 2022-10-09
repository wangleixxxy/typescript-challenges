// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>
];

// ============= Your Code Here =============
type Copy<T> = {
  [P in keyof T]: T[P];
};

type RequiredByKeys1<T, K = keyof T> = Copy<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;

// 方法2
/**
 * Omit排除K，得到类型属性集合
 * Pick是检出，检出K的类型，然后改为Required
 */
type RequiredByKeys<T, K = keyof T> = copy<
  Omit<T, K & keyof T> & Required<Pick<T, K & keyof T>>
>;

type a = Pick<User, 'name'>;
type b = Omit<User, 'name'>;
