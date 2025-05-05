// Function Declaration
// Function declaration is the most common way to define a function.
// It defines a function with a name and can be called before its declaration due to hoisting.
console.log("\nFunction Declaration:");
function greet() {
  console.log("Hello, World!");
}
greet(); // Calls the function greet() to execute the code inside it.
// Note: Function declarations are hoisted to the top of their scope, so you can call the function before its declaration.


// Function Expression
// A function expression is when a function is assigned to a variable. It is not hoisted.
console.log("\nFunction Expression:");
const greetExpression = function() {
  console.log("Hello from a function expression!");
};
greetExpression(); // Calls the function stored in greetExpression.
// Note: Function expressions are not hoisted, meaning the function cannot be called before it is defined.


 // Arrow Function
 // Arrow functions provide a concise way to write functions. They do not have their own `this` context.
 console.log("\nArrow Function:");
 const greetArrow = () => {
   console.log("Hello from an arrow function!");
 };
 greetArrow(); // Calls the arrow function.
// Note: Arrow functions are more compact and do not have their own `this`, instead they inherit `this` from the surrounding scope.


 // Function with Parameters
 // Functions can accept parameters, which are values passed to the function for it to work with.
 console.log("\nFunction with Parameters:");
 function greetWithName(name) {
   console.log(`Hello, ${name}!`);
 }
 greetWithName("Ronit"); // Passes the argument "ronit" to the function.
// Note: Parameters are placeholders that accept values when the function is called. In this case, "name" is the parameter.


 // Function with Default Parameters
 // Default parameters allow you to specify a default value for a parameter if no argument is passed.
 console.log("\nFunction with Default Parameters:");
 function greetWithDefault(name = "Guest") {
   console.log(`Hello, ${name}!`);
 }
 greetWithDefault(); // Uses default parameter "Guest"
 greetWithDefault("Bob"); // Uses provided argument "Bob"
// Note: If no value is provided for `name`, the function will use the default value "Guest".


 // Return Statement
 // Functions can return a value using the `return` keyword. If no return is specified, it returns `undefined`.
 console.log("\nReturn Statement:");
 function add(a, b) {
   return a + b;
 }
 const result = add(3, 5);
 console.log("Result of add(3, 5):", result); // 8
// Note: The `return` keyword specifies the value that the function will send back to the caller. If no return is provided, `undefined` is returned.


 // Function Scope
 // A function creates its own local scope, meaning variables defined inside the function are not accessible outside.
 console.log("\nFunction Scope:");
 function outer() {
   let outerVar = "I'm outside!";
   function inner() {
     let innerVar = "I'm inside!";
     console.log(outerVar); // Accesses outer function's variable
     console.log(innerVar); // Accesses inner function's variable
   }
   inner();
   // console.log(innerVar); // This would throw an error because innerVar is not accessible outside the inner function.
 }
 outer();
// Note: Variables declared inside a function are local to that function and cannot be accessed from outside the function.


 // Anonymous Function
 // An anonymous function is a function that does not have a name. It is often used as a function expression.
 console.log("\nAnonymous Function:");
 setTimeout(function() {
   console.log("This is an anonymous function!");
 }, 1000);
// Note: The function inside `setTimeout()` is an anonymous function. It doesn't have a name but can still be executed.


 // Immediately Invoked Function Expression (IIFE)
 // An IIFE is a function that runs as soon as it is defined.
 console.log("\nImmediately Invoked Function Expression (IIFE):");
 (function() {
   console.log("I am an IIFE!");
 })();
// Note: The function is enclosed in parentheses to avoid syntax errors.


 // Function Hoisting
 // Function declarations are hoisted to the top of the scope, but function expressions are not.
 console.log("\nFunction Hoisting:");
hoistedFunction(); // Works fine because function declarations are hoisted.
function hoistedFunction() {
  console.log("I was hoisted!");
}
// Note: In JavaScript, function declarations are hoisted to the top, meaning they can be called before they are declared.


// Function as an Argument (Callback Functions)
// Functions can be passed as arguments to other functions. This is often used in asynchronous operations.
console.log("\nFunction as an Argument:");
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function greetPerson(callback) {
  callback("Charlie"); // Call the passed-in function (callback)
}

greetPerson(sayHello); // Pass sayHello function as a callback
// Note: The function `sayHello` is passed as an argument to the `greetPerson`
// function and is executed inside it.


 // Returning a Function from Another Function
 // A function can return another function, which is often used for closures.
 console.log("\nReturning a Function from Another Function:");
 function multiplier(factor) {
   return function(num) {
     return num * factor;
   };
 }
 const multiplyBy2 = multiplier(2); // Returns a function that multiplies by 2
 console.log(multiplyBy2(5)); // 10
 const multiplyBy3 = multiplier(3); // Returns a function that multiplies by 3
 console.log(multiplyBy3(5)); // 15
// Note: The `multiplier` function returns another function, which "remembers" the `factor` argument in its closure. This is an example of a closure.


 // Arrow Functions and `this`
 // Arrow functions do not have their own `this` context; they inherit `this` from the surrounding scope.
 console.log("\nArrow Function and `this`:");
const obj = {
  name: "Ronit",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // Arrow function uses `this` from the `greet` method's context
    }, 1000);
  }
};
obj.greet(); // "Hello, Ronit"
// Note: Arrow functions inherit `this` from the scope in which they are defined. In this case, `this.name` refers to the `name` property of `obj`.


 // Rest Parameters
 // Rest parameters allow you to pass a variable number of arguments to a function.
 console.log("\nRest Parameters:");
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10)); // 15
// Note: The `...` syntax collects all the arguments into an array. This allows you to pass any number of arguments to the function.


 // Spread Syntax in Function Calls
 // Spread syntax can be used to pass an array of arguments into a function as individual arguments.
 console.log("\nSpread Syntax in Function Calls:");
function sum2(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum2(...numbers)); // 6
// Note: The `...` spread syntax "spreads" the elements of an array into individual arguments when calling a function.