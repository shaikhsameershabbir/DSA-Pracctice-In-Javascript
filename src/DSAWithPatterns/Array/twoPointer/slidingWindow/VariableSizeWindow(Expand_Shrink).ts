/**
 * Variable Size Window (Expand → Shrink)
 */

/**
 * Condition based window 
 * Not fixed size 
 * You expand until valid then shrink
 */

/**
 * Example: Smallest subarray with sum >= target 
 Input: [2,3,1,2,4,3], target = 7  
 Output: 2 → [4,3]

* Approach 
 Expand until sum >= target 
 shrink  to minimise the lenght 
*/

const getSubArray = (nums: number[], target: number) => {
    let left = 0, sum = 0, minLenght = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLenght = Math.min(minLenght, right - left + 1);
            sum -= nums[left];
            left++
        }
    }
    return minLenght === Infinity ? 0 : minLenght
}
// console.log(getSubArray([2, 3, 1, 2, 4, 3], 7))

