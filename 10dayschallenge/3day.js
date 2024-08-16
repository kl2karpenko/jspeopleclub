// Find Pair with Sum: Find a pair of numbers in an array that adds up to a given sum.
//
//   Example:
// findPairWithSum([1, 2, 3, 4, 5], 9); // [4, 5]

// ### Method 1: Using a Hash Map (Object)
// This is an efficient approach that uses a hash map to store and check for complements as you iterate through the array.

function findPairWithSum(arr, targetSum) {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = targetSum - arr[i];
    if (hashMap[complement] !== undefined) {
      return [complement, arr[i]];
    }
    hashMap[arr[i]] = i;
  }

  return null; // Return null if no pair is found
}

// Example usage
console.log(findPairWithSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]

// ### Explanation:
// - As you iterate through the array, for each element `arr[i]`, you calculate its complement with respect to the target sum (`targetSum - arr[i]`).
// - If the complement exists in the hash map, you've found your pair.
// - Otherwise, store the element in the hash map and continue.
//
// ### Method 2: Using Two Pointers Technique
// This approach works well if the array is sorted. If not, you need to sort the array first.

function findPairWithSum1(arr, targetSum) {
  arr.sort((a, b) => a - b); // Sort the array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === targetSum) {
      return [arr[left], arr[right]];
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return null; // Return null if no pair is found
}

// Example usage
console.log(findPairWithSum1([1, 2, 3, 4, 5], 9)); // Output: [4, 5]

// ### Explanation:
// 	- First, the array is sorted.
// - Two pointers, one starting at the beginning (`left`) and one at the end (`right`), are used.
// - The sum of the elements at these pointers is compared to the target sum. If the sum matches, you've found your pair.
// - If the sum is less than the target, move the left pointer rightwards to increase the sum. If the sum is more, move the right pointer leftwards to decrease the sum.

// ### Method 3: Brute Force Approach
// This is the simplest method but not the most efficient, especially for large arrays.

function findPairWithSum2(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }

  return null; // Return null if no pair is found
}

// Example usage
console.log(findPairWithSum2([1, 2, 3, 4, 5], 9)); // Output: [4, 5]

// ### Explanation:
// 	- This approach uses two nested loops to check every possible pair of numbers in the array.
// - If a pair with the desired sum is found, it is returned.

// ### Method 4: Using Set
// This method uses a `Set` to keep track of elements that you have seen so far and checks if the complement exists in the set.

function findPairWithSum3(arr, targetSum) {
  let seen = new Set();

  for (let num of arr) {
    let complement = targetSum - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null; // Return null if no pair is found
}

// Example usage
console.log(findPairWithSum3([1, 2, 3, 4, 5], 9)); // Output: [4, 5]

// ### Explanation:
// 	- For each element in the array, calculate the complement with respect to the target sum.
// - Check if this complement exists in the `Set`. If it does, you've found your pair.
// - If not, add the current element to the `Set` and continue.
//
// These methods provide various approaches depending on your needs, whether you want simplicity, efficiency, or prefer using different data structures like objects, sets, or arrays.