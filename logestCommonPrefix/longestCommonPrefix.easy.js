/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 1) {
    return strs[0] || "";
  }
  let i = 0;
  while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) i++;
  return strs[0].substring(0, i);
};

module.exports = longestCommonPrefix;
