const student = {
    name: "Arjun",
    age: 45,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
        console.log(`${this.name} got avg mark = ${avg}`);
    },
};
// student.getAvg();

console.log("hello");
console.log("hello");
// let a = 25;
try {
    console.log(a);
} catch (error) {
    console.log("Caught an error.... a is not defined");
    console.log(error);
}

console.log("hello2");
console.log("hello2");

// Arrow Function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 5));

// Ipmlicity Return
const mul = (a, b) => (a * b);
console.log(mul(5, 5));

// SetTimeOut

console.log("!hi there!");
setTimeout(() => {
    console.log("How are you!");
}, 4000);
console.log("welcome to");

// SetInterval

console.log("Patel@452.com")
 let id = setInterval(() => {
    console.log("Hello there how are you")
},2000);
console.log(id);
clearInterval(id);

console.log("Awadhraj")
 let id2 = setInterval(() => {
    console.log("Hello there! Coaching tommower")
},3000);
console.log(id2);
clearInterval(id2);
// 

const isStudent ={
    name:"awadh",
    marks:95,
    prop:this,  // global scope

    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>{
        console.log(this);
        return this.marks;
    },
    getInfo: function(){
        setTimeout(() => {
            console.log(this)   //Student Objects
        }, 2000);
    },   
    getInfo2: function(){
        setTimeout(function() {    
            console.log(this);  //Windown Objects
        }, 3000);
    },
};



let id3 = setInterval(() => {
    console.log("Hello Namsate")
}, 2000);

setTimeout(() => {
    clearInterval(id3);
    console.log("clear interval ranning")
}, 10000);





