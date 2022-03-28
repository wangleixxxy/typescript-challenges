/**
 * 深度 Readonly
 * 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
 * 您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。
 */

// 实现
// 1. 如何判断类型 注意是 unknown
type DeepReadonly<T extends object> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]>
    : T[P]
}

// 验证
type Result = DeepReadonly<X> // Expected

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}

// 摘自：https://github.com/type-challenges/type-challenges/issues/7934
// 关于 Record<string, any> ，官方给出的解答：
// https://github.com/microsoft/TypeScript/issues/41746
// 所有的引用数据类型都可以通过类型检查
const a1: Record<string, any> = [22];
const a2: Record<string, any> = /\d/;
const a3: Record<string, any> = {};
let a4: Record<string, any> = { name: "张三" };
a4 = [];
const a5: Record<string, any> = new Map();
const a6: Record<string, any> = new Set();
const a7: Record<string, any> = class Person {};
const a8: Record<string, any> = new Promise(() => {});

// Record<string, unknown> 只有"对象" 才能通过类型检查
const b: Record<string, unknown> = () => 22; // error
const b1: Record<string, unknown> = [22]; // error
const b2: Record<string, unknown> = /\d/; // error
const b3: Record<string, unknown> = {}; // ok
let b4: Record<string, unknown> = { name: "张三" }; // ok
b4 = []; // error
const b5: Record<string, unknown> = new Map(); // error
const b6: Record<string, unknown> = new Set(); // error
const b7: Record<string, unknown> = class Person {}; // error
const b8: Record<string, unknown> = new Promise(() => {}); // error
