// Math
// Functions

// Variable types:
// String, Number, Array, Boolean



// brush teeth
    // wet brush
    // open toothpaste
    // squueze toothpaste
    // close toothpaste
    // raise to mouth
    // move leftt right
    // rise
    // wipe

// take shower
    // Turn on shower
        // turn knob
        // return WATER
    // lather face
    // rinse
    // wipe

// prepare omlette
    // break eggs
    // fry eggs
    // wash pan
    // return omlette

// eat breakfast
    // Open hotpocket
    // stick in microwave
    // take out from microwave
    // chew
    // swallow

    
// function hello(name){
//     console.log("hello", name, "Nice to meet you"); 
// }

// const hello = function(name){
//     console.log("hello", name, "Nice to meet you"); 
// }

const hello = (name) => {
    console.log("hello", name, "Nice to meet you"); 
}

function add(number1, number2) {
    return number1 + number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function divide(num1, num2){
    return num1/num2;
}

function printAllMath(num1, num2){ 
    console.log("Sum is", add(num1, num2));
    console.log("Difference is", subtract(num1, num2));
    console.log("Product is", multiply(num1, num2));
    console.log("Division is", divide(num1, num2));
}
// i added something new
printAllMath(4,2);
// console.log(hasNoReturn());

// TASKS
// write a function that takes in an array of numbers, adds them all together, and RETURNS the result of all of them added together.