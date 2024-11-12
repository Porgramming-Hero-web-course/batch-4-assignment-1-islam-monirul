{
	//
	const removeDuplicates = (numArray: number[]): number[] => {
		let currentElement: number;
		let flag: number = 0;
		let noDuplicateArray: number[] = [];

		for (let i: number = 0; i < numArray.length; i++) {
			currentElement = numArray?.[i];
			flag = 0;

			// checking if the element is already in the array
			for (let j: number = 0; j < noDuplicateArray.length; j++) {
				if (currentElement === noDuplicateArray[j]) {
					flag = 1;
					break;
				}
			}

			// if the element is not present in the array, pushing the element to the array
			if (flag === 0) noDuplicateArray.push(currentElement);
		}

		return noDuplicateArray;
	};

	console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]));
	//
}
