//Day 3: Arrays

function getSecondLargest(nums) {
  let sortNums = nums.sort().reverse();

  for(let i = 0; i<sortNums.length; i++){
      if(sortNums[i] !== sortNums[i+1]) sortNums.splice(i,1);
  }

  return sortNums[1];
}
/* 
  Array 문제여서 그와 관련된 메소드 활용을 주라고 생각한 점이 화근이었다.
  완전 잘못된 생각이었으며 for문을 돌며 splice된 배열은 재기능을 하지 못하였음
*/

//다른사람의 풀이
function getSecondLargest(nums) {
  let largest = nums[0];
  let secondLargest = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > largest) {
          secondLargest = largest;
          largest = nums[i];
          continue;
      }
      
      if ((nums[i] > secondLargest) && (nums[i] < largest)) {
          secondLargest = nums[i];
      }
  }
  
  return secondLargest;
}