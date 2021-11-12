/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
  public boolean isPalindrome(ListNode head) {
    if(head == null){
      return true;
    }
    List<Integer> result = new ArrayList<>();
    result.add(head.val);
    ListNode next = head.next;
    while(next != null){
      result.add(next.val);
      next = next.next;
    }
    for(int i=0; i<result.size()-1 ;i++){
      if(result.get(i) != result.get(result.size()-1-i)){
        return false;
      }
    }
    return true;
  }
}

