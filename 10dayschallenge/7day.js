// Calculate Factorial: Write a function to calculate the factorial of a number.
//
// 	Example:
// factorial(5); // 120

// Here are several ways to calculate the factorial of a number in JavaScript:
//
// ### Method 1: Iterative Approach
// This method uses a simple loop to multiply all numbers from 1 to the given number.

function factorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// Example usage
console.log(factorial(5)); // Output: 120

// ### Explanation:
// 	- We initialize `result` to 1.
// - The loop starts from 2 and multiplies `result` by each number up to `num`.
// - This approach is straightforward and efficient for most cases.
//
// ### Method 2: Recursive Approach
// This method uses recursion, where the function calls itself to calculate the factorial.

function factorial1(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// Example usage
console.log(factorial1(5)); // Output: 120

// ### Explanation:
// 	- The base case is when `num` is 1 or less, returning 1.
// - Otherwise, the function calls itself with `num - 1` and multiplies the result by `num`.
// - This method is elegant but can lead to stack overflow for very large numbers due to deep recursion.
//
// ### Method 3: Using `reduce()`
// This approach leverages JavaScript's `Array.reduce()` method to calculate the factorial.

function factorial2(num) {
  if (num < 0) return undefined; // Factorial is not defined for negative numbers
  if (num === 0) return 1; // 0! is 1

  return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
}

// Example usage
console.log(factorial2(5)); // Output: 120

// ### Explanation:
// 	- We create an array of numbers from 1 to `num` using `Array.from()`.
// - The `reduce()` method multiplies all elements of this array together to produce the factorial.
// - This method is concise and leverages functional programming concepts.
//
// ### Method 4: Using Memoization (Dynamic Programming)
// This method uses memoization to store previously calculated factorials, which can be useful for repetitive calculations.

function factorial3(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num <= 1) return 1;

  memo[num] = num * factorial(num - 1, memo);
  return memo[num];
}

// Example usage
console.log(factorial3(5)); // Output: 120

// ### Explanation:
// - A `memo` object stores already computed factorial values.
// - If the factorial of `num` is in `memo`, it’s returned immediately.
// - Otherwise, the function calculates it recursively and stores the result in `memo`.
//
// ### Method 5: Using a While Loop
// This approach uses a `while` loop to perform the multiplication iteratively.

function factorial4(num) {
  let result = 1;

  while (num > 1) {
    result *= num;
    num--;
  }

  return result;
}

// Example usage
console.log(factorial4(5)); // Output: 120

// ### Explanation:
// - The `while` loop continues until `num` is reduced to 1.
// - During each iteration, `result` is multiplied by `num`, and `num` is decremented.
// - This method is similar to the iterative approach but uses a `while` loop instead of a `for` loop.
//
// Each method has its advantages, whether it’s simplicity, efficiency, or leveraging advanced programming concepts like recursion and memoization.