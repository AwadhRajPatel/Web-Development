/*
let smallImage = document.getElementsByClassName("oldImg");

for(let i =0; i<smallImage.length; i++){
    smallImage[i].src="assets/Spider-Man.png";
    console.log(`Value of image no ${i} is Change`);
    // console.dir(smallImage[i].src);
}

let tag = document.getElementsByTagName("p")[1];
console.log(tag)

*/

/*   Query Selectory

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll(".oldImg"));

*/


// const para = document.querySelector("p");

// console.dir(para);

// console.log(para.innerHTML);

// console.log(para.textContent);

// console.log(para.innerText);


// let links = document.querySelectorAll(".box a");

// for(links of links){
//     links.style.color = "purple";
// }

// for(let i=0; i<links.length;i++){
//     links[i].style.color = "purple";
// }

// let img = document.querySelector('img');
// console.dir(img.classList)


// let heading = document.querySelector('h1');
// console.dir(heading.classList);

// heading.classList.add("green");


// Practice

let para = document.createElement("p");

para.innerText = "Hey I'm red";

document.querySelector("body").append(para);

para.classList.add("red");

// Second Question

let h3 = document.createElement("h3");

h3.innerText = "Hey I'm blue h3!";

document.querySelector("body").append(h3);

h3.classList.add("blue");

// Third Question

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText = "I'm in a div";
para1.innerText  = "Me Too!";

div.append(h1);
div.append(para1);
div.classList.add("box");

document.querySelector("body").append(div);
