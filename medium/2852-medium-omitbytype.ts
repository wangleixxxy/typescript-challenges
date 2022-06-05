/**
 * OmitByType
 * 对于T，属性不属于U的集合
 */

/* _____________ Your Code Here _____________ */

type OmitByType<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
};

/* _____________ Test Cases _____________ */
interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type Result1 = OmitByType<Model, boolean>; // { name: string; count: number }
type Result2 = OmitByType<Model, string>; // { count: number; isReadonly: boolean; isEnable: boolean }
type Result3 = OmitByType<Model, number>; // { name: string; isReadonly: boolean; isEnable: boolean }
