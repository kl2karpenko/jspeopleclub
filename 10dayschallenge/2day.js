// Here are several solutions to find all duplicate elements in an array using JavaScript:
//
// ### Method 1: Using a Hash Map (Object)
// This approach uses a hash map (JavaScript object) to count occurrences of each element and then identifies duplicates.

function findDuplicates(arr) {
  let counts = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }

  for (let key in counts) {
    if (counts[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

// Example usage
console.log(findDuplicates([1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 9, 1])); // Output: [1, 2, 3]

// ### Explanation:
// 	- We count occurrences of each element using a hash map.
// - Then, we check which elements have a count greater than 1 and push them to the `duplicates` array.
//
// ### Method 2: Using Set and Filter
// This approach leverages `Set` to keep track of unique elements and `filter()` to find duplicates.

function findDuplicates2(arr) {
  let seen = new Set();
  return arr.filter(item => {
    if (seen.has(item)) {
      return true;
    } else {
      seen.add(item);
      return false;
    }
  });
}

// Example usage
console.log(findDuplicates2([1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 9, 1])); // Output: [3, 2, 1]

// ### Explanation:
// 	- We use a `Set` to track elements we have seen.
// - The `filter()` method returns elements that have already been added to the `Set` (duplicates).
//
// ### Method 3: Using a Sorting Approach
// In this approach, the array is sorted first, then we look for consecutive elements that are the same.

function findDuplicates3(arr) {
  arr.sort((a, b) => a - b);
  let duplicates = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

// Example usage
console.log(findDuplicates3([1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 9, 1])); // Output: [1, 2, 3]

// ### Explanation:
// 	- The array is sorted, and then we iterate through it to find consecutive elements that are equal, indicating duplicates.
//
// ### Method 4: Using a Frequency Map with `reduce()`
// 	This method combines a frequency map with the `reduce()` function to identify duplicates.

function findDuplicates(arr) {
  let frequency = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(frequency).filter(key => frequency[key] > 1).map(Number);
}

// Example usage
console.log(findDuplicates([1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 9, 1])); // Output: [1, 2, 3]

// ### Explanation:
// 	- We use `reduce()` to build a frequency map.
// - Then, we filter out the keys (array elements) with a frequency greater than 1.
//
// ### Method 5: Using Nested Loops (Brute Force)
// This straightforward approach checks each element against every other element to find duplicates.

function findDuplicates4(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

// Example usage
console.log(findDuplicates4([1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 9, 1])); // Output: [1, 2, 3]

// ### Explanation:
// 	- This approach uses two loops to compare each element with every other element, checking for duplicates.
// 	                                                                                              - It is less efficient but straightforward.
//
// 	Each method has its strengths, depending on the specific use case and the size of the array. The `Set` and hash map methods are generally the most efficient and commonly used.