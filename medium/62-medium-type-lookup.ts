/**
 * Type Lookup 类型查找
 * 有时，您可能希望根据其属性在并集中查找类型。
 * 在此挑战中，我们想通过在联合Cat | Dog中搜索公共type字段来获取相应的类型。
 * 换句话说，在以下示例中，我们期望 
 * LookUp<Dog | Cat, 'dog'>获得Dog，
 * LookUp<Dog | Cat, 'cat'>获得Cat。
 */

// 实现
// type LookUp<U, T> = U extends { type: T } ? U : never

// 实现2
type LookUp<U, T> = U extends infer A | infer B
  ? A extends { type: T }
    ? A
    : B extends { type: T } ? B : never
  : never

// 验证
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type Result1 = LookUp<Animal, 'dog'> // Dog
type Result2 = LookUp<Animal, 'cat'> // Cat
