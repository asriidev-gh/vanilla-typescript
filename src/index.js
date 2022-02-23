// Basic Types
var myid = 5;
var company = 'Asrii';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'Hello'];
ids.push(6);
// console.log("ID: ", myid);
// Tuple (an object where you can strict type for each element)
var person = [1, 'Asrii', true];
// or
person[0] = 1;
person[1] = "Asrii";
person[2] = true;
// Tuple array (an array where you can strict type for each element)
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
// Union (if you want variable to hold multiple type)
var id = 22;
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
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
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
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var asrii = new Person(1, "Asrii");
var jona = new Person(2, "Jona");
console.log(asrii, jona);
