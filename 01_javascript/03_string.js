console.log()
//Strings are Immutable and string operations or methods will
//always give a new string.
//Immutable means string cannot change by calling methods or functions on it
//Strings cannot be changed, only replaced
//Declaring and Assigning a String value to a variable
let car1 = "Ferrari"; //double quotes
let car2 = 'Maserati'; //single quotes
console.log(`car names using basic "" and '': Car1: ${car1} Car2: ${car2}`)


console.log()
//using quotes in a string
let reply1 = "Ferrari! It's Faster"; //using single quote in double quote
//multiple single quotes in double quote
let reply2 = "He said it's 'Maserati'";
//using double quote inside the single quotes
let reply3 = 'Adam says, "Both cars are equally fast"';
console.log("using quotes in a string: ");
console.log("Reply1 (String inside Double Quotes): ",reply1);
console.log("Reply2 (String inside Double Quotes): ",reply2);
console.log("Reply3 (String inside Single Quotes): ",reply3);


console.log()
//using template strings
//Below Statement is an example of using both '' and "" in a string where
//string is enclosed inside ``
//Another advantage of using backticks `` is that you can have
//multiline string like below and also retains the format and
//hence the name Template String.
let review1 =
`           "Superb!"
Just bought my ferrari, it's amazing!`;
console.log("Review1 (String inside ``): ",review1);

//using String Properties
let len1 = review1.length;
console.log(`Length of Review1 is: ${len1} Chars`)

console.log()

//Below Statement is another example of using both '' and ""  and \ in a string where
//string is enclosed inside either `` or '' or ""
let review2 =
"\"GOAT!\" Maserati is unbeatable, I\'m impressed by the engine sound\\roar.";
console.log("Review2 (String using '\\'"
    + "escape character to use '' or \"\" or `` or \\):\n",review2);
//above is also an example of breaking long lines

//more escape characters
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator