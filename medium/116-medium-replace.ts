/**
 * Replace 替换
 * 实现 Replace<S, From, To> 将字符串 S 中的第一个 子 字符串 From 替换为 To 。
 */

// 实现
type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${Right}`
    : S

// 问题1：查找第一个子串 不需要，直接替换，首先判断 From类型是否为空
// 问题2：替换就是重新拼接

// 验证
type Result1 = Replace<'foobar', 'bar', 'foo'> // 'foofoo' 
type Result2 = Replace<'foobarbar', 'bar', 'foo'> // 'foofoobar' 
type Result3 = Replace<'foobarbar', '', 'foo'> // 'foobarbar' 
type Result4 = Replace<'foobarbar', 'bra', 'foo'> // 'foobarbar' 
type Result5 = Replace<'', '', ''> // '' 
