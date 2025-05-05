console.log();
//using 'let' keyword for variables
console.log("Now using keyword 'let' for variables: ");
let a; //Variable Declaration - happens when only memory is assigned to variable and no value
a = "In Variable A = " + 10; //Variable Initialization - happens when value is assigned to variable
console.log("Global value of 'a': ", a);

//cannot declare and initialize same variable using let
//Example --> "let a = 20;" in same block


//block variable
{
    let b = "In Variable B = " + 20;
    console.log("Value of 'b': ", b);
}

//this will throw error
{
    let c = "In Variable C = " + 30;
}
try{
    console.log("Value of 'c': ",c); //calling 'c' out of the local block
}
catch{
    console.log("Error! cannot access the variable c declared inside a scope");
}

//Global Declaration using let
let d = "In Variable D = " + 40;
{
    d = "Reinit Variable D inside block with " + 50; //Re-initialization of d
}
console.log(d);

console.log();
//Using 'var' keyword
console.log("Now Using Keyword 'var' for variables: ");
var e = "In Variable E = " + 60; //Variable Initialization - happens when value is assigned to variable
console.log("Value of 'e': ", e);

//redeclaring same variable using var in same block
var e = "Redeclared instance of E = " + 70; //redeclare in same block
console.log("2nd Value of 'e': ", e);

//reinitializing same variable using var in same block
var e = "Reinitialized instance of E = " + 80; //redeclare in same block
console.log("3rd Value of 'e': ", e);

//block instance of 'e' using var
{    
    e = "Block Instance of E = " + 90;
} 
console.log("4th Value of 'e': ", e);

//declaring inside a block using var
{
    var f = "In Variable f = " + 100;
}
//calling variable declared using 'var' outside the block
console.log("Value of 'f': ",f);



console.log();

//Using 'const' keyword
console.log("Now Using Keyword 'const' for variables: ");
const g = "In constant G = " + 9.8;
console.log("Value of G = ", g);
try{
    g = 10;
}
catch{
    console.log("Cant Update value of G = ", g);
}
//redeclaring a const outside scope
{
    const h = "Value of H inside scope = " + 120;
    console.log("1st Value of H",h);
}
const h = "Value of H outside scope = " + 150;
console.log("2nd Value of H",h);

console.log();

console.log("Scenario of hoisting variables, they show undefined as value is not yet assigned");
//Scenario of Hoisting Variables
let radius;
var diameter;
console.log("Radius: ",radius);
console.log("Diameter: ",diameter);

//cannot hoist a variable with keyword const
console.log("for example: ' const pi; ' is not valid");

console.log();

