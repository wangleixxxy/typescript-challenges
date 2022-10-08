// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
];

// ============= Your Code Here =============
type Space = ' ' | '\t' | '\n';
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;
type TrimRight<S extends string> = S extends `${infer L}${Space}`
  ? TrimRight<L>
  : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;
