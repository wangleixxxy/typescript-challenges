// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>
];

// ============= Your Code Here =============
// type Join<T extends string[], U> = T['length'] extends 1
//   ? T[number]
//   : T extends [infer F, ...infer R]
//   ? `${F}${U}${Join<R, U>}`
//   : '';

// type Join<T extends unknown[], U extends string | number> = T extends [
//   infer P,
//   ...infer R
// ]
//   ? P extends string
//     ? R extends []
//       ? P
//       : `${P}${U}${Join<R, U>}`
//     : ''
//   : '';

/**
 * 第一项 F，要定义为 string 类型
 */
type Join<T, U extends string | number> = T extends [
  infer F extends string,
  ...infer R
]
  ? R extends []
    ? `${F}`
    : `${F}${U}${Join<R, U>}`
  : '';
