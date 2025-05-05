// push method
// Adds one or more elements to the end of an array and returns the new length.
console.log("\npush method:");
let arr1 = [1, 2, 3];
console.log("Original Array: ", arr1);
let newLength = arr1.push(4, 5);
console.log("Array after push(4, 5):", arr1); // [1, 2, 3, 4, 5]
console.log("New Length: ", newLength); // 5
// Note: `push()` can take multiple arguments and adds them all to the end of the array.
// It always returns the new length of the array.


// pop method
// Removes the last element from an array and returns that element.
console.log("\npop method:");
let arr2 = [1, 2, 3, 4, 5];
console.log("Original Array: ", arr2);
let lastElement = arr2.pop();
console.log("Array after pop:", arr2); // [1, 2, 3, 4]
console.log("Popped Element: ", lastElement); // 5
// Note: `pop()` removes and returns the last element of the array.
// If the array is empty, it returns `undefined`.


// shift method
// Removes the first element from an array and returns that element.
console.log("\nshift method:");
let arr3 = [1, 2, 3, 4, 5];
console.log("Original Array: ", arr3);
let firstElement = arr3.shift();
console.log("Array after shift:", arr3); // [2, 3, 4, 5]
console.log("Shifted Element: ", firstElement); // 1
// Note: `shift()` removes and returns the first element of the array.
// If the array is empty, it returns `undefined`.


// unshift method
// Adds one or more elements to the beginning of an array and returns the new length.
console.log("\nunshift method:");
let arr4 = [2, 3, 4, 5];
console.log("Original Array: ", arr4);
let newLength2 = arr4.unshift(1);
console.log("Array after unshift(1):", arr4); // [1, 2, 3, 4, 5]
console.log("New Length: ", newLength2); // 5
// Note: `unshift()` can take multiple arguments and adds them all to the beginning of the array.
// It always returns the new length of the array.


// concat method
// Combines two or more arrays and returns a new array.
console.log("\nconcat method:");
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let mergedArr = arr5.concat(arr6);
console.log("Array after concat:", mergedArr); // [1, 2, 3, 4, 5, 6]
// Note: `concat()` does not modify the original arrays. It creates a new array combining all arrays or values passed as arguments.


// join method
// Joins all the elements of the array into a string, separated by a specified separator.
console.log("\njoin method:");
let arr7 = ["Apple", "Banana", "Cherry"];
console.log("Array: ", arr7);
let joinedString = arr7.join(", ");
console.log("Array joined with ', ': ", joinedString); // "Apple, Banana, Cherry"
// Note: `join()` joins all elements of the array into a single string. By default, the separator is a comma.
// If no separator is specified, the default is `,` (comma).


// slice method
// Extracts a portion of the array and returns a new array.
console.log("\nslice method:");
let arr8 = [1, 2, 3, 4, 5];
console.log("Original Array: ", arr8);
let slicedArr = arr8.slice(1, 4); // Extracts from index 1 to index 4 (not inclusive)
console.log("Sliced Array: ", slicedArr); // [2, 3, 4]
// Note: `slice()` does not modify the original array. It returns a new array from the specified indices.
// The second index is non-inclusive. Negative indices are allowed to count from the end.


// splice method
// Adds/removes elements from the array.
console.log("\nsplice method:");
let arr9 = [1, 2, 3, 4, 5];
console.log("Original Array: ", arr9);
// Remove 2 elements starting at index 1
let removed = arr9.splice(1, 2);
console.log("Array after splice: ", arr9); // [1, 4, 5]
console.log("Removed Elements: ", removed); // [2, 3]
// Adding elements to the array
arr9.splice(1, 0, 6, 7); // Adds 6 and 7 at index 1
console.log("Array after adding elements: ", arr9); // [1, 6, 7, 4, 5]
// Note: `splice()` modifies the original array. The second parameter defines how many elements to remove.
// The third and subsequent parameters are the elements to add at the specified index.

// forEach method
// Executes a given function for each element in the array.
console.log("\nforEach method:");
let arr10 = [1, 2, 3, 4];
arr10.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});
// Note: `forEach()` does not return anything (always returns `undefined`).
// It's used to execute a function on each element of the array. It cannot break out of the loop, unlike `for` or `for...of`.

// map method
// Creates a new array by applying a function to each element.
console.log("\nmap method:");
let arr11 = [1, 2, 3, 4];
let squaredArr = arr11.map(x => x * x);
console.log("Squared Array: ", squaredArr); // [1, 4, 9, 16]
// Note: `map()` returns a new array based on the transformation provided in the function. It does not mutate the original array.


// filter method
// Creates a new array with all elements that pass the test.
console.log("\nfilter method:");
let arr12 = [1, 2, 3, 4, 5];
let evenArr = arr12.filter(x => x % 2 === 0);
console.log("Even Numbers: ", evenArr); // [2, 4]
// Note: `filter()` returns a new array with all elements that satisfy the condition in the provided function.
// If no elements satisfy the condition, an empty array is returned.


// reduce method
// Reduces the array to a single value.
console.log("\nreduce method:");
let arr13 = [1, 2, 3, 4];
let sum = arr13.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array: ", sum); // 10
// Note: `reduce()` applies a function to each element to accumulate a single value. 
// The second parameter is the initial value for the accumulator. It’s optional, and if omitted, the first element is used as the initial value.

