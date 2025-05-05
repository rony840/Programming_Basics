fun main (){
    //declaration using "var" keyword
    var language = "French"     //can be reassigned
    //mutable
    //declaration using "val" keyword
    val score = 95      //cannot be reassigned or redeclared
    //immutable
    //"val" is more like a "const" in javascript and "final" variable in java
    println("Language: ${language}")
    println("Score: ${score}")
    language = "English"
    println("New Language is: ${language}")
    //score cannot be changed since it has been declared using "val" its fixed

    //defining type when declaring variables
    var day: String = "Monday"
    println("Today is: ${day}")

    //similar concept like hoisting in javascript
    val hoursWorked: Int    //only memory & datatype has been assigned here but value is not yet assigned
    hoursWorked = 8     //assigning value later
    println("Hours worked: ${hoursWorked} hours")
    println("\nDifferent data types in Kotlin are: \n")
    println("* Numbers\n* Characters\n* Booleans\n* Arrays")
    numberTypes()
    characterType()
    booleanType()
    arrayType()
    stringType()
}
//built in kotlin types:
/*
 * Numbers
 * Characters
 * Booleans
 * Arrays
 * Strings
 */

 fun numberTypes(){
    // Byte, Short, Int, Long, Float, Double
    
    // The Byte data type can have values from -128 to 127
    // (8-bit signed two's complement integer).
    println("\nDifferent data types under type Number: \n")
    val range: Byte = 112
    println("Example of Byte Data type: ${range}")

    //The Short data type can have values from -32768 to 32767
    //(16-bit signed two's complement integer).
    val temperature: Short = -11245
    println("Example of Short Data type: ${temperature}")

    //The Int data type can have values from -2^31 to 2^(31)-1
    //(32-bit signed two's complement integer).
    val score: Int =  100000
    println("Example of Int Data type: ${score}")
    val score2 = 10    //this will be considered as Int automatically

    //The Long data type can have values from -2^63 to 2^(63)-1
    //(64-bit signed two's complement integer).
    val highestScore: Long = 9999999
    println("Example of Long Data type: ${highestScore}")
    val distance = 10000000000 //this will be considered as Long automatically
    val distance2 = 100L //alternate way of assigning type Long to a variable

    //The Double type is a double-precision 64-bit floating point.
    val speed = 999.5
    println("Example of Double Data type: ${speed}")

    //The Float data type is a single-precision 32-bit floating point.
    val fuel = 19.5F    //F represents the float data type
    println("Example of Float Data type: ${fuel}")

    //handling scenario where type is unsure
    //If you are not sure what number value a variable will be assigned in the program,
    //you can specify it as Number type.
    var test: Number = 12.2
    println("Example of casting specific types from Number: ${test}")

    test = 12
    // Int smart cast from Number
    println("Example of Int smart cast from Number: ${test}")

    test = 120L
    // Long smart cast from Number
    println("Example of Long smart cast from Number: ${test}")
 }

 fun characterType(){
    println("\nCharacter Datatype: \n")
    val letter: Char
    letter = 'k'
    println("Example of character datatype: ${letter}")
    //var letter: Char = 65 <===  this will throw error in kotlin however
    //In java you can do something like ===> char letter = 65;
 }

 fun booleanType(){
    println("\nBoolean Datatype:")
    //just a regular boolean variable nothing new here heh
    val flag = true
    println("Example of boolean datatype: ${flag}")
 }

 fun arrayType(){
    println("\nArray Datatype:")
    //thats one way to declare an array
    val numberArr = arrayOf(1, 2, 3, 4, 5)
    println("Example of Integer Array datatype:")
    for (element in numberArr) {
        print("$element ")
    }
    //declaring a type specific array
    val stringArr = arrayOf<String>("Alpha","Beta","Charlie","Delta")
    println("\nExample of String Array datatype:")
    for (element in stringArr) {
        print("$element ")
    }
 }

 fun stringType(){
    println("\n\nString Datatype:")
    //just a regular string but you cannot print string in '' single quotes,
    //it has to be double quotes "" and also you cannot use backticks ``
    var str = "hello, this is an example of string data"
    println(str)
 }