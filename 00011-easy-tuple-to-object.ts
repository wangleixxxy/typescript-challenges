// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, '2', 3, '4'] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla';
        'model 3': 'model 3';
        'model X': 'model X';
        'model Y': 'model Y';
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// ============= Your Code Here =============
/**
 * 遍历元组？
 * T继承于元组，T[number]是获取元组每个元素的值，P是某个值，遍历元组会用到number
 * 这里是遍历值，不是遍历key
 */
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
