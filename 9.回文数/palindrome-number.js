// https://leetcode-cn.com/problems/palindrome-number/
// tags: 数学

// 我的解题
// 1. 2019-08-15 15:42:37
// 思路:
// 1. 先把数字转成字符串
// 2. 用双指针, 同时从头部和尾部判断是否相等
var isPalindrome = function (x) {
  if (x < 0) return false;
  const xStr = x.toString();
  let head = 0;
  let tail = xStr.length - 1;
  while (head < tail) {
    if (xStr[head] !== xStr[tail]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
};

// 改进
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = parseInt(x / 10)
  }

  return x === revertedNumber || x === parseInt(revertedNumber / 10);
};