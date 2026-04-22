// ------------------------ Type 1 Fixed size----------------------

/*
  when to use
   Window sie is constant (K)
   example sum of subarray of size k
*/

// Example

/**
 * Question 
 * Max Sum Subarray of Size K
 *  Input: arr = [2,1,5,1,3,2], k = 3  
 * Output: 9 → (5+1+3)
 * 
 * Process 
 * Fisrt Window -> Compute sum 
 * Then slide 
        remove left element 
        add right element 

 * 
 */


const getWindowSum = (nums: number[], k: number) => {
    let windowSum = 0;
    // first window 
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }
    let maxSum = windowSum;
    for (let j = k; j < nums.length; j++) {
        windowSum += nums[j];
        windowSum -= nums[j - k]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum

}

// console.log(getWindowSum([2, 1, 5, 1, 3, 2], 3))


