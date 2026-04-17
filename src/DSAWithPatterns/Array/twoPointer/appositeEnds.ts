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


console.log('----------', getPalendrome('racecar'))