{
	//
	interface Profile {
		name: string;
		age: number;
		email: string;
	}

	const updateProfile = (
		profile: Profile,
		partialUpdate: Partial<Profile>
	) => {
		// returning the updated profile object
		return { ...profile, ...partialUpdate };
	};

	const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
	console.log(updateProfile(myProfile, { age: 26 }));
	//
}
