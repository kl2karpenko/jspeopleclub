// Find Prime Numbers: Write a function to find all prime numbers up to a given number.
//
// 	Example:
// findPrimes(10); // [2, 3, 5, 7]

// Here are several solutions to find all prime numbers up to a given number in JavaScript:
//
// ### Method 1: Simple Loop and Prime Check
// This method checks each number up to the given number to see if it is prime.

function findPrimes(num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Example usage
console.log(findPrimes(10)); // Output: [2, 3, 5, 7]

// ### Explanation:
// 	- `findPrimes()` iterates through all numbers from 2 up to `num`.
// - `isPrime()` checks if a number is prime by testing divisibility from 2 up to the square root of the number.
// - If a number is prime, it’s added to the `primes` array.
//
// ### Method 2: Using the Sieve of Eratosthenes
// This is an efficient algorithm to find all primes up to a given number.

function findPrimes1(num) {
  let sieve = Array(num + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= num; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.reduce((primes, isPrime, index) => {
    if (isPrime) primes.push(index);
    return primes;
  }, []);
}

// Example usage
console.log(findPrimes1(10)); // Output: [2, 3, 5, 7]

// ### Explanation:
// 	- The `sieve` array is initialized with `true` values, representing potential primes.
// - For each prime candidate starting from 2, it marks all its multiples as non-prime.
// - Finally, it collects and returns all indices of `true` values from the `sieve` array.
//
// ### Method 3: Using Array Methods
// This method leverages `Array.from` and `filter()` for a more functional programming approach.

function findPrimes2(num) {
  return Array.from({ length: num + 1 }, (_, i) => i).filter(isPrime2).slice(2);
}

function isPrime2(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Example usage
console.log(findPrimes2(10)); // Output: [2, 3, 5, 7]

// ### Explanation:
// 	- `Array.from` creates an array from 0 to `num`.
// - The `filter()` method is used to retain only prime numbers.
// - `slice(2)` removes the 0 and 1 from the result as they are not prime.
//
// ### Method 4: Recursive Approach
// This approach finds primes using a recursive function.

function findPrimes3(num, current = 2, primes = []) {
  if (current > num) return primes;
  if (isPrime3(current)) primes.push(current);
  return findPrimes(num, current + 1, primes);
}

function isPrime3(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Example usage
console.log(findPrimes3(10)); // Output: [2, 3, 5, 7]


// ### Explanation:
// 	- `findPrimes` is a recursive function that checks each number up to `num`.
// - If a number is prime, it is added to the `primes` array.
// - The function recurses with the next number until all primes are found.
//
// 	These methods offer a range of approaches, from simple loops to efficient algorithms like the Sieve of Eratosthenes, providing flexibility depending on the problem's constraints and the size of the input.