/**
 * 获取元组长度
 * 创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。
 */

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// 实现 直接获取属性
type Length<T extends readonly any[]> = T['length']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
