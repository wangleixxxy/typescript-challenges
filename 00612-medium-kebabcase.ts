// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>
];

// ============= Your Code Here =============
/**
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
    ? KebabCase<Rest, `${U}${Lowercase<F>}`>
    : KebabCase<Rest, `${U}-${Lowercase<F>}`>
  : U;
