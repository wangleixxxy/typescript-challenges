// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<
    Equal<
      MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>,
      { stringToArray: [] }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>,
      { stringToNumber: number }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { stringToNumber: string; skipParsingMe: boolean },
        { mapFrom: string; mapTo: number }
      >,
      { stringToNumber: number; skipParsingMe: boolean }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { date: string },
        { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }
      >,
      { date: null | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>,
      { date: null | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { fields: Record<string, boolean> },
        { mapFrom: Record<string, boolean>; mapTo: string[] }
      >,
      { fields: string[] }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>,
      { name: string }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { name: string; date: Date },
        { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
      >,
      { name: boolean; date: string }
    >
  >
];

// ============= Your Code Here =============
/**
 * 尝试错误，
 * 如果R是联合类型，用例无法通过
 */
// type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
//   [P in keyof T]: T[P] extends R['mapFrom'] ? R['mapTo'] : T[P];
// };

// type a = { mapFrom: string; mapTo: [] };
// type b = a['mapFrom']; // string

/**
 * 方法1
 */
// type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
//   [P in keyof T]: T[P] extends R['mapFrom']
//     ? R extends {}
//       ? R['mapFrom'] extends T[P]
//         ? R['mapTo']
//         : never
//       : R['mapTo']
//     : T[P];
// };

/**
 * 方法2
 */
type Include<T extends { mapFrom: any; mapTo: any }, U> = T extends {}
  ? Equal<T['mapFrom'], U> extends true
    ? T['mapTo']
    : never
  : never;

/**
 * 判断两者相同，使用了Equal
 */
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [P in keyof T]: Include<R, T[P]> extends never ? T[P] : Include<R, T[P]>;
};
