{
	//
	const getProperty = <T extends object, U extends keyof T>(
		givenObject: T,
		propertyName: U
	) => {
		// returning the desired value of the property given
		return givenObject?.[propertyName];
	};

	const person = { name: "Alice", age: 30 };
	console.log(getProperty(person, "name"));
	//
}
