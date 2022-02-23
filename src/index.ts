// Basic Types
let myid: number = 5;
let company: string = 'Asrii';
let isPublished: boolean =  true;
let x: any = 'Hello';

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'Hello'];
ids.push(6);

// console.log("ID: ", myid);

// Tuple (an object where you can strict type for each element)
let person: [number, string, boolean] = [1, 'Asrii', true];
// or
person[0] = 1;
person[1] = "Asrii";
person[2] = true;

// Tuple array (an array where you can strict type for each element)
let employee: [number, string][]

employee = [
	[1, 'Brad'],
	[2, 'John'],
	[3, 'Jill']
]

// Union (if you want variable to hold multiple type)
let id: string | number = 22;
id = '22';

// Enum (enumerated type)
enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right'
}

// console.log(Direction1.Up);
// console.log(Direction2.Up);

// Objects
type User = {
	id: number,
	name: string
}

const user: User = {
	id: 1,
	name: 'John'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
// customerId = 1; customerId should be number
// or
// let customerId = cid as number;
// customerId = 1;

// Functions
function addNum(x: number, y: number): number {
	return x + y;
}

console.log(addNum(1, 2));
// void is a little like the opposite of any: the absence of having any type at all. 
// You may commonly see this as the return type of functions that do not return a value:
function log(message: string | number): void {
	console.log(message);
}

// Interfaces
interface UserInterface {
	id: number,
	name: string,
	age?: number,
}

const user1: UserInterface = {
	id: 1,
	name: 'John'
}

// Interfaces Func
interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x + y;
const sub: MathFunc = (x:number, y:number): number => x - y;

// Classes
// Interfaces
interface PersonInterface {
	id: number,
	name: string,
	register(): string,
}

class Person implements PersonInterface {
	id: number
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	register() {
		return `${this.name} is now registered`;
	}
}

const asrii =  new Person(1, "Asrii");
const jona =  new Person(2, "Jona");
const kkk =  new Person(2, "KKK");
console.log(asrii, jona, kkk);

class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string){
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());

// Generics (allows you to create reusable component)
// function getArray(items: any[]): any[] {
// 	return new Array().concat(items);
// }

// let numArray = getArray([1,2,3,4]);
// let strArray = getArray(['brad','john','jill']);

// numArray.push('hello');
// strArray.push('hello');

function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad','john','jill']);

numArray.push(1);
strArray.push('hello');