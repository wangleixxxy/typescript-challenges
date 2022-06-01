/**
 * Drop Char 从字符串中剔除指定字符。
 */

/* _____________ 你的代码 _____________ */

// type DropChar0<
//   S extends string,
//   C extends string
// > = S extends `${infer First}${C}${infer R}` ? DropChar<`${First}${R}`, C> : S;
type DropChar<
  S extends string,
  C extends string
> = S extends `${infer First}${infer R}`
  ? First extends C
    ? DropChar<R, C>
    : `${First}${DropChar<R, C>}` // 如果写成 `${First}${R}`，是不对的
  : S;
/* _____________ 测试用例 _____________ */
type Result1 = DropChar<'butter fly!', ''>; // 'butterfly!'
type Result2 = DropChar<'butter fly!', ' '>; // 'butterfly!'
type Result3 = DropChar<'butter fly!', '!'>; // 'butter fly'
type Result4 = DropChar<'    butter fly!        ', ' '>; // 'butterfly!'
type Result5 = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'
type Result6 = DropChar<' b u t t e r f l y ! ', 'b'>; // '  u t t e r f l y ! '
type Result7 = DropChar<' b u t t e r f l y ! ', 't'>; // ' b u   e r f l y ! '
