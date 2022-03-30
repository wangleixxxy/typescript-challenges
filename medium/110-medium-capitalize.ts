/**
 * Capitalize 大写
 * 实现Capitalize<T>，将一个字符串的第一个字母转换成大写字母 // 其余的保持原样
 */

// 实现
type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S

// 验证
type Result1 = MyCapitalize<'foobar'> // 'Foobar'
type Result2 = MyCapitalize<'FOOBAR'> // 'FOOBAR'
type Result3 = MyCapitalize<'foo bar'> // 'Foo bar'
type Result4 = MyCapitalize<''> // ''
type Result5 = MyCapitalize<'a'> // 'A'
type Result6 = MyCapitalize<'b'> // 'B'
type Result7 = MyCapitalize<'c'> // 'C'
type Result8 = MyCapitalize<'d'> // 'D'
type Result9 = MyCapitalize<'e'> // 'E'
type Result10 = MyCapitalize<'f'> // 'F'
type Result11 = MyCapitalize<'g'> // 'G'
type Result12 = MyCapitalize<'h'> // 'H'
type Result13 = MyCapitalize<'i'> // 'I'
type Result14 = MyCapitalize<'j'> // 'J'
type Result15 = MyCapitalize<'k'> // 'K'
type Result16 = MyCapitalize<'l'> // 'L'
type Result17 = MyCapitalize<'m'> // 'M'
type Result18 = MyCapitalize<'n'> // 'N'
type Result19 = MyCapitalize<'o'> // 'O'
type Result20 = MyCapitalize<'p'> // 'P'
type Result21 = MyCapitalize<'q'> // 'Q'
type Result22 = MyCapitalize<'r'> // 'R'
type Result23 = MyCapitalize<'s'> // 'S'
type Result24 = MyCapitalize<'t'> // 'T'
type Result25 = MyCapitalize<'u'> // 'U'
type Result26 = MyCapitalize<'v'> // 'V'
type Result27 = MyCapitalize<'w'> // 'W'
type Result28 = MyCapitalize<'x'> // 'X'
type Result29 = MyCapitalize<'y'> // 'Y'
type Result30 = MyCapitalize<'z'> // 'Z'
