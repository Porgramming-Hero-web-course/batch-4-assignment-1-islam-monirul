{
	//
	// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

	const removeDuplicates = (numArray: number[]): number[] => {
		let currentElement: number, flag: number;
		let noDuplicateArray: number[] = [];

		for (let i: number = 0; i < numArray.length; i++) {
			currentElement = numArray[i];
			flag = 0;

			for (let j: number = 0; j < noDuplicateArray.length; j++) {
				if (currentElement === noDuplicateArray[j]) {
					flag = 1;
					break;
				}
			}

			if (flag === 0) noDuplicateArray.push(currentElement);
		}

		return noDuplicateArray;
	};

	console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]));
	//
}
