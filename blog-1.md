## The significance of union and intersection types in Typescript.

### Author: Monirul Islam

TypeScript is an `Object-Oriented Programming` language that offers us flexibility in terms of coding. Among all the features of TypeScript, `Union` and `Intersection` are two advanced and significant types that help us representing complex structure in our code.

Let us first understand what actually is `Union` and `Intersection` Types.

#### Union Type

`Union` type is a type that allows variable to hold values of different type. It makes the variable dynamic type. We represent the union type by placing a pipe "`|`" in between the types.

Example: <br/>
Let's assume, a class teacher wants to check if a student was present at the class by sending the name of that student to a function called `wasTheStudentPresent`. If the student was present, the function will simply return `true`. Otherwise, `"The Student was not present today."` will be returned to the teacher as an output. In this situation, our return value must be of either `boolean` or `string`. But we don't have any type in TypeScript to hold two different types of values. This is where `Union` type is necessary. It will create a custom type that can either hold `boolean` type value or `string` type value.

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

#### Intersection Type

`Intersection` type is a special type in TypeScript that allows variable to hold different types at the same time. We represent `intersection` type with and and sign `"&"` in between the types.

Example: <br/>
Let's think of a student and a faculty in a university. They both have their own attributes but they also have few things common like `name`, `dob`, `email`, `department` etc.
<br/>

Now, if we represent it in object format, we get the following code:

```
type CommonInfo = {
    name: string;
    dob: string;
    email: string;
    department: string;
}

type StudentInfo = {
    status: 'student';
    studentId: string;
    isGraduated: boolean;
    graduationYear?: number;
}

type FacultyInfo = {
    status: 'teacher';
    codeName: string;
    researchArea?: string;
    designation: string;
}

type Student = StudentInfo & CommonInfo;
type Faculty = FacultyInfo & CommonInfo;

```

Here, we can see that `Student` and `Faculty` have few things in common but also have their own information. We are using `intersection` type here to represent `Student` and `Faculty` type.

<br/>

I think, from the above discussion, we got an idea about `union` and `intersection` types. Both these types help us enhance our code as they add flexibility, type safety, and increase code redeability and maintainability. Having the knowledge of using these types in TypeScript will surely improve our ability to write and maintain our code more effectively.
