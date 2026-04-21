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

// bruit force method 
const getRainWaterStoreNiveApproach = (height: number[]) => {
    let water = 0;

    for (let i = 0; i < height.length; i++) {
        let leftMax = 0, rightMax = 0;
        // calculate leftMax
        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, height[j])
        }
        for (let k = i; k < height.length; k++) {
            rightMax = Math.max(rightMax, height[k]);
        }
        // Calculate wate 
        water += Math.min(leftMax, rightMax) - height[i]
    }
    return water
}

// console.log(getRainWaterStoreNiveApproach([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// Time commplexity O(3n)
// Approach that can beaccepted 

const getRainWaterStoreNiveApproachBest = (height: number[]) => {
    let leftMax = new Array(height.length).fill(0)
    let rightMax = new Array(height.length).fill(0)
    let water = 0;
    leftMax[0] = height[0]
    rightMax[height.length - 1] = height[height.length - 1]
    // leftMax
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    // RightMax
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    for (let index = 0; index < height.length; index++) {
        water += Math.min(leftMax[index], rightMax[index]) - height[index]

    }
    return water
}
// console.log(getRainWaterStoreNiveApproachBest([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))



// Using Two pointer Approach 
// Timer complexity O(1)

const getTrapedWater = (height: number[]) => {
    let traperWater = 0,
        leftMax = 0,
        rightMax = 0,
        left = 0,
        right = height.length - 1;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (leftMax < rightMax) {
            traperWater += leftMax - height[left];
            left++;
        } else {
            traperWater += rightMax - height[right];
            right--;
        }
    }

    return traperWater;
};


console.log(getTrapedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
