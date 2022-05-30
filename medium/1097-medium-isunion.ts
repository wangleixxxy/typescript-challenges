/**
 * IsUnion
 * 是否为集合类型
 */

/* _____________ Your Code Here _____________ */

type IsUnion<T, S = T> = T extends S ? ([S] extends [T] ? false : true) : false;

/* _____________ Test Cases _____________ */
type Result1 = IsUnion<string>; // false
type Result2 = IsUnion<string | number>; // true
type Result3 = IsUnion<'a' | 'b' | 'c' | 'd'>; // true
type Result4 = IsUnion<undefined | null | void | ''>; // true
type Result5 = IsUnion<{ a: string } | { a: number }>; // true
type Result6 = IsUnion<{ a: string | number }>; // false
type Result7 = IsUnion<[string | number]>; // false
// Cases where T resolves to a non-union type.
type Result8 = IsUnion<string | never>; // false
type Result9 = IsUnion<string | unknown>; // false
type Result10 = IsUnion<string | any>; // false
type Result11 = IsUnion<string | 'a'>; // false
