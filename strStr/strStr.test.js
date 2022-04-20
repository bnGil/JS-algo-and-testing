const strStr = require("./strStr.easy");
const { test, expect } = require("@jest/globals");

test("Example 1", () => {
  expect(strStr("hello", "ll")).toBe(2);
});

test("Example 2", () => {
  expect(strStr("aaaaa", "bba")).toBe(-1);
});
