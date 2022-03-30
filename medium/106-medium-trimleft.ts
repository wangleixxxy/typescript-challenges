/**
 * Trim Left
 * 实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。
 */

// 实现
type Space = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${Space}${infer W}` ? TrimLeft<W> : S

// 扩展
// 4803题
type TrimRight<S extends string> = S extends `${infer W}${Space}` ? TrimRight<W> : S
// 108
type Trim<S extends string> = TrimLeft<TrimRight<S>>

// 验证
type Result1 = TrimLeft<'str'> // 'str'
type Result2 = TrimLeft<' str'> // 'str'
type Result3 = TrimLeft<'     str'> // 'str'
type Result4 = TrimLeft<'     str     '> // 'str     '
type Result5 = TrimLeft<'   \n\t foo bar '> // 'foo bar '
type Result6 = TrimLeft<''> // ''
type Result7 = TrimLeft<' \n\t'> // ''
