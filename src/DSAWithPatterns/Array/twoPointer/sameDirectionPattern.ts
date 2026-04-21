/**
 * Same Direction patten
 * Use Cases 
  - Removeign duplicates
  - Inplache modifications
  - window shifting ,
  - linked list cycle
  
It is fast and slow technique 
 - slow remains on position which is unique 
 - Fast is a scannign pointer
*/


/**
 * Example   remove duplicated from sorted array 
 * input = [1,2,3,3,3,4,4,5,8,8,9,9]
 * output [1,2,3,4,5,8,9]
 */

function removeDuplicates(arr: number[]) {
    let slow = 0;

    for (let fast = 1; fast < arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }

    return arr.slice(0, slow + 1);
}
// console.log(removeDuplicates([1, 2, 3, 3, 3, 4]))



/**
 * leetCode 283 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
 */


const moveZeros = (nums: number[]) => {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            let temp = nums[right];
            nums[right] = nums[left]
            nums[left] = temp;
            left++
        }
    }
    return nums
}
// console.log(moveZeros([0, 1, 2, 0, 5, 0, 6, 0]))


/**
 * Remove all occurrences of a value in-place and return new length.
 * Input: nums = [3,2,2,3], val = 3  
 * Output: 2 → [2,2]
 */

const removeTarget = (nums: number[], target: number) => {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== target) {
            nums[left] = nums[right]
            left++
        }
    }
    nums.length = left
    return nums
}
// console.log(removeTarget([3, 2, 2, 3], 3))

/**
 * Q6 — Longest Substring Without Repeating Characters
 * Problem:
 * Find length of longest substring without repeating characters.
 * Input: "abcabcbb"
 * Output: 3 ("abc")
 */

const getLongestString = (str: string) => {

}