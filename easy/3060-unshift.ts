/**
 * Unshift
 * 实现类型版本的 Array.unshift。
 * 
 * 举例
 * type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
 */

type Unshift<T extends any[], U> = [U, ...T]

type Result1 = Unshift<[], 1> // [1]
type Result2 = Unshift<[1, 2], 0> // [0, 1, 2,]
type Result3 = Unshift<['1', 2, '3'], boolean> // [boolean, '1', 2, '3']
type Result4 = Unshift<['1', 2, '3'], '3'> // ['3', '1', 2, '3'] // 原用例有误
