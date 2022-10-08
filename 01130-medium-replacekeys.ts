// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type ReplacedNodeA = {
  type: 'A';
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: 'B';
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: 'C';
  name: number;
  flag: string;
};

type NoNameNodeA = {
  type: 'A';
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: 'C';
  flag: number;
  name: never;
};

type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

type cases = [
  Expect<
    Equal<
      ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>,
      ReplacedNodes
    >
  >,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>
];

// ============= Your Code Here =============
/**
 * Y中的key可能不在U中
 */
// type ReplaceKeys<U, T, Y> = {
//   [key in keyof U]: key extends keyof Y ? Y[key]: U[key]
// }

/**
 * 先判断是否在U中
 * 再次判断是否在T中，在T中存在，肯定是在Y中
 *
 * 注意：判断是否在联合类型中，直接使用extends
 * 如果是判断是否在对象中，使用 extends keyof XXX
 */
type ReplaceKeys<U, T, Y> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key];
};
