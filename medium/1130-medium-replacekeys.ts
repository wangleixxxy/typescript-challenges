/**
 * ReplaceKeys
 * 实现一种ReplaceKeys,要被替换的key在union类型中,如果某种类型没有这个key,直接跳过取代。接收三个参数。
 */

/* _____________ Your Code Here _____________ */

type ReplaceKeys<
  U extends Record<string, any>,
  T extends string,
  Y extends Record<string, any>
> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};

/* _____________ Test Cases _____________ */
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

type Result1 = ReplaceKeys<
  Nodes,
  'name' | 'flag',
  { name: number; flag: string }
>; // ReplacedNodes
type Result2 = ReplaceKeys<Nodes, 'name', { aa: number }>; // NodesNoName
