{
	//
	interface Profile {
		name: string;
		age: number;
		email: string;
	}

	type PartialProfile = Partial<Profile>;

	const updateProfile = (
		profile: Profile,
		partialUpdate: PartialProfile
	) => {
		// returning the updated profile object
		return { ...profile, ...partialUpdate };
	};

	const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
	console.log(updateProfile(myProfile, { age: 26 }));
	//
}
