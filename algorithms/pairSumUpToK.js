// Problem: Find Pair that Sums up to K
// Task: Given an array of integers and a target sum
// 𝑘
// k, find all unique pairs of integers in the array whose sum is equal to
// 𝑘
// k.

const array = [1, 2, 5, 6, 8, 3, 4, 7, 9];
const targetSum = 8;

// 1-st solution
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
//   i++    j++

function findFirstPairWithSum(arr, sum) {
	let i = 0;
	let j = i + 1;
	let len = arr.length;



	// O (n^2)
	for (; i < len; i ++) {
		for (; j < len; j ++) {
			if (arr[i] + arr[j] === sum) return [arr[i], arr[j]];
		}
	}
}

// console.log(findFirstPairWithSum(array, targetSum)); // Output:

// 2-st solution
// 1: sort the array
// 2:
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
//   i                       j
// 1 - i = 0, j = len - 1, sumres = 10 > sum (8)
// 2 - i = 0, j = len - 2,

// O (n)
function findFirstPairWithSumSecondSolution(arr, sum) {
	const arrSorted = arr.sort();

	let len = arrSorted.length;
	let i = 0;
	let j = len - 1;

	while (i !== j) {
		if (arrSorted[i] + arrSorted[j] === sum) {
			return [arrSorted[i], arrSorted[j]]
		} else if (arrSorted[i] + arrSorted[j] > sum) {
			j--;
		} else if (arrSorted[i] + arrSorted[j] < sum) {
			i++;
		}
	}
}

// console.log(findFirstPairWithSumSecondSolution(array, targetSum)); // Output: [1, 7]

// 3-st solution hash tables
// 1: sort the array
// 2: sum = 8
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
//   i
// 1 - i = 0, { 1: true }
// 2 - i = 1, { 1: true, 2: true  }
// 3 - i = 1, { 1: true, 2: true, 3: true  }

function findFirstPairWithSumHashTable(arr, sum) {
	const arrSorted = arr.sort();
	const hash = {};

	let len = arrSorted.length;
	let i = 0;

	while (i < len) {
		const result = sum - arr[i];
		if (!hash[result]) {
			hash[arr[i]] = true;
		} else {
			return [arr[i], result].sort()
		}
		i++;
	}
}

console.log(findFirstPairWithSumHashTable(array, targetSum)); // Output: [1, 7]