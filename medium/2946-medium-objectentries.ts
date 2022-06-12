/**
 * ObjectEntries
 */

/* _____________ Your Code Here _____________ */

// 方法1
type ObjectEntries0<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

// 方法2
type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>];
}[keyof T];

/* _____________ Test Cases _____________ */
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type Result1 = ObjectEntries<Model>; // ModelEntries
type Result2 = ObjectEntries<Partial<Model>>; // ModelEntries
type Result3 = ObjectEntries<{ key?: undefined }>; // ['key', undefined]
type Result4 = ObjectEntries<{ key: undefined }>; // ['key', undefined]
