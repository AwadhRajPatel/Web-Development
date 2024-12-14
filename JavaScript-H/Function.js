function awadh() {
    console.log("AwadhRaj patel");
}
// awadh();

function printName() {
    console.log("Hello Word");
    console.log("Namste India")
}

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
// print1to5();

function isAdult() {
    let age = 20;
    if (age >= 18) {
        console.log("Adult")
    } else {
        console.log("Not Adult")
    }
}
// isAdult();

function isRandom() {
    let rand = Math.floor(Math.random() * 6) + 1
    console.log(rand);
}
// isRandom();


// Arguments Concept

function isArgu(name, age) {
    console.log(`${name} age is ${age}.`)
}
// isArgu("AwadhrajPatel", 22);

function isAvarage(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

// isAvarage(1,2,3);
// isAvarage(10,15,20);

function isMulti(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i)
    }
}
// isMulti(2);



// return Concept

function isSum(a, b) {
    return a + b;
}
//  console.log(isSum(4,3));

function isAge() {
    let age = 12;
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}
//  console.log(isAge());

function isNToSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.log(isNToSum(9));


// Concatnesion Concept
let str = ["hi", 'nice', 'niky', 'bye', "!"];

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}


// function Scope Concept

let sum = 54;  // Global Scope

function calSum(a, b) {
    let sum = a + b;   // Is this Fuction Scope
    console.log(sum)
}
// calSum(1,3)
// console.log(sum);

// Block Scope 

{
    let a = 25;
    // console.log(a)
}

// Lexical Scope

function outerFunct() {
    let x = 5;
    let y = 6;
    function innerFunct() {
        console.log(x);
        console.log(y);
    }
    innerFunct();
}
// outerFunct();

// Question

let greet = "hello";
function changeGreet() {
    let greet = "Namaste";
    console.log("namaste Greet outer Functiom:", greet);
    function innerGreet() {
        console.log("Inner Function print:", greet);
    }
    // innerGreet();
}

// console.log(greet);
// changeGreet();

// Function Expressions

const Issum = function (a, b) {
    return a + b;
}
// console.log(Issum(2,5)); 

// HighOrder Function

function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let isGreet = function () {
    console.log("Hello");
}

// multipleGreet(isGreet,2);


// Higher Order Function  Returns of Function

function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("Wrong request")
    }
}
const testOdd = oddEvenTest("odd");
if (testOdd) testOdd(10); 

const testEven = oddEvenTest("even");
if (testEven) testEven(4); 

const calculator ={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

