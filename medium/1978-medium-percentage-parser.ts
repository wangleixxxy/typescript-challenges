/**
 * Percentage Parser 百分比解析
 * 实现类型 PercentageParser。根据规则 /^(\+|\-)?(\d*)?(\%)?$/ 匹配类型 T。
 * 匹配的结果由三部分组成，分别是：[正负号, 数字, 单位]，如果没有匹配，则默认是空字符串。
 */

/* _____________ 你的代码 _____________ */
// 符号
type isSign0<T extends string> = T extends `+${infer R}`
  ? ['+', R]
  : T extends `-${infer R}`
  ? ['-', R]
  : ['', T];
// 第二种方式
type isSign<T extends string> = T extends `${infer First}${infer R}`
  ? First extends '+' | '-'
    ? [First, R]
    : ['', T]
  : ['', ''];

// 数字 + 百分号
type isPercent<T extends string> = T extends `${infer R}%` ? [R, '%'] : [T, ''];

type PercentageParser<A extends string> = [
  isSign<A>[0],
  ...isPercent<isSign<A>[1]>
];

/* _____________ 测试用例 _____________ */

type Case0 = ['', '', ''];
type Case1 = ['+', '', ''];
type Case2 = ['+', '1', ''];
type Case3 = ['+', '100', ''];
type Case4 = ['+', '100', '%'];
type Case5 = ['', '100', '%'];
type Case6 = ['-', '100', '%'];
type Case7 = ['-', '100', ''];
type Case8 = ['-', '1', ''];
type Case9 = ['', '', '%'];
type Case10 = ['', '1', ''];
type Case11 = ['', '100', ''];

type Result1 = PercentageParser<''>; // Case0
type Result2 = PercentageParser<'+'>; // Case1
type Result3 = PercentageParser<'+1'>; // Case2
type Result4 = PercentageParser<'+100'>; // Case3
type Result5 = PercentageParser<'+100%'>; // Case4
type Result6 = PercentageParser<'100%'>; // Case5
type Result7 = PercentageParser<'-100%'>; // Case6
type Result8 = PercentageParser<'-100'>; // Case7
type Result9 = PercentageParser<'-1'>; // Case8
type Result10 = PercentageParser<'%'>; // Case9
type Result11 = PercentageParser<'1'>; // Case10
type Result12 = PercentageParser<'100'>; // Case11
