/**
 * RequiredByKeys
 * 实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。
 * K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的。
 */

/* _____________ 你的代码 _____________ */
// 就是Pick
type copy<V> = {
  [K in keyof V]: V[K];
};
// 方法1
type RequiredByKeys0<T, K = keyof T> = copy<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: never;
  }
>;

// 方法2
type RequiredByKeys<T, K = keyof T> = copy<
  Omit<T, K & keyof T> & Required<Pick<T, K & keyof T>>
>;

/* _____________ 测试用例 _____________ */

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

type Result1 = RequiredByKeys<User, 'name'>; // UserRequiredName
type Result2 = RequiredByKeys<User, 'name' | 'unknown'>; // UserRequiredName
type Result3 = RequiredByKeys<User, 'name' | 'age'>; // UserRequiredNameAndAge
type Result4 = RequiredByKeys<User>; // Required<User>
