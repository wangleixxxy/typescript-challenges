/**
 * IsNever
 * 输入一个类型，如果是never类型，则返回 true，否则返回 false。
 */
/* _____________ Your Code Here _____________ */
// https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
// never是不存在member,不能使用extends
type IsNever<T> = [T] extends [never] ? true : false;

/* _____________ Test Cases _____________ */
type Result1 = IsNever<never>; // true
type Result2 = IsNever<never | string>; // false
type Result3 = IsNever<''>; // false
type Result4 = IsNever<undefined>; // false
type Result5 = IsNever<null>; // false
type Result6 = IsNever<[]>; // false
type Result7 = IsNever<{}>; // false
