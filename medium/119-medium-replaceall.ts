/**
 * ReplaceAll
 * 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的【所有】子字符串 From 替换为 To。
 */

// 实现
// 只留下右边就可以了
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${ReplaceAll<Right, From, To>}`
    : S

// 验证
type Result1 = ReplaceAll<'foobar', 'bar', 'foo'> // 'foofoo' 
type Result2 = ReplaceAll<'foobar', 'bag', 'foo'> // 'foobar' 
type Result3 = ReplaceAll<'foobarbar', 'bar', 'foo'> // 'foofoofoo' 
type Result4 = ReplaceAll<'t y p e s', ' ', ''> // 'types' 
type Result5 = ReplaceAll<'foobarbar', '', 'foo'> // 'foobarbar' 
type Result6 = ReplaceAll<'barfoo', 'bar', 'foo'> // 'foofoo' 
type Result7 = ReplaceAll<'foobarfoobar', 'ob', 'b'> // 'fobarfobar' 
type Result8 = ReplaceAll<'foboorfoboar', 'bo', 'b'> // 'foborfobar' 
type Result9 = ReplaceAll<'', '', ''> // '' 
