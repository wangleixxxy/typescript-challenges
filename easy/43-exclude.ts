/**
 * 实现内置的Exclude <T，U>类型，但不能直接使用它本身。
 * 从联合类型T中排除U的类型成员，来构造一个新的类型。
 */

// 实现
// 如果在 T 中的类型在 U 中可以找到，返回 never, 如果在 U 中找不到 T 中的某个类型，就返回这个类型
// 也就是 T 的范围大，多于 U 的赋值never, 即删除多余的，返回相同的
type MyExclude<T, U> = T extends U ? never : T

type test1 = Exclude<'a' | 'b' | 'c', 'a'>        // 'b' | 'c'
type test2 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>  // 'c'

type test3 = MyExclude<'a' | 'b' | 'c', 'a'>        // 'b' | 'c'
type test4 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>  // 'c'
