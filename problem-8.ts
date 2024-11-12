{
	//
	const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
		// checking if the key is present in the object
		let isPresent = keys.every((key) => key in (obj as object));
		return isPresent;
	};

	const person = { name: "Alice", age: 25, email: "alice@example.com" };
	console.log(validateKeys(person, ["name", "age"]));
	//
}
