# JavaScript Code Snippets

## Functions

### How many times an element occurred?

```js
const howManyTimes = (num, arr) => arr.filter((x) => x === num).length;
```

### How to generate a random number in a given range?

Returns a random integer inside range.

```js
function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(2,10);
```

### difference between two arrays

To find the difference between two arrays in JavaScript, you can use the filter() method and the includes() method.

```js
const arr1 = [1,2,3,4];
const arr2 = [2,4,6];

const diff = arr1.filter(x => !arr2.includes(x)); // [1,3]
```

## ShortCuts

Tip:
    Use Math.floor instead of Math.round when calculating the center index to ensure that it is an integer.

### Min-max in array

```js
Math.max(...arr) //245
Math.min(...arr) // 2
```

### Clone object

```js
const obj = { x: 23, y: "selam" };
const cloneObj = { ...obj  } // { x: 23, y: 'selam' }
```

### Merge two arrays

```js
const arr1 = [23, 25];
const arr2 = [...arr1, 56,74] // [ 23, 25, 56, 74 ]
```

### Floats to int

```js
const float = ~2.3 // -3
```

### String to number

```js
const number = +"32.3"; // 32.3
```

### Swap two variables

```js
[x,y] = [y,x]
```

### Round Number Up

```js
    const year = 2023;
    const century = Math.ceil(year / 100); // 21
```

### truthy and falsy boolean

Convert truthy and falsy (like null or 0) to boolean

```js
const empty = null;
const full = 1;


Boolean(empty);     // false
!!empty;            // false  
Boolean(full);      // true
!!full;             // true

```
