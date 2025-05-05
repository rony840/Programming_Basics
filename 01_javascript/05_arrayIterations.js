// forEach method
// Executes a provided function once for each array element in the order.
console.log("\nforEach method:");
let arr1 = [1, 2, 3, 4];
arr1.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});
// Note: `forEach()` executes the provided function for each array element.
// It does not return a new array. It’s useful for performing operations on each element
// but it cannot break or return from the loop, unlike a `for` loop.


// map method
// Creates a new array populated with the results of calling the provided function
// on every element in the array.
console.log("\nmap method:");
let arr2 = [1, 2, 3, 4];
let doubledArr = arr2.map(x => x * 2);
console.log("Array after map (doubled values):", doubledArr); // [2, 4, 6, 8]
// Note: `map()` transforms each element of the array according to the function
// provided and returns a **new array** with the transformed values. 
// It does not modify the original array.


 // filter method
 // Creates a new array with all elements that pass the test implemented by the provided function.
 console.log("\nfilter method:");
 let arr3 = [1, 2, 3, 4, 5];
 let evenArr = arr3.filter(x => x % 2 === 0);
 console.log("Array after filter (even values):", evenArr); // [2, 4]
 // Note: `filter()` creates a new array with elements that satisfy the condition 
 // provided in the function. If no elements match, it returns an empty array.
// If the array is empty or no element satisfies the condition, the result will be an empty array.


 // reduce method
 // Applies a function against an accumulator and each element in the array
 // (from left to right) to reduce it to a single value.
 console.log("\nreduce method:");
 let arr4 = [1, 2, 3, 4];
 let sum = arr4.reduce((acc, curr) => acc + curr, 0);
 console.log("Sum of array elements:", sum); // 10
 // Note: `reduce()` iterates over each element and applies the function
 // to accumulate a result. The second argument (initial value of accumulator) is optional.
 // If no initial value is provided, it will use the first element of the array.


// some method
// Tests whether at least one element in the array passes the test
// implemented by the provided function. Returns true if it finds one element,
// otherwise false.
console.log("\nsome method:");
let arr5 = [1, 2, 3, 4];
let hasEven = arr5.some(x => x % 2 === 0);
console.log("Does the array have an even number?", hasEven); // true
// Note: `some()` checks if **at least one** element satisfies the condition.
// It returns `true` if any element passes, otherwise `false`.


// every method
// Tests whether all elements in the array pass the test
// implemented by the provided function. Returns true if all elements pass the test,
// otherwise false.
console.log("\nevery method:");
let arr6 = [2, 4, 6, 8];
let allEven = arr6.every(x => x % 2 === 0);
console.log("Are all numbers even?", allEven); // true
// Note: `every()` checks if **all** elements satisfy the condition.
// If **any** element fails the condition, it immediately returns `false`.


 // find method
 // Returns the **first** element in the array that satisfies the provided function.
 // If no element satisfies the condition, it returns `undefined`.
 console.log("\nfind method:");
 let arr7 = [1, 2, 3, 4];
 let foundElement = arr7.find(x => x > 2);
 console.log("First element greater than 2:", foundElement); // 3
 // Note: `find()` returns the **first** element that passes the condition, 
 // or `undefined` if no element satisfies the function.


// findIndex method
// Returns the index of the first element in the array that satisfies the provided function.
// Returns -1 if no element satisfies the condition.
console.log("\nfindIndex method:");
let arr8 = [1, 2, 3, 4];
let foundIndex = arr8.findIndex(x => x > 2);
console.log("Index of first element greater than 2:", foundIndex); // 2
// Note: `findIndex()` returns the index of the first element that matches the condition.
// If no element matches, it returns `-1`.


 // for...of loop
 // Iterates over the array elements, providing direct access to each element.
 console.log("\nfor...of loop:");
let arr9 = ["apple", "banana", "cherry"];
for (const fruit of arr9) {
    console.log(fruit);
}
// Note: `for...of` allows you to loop over iterable objects, like arrays, strings, and maps.
// It provides a simpler way to iterate without worrying about indices.


// for...in loop
// Loops over the indices (keys) of an array or object. It's primarily used for iterating over object properties,
// but it can be used with arrays as well.
console.log("\nfor...in loop:");
let arr10 = ["apple", "banana", "cherry"];
for (const index in arr10) {
    console.log(`Index: ${index}, Element: ${arr10[index]}`);
}
// Note: `for...in` iterates over the **indexes** (or keys) of an array or object.
// Although it works with arrays, it is **not recommended** for arrays as it will also iterate over non-array elements
// like the array's prototype properties.


 // reduceRight method
 // Similar to `reduce()`, but starts from the right side of the array and iterates backwards.
 console.log("\nreduceRight method:");
 let arr11 = [1, 2, 3, 4];
 let product = arr11.reduceRight((acc, curr) => acc * curr, 1);
 console.log("Product of array elements:", product); // 24
 // Note: `reduceRight()` works the same as `reduce()`, but it processes the array from right to left.


// flat method
// Flattens an array of arrays into a single array, optionally limiting the depth of flattening.
console.log("\nflat method:");
let arr12 = [1, [2, 3], [4, [5, 6]]];
let flatArr = arr12.flat(2); // Flatten 2 levels
console.log("Flattened Array:", flatArr); // [1, 2, 3, 4, 5, 6]
// Note: `flat()` returns a new array with all sub-array elements concatenated into it recursively
// based on the specified depth.


 // flatMap method
 // First maps each element using a mapping function, then flattens the result into a new array.
 console.log("\nflatMap method:");
 let arr13 = [1, 2, 3];
 let flatMappedArr = arr13.flatMap(x => [x, x * 2]);
 console.log("Array after flatMap:", flatMappedArr); // [1, 2, 2, 4, 3, 6]
// Note: `flatMap()` applies the mapping function and then flattens the result into a new array.
// Unlike `map()`, it automatically flattens the result by one level.


// reduceRight method
// Similar to reduce, but applies the accumulator function from right to left, starting with the last element.
console.log("\nreduceRight method:");
let arr14 = [1, 2, 3, 4];
let totalSum = arr14.reduceRight((acc, curr) => acc + curr, 0);
console.log("Sum from right to left:", totalSum); // 10
// Note: `reduceRight()` processes the array in reverse order, unlike `reduce()` which processes from left to right.



/*
Summary of Iteration Methods:
forEach() allows for direct iteration over all elements, but it does not allow breaking or returning from the loop.
map() transforms elements and returns a new array, while filter() returns a new array with elements passing a condition.
reduce() and reduceRight() are used to accumulate a single value from the array, with reduceRight() processing from the rightmost element.
some() and every() check if some or every element satisfies a given condition, respectively.
find() and findIndex() return the first element or index matching a condition, or undefined/-1 if no match is found.
for...of and for...in loops iterate over arrays but with different focuses (values vs indexes).
flat() and flatMap() flatten nested arrays, with flatMap() performing a map and flatten in a single step.
*/