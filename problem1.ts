{
	//
	// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array
	const sumArray = (nums: number[]): number => {
		let sum: number = 0;

		nums.forEach((n) => (sum += n));

		return sum;
	};

	const result1: number = sumArray([1, 2, 3, 4, 5]);
	console.log(result1);

	//
}
