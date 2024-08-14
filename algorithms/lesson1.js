// Check for Palindrome ("lol", "A man, a plan, a canal, Panama")

function checkIfPallindrome(input) {
	const inputReversed = input.split('').reverse().join('');

	return inputReversed === input;
}

// console.log(checkIfPallindrome("lol"));
// console.log(checkIfPallindrome("123"));

// Remove Duplicates from an Array
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]


function removeDuplicates(arr) {
	// {} => 0(1)

	return new Array(...new Set(arr));
}

// console.log(`removeDuplicates`, removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicatesUsingHashTable(arr) {
	// {} => 0(1)

	const len = arr.length;
	const obj = {};
	for (let i = 0; i < len; i++) {
		const el = arr[i];

		if (obj[el] === undefined) {
			obj[el] = i; // 2: { 6: 0, 7: 3, 1: 6  }
		}
	}

	const keyValuePairs = Object.entries(obj);
  const sortedkeyValuePairs = keyValuePairs.sort((a, b) => a[1] - b[1]);

	console.log(sortedkeyValuePairs, ' sortedkeyValuePairs');
	const valuesSorted = sortedkeyValuePairs.map(arr => Number(arr[0]));

	return valuesSorted;

	// { 1: true, 2: true ...  }
	// [1, 2, 2, 3, 4, 4, 5]
	//     i
}

function removeDuplicatesUsingHashTableAndArr(arr) {
	// {} => 0(1)
	// [6, 6, 6, 7, 7, 7, 1, 2, 2, 3, 4, 4, 5]

	const resultArr = []; // [6, 7]
	const len = arr.length;
	const obj = {};
	for (let i = 0; i < len; i++) {
		const el = arr[i];

		if (obj[el] === undefined) {
			obj[el] = i;
			resultArr.push(el);
		}
	}

	return resultArr;
}

console.log(`removeDuplicates`, removeDuplicatesUsingHashTableAndArr([6, 6, 6, 7, 7, 7, 1, 2, 2, 3, 4, 4, 5, 6, 7])); // [ 6, 7, 1, 2, 3, 4, 5 ]

// O(n2)
function removeDuplicatesByIterAndIncludes(arr) {
	// {} => 0(1)
	// [6, 6, 6, 7, 7, 7, 1, 2, 2, 3, 4, 4, 5]

	const resultArr = []; // [6, 7]
	const len = arr.length;
	// const obj = {};
	for (let i = 0; i < len; i++) {
		const el = arr[i];

		if (!resultArr.includes(el)) {
			resultArr.push(el);
		}
	}

	return resultArr;
}

// console.log(`removeDuplicates`, removeDuplicatesUsingHashTable([1, 2, 2, 3, 4, 4, 5]));
console.log(`removeDuplicates`, removeDuplicatesByIterAndIncludes([6, 6, 6, 7, 7, 7, 1, 2, 2, 3, 4, 4, 5, 6, 7])); // [ 6, 7, 1, 2, 3, 4, 5 ]


