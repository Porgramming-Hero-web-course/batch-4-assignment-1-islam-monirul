{
	//
	class Car {
		make: string;
		model: string;
		year: number;

		constructor(make: string, model: string, year: number) {
			this.make = make;
			this.model = model;
			this.year = year;
		}

		// method for returning age of the given car
		getCarAge(): number {
			const currentYear = new Date().getFullYear();
			return currentYear - this.year;
		}
	}

	const car = new Car("Honda", "Civic", 2018);
	console.log(car.getCarAge());

	//
}
