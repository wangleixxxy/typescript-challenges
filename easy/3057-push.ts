/**
 * Push
 * 在类型系统里实现通用的 Array.push 。
 * 
 * 举例
 * type Result = Push<[1, 2], '3'> // [1, 2, '3']
 */

type Push<T extends any[], U> = [...T, U]

// 验证
type Result1 = Push<[], 1> // [1]
type Result2 = Push<[1, 2], '3'> // [1, 2, '3']
type Result3 = Push<['1', 2, '3'], boolean> // ['1', 2, '3', boolean]
type Result4 = Push<['1', 2, '3'], '3'> // ['1', 2, '3']
