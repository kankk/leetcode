// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// tags: 链表

// 我的解题
// 1. 2019-08-22 10:23:41
// 思路:
// 1. 迭代
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let startNode = null;
  if (l1.val < l2.val) {
    startNode = l1;
    l1 = l1.next;
  } else {
    startNode = l2;
    l2 = l2.next;
  }

  let _pointer = startNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      _pointer.next = l1;
      l1 = l1.next;
    } else {
      _pointer.next = l2;
      l2 = l2.next;
    }
    _pointer = _pointer.next;
  }

  if (!l1) _pointer.next = l2;
  if (!l2) _pointer.next = l1;
  return startNode;
};

// 2. 递归
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
  }
  return l1.val < l2.val ? l1 : l2;
};