// sort method
// Sorts the elements of an array in place and returns the sorted array. 
// By default, it sorts elements as strings.
console.log("\nsort method:");
let arr1 = [5, 3, 8, 1, 2];
console.log("Original Array:", arr1);
let sortedArr = arr1.sort(); // Default sorting (as strings)
console.log("Array sorted by default:", sortedArr); // [1, 2, 3, 5, 8]
// Note: The `sort()` method converts elements to strings and sorts them lexicographically (alphabetical order),
// which can lead to incorrect results for numbers (e.g., ["100", "25", "50"] becomes ["100", "25", "50"] instead of ["25", "50", "100"]).


// sort with a custom comparator
// To properly sort numbers, you need to pass a custom comparator function to `sort()`.
console.log("\nsort method with a custom comparator:");
let arr2 = [5, 3, 8, 1, 2];
console.log("Original Array:", arr2);
let sortedArr2 = arr2.sort((a, b) => a - b); // Sort numbers in ascending order
console.log("Array sorted in ascending order:", sortedArr2); // [1, 2, 3, 5, 8]
// Note: The comparator function `(a, b) => a - b` ensures that the array is sorted numerically in ascending order.
// If `a - b` is negative, `a` is placed before `b`, and vice versa. For descending order, use `(b - a)`.


// reverse method
// Reverses the elements of an array in place.
console.log("\nreverse method:");
let arr3 = [1, 2, 3, 4, 5];
console.log("Original Array:", arr3);
arr3.reverse(); // Reverses the order of elements
console.log("Array after reverse:", arr3); // [5, 4, 3, 2, 1]
// Note: The `reverse()` method mutates the original array by reversing its order. It does not return a new array.


// sort and reverse together
// Sorting and then reversing the array to get descending order.
console.log("\nsort and reverse method together:");
let arr4 = [5, 3, 8, 1, 2];
console.log("Original Array:", arr4);
let sortedArr4 = arr4.sort((a, b) => a - b).reverse(); // Sort and then reverse to get descending order
console.log("Array sorted in descending order:", sortedArr4); // [8, 5, 3, 2, 1]
// Note: First, we sort the array in ascending order, then reverse it to get descending order.
// You can also directly pass a comparator `(b - a)` inside `sort()` to get the same result.


// localeCompare method (for string sorting)
// Sorts an array of strings according to the current locale.
console.log("\nlocaleCompare method:");
let arr5 = ["apple", "banana", "cherry", "date"];
console.log("Original Array:", arr5);
arr5.sort((a, b) => a.localeCompare(b)); // Sort strings alphabetically according to the locale
console.log("Array sorted alphabetically:", arr5); // ['apple', 'banana', 'cherry', 'date']
// Note: `localeCompare()` compares two strings based on local language settings (case-sensitive by default).
// It returns a negative value if `a` comes before `b`, a positive value if `a` comes after `b`, and 0 if they are equal.


// sort with non-primitive elements (objects)
// Sorting an array of objects by a specific property.
console.log("\nsort method with objects:");
let arr6 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];
console.log("Original Array:", arr6);
arr6.sort((a, b) => a.age - b.age); // Sort objects by 'age' property in ascending order
console.log("Array sorted by age:", arr6);
// [{ name: 'Mike', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]
// Note: When sorting an array of objects, you can sort by a specific property (e.g., `age` or `name`) using a custom comparator function.
// Here, we sorted the objects by the `age` property in ascending order.


// sort with descending order for objects
// Sorting an array of objects in descending order based on a property.
console.log("\nsort method with descending order (objects):");
let arr7 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];
console.log("Original Array:", arr7);
arr7.sort((a, b) => b.age - a.age); // Sort by 'age' property in descending order
console.log("Array sorted by age (descending):", arr7);
// [{ name: 'Jane', age: 30 }, { name: 'John', age: 25 }, { name: 'Mike', age: 20 }]
// Note: To sort in descending order, simply reverse the comparison (`b.age - a.age` instead of `a.age - b.age`).


 // sort with a custom string comparison (case-insensitive)
 // Sorting an array of strings without case sensitivity.
 console.log("\nsort method with case-insensitive string comparison:");
 let arr8 = ["banana", "Apple", "cherry", "date"];
 console.log("Original Array:", arr8);
 arr8.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // Case-insensitive sorting
 console.log("Array sorted case-insensitively:", arr8); // ['Apple', 'banana', 'cherry', 'date']
 // Note: When sorting strings in a case-insensitive manner, you can use `toLowerCase()` on both strings to ensure uniform comparison.


 // sorting an array of numbers in descending order using sort
 console.log("\nsort method for descending order (numbers):");
 let arr9 = [3, 1, 4, 2, 5];
 console.log("Original Array:", arr9);
 arr9.sort((a, b) => b - a); // Sorting in descending order
 console.log("Array sorted in descending order:", arr9); // [5, 4, 3, 2, 1]
 // Note: In this case, `b - a` ensures that the array is sorted in descending numerical order.


// Sorting large arrays with performance consideration
// Sorting a large array can be time-consuming. Always keep performance in mind when using `sort()`.
console.log("\nSorting large arrays:");
let arr10 = Array.from({ length: 1000000 }, (_, i) => i); // Create an array of numbers 0 to 999999
let shuffledArr = arr10.sort(() => Math.random() - 0.5); // Shuffle array randomly
console.log("Array shuffled.");
shuffledArr.sort((a, b) => a - b); // Sort the shuffled array in ascending order
console.log("Array sorted in ascending order after shuffle.");
// Note: Sorting large arrays can have performance implications, especially if the sorting algorithm 
// is not optimized for the array size. In general, use `sort()` carefully with large data sets.



/**
 Summary:
 sort(): Sorts the elements of the array in place. By default, it sorts elements as strings, which can lead to unexpected behavior with numbers. To sort numerically or in a custom way, a comparator function is needed.
Comparator Function: A custom function passed to sort() that compares two elements. For numeric sorting, use (a, b) => a - b for ascending order and (a, b) => b - a for descending order.
reverse(): Reverses the order of the elements in the array. It is used to reverse a sorted array or simply invert the current order.
localeCompare(): Compares two strings in a way that is sensitive to local language settings. This is useful for sorting strings correctly, especially in languages with special characters.
Sorting Objects: When sorting objects, use a custom comparator that compares a property (like age or name) of the objects.
Performance Considerations: Sorting large arrays can impact performance. Be mindful of the time complexity, which is typically
O(nlogn) for sort().
 */