// https://leetcode-cn.com/problems/reverse-string/
// tags: 双指针, 字符串

// 我的解题
// 1. 2019-08-15 11:05:05
// 思路:
// 1. 用双指针, 同时从头部和尾部开始交换值
// 2. 自增自减向中间遍历
// 3. 直到头指针遇到或者超过尾指针停止
var reverseString = function (s) {
  let head = 0;
  let tail = s.length - 1;
  while (head < tail) {
    const temp = s[head];
    s[head] = s[tail];
    s[tail] = temp;
    head++;
    tail--;
  }
  return s;
};