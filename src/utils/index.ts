export const buttons = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "="],
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["%", "/", "*", "+", "-"];

export const isNumber = (el: string) => numbers.includes(el);
export const isOperator = (el: string) => operators.includes(el);
export const math = (a: number, b: number, sign: string) =>
  sign === "+"
    ? a + b
    : sign === "-"
    ? a - b
    : sign === "*"
    ? a * b
    : sign === "%"
    ? a % b
    : a / b;
