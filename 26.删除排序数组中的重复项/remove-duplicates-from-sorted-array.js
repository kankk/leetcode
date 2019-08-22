// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// tags: 数组, 双指针

// 我的解题
// 1. 2019-08-22 11:29:35
// 思路:
// 1. 迭代, 删除与前项相同的项
var removeDuplicates = function (nums) {
  if (!nums) return -1;
  let prev;
  for (let i = 0; i < nums.length;) {
    if (nums[i] === prev) {
      nums.splice(i, 1);
    } else {
      prev = nums[i];
      i++;
    }
  }
  return nums.length;
};

// 官方: 双指针法