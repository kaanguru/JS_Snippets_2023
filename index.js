// How many times an element occurred
const arr = [2, 245, 6, 7, 2, 5, 6, 2, 3, 5, 4, 3, 2, 2, 2];

const howManyTimes = (num, arr) => arr.filter((x) => x === num).length;

console.log("arr :>> ", arr);
console.log("howManyTimes 2:", howManyTimes(2, arr)); // 6
console.log("howManyTimes 3:", howManyTimes(3, arr)); // 2

//////////////////////////////////////
//  Min-max in array

Math.max(...arr); //245
Math.min(...arr); // 2

console.log("Math.max(...arr) :>> ", Math.max(...arr));
console.log("Math.min(...arr) :>> ", Math.min(...arr));

//////////////////////////////////////
//  Clone object

const obj = { x: 23, y: "selam" };
const cloneObj = { ...obj };

console.log("obj :>> ", obj);
console.log("cloneObj :>> ", cloneObj);

//////////////////////////////////////
//  Merge two arrays

const arr1 = [23, 25];
const arr2 = [...arr1, 56,74] // [ 23, 25, 56, 74 ]

console.log('arr2 :>> ', arr2);

//////////////////////////////////////
//  Floats to int

const float = ~2.3

console.log('float :>> ', float); // -3

//////////////////////////////////////
//  String to number

const number = +"32.3";

console.log('number :>> ', number); // 32.3

