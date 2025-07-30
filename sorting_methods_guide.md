# Complete Guide to Sorting Methods in JavaScript

## 1. Bubble Sort

### Definition:
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

### Core Concept:
- Compare each pair of adjacent items
- Swap them if they are in the wrong order
- Repeat until no more swaps are needed

### JavaScript Code:
```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

### Elaboration:
- The outer loop controls the number of passes through the array.
- The inner loop compares adjacent elements and swaps them if they are in the wrong order.
- With each pass, the largest unsorted element "bubbles" to its correct position at the end of the array.
- Inefficient for large datasets but easy to understand and implement.

### Time Complexity:
- Best: O(n) (when already sorted, with optimization)
- Average: O(n^2)
- Worst: O(n^2)

---

## 2. Selection Sort

### Definition:
Selection Sort selects the smallest (or largest) element from the unsorted part and swaps it with the beginning of the unsorted part.

### Core Concept:
- Divide the array into two parts: sorted and unsorted.
- Find the minimum value from the unsorted part and move it to the end of the sorted part.
- Repeat for all elements.

### JavaScript Code:
```js
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
```

### Elaboration:
- Outer loop selects the current index for placing the smallest value.
- Inner loop finds the minimum element in the remaining unsorted part.
- Swap the found minimum with the current index.
- No matter the input, it always performs n(n-1)/2 comparisons.

### Time Complexity:
- Best: O(n^2)
- Average: O(n^2)
- Worst: O(n^2)

---

## 3. Insertion Sort

### Definition:
Insertion Sort builds the sorted array one item at a time by comparing each new element with the already sorted ones and inserting it in the correct place.

### Core Concept:
- Start from the second element.
- Move backwards in the sorted portion and shift elements until you find the correct spot.
- Insert the current element into its position.

### JavaScript Code:
```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

### Elaboration:
- Efficient for small datasets and nearly sorted data.
- More efficient than bubble and selection in best case scenarios.
- Stable and in-place sort.

### Time Complexity:
- Best: O(n)
- Average: O(n^2)
- Worst: O(n^2)

---

## 4. Merge Sort

### Definition:
Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and merges the sorted halves.

### Core Concept:
- Divide the array until each piece has 1 element.
- Merge subarrays while sorting.
- Recurse back to build the sorted array.

### JavaScript Code:
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}
```

### Elaboration:
- Merge process ensures that at every step, a sorted list is returned.
- Recursion builds sorted subarrays from the bottom up.
- Uses extra space for merged arrays.

### Time Complexity:
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

---

## 5. Quick Sort

### Definition:
Quick Sort selects a pivot, partitions the array around it, and recursively sorts the partitions.

### Core Concept:
- Select a pivot (commonly last element).
- Reorder elements so that all elements less than pivot are to the left, greater are to the right.
- Apply recursively to subarrays.

### JavaScript Code:
```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

### Elaboration:
- Efficient in practice and commonly used.
- In-place version possible for space optimization.
- Worst case when pivot divides array poorly.

### Time Complexity:
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n^2)

---

## 6. Heap Sort

### Definition:
Heap Sort uses a binary heap data structure. It builds a max heap and repeatedly extracts the maximum element.

### Core Concept:
- Convert array into max heap.
- Swap the first (max) element with the last.
- Reduce heap size and reheapify.

### JavaScript Code:
```js
function heapSort(arr) {
  const n = arr.length;

  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
```

### Elaboration:
- Always ensures the largest element bubbles to the top.
- Maintains the heap invariant.
- Performs in-place sorting with no need for recursion.

### Time Complexity:
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

---

## Summary Table:

| Sorting Method | Best Case  | Average Case | Worst Case | Space Complexity | Stable? |
| -------------- | ---------- | ------------ | ---------- | ---------------- | ------- |
| Bubble Sort    | O(n)       | O(n^2)       | O(n^2)     | O(1)             | Yes     |
| Selection Sort | O(n^2)     | O(n^2)       | O(n^2)     | O(1)             | No      |
| Insertion Sort | O(n)       | O(n^2)       | O(n^2)     | O(1)             | Yes     |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) | O(n)             | Yes     |
| Quick Sort     | O(n log n) | O(n log n)   | O(n^2)     | O(log n)         | No      |
| Heap Sort      | O(n log n) | O(n log n)   | O(n log n) | O(1)             | No      |

