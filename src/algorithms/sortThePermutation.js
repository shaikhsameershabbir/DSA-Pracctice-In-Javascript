/**
 Sort the permutation
You are given a number 'n' and an array whose elements are from 1 to n and are distinct. So for example if the value of n was 3 then the array 'a' can be [1,3,2] or [1,2,3] or any other permutation. In one operation you can do the following:

Select an index 'i' from 1 to n-2 where a[i]>a[i-1] and a[i]>a[i+1] then you can swap a[i] with a[i+1].

Determine of it is possible to sort the array in increasing order after any number of operations.

Sample Input - 1

5
5 4 3 2 1
Sample Output - 1

false
Explanation:

There is no a[i] which is greater than a[i+1] and a[i-1] and thus we cannot apply any operation on the array and it remains the same.
Sample Input - 2:

5
1 3 2 4 5
Sample Output - 2:

true
Explanation: We can swap the element at index 1 (3) with the element at index 2 (2) since 3 > 1 and 3 > 2, which results in the array [1 2 3 4 5] which is sorted.

Constraints:

3<=n<=100
Note: The function should return the boolean.
 */