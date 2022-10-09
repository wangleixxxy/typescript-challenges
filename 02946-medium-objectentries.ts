// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
];

// ============= Your Code Here =============
/**
 * 类型可能是可选
 * 值可能是undefined
 */
// type ObjectEntries<T> = {
//   [P in keyof T]: [P, T[P]];
// }[keyof T];

type EntriesObj<T extends Record<any, any>> = {
  [K in keyof T]-?: [
    K,
    T[K] extends [undefined] ? undefined : Exclude<T[K], undefined>
  ];
};
type ObjectEntries<T extends Record<any, any>> = EntriesObj<T>[keyof T];

// ==============================================
type ab = Exclude<'name' | 'age', 'name'>;
