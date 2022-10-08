// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];

// ============= Your Code Here =============
/**
 * 注意N的默认值，通过数组 + infer
 */
type LengthOfString<
  S extends string,
  N extends readonly string[] = []
> = S extends `${infer L}${infer R}`
  ? LengthOfString<R, [...N, L]>
  : N['length'];

/**
 * 补充infer
 */
// 今天想了半天中间如果有字符串，左边的infer从第零位开始，中间没有字符串，左边的infer从第一位开始
// 验证
type Result1 = LengthOfString<''>; // 0
type Result2 = LengthOfString<'kumiko'>; // 6
type Result3 = LengthOfString<'reina'>; // 5
type Result4 = LengthOfString<'Sound! Euphonium'>; // 16

type K<B extends string> = B extends `${infer l}${infer r}` ? l : never;
type a = K<'123'>; // l: '1', r: '23'

type K2<
  B extends string,
  A extends string
> = B extends `${infer l}${A}${infer r}` ? l : never;
type b = K2<'12345', '33'>; // l: '12', r: '45' 中间加了数字，l变成了两位，能识别到中间含有A的字符串，l从第一位开始

type K3<
  B extends string,
  A extends string
> = B extends `${infer l}${A}${infer r}` ? l : never;
type c = K3<'12345', '12'>; // l: '', r: '' 中间位置加了数字，能识别到首位含有A的字符串，l从第0位开始
