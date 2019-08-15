// https://leetcode-cn.com/problems/single-number/
// tags: 位运算, 哈希表

// 我的解题
// 1. 2019-08-15 13:42:49
// 思路:
// 1. 使用对象保存出现过的值
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      delete map[nums[i]]
    } else {
      map[nums[i]] = true;
    }
  }
  return Object.keys(map)[0]
};