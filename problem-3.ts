{
	//
	const countWordOccurrences = (sentence: string, word: string): number => {
		const allWords: string[] = sentence.split(" ");
		let count: number = 0;

		// counting the occurences
		allWords.forEach((w) => {
			if (w === word) count++;
		});

		return count;
	};

	console.log(countWordOccurrences("I love typeScript", "typeScript"));
	//
}
