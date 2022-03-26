/**
 * 元组转换为对象
 * 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// 实现
// T继承于元组，T[number]是获取元组每个元素的值，P是某个值
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}


type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
