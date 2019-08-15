// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
// tags: 链表

// 我的解题
// 1. 2019-08-15 16:00:31
// 思路: 因为无法访问想要删除的节点的前驱节点, 所有需要把被删节点的值替换为它后面节点中的值, 然后删除它之后的节点
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
