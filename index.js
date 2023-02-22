// How many times an element occurred
const arr = [2, 245, 6, 7, 2, 5, 6, 2, 3, 5, 4, 3, 2, 2, 2];

const howManyTimes = (num, arr) => arr.filter((x) => x === num).length;

console.log("arr :>> ", arr);
console.log("howManyTimes 2:", howManyTimes(2, arr)); // 6
console.log("howManyTimes 3:", howManyTimes(3, arr)); // 2

//////////////////////////////////////
//  Generate a random number in a given range
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(2, 10);
console.log("getRandomNumber(2,10) :>> ", getRandomNumber(2, 10));
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
const arr2 = [...arr1, 56, 74]; // [ 23, 25, 56, 74 ]

console.log("arr2 :>> ", arr2);

//////////////////////////////////////
//  Floats to int

const float = ~2.3;

console.log("float :>> ", float); // -3

//////////////////////////////////////
//  String to number

const number = +"32.3";

console.log("number :>> ", number); // 32.3

//////////////////////////////////////
// Swap two variables
let x = "first";
let y = "second";

console.log("x before swap:>> ", x);
console.log("y before swap:>> ", y);

[x, y] = [y, x];

console.log("x after sw:>> ", x);
console.log("y after sw:>> ", y);

//////////////////////////////////////
// Round Number Up

const year = 2023;
const century = Math.ceil(year / 100); // 21

console.log("century :>> ", century);

//////////////////////////////////////
// truthy and falsy boolean

const empty = null;
const full = 1;

console.log('Boolean(empty) :>> ', Boolean(empty));
console.log('!!empty :>> ', !!empty );   
console.log('Boolean(full) :>> ', Boolean(full));
console.log('!!full :>> ', !!full );

//////////////////////////////////////
// 

const arr3 = [1,2,3,4];
const arr4 = [2,4,6];

const diff = arr3.filter(x => !arr4.includes(x));

console.log('diff :>> ', diff); // [1,3]
