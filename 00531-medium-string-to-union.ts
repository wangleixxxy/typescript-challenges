// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >
];

// ============= Your Code Here =============
/**
 * 联合类型怎么表示？
 */
// type StringToUnion<T extends string> = T extends '' ? never : T extends `${infer L}${infer R}` ?

type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
  ? L | StringToUnion<R>
  : never;
