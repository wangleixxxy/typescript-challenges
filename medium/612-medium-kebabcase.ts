/**
 * KebabCase
 */

/* _____________ Your Code Here _____________ */
/*
拆分原来字符串
如果第一个字符是小写的，递归执行剩下的，不需要管U的大小写
如果第一个字符是大写的
  判断U是否为空
    如果为空，直接拼接 Lowercase<F>
    如果不为空，证明前面有值，拼接中划线
*/
type KebabCase<
  S extends string,
  U extends string = ''
> = S extends `${infer F}${infer Rest}`
  ? F extends Lowercase<F>
    ? KebabCase<Rest, `${U}${F}`>
    : U extends ''
    ? KebabCase<Rest, `${Lowercase<F>}`>
    : KebabCase<Rest, `${U}-${Lowercase<F>}`>
  : U;

/* _____________ Test Cases _____________ */
type Result1 = KebabCase<'FooBarBaz'>; // 'foo-bar-baz'
type Result2 = KebabCase<'fooBarBaz'>; // 'foo-bar-baz'
type Result3 = KebabCase<'foo-bar'>; // 'foo-bar'
type Result4 = KebabCase<'foo_bar'>; // 'foo_bar'
type Result5 = KebabCase<'Foo-Bar'>; // 'foo--bar'
type Result6 = KebabCase<'ABC'>; // 'a-b-c'
type Result7 = KebabCase<'-'>; // '-'
type Result8 = KebabCase<''>; // ''
type Result9 = KebabCase<'😎'>; // '😎'
