# JavaScript Code Snippets

## Functions

### How many times an element occurred?

```js
const howManyTimes = (num, arr) => arr.filter((x) => x === num).length;
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
