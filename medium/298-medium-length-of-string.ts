/**
 * 字符串的长度
 */

// 实现
// 注意N的默认值，通过数组 + infer
type LengthOfString<S extends string, N extends readonly string[] = []> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...N, First]>
  : N['length']

// 验证
type Result1 = LengthOfString<''> // 0
type Result2 = LengthOfString<'kumiko'> // 6
type Result3 = LengthOfString<'reina'> // 5
type Result4 = LengthOfString<'Sound! Euphonium'> // 16
