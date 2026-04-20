/**
  *********** Two pointer Apposite direction patterns ***********

  - When to use
    - Sorted Array
    - Pair Proble
    - Palendrome Check
    - sum Problem
  */


/**
 * ****************** Two Sum Problem *******************
 *  Example : Find if two numbers sum to target.
 * input = [1,2,3,4,5,6]
 * output = 6
 */

/**
 Approch 
 First : arr[0] , last arr[n-1]
 if  sum > target move right pointer to left 
 if  sum < target then move left pointer to right
 */

const getSumElement = (arr: number[], target: number) => {
    let left = 0; let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        } else {
            return [arr[left], arr[right]]
        }

    }

    return []

}



/**
 * Valod palendrome Problem
 * input = racecar
 * output = true

 */

/**
 * Approach - two pointer approach 
 * left= str[0],last =str.length-1;
 * if(left !== right) return false 
 * else true 
 */

const getPalendrome = (str: string) => {
    let left = 0, right = str.length - 1;
    while (left < right) {

        if (str[left] !== str[right]) return false
        left++, right--
    }
    return true
}


// console.log('----------', getPalendrome('racecar'))

/**
 * Given a sorted array, return indices of two numbers such that they add up to target.
 *  Input: arr = [2,7,11,15], target = 9  
 *  Output: [0,1]
 */

const getTwoSum = (nums: number[], target: number) => {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        if (nums[start] + nums[end] > target) {
            end--;
        } else if (nums[start] + nums[end] < target) {
            start++
        } else {
            return [start, end]
        }
    }
    return []
}

// console.log('-------->', getTwoSum([2, 7, 11, 15], 26))

/**
 * Given an array where each element represents height, find two lines that together form a container holding the maximum water.
 * Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */

const getContainerWithMostWater = (nums: number[]) => {
    let maxarea = 0, start = 0, end = nums.length - 1;
    while (start < end) {
        let width = end - start;
        let area = Math.min(nums[start], nums[end]) * width;
        maxarea = Math.max(maxarea, area);
        if (nums[start] < nums[end]) {
            start++
        } else {
            end--
        }
    }
    return maxarea
}
// console.log('----------->', getContainerWithMostWater([12, 8, 6, 2, 5, 4, 12, 3, 7]))


/** Leetcode prblem number 38 
 * 
 * Trapping the rain water 
 * Input: [4,2,0,7,2,5]
 * Output: 6
 * 
 **/
const getRainWaterStoreNiveApproach = (height: number[]) => {
    let water = 0;

    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;
        //Define leftmax
        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, height[i])
        }
        // Define rightMax 
        for (let k = i; k < height.length; k++) {
            rightMax = Math.max(rightMax, height[k])
        }
        water += Math.min(leftMax, rightMax) - height[i]
    }
    return water

}

console.log(getRainWaterStoreNiveApproach([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))