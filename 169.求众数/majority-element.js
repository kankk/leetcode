// https://leetcode-cn.com/problems/majority-element/
// tags: 位运算, 数组, 分治算法

// 我的解题
// 1. 2019-08-15 14:53:58
// 思路:
// 1. 遍历数组, 循环统计每个数字出现的次数
var majorityElement = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.keys(map).filter(key => map[key] > nums.length / 2)[0]
};

// 官方解题
// 1. 统计数字出现次数
// 2. 哈希表
// 3. 排序, 众数的下标为 n / 2
// 4. 随机化
// 5. 分治
// 6. 投票法