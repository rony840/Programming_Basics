/*
 * Basic Syntax and variable declarations
 * main function is the entry point of every kotlin program
 * kotlin is interoperable with java
 * no need to create classes explicitly
 * kotlin creates classes automatically based on the entered filename
 */
fun main() {
    println("Hello, world!!!")
    println("Lets learn Kotlin.") 	//printing on new line
    println(1+2)					//mathematical operation that prints the sum
    var var1 = "John"			//creating a variable using var
    val val1 =  "is sick"		//creating a variable using val
    //for val keyword, you cannot change or reassign the variable value
    println(var1)				//printing variables individually
    println(val1)
    println("${var1} ${val1}") //println(var1,val1) will throw an error
    //above feature is called string interpolation
    var var2: Int
    var2 = 10                   //assigning value to the hoisted variable
    println("printing hoisted variable ${var2}") //println('${var2}') printing variables in single quotes wont work
    
}

// just like most common programming language we can comment using double "//" or "/* */"