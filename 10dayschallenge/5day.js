// Find Keys with a Specific Value: Write a function to find all keys in an object that have a specific value.
//
//   Example:
// findKeys({ a: 1, b: 2, c: 1 }, 1); // ["a", "c"]

// ### Method 1: Using `for...in` Loop

function findKeys(obj, value) {
  let keys = [];

  for (let key in obj) {
    if (obj[key] === value) {
      keys.push(key);
    }
  }

  return keys;
}

// Example usage
console.log(findKeys({ a: 1, b: 2, c: 1 }, 1)); // Output: ["a", "c"]

// ### Explanation:
// 	- The function iterates through each key in the object using a `for...in` loop.
// - If the value of the key matches the specific value, the key is added to the `keys` array.
// - Finally, the function returns the array of matching keys.
//
// ### Method 2: Using `Object.keys()` and `filter()`

function findKeys1(obj, value) {
  return Object.keys(obj).filter(key => obj[key] === value);
}

// Example usage
console.log(findKeys1({ a: 1, b: 2, c: 1 }, 1)); // Output: ["a", "c"]

// ### Explanation:
// 	- The function uses `Object.keys()` to get an array of the object's keys.
// - Then, it filters this array, keeping only the keys whose corresponding value matches the specific value.
// - The resulting array contains all the keys that have the desired value.
//
// ### Method 3: Using `for...of` with `Object.entries()`

function findKeys2(obj, value) {
  let keys = [];

  for (let [key, val] of Object.entries(obj)) {
    if (val === value) {
      keys.push(key);
    }
  }

  return keys;
}

// Example usage
console.log(findKeys2({ a: 1, b: 2, c: 1 }, 1)); // Output: ["a", "c"]

// 	### Explanation:
// 	- `Object.entries()` returns an array of the object's key-value pairs.
// - Using `for...of`, the function iterates through these pairs, checking if the value matches the specific value.
// - If it does, the key is added to the `keys` array.
//
// ### Method 4: Using `reduce()`

function findKeys3(obj, value) {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key] === value) {
      acc.push(key);
    }
    return acc;
  }, []);
}

// Example usage
console.log(findKeys3({ a: 1, b: 2, c: 1 }, 1)); // Output: ["a", "c"]

// ### Explanation:
// 	- The `reduce()` method is used to iterate over the keys of the object.
// - For each key, if the value matches, it adds the key to the accumulator array.
// - The final result is an array of keys that match the specified value.
//
// 	These methods provide different ways to accomplish the task, offering options based on readability, efficiency, or preference for different JavaScript features.