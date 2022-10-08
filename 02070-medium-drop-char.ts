// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>
];

// ============= Your Code Here =============
/**
 * 添加了一个T，用于表示结果
 */
type DropChar<S, C, T extends string = ''> = S extends `${infer L}${infer R}`
  ? L extends C
    ? `${T}${DropChar<R, C>}`
    : `${L}${DropChar<R, C>}`
  : S;
