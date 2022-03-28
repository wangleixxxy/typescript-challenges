/**
 * 获取函数返回类型
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
 * 
 * 举例
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

 */

// 实现
// 返回函数类型就是用ReturnType
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// 验证
type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

type Result1 = MyReturnType<() => string> // string
type Result2 = MyReturnType<() => 123> // 123
type Result3 = MyReturnType<() => ComplexObject> // ComplexObject
type Result4 = MyReturnType<() => Promise<boolean>> // Promise<boolean>
type Result5 = MyReturnType<() => () => 'foo'> // () => 'foo'
type Result6 = MyReturnType<typeof fn> // 1 | 2
type Result7 = MyReturnType<typeof fn1> // 1 | 2
