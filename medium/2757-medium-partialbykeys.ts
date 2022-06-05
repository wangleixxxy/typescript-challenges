/**
 * PartialByKeys
 * 实现一个通用的PartialByKeys<T, K>，它接收两个类型参数T和K。
 * K指定应设置为可选的T的属性集。当没有提供K时，它就和普通的Partial<T>一样使所有属性都是可选的。
 */

/* _____________ 你的代码 _____________ */

type copy<V> = {
  [P in keyof V]: V[P];
};
// 如果属于K,则设置为可选
// 如果不属于K,则设置为原来的值
type PartialByKeys<T, K = keyof T> = copy<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;
/* _____________ 测试用例 _____________ */

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type Result1 = PartialByKeys<User, 'name'>; // UserPartialName
type Result2 = PartialByKeys<User, 'name' | 'unknown'>; // UserPartialName
type Result3 = PartialByKeys<User, 'name' | 'age'>; // UserPartialNameAndAge
type Result4 = PartialByKeys<User>; // Partial<User>
