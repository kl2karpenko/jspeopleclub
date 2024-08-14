// Find Maximum in Array: Write a function to find the maximum element in an array.
//
// 	Example:
// findMax([1, 5, 3, 9, 2]); // 9

function findMax (arr) {
	if (!Array.isArray(arr) || !arr.length) {
		return null;
	}

	let max = arr[0];

	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

// Explanation:
// 	Initialization: The function starts by checking if the array is empty. If it is, it returns null.
// 	Assumption: It then assumes the first element (arr[0]) is the maximum.
// 	Iteration: The function iterates through the rest of the array, comparing each element with the current maximum. If a larger element is found, it updates the maximum.
// 	Return: Finally, the function returns the maximum value found.
//
console.log(findMax([1, 5, 3, 9, 2]))
console.log(findMax([1, 5, 3, 9, 112]))
console.log(findMax([]));

// Math.max(1, 2, 4, 5, 6, 8) // 8

// Solution 2
// You can use the Math.max() function in combination with the spread operator (...) to find the maximum value in an array.

function findMax1 (arr) {
	if (!Array.isArray(arr) || !arr.length) {
		return null;
	}

	return Math.max(...arr);
}

// Explanation:
// 	The Math.max() function returns the largest of zero or more numbers.
// 	The spread operator (...) is used to expand the array elements into individual arguments to Math.max().

console.log(findMax1([1, 5, 3, 9, 2]))
console.log(findMax1([1, 5, 3, 9, 112]))


// Solution 3
// Another approach is to use the reduce() method, which applies a function against an accumulator and each element in the array to reduce it to a single value.
function findMax2 (arr) {
	if (!Array.isArray(arr) || !arr.length) {
		return null;
	}

	return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

// Explanation:
	// The reduce() method iterates through the array, comparing each element with the current maximum (max). If the current element is greater, it updates the maximum.

console.log(findMax2([1, 5, 3, 9, 2]))
console.log(findMax2([1, 5, 3, 9, 112]))