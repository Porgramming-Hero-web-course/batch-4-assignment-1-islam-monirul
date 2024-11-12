{
	//
	const sumArray = (nums: number[]): number => {
		let sum: number = 0;

		// adding numbers to sum
		nums.forEach((n: number): number => (sum += n));
		return sum;
	};

	const result1: number = sumArray([1, 2, 3, 4, 5]);
	console.log(result1);
	//
}
