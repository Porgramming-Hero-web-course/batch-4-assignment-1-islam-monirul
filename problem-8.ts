{
	//
	const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
		// checking if the key is present in the object
		return keys.every((key) => key in (obj as object));
	};

	const person = { name: "Alice", age: 25, email: "alice@example.com" };
	console.log(validateKeys(person, ["name", "age"]));
	//
}
