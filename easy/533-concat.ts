/**
 * Concat
 * 在类型系统里实现 JavaScript 内置的 Array.concat 方法，
 * 这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
 * 
 * 举例：
 * type Result = Concat<[1], [2]> // expected to be [1, 2]
 */

type Concat<T extends any[], U extends any[]> = [...T, ...U]

// 验证
type Result1 = Concat<[], []> // []
type Result2 = Concat<[], [1]> // [1]
type Result3 = Concat<[1, 2], [3, 4]> // [1, 2, 3, 4]
type Result4 = Concat<['1', 2, '3'], [false, boolean, '4']> // ['1', 2, '3', false, boolean, '4']
