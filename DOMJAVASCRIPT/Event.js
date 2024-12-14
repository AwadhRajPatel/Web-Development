// let btns = document.querySelector("button");

/*
let  btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);

    // btn.onmouseenter = function(){
    //     console.log("Your entered a button");
    // }
}
 
function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("AwadhRaj");
}

*/

/*
console.dir(btn);

btn.onclick = function(){
    console.log("button was clicked");
    alert("button was clicked")
}
    */


// Event Listener Concept
/*
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    // console.log("Generate random color");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();

    h3.style.backgroundColor = randomColor;
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;

    return color;
}
    */

// this concept
/*
let btn = document.querySelector("button")

let h3 = document.querySelector("h3")

let div = document.querySelector("div")

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
div.addEventListener("click", changeColor);

*/


// Keyboard Events
/*
let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event);
 console.log("button clicked")
});

let  inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("key = ", event.key);
    console.log("code =",event.code);
    console.log("Key was pressed");
});
*/



//form concept
/*
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
     event.preventDefault();

     let user = document.querySelector("#user");
     let pass = document.querySelector("#pass");
     
     console.log(user.value);
     console.log(pass.value);

     let inp = document.querySelector("input");

     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
     console.dir(inp);
     console.log(inp.value)

        // alert("form submitted")
        // console.log("form submitted");
});
*/

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
})

let user  = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("input change");
    console.log("final value = ", this.value);
});