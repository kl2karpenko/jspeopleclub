// Object Property Counter
// Description: Write a function that takes an object and counts the number of properties it has.
// 	Requirements:
// The function should work for nested objects as well.
// 	Example Input/Output:
// countProperties({ a: 1, b: { c: 2, d: 3 }, e: 4 }) should return 4.

function countProperties (obj, counter = 0) {
	if (typeof obj !== 'object') return counter;

	for (let key in obj) {
		if (obj[key] && typeof obj[key] !== 'object') {
			counter++;
		} else {
			counter += countProperties(obj[key], counter);
		}
	}

	return counter;
}

console.log(countProperties({ a: 1, b: { c: 2, d: 3 }, e: 4 }))