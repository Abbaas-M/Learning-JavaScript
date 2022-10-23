// Creating an array
// Using []
let hobbies = ['boxing', 'dancing', 'digital marketing', 'reading'];
// Using Array() constructer
let fruits = new Array('Grape', 'Orange', 'Pear', 'Bannana');

// Mixed data types in array
let mixedArray = ['John', 13, true, { A: 1, B: 2 }, new Date(), ['Apple', 'Bannana', 'pear'], null];

// METHODS
let arr = [23, 42, 13, 4, 24, 24, 24, 42];
let val;

// Getting array length
val = arr.length;

// Array.isArray()
val = Array.isArray(arr);

// Getting single values
val = arr[4];

// IndexOf();
val = fruits.indexOf('Bannana');

// Adding into array
val = fruits[1] = 'Mango';

// MUTATING ARRAYS
const colors = ['Red', 'Green', 'Blue'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Adding onto the end of an array - .push()
// val = colors.push('Orange')

// // Adding onto the start of an array - .unShift()
// val = colors.unshift('Purple');

// // Removing of the end of an array - .pop()
// colors.pop();

// Removing multiple values of an array - .splice()
// colors.splice(1, 3);

// Reversing an array - .reverse()

numbers.reverse();

// Concatenating arrays
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];
// val = nums1.concat(nums2);

// Sort
const numberslist = [12, 3, 24, 42, 23, 33];
val = numbers.sort(function (x, y) {
    return x - y;
})



console.log(numbers);
console.log(val);
