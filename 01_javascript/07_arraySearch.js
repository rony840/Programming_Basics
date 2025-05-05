// indexOf method
// Returns the first index at which a given element is found in an array, or -1 if not found.
console.log("\nindexOf method:");
let arr1 = [10, 20, 30, 40, 50];
console.log("Original Array:", arr1);
console.log("Index of 30:", arr1.indexOf(30)); // 2
console.log("Index of 100:", arr1.indexOf(100)); // -1
// Note: `indexOf()` performs a **case-sensitive** search for the element.
// It returns the first index where the element is found. If the element isn't found, it returns `-1`.


 // lastIndexOf method
 // Returns the last index at which a given element is found in an array, or -1 if not found.
 console.log("\nlastIndexOf method:");
 let arr2 = [10, 20, 30, 40, 30, 50];
 console.log("Original Array:", arr2);
 console.log("Last index of 30:", arr2.lastIndexOf(30)); // 4
 console.log("Last index of 100:", arr2.lastIndexOf(100)); // -1
 // Note: `lastIndexOf()` is similar to `indexOf()`, but it starts searching from the end of the array
 // and returns the last occurrence of the element.


 // includes method
 // Checks if a given element is present in the array. Returns true if found, false otherwise.
 console.log("\nincludes method:");
 let arr3 = [10, 20, 30, 40, 50];
 console.log("Original Array:", arr3);
 console.log("Does the array include 30?", arr3.includes(30)); // true
 console.log("Does the array include 100?", arr3.includes(100)); // false
 // Note: `includes()` checks if a given element is **present** in the array and returns `true` or `false`.
 // The search is **case-sensitive** for strings.


 // find method
 // Returns the first element that satisfies the provided testing function.
 console.log("\nfind method:");
 let arr4 = [10, 20, 30, 40, 50];
 console.log("Original Array:", arr4);
 let foundElement = arr4.find(x => x > 30);
 console.log("First element greater than 30:", foundElement); // 40
 console.log("First element greater than 60:", arr4.find(x => x > 60)); // undefined
 // Note: `find()` returns the **first** element that satisfies the condition provided in the callback function.
 // If no element matches, it returns `undefined`.


 // findIndex method
 // Returns the index of the first element that satisfies the provided function, or -1 if no element matches.
 console.log("\nfindIndex method:");
 let arr5 = [10, 20, 30, 40, 50];
 console.log("Original Array:", arr5);
 let foundIndex = arr5.findIndex(x => x > 30);
 console.log("Index of first element greater than 30:", foundIndex); // 3
 console.log("Index of first element greater than 60:", arr5.findIndex(x => x > 60)); // -1
 // Note: `findIndex()` returns the **index** of the **first element** that satisfies the condition.
 // If no element satisfies the condition, it returns `-1`.


 // some method
 // Tests whether at least one element in the array satisfies the provided function.
 console.log("\nsome method:");
 let arr6 = [1, 2, 3, 4, 5];
 console.log("Original Array:", arr6);
 let hasEven = arr6.some(x => x % 2 === 0);
 console.log("Does the array have at least one even number?", hasEven); // true
 let hasNegative = arr6.some(x => x < 0);
 console.log("Does the array have at least one negative number?", hasNegative); // false
 // Note: `some()` checks if **at least one element** satisfies the provided condition.
 // It returns `true` if any element satisfies the condition, otherwise `false`.


 // every method
 // Tests whether all elements in the array satisfy the provided testing function.
 console.log("\nevery method:");
 let arr7 = [2, 4, 6, 8];
 console.log("Original Array:", arr7);
 let allEven = arr7.every(x => x % 2 === 0);
 console.log("Are all numbers even?", allEven); // true
 let allPositive = arr7.every(x => x > 0);
 console.log("Are all numbers positive?", allPositive); // true
 let allGreaterThanFive = arr7.every(x => x > 5);
 console.log("Are all numbers greater than 5?", allGreaterThanFive); // false
 // Note: `every()` checks if **all** elements satisfy the provided condition.
 // It returns `true` if all elements pass, otherwise `false`.


 // includes method with a start index
 // Checks if an array contains an element starting the search from a given index.
 console.log("\nincludes method with start index:");
 let arr8 = [1, 2, 3, 4, 5];
 console.log("Original Array:", arr8);
 console.log("Does the array include 3, starting from index 2?", arr8.includes(3, 2)); // true
 console.log("Does the array include 2, starting from index 2?", arr8.includes(2, 2)); // false
 // Note: `includes()` accepts a second argument that specifies the index to start the search from.
 // If the index is greater than the length of the array, it defaults to `0`.


 // indexOf method with a start index
 // Similar to `indexOf()`, but starts the search from a given index.
 console.log("\nindexOf method with start index:");
 let arr9 = [10, 20, 30, 40, 50];
 console.log("Original Array:", arr9);
 console.log("Index of 30 starting from index 2:", arr9.indexOf(30, 2)); // 2
 console.log("Index of 20 starting from index 2:", arr9.indexOf(20, 2)); // -1
 // Note: `indexOf()` can take a second parameter, the starting index, from which to begin the search.
 // If the starting index is greater than the length of the array, it behaves as if the search begins at `0`.


 // includes method for strings
 // Checks if a substring is present within the string array elements.
 console.log("\nincludes method for strings:");
 let arr10 = ["apple", "banana", "cherry"];
 console.log("Original Array:", arr10);
 console.log("Does the array include 'banana'?", arr10.includes("banana")); // true
 console.log("Does the array include 'orange'?", arr10.includes("orange")); // false
 // Note: `includes()` can also be used to check for substrings in strings in an array.
 // It is **case-sensitive** and returns `true` if the substring is found, otherwise `false`.


 // using find and findIndex with objects
 // Finding an object in an array based on a property value.
 console.log("\nfind and findIndex with objects:");
 let arr11 = [
   { name: "John", age: 25 },
   { name: "Jane", age: 30 },
   { name: "Mike", age: 35 }
 ];
 console.log("Original Array:", arr11);
 let foundObject = arr11.find(person => person.age > 30);
 console.log("First person with age > 30:", foundObject); // { name: 'Mike', age: 35 }
 let foundIndexObject = arr11.findIndex(person => person.name === "Jane");
 console.log("Index of person with name 'Jane':", foundIndexObject); // 1
 // Note: `find()` and `findIndex()` can also be used to find objects in an array, based on a condition
 // applied to the properties of the objects.