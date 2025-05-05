console.log();
console.log("using length method:")
//using String length
let str1= "The Quick Brown Fox";
console.log(`Length of String "${str1}" is:`,str1.length);

console.log()
console.log("Extracting Characters:")
//Extracting Characters from string
//at keyword is new and supports negative indexes
//using 'at' gives us char at a particular index
let charPos1 = -6; //negative value will give us the element at index from backwards
console.log(`The character at index position ${charPos1} is `
    + `'${str1.at(charPos1)}'`);

//using 'charAt' gives us char at a particular index
let charPos2 = 4; //negative value here will show a blank result
// can use this => str1.charAt(str1.length-2) {for negative index old method}
console.log(`The character at index position ${charPos2} is `
    + `'${str1.charAt(charPos2)}'`);

//using 'charCodeAt' which gives returns a UTF-16 code of the character
//(an integer between 0 and 65535)
let charPos3 = 5; //negative value here will give NaN in result
console.log(`The character code for character`
    +` at index position ${charPos3} is `, str1.charCodeAt(charPos3));

//property access
let charPos4 = 10;
let char1 = str1[charPos4]; //can save the extracted character in a new variable
console.log("The character at index position "
    + `${charPos4} is "${char1}"`);
str1[10] = 'X';//cannot change character directly like an array element
//it will not throw any error but it will neither change the string
//this happens because of the strings property of being immutable
console.log(str1); //string remains unchanged

console.log()


//Extracting String Parts
console.log("Extracting String Parts:")

//string slice
//in below example 10 is starting index, 19 is closing index
//well 10 is the point where first slice will happen
//and 19 is where second slice will happen
console.log("String:",str1)
let sliced1 = str1.slice(10,19); //extracts "brown fox" from string
console.log("Example of slice(10,19): ", sliced1);
//if end point is not mentioned, it will slice until the end of string
let sliced2 = str1.slice(4); //extracts "quick brown fox." from string
console.log("example of slice(4): ", sliced2);
//negative parameter will slice in reverse direction
//meaning counting index from end of string
let sliced3 = str1.slice(-4); //extracts "fox" from string
console.log("example of slice(-4): ", sliced3);
//takes both negative parameters as well but uses reverse direction
let sliced4 = str1.slice(-16,-5); //extracts "brown fox" from string
console.log("example of slice(-16,-5): ", sliced4);

console.log();
//substring is similar to slicing, only thing is that substring will consider
//negative parameters as zero and hence we will get the string slice from
//start of string
//below example gives us the same output as for slice(10,19)
let subString1 = str1.substring(10,19); //extracts "brown fox" from string
console.log("Example of Substring (10,19): ", subString1);
//below example gives us the same output as for slice(4)
let subString2 = str1.substring(4); //extracts "quick brown fox." from string
console.log("Example of Substring (4): ", subString2);
//below example will return entire string and double negative parameters
//will return us an empty string
let subString3 = str1.substring(-4); //extracts "brown fox" from string
console.log("Example of Substring (-4): ", subString3);


//using substr
//here the second parameter specifies the length of the extracted part
//the way it appears here, it looks like its deprecated
//if second parameter is not passed then it will extract the entire
//string from the starting point provided
//similarly if negative parameter is used it will count in reverse
let subString4 = str1.substr(10,4); //extracts "brown fox" from string
console.log("Example of Substr (10,4): ", subString4);

console.log();
//Converting string to upper and lower cases
console.log("Change to Upper or Lower Case: ");
console.log("Original String: ", str1);
//For Uppercase
console.log("Example of UpperCase: ", str1.toUpperCase());
//For Lowercase
console.log("Example of LowerCase: ", str1.toLowerCase());


//concatenation
console.log("\nConcatenation examples using concat: ");
str2 = "Jumps over the lazy dog";
console.log("Original String1: ", str1);
console.log("Original String2: ", str2);
console.log("Example1 of Concat: ", str1.concat(" ",str2));
console.log("Example2 of Concat: ", str1.concat(" Jumps over the fence."));

//using includes
//Checks if a string contains a substring.
//Returns true if the substring is found, otherwise false.
console.log("\nexample of using 'includes': ");
console.log("Original String: ", str1);
console.log(str1.includes("Quick"));  // true
//It is case-sensitive. For example, str.includes("quick")
//returns false because "Quick" is not the same as "quick".
//If the starting index is out of bounds, the search will 
//behave as if the index were 0.
console.log(str1.includes("quick"));  // false (case-sensitive)
console.log(str1.includes("brown fox", 10));  // true (starting search from index 10)

//indexOf method
//Returns the index of the first occurrence of a specified value.
//Returns -1 if the value is not found.
console.log("\nindexOf method:");
console.log(str1.indexOf("Quick"));  // 4
console.log(str1.indexOf("fox"));    // 16
//Returns -1 if the substring is not found. If the start parameter
//is specified, the search starts from that index. The search is case-sensitive.
console.log(str1.indexOf("cat"));    // -1 (not found)

//lastIndexOf method
//Returns the index of the last occurrence of a specified value.
console.log("\nlastIndexOf method:");
console.log("Original String: ", str2);
console.log(str2.lastIndexOf("lazy"));  // 28 (last occurrence)
console.log(str2.lastIndexOf("dog"));    // 36
//Returns -1 if not found. It starts searching from the end of the string.
console.log(str2.lastIndexOf("cat"));    // -1 (not found)

//startsWith and endsWith methods
//StartsWith checks if the string starts with a given substring.
//EndsWith checks if the string ends with a given substring.
console.log("\nstartsWith and endsWith methods:");
let str3 = "The Quick Brown Fox";
console.log(str3.startsWith("The"));  // true
console.log(str3.startsWith("quick"));  // false (case-sensitive)
console.log(str3.endsWith("Fox"));     // true
console.log(str3.endsWith("fox"));     // false (case-sensitive)
//Both methods are case-sensitive.
//You can also specify a length to check only part of the string.


//repeat method
//Repeats the string a specified number of times.
//Returns the new repeated string.
console.log("\nrepeat method:");
let str4 = "Hi! ";
console.log(str4.repeat(3));  // "Hi! Hi! Hi! "
console.log("".repeat(5));  // "" (empty string repeated)
//If the argument is negative or Infinity, it will throw an error.
//NaN is coerced to 0, meaning no repetition.


//trim, trimStart, trimEnd methods
//trim removes whitespace from both ends of the string.
//trimStart removes whitespace from the beginning.
//trimEnd removes whitespace from the end.
console.log("\ntrim, trimStart, trimEnd methods:");
let str5 = "  Hello World!  ";
console.log("Original String:",str5)
console.log(str5.trim());      // "Hello World!"
console.log(str5.trimStart()); // "Hello World!  "
console.log(str5.trimEnd());   // "  Hello World!"


//replace and replaceAll methods
//replace replaces only the first occurrence of a substring.
//replaceAll replaces all occurrences of a substring.
console.log("\nreplace and replaceAll methods:");
let str6 = "The Quick Quick Brown Fox";
console.log(str6.replace("Quick", "Fast"));       // "The Fast Quick Brown Fox"
console.log(str6.replaceAll("Quick", "Fast"));    // "The Fast Fast Brown Fox"
//replaceAll is supported from ES2021. It replaces all occurrences, while replace replaces only the first match.


  
//match and matchAll methods
//match returns an array of matches for a regular expression.
//matchAll returns an iterator of matches.
console.log("\nmatch and matchAll methods:");
let str7 = "The Quick Brown Fox jumps over the Quick Fox";
let result1 = str7.match(/Quick/g);
console.log(result1); // ["Quick", "Quick"]

let result2 = str7.matchAll(/Quick/g);
for (let match of result2) {
    console.log(match); // ["Quick", index: 4, input: "...", groups: undefined]
}
//match returns an array of matches, while matchAll returns an iterator with detailed match information.


//split method
//Splits a string into an array of substrings based on a delimiter.
console.log("\nsplit method:");
let str8 = "The Quick Brown Fox";
console.log(str8.split(" "));  // ["The", "Quick", "Brown", "Fox"]
console.log(str8.split("o"));  // ["The Quick Br", "wn F", "x"]
console.log(str8.split());     // ["The Quick Brown Fox"] (no delimiter)


  
//toLocaleLowerCase and toLocaleUpperCase methods
//These methods are locale-sensitive and are useful for internationalization.
console.log("\ntoLocaleLowerCase and toLocaleUpperCase methods:");
let str9 = "Istanbul is a Beautiful City";
console.log(str9.toLocaleLowerCase("tr-TR")); // "istanbul is a beautiful city"
console.log(str9.toLocaleUpperCase("tr-TR")); // "ISTANBUL IS A BEAUTIFUL CITY"
//These methods respect locale-specific casing, for example, Turkish 'i' character.


  
//normalize method
//Normalizes the string to a specified Unicode normalization form.
//This is useful when dealing with characters that can be represented in multiple ways.
console.log("\nnormalize method:");
let str10 = "I\u0307"; // "I" followed by a dot accent
let str11 = "İ"; // Turkish dotted I
console.log(str10.normalize("NFC") === str11); // true
//Normalization helps in ensuring consistent representation of characters.



/*
Notes:
Case Sensitivity: Many of the methods like includes(), indexOf(), startsWith(), etc., are case-sensitive.
Negative Indices: Methods like slice() and substring() behave differently when negative indices are used. slice() supports negative indices, but substring() does not and treats them as 0.
Regular Expressions: match(), replace(), and replaceAll() support regular expressions, so you can use them with patterns for more complex matches.
New Methods: replaceAll() and matchAll() are ES2021 additions and may not be available in older browsers.

*/