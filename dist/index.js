"use strict";
// Basic Types
let myid = 5;
let company = 'Asrii';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
ids.push(6);
// console.log("ID: ", myid);
// Tuple (an object where you can strict type for each element)
let person = [1, 'Asrii', true];
// or
person[0] = 1;
person[1] = "Asrii";
person[2] = true;
// Tuple array (an array where you can strict type for each element)
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
// Union (if you want variable to hold multiple type)
let id = 22;
id = '22';
// Enum (enumerated type)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
// customerId = 1; customerId should be number
// or
// let customerId = cid as number;
// customerId = 1;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// void is a little like the opposite of any: the absence of having any type at all. 
// You may commonly see this as the return type of functions that do not return a value:
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const asrii = new Person(1, "Asrii");
const jona = new Person(2, "Jona");
const kkk = new Person(2, "KKK");
console.log(asrii, jona, kkk);
class Employee extends Person {
    constructor(id, name, position) {
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
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
numArray.push(1);
strArray.push('hello');
