{
	//
	/* Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type. */

	type Circle = {
		shape: "circle";
		radius: number;
	};

	type Rectangle = {
		shape: "rectangle";
		width: number;
		height: number;
	};

	// making union type for circle and rectangle
	type CircleOrRectangle = Circle | Rectangle;

	const calculateShapeArea = (customShape: CircleOrRectangle) => {
		if (customShape?.shape === "circle")
			return (Math.PI * Math.pow(customShape?.radius, 2)).toFixed(2);
		else if (customShape?.shape === "rectangle")
			return customShape?.height * customShape?.width;
	};

	console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
	console.log(
		calculateShapeArea({
			shape: "rectangle",
			width: 4,
			height: 6,
		})
	);
	//
}
