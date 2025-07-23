// selection sort algorithm implementation


/**









Modify selection sort to sort only the first k smallest elements.

Input: [5, 4, 3, 2, 1], k = 3

Expected Output: [1, 2, 3, 5, 4]

Goal: Perform selection sort only for the first k positions.

Sort an array of characters by their ASCII values using selection sort.

Input: ['d', 'a', 'c', 'b']

Expected Output: ['a', 'b', 'c', 'd']

Goal: Sort based on ASCII values.

✅ Edge Cases & Theory
How does selection sort behave when the array is already sorted?

Input: [1, 2, 3, 4, 5]

Expected Behavior: It still compares all elements but performs zero swaps.

How does selection sort behave when all elements are the same?

Input: [2, 2, 2, 2]

Expected Behavior: No swaps required; selection sort runs normally with unnecessary comparisons.

What is the worst-case time complexity of selection sort? Explain with an example.

Input: [5, 4, 3, 2, 1]

Expected Answer: O(n²) because in every iteration you still check all remaining elements regardless of order.

What is the space complexity of selection sort? Why is it considered in-place sorting?

Answer Expected:

Space Complexity: O(1)

Reason: Because it uses only a constant amount of extra space for swapping.

✅ Thought Challenges
Can you modify selection sort to sort in descending order with fewer swaps?

Input: [1, 2, 3, 4, 5]

Expected Output: [5, 4, 3, 2, 1]

Goal: Find if there's any optimization possible when sorting descending.

Implement a stable selection sort. (Hint: Requires shifting elements instead of swapping)

Input: [4, 3, 3, 2, 1]

Expected Output: [1, 2, 3, 3, 4]

Goal: Implement selection sort so that equal elements retain their relative order (stable).

Explain why selection sort is not a stable sorting algorithm with an example.

Input Example:
[ {value: 5, id: 1}, {value: 5, id: 2}, {value: 4, id: 3} ]

Expected Explanation: Swapping can change the order of equal elements.

✅ Fun Coding Tasks
Sort even-index elements in ascending and odd-index elements in descending order.

Input: [5, 4, 3, 2, 1, 0]

Expected Output: [1, 4, 3, 2, 5, 0]

Goal: Apply selection sort separately on even/odd indexed elements.

Given a matrix of numbers, sort each row using selection sort.

Input:

csharp
Copy
Edit
[
  [3, 1, 2],
  [9, 5, 6]
]
Expected Output:

csharp
Copy
Edit
[
  [1, 2, 3],
  [5, 6, 9]
]
Goal: Apply selection sort on each row individually.

Reverse an array using selection sort logic (by selecting the maximum each time).

Input: [1, 2, 3, 4, 5]

Expected Output: [5, 4, 3, 2, 1]

Goal: Modify selection sort to reverse the array.

If you want, I can pick some of these and write full code for you
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


console.log('--------------------------------------------------------')
const arr: number[] = [5, 4, 3, 2, 1]
console.log('Example array of numbers ', arr)
// Sort array in accending order 
const accendinOrder = sortInAccendingOrder([...arr]); // Using spread operator to clone array
console.log('array in ascending order  = ', accendinOrder)
console.log('--------------------------------------------------------')
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
console.log('--------------------------------------------------------')
const arr1: number[] = [5, 9, 4, 3, 2, 1]
console.log('Example array of numbers ', arr1)
// Sort array in accending order 
const decendinOrder = sortInAccendingOrder(arr); // Using spread operator to clone array
console.log('array in decending  order  = ', decendinOrder)
console.log('--------------------------------------------------------')
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

console.log('--------------------------------------------------------')
const stringArray = ['Banana', 'Apple', 'Aapple', 'zebra', 'cobra']
// Sort string in alphabetical order 
console.log('array of string to sort ', stringArray)
const stringSort = sortStringsInAlphabeticalOrder(stringArray)
console.log('sort strin in acending alphabetical order ', stringSort)
console.log('--------------------------------------------------------')




/**
Sort an array of floating-point numbers in descending order.

Input: [3.5, 2.1, 4.7, 1.0]

Expected Output: [4.7, 3.5, 2.1, 1.0]

*/

export const sortFloteinDecendingOrder = (array: number[]) => {
    const length = array.length
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let maxIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                maxIndex = j
            }
        }
        if (maxIndex !== i) {
            array[i] = array[maxIndex]
            array[maxIndex] = element
        }
    }
    return array
}


console.log('--------------------------------------------------------')
const floatArray = [3.5, 2.1, 4.7, 1.0]
const sortFloatByDecrementOrder = sortFloteinDecendingOrder([...floatArray])
console.log(`input array : ${floatArray}`)
console.log(`output  :  ${sortFloatByDecrementOrder}`)
console.log('--------------------------------------------------------')



/*
Find the second smallest element in an array using selection sort logic.

Input: [7, 2, 8, 1, 4]

Expected Output: 2
*/

export const getSecondSmallest = (array: number[]) => {
    const length = array.length;
    for (let i = 0; i < 2; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp
        }
    }
    return array[1]
}

console.log('--------------------------------------------------------')
console.log('Output for - To find the second smallest element in the array !')
const arrayToFindSecodSmallest = [7, 2, 8, 1, 4]
const output = getSecondSmallest([...arrayToFindSecodSmallest])
console.log(`Input Array : ${arrayToFindSecodSmallest}`)
console.log(`Output : ${output}`)
console.log('--------------------------------------------------------')






// ✅ Intermediate Level
/*
Sort an array of objects by a numeric property using selection sort.
[{ name: "A", age: 30 }, { name: "B", age: 25 }, { name: "C", age: 35 }]
Expected Output:

typescript
Copy
Edit
[{ name: "B", age: 25 }, { name: "A", age: 30 }, { name: "C", age: 35 }]
Goal: Sort objects by the age property in ascending order.
*/

export const sortObjectsByNumericProperty = (array: { name: string, age: number }[]) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[minIndex].age > array[j].age) {
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

console.log('--------------------------------------------------------')
const objectsArray = [{ name: "A", age: 30 }, { name: "B", age: 25 }, { name: "C", age: 35 }]
const sortedObjects = sortObjectsByNumericProperty(objectsArray)
console.log(`Input Array : ${objectsArray}`)
console.log(`Output : ${sortedObjects}`)
console.log('--------------------------------------------------------')

/*

Count the number of swaps performed during selection sort.

Input: [3, 1, 2]

Expected Output: 2 (Number of swaps performed)

Goal: Implement selection sort and return the count of swaps.


*/

export const getNumberOfSwapsInSelectionSort = (array: number[]) => {
    const totallenght = array.length;
    let numberOfSwap = 0;
    for (let index = 0; index < array.length; index++) {
        let min = index;
        for (let i = index + 1; i < array.length; i++) {
            if (array[min] > array[i]) {
                min = i
            }
        }
        if (min !== index) {
            let temp = array[index];
            array[index] = array[min];
            array[min] = temp;
            numberOfSwap++
        }

    }
    return { array, numberOfSwap }
}


console.log('--------------------------------------------------------')
const checkNuperofSwap = [9,8,7,6,5,4,3,2,1]
const out = getNumberOfSwapsInSelectionSort(checkNuperofSwap)
console.log(`Input Array : ${checkNuperofSwap}`)
console.log(`Output :- sor tedArray : ${out.array} , number of swaps :${out.numberOfSwap} `)
console.log('--------------------------------------------------------')