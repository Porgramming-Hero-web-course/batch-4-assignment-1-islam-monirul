{
	//
	/* Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input. */

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
