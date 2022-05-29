/**
 * String to Union
 * 实现一个将接收到的String参数转换为一个字母Union的类型。
 */

/* _____________ 你的代码 _____________ */

type StringToUnion<T extends string> = T extends `${infer First}${infer R}`
  ? First | StringToUnion<R>
  : never;

/* _____________ 测试用例 _____________ */

type Result1 = StringToUnion<''>; // never
type Result2 = StringToUnion<'t'>; // 't'
type Result3 = StringToUnion<'hello'>; // 'h' | 'e' | 'l' | 'l' | 'o'
type Result4 = StringToUnion<'coronavirus'>; // 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
