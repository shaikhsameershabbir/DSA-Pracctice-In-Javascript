/**
 * ReArranging elements 
 * 3 Categories 
 * Pivote-based problems 
 */


/**
 * input = [2,0,2,0,1,1,1,0]
 * output = [0,0,0,1,1,1,2,2]
 * 
  Approach 
  start= 0, middle = 0, end = nums.lenght -1
if mid == 0  then swap with start  and move start and mid ahed  mid++ & start++
if mid == 1  no swap and increate mid ahed  mid++
if mid == 2  swap with end and do end --
 */

const dutchFlag = (nums: number[]) => {
    let start = 0, mid = 0, end = nums.length - 1;
    while (mid <= end) {
        switch (nums[mid]) {
            case 0:
                [nums[start], nums[mid]] = [nums[mid], nums[start]]
                mid++, start++;
                break;
            case 1:
                mid++
                break;
            case 2:
                [nums[end], nums[mid]] = [nums[mid], nums[end]];
                end--
                break;

        }
    }
    return nums
}
console.log(dutchFlag([2, 0, 2, 0, 1, 1, 1, 0]))


