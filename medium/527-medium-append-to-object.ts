/**
 * Append to object
 * 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。
 */

type AppendToObject<T, U extends keyof any, V> = {
  [p in keyof T | U]: p extends keyof T ? T[p] : V;
};

type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  isMotherRussia: false | undefined;
};

type Result1 = AppendToObject<test1, 'home', boolean>; // testExpect1
type Result2 = AppendToObject<test2, 'home', 1>; // testExpect2
type Result3 = AppendToObject<test3, 'isMotherRussia', false | undefined>; // testExpect3
