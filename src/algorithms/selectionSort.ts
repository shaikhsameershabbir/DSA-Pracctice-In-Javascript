// selection sort algorithm implementation


/**
 Question to sort 
 ✅ Basic Practice


Sort an array of negative and positive integers in ascending order.

Find the second smallest element in an array using selection sort logic.

✅ Intermediate Level
Sort an array of objects by a numeric property using selection sort.
(e.g., sort users by age)

Count the number of swaps performed during selection sort.

Modify selection sort to sort only the first k smallest elements.

Sort an array of characters by their ASCII values using selection sort.

✅ Edge Cases & Theory
How does selection sort behave when the array is already sorted?

How does selection sort behave when all elements are the same?

What is the worst-case time complexity of selection sort? Explain with an example.

What is the space complexity of selection sort? Why is it considered in-place sorting?

✅ Thought Challenges
Can you modify selection sort to sort in descending order with fewer swaps?

Implement a stable selection sort. (Hint: Requires shifting elements instead of swapping)

Explain why selection sort is not a stable sorting algorithm with an example.

✅ Fun Coding Tasks
Write a function that sorts even-index elements in ascending and odd-index elements in descending order using selection sort.

Given a matrix of numbers, sort each row using selection sort.

Reverse an array using selection sort logic (by selecting the maximum each time).
 */


// 1 .  sort array in accending order 
export const sortInAccendingOrder = (arr: number[]) => {

    const lengthOfArray = arr.length;

    for (let i = 0; i < lengthOfArray; i++) {
        let meanIndex = i
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[meanIndex] > arr[k]) {
                meanIndex = k
            }

        }
        if (meanIndex !== i) {
            const temp = arr[i]
            arr[i] = arr[meanIndex];
            arr[meanIndex] = temp

        }
    }
    return arr
}


console.log('----------------------------* Output *----------------------------')
const arr: number[] = [5, 4, 3, 2, 1]
console.log('Example array of numbers ', arr)
// Sort array in accending order 
const accendinOrder = sortInAccendingOrder([...arr]); // Using spread operator to clone array
console.log('array in ascending order  = ', accendinOrder)
console.log('----------------------------* End    *----------------------------')
// 2 . sort array in decending order 
export const sortInDecendingOrder = (arr: number[]) => {
    const arrLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            const temp = arr[i]
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp
        }
    }
    return arr;
}
console.log('----------------------------* Output *----------------------------')
const arr1: number[] = [5, 9, 4, 3, 2, 1]
console.log('Example array of numbers ', arr1)
// Sort array in accending order 
const decendinOrder = sortInAccendingOrder(arr); // Using spread operator to clone array
console.log('array in decending  order  = ', decendinOrder)
console.log('----------------------------* End    *----------------------------')
// 3 . Sort a list of strings alphabetically using selection sort.
/**
  - Input: ["banana", "apple", "cherry", "date"]
  - Output: ["apple", "banana", "cherry", "date"]
Goal: Sort strings in lexicographical (alphabetical) order using selection sort.
 */
export const sortStringsInAlphabeticalOrder = (array: string[]) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

console.log('----------------------------* Output *----------------------------')
const stringArray = ['Banana', 'Apple', 'Aapple', 'zebra', 'cobra']
// Sort string in alphabetical order 
console.log('array of string to sort ', stringArray)
const stringSort = sortStringsInAlphabeticalOrder(stringArray)
console.log('sort strin in acending alphabetical order ', stringSort)
console.log('----------------------------* End    *----------------------------')








console.log('----------------------------* Output *----------------------------')
console.log('----------------------------* End    *----------------------------')












