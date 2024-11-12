## The significance of union and intersection types in Typescript.

### Author: Monirul Islam

TypeScript is an `Object-Oriented Programming` language that offers us flexibility in terms of coding. Among all the features of TypeScript, `Union` and `Intersection` are two advanced and significant types that help us representing complex structure in our code.

Let us first understand what actually is `Union` and `Intersection` Types.

#### Union Type

`Union` type is a type that allows variable to hold values of different type. It makes the variable dynamic type. We represent the union type by placing a pipe "`|`" in between the types.

Example: <br/>
Let's assume, a class teacher wants to check if a student was present at the class by sending the name of that student to a function called `wasTheStudentPresent`. If the student was present the function will simply return `true`. Otherwise, `"The Student was not present today."` will be returned to the teacher as an output. In this situation our return value must be of either `boolean` or `string`. But we don't have any type in typeScript to hold two different types of values. This is where `Union` type is necessary. It will create a custom type that can either hold `boolean` type value or `string` type value.

```
type Attendance = boolean | string;

const wasTheStudentPresent = (attendanceSheet: string [], name: string): Attendance => {
	let flag = 0;

	attendanceSheet.forEach(student => {
		if(name === student){
            flag = 1;
        }
	})

    if(flag === 1) return true;
    else return "The Student was not present today.";
}

const res1 = wasTheStudentPresent(["Monir","Shojib","Islam"], "Monir");
console.log(res1);
const res2 = wasTheStudentPresent(["Monir","Shojib","Islam"], "Yakub");
console.log(res2);

// Output:
true    //res1
The Student was not present today.    //res2
```
