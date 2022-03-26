/**
 * 第一个元素
 * 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
 */

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// 实现
// 如果是空，返回never,否则返回第一个元素的类型
type First<T extends (string | number)[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T extends [] ? never : T[0] // 用了any

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
