// Check for Palindrome: Write a function to check if a given string is a palindrome.
//
//   Example:
// isPalindrome("racecar"); // true

// 	### Method 1: Simple Reverse and Compare
// This method is straightforward: reverse the string and compare it to the original.

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// ### Explanation:
// 	- The string is split into an array of characters, reversed, and then joined back into a string.
// - The function checks if the original string is the same as the reversed string.
//
// ### Method 2: Two-Pointer Technique
// This approach uses two pointers, one starting from the beginning and the other from the end, and compares characters.

function isPalindrome1(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage
console.log(isPalindrome1("racecar")); // Output: true
console.log(isPalindrome1("hello")); // Output: false

// ### Explanation:
// 	- Two pointers are initialized: one at the start (`left`) and one at the end (`right`) of the string.
// - The characters at these pointers are compared; if they differ, the function returns `false`.
// - If all corresponding characters match, the string is a palindrome.
//
// ### Method 3: Ignoring Non-Alphanumeric Characters (with Case Insensitivity)
// This method cleans up the string by removing non-alphanumeric characters and converting everything to lowercase before checking if it’s a palindrome.

function isPalindrome2(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversed;
}

// Example usage
console.log(isPalindrome2("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome2("No lemon, no melon")); // Output: true
console.log(isPalindrome2("hello")); // Output: false

// ### Explanation:
// 	- The function first converts the string to lowercase and removes non-alphanumeric characters using a regular expression.
// - Then, it uses the reverse and compare method to check if the cleaned string is a palindrome.
//
// ### Method 4: Recursive Approach
// This method uses recursion to compare the first and last characters and then calls itself with the remaining substring.

function isPalindrome3(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  function checkPalindrome(s, left, right) {
    if (left >= right) {
      return true;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    return checkPalindrome(s, left + 1, right - 1);
  }

  return checkPalindrome(str, 0, str.length - 1);
}

// Example usage
console.log(isPalindrome3("racecar")); // Output: true
console.log(isPalindrome3("hello")); // Output: false

// ### Explanation:
// 	- This approach recursively checks if the characters from the start and end of the string are the same.
// - It continues this process until the middle of the string is reached.
//
// 	These methods cover different approaches to solving the palindrome problem in JavaScript, providing options for handling various use cases such as ignoring punctuation, handling case sensitivity, and using different programming techniques.