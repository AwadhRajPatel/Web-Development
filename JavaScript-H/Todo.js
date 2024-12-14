/*
let todo = [];

let req = prompt("pls enter your request");

console.log(req);

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("---------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("---------------");
  } else if (req == "add") {
    let task = prompt("pls enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") { 
    let idx = prompt("pls enter the task index");
    todo.splice(idx, 1);
    console.log("task delete");
  } else {
    console.log("wrong request");
  }

  req = prompt("pls enter your request");
}
*/

let btn  = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
  let item = document.createElement("li");
  item.innerText = inp.value;

    let delbtn = document.createElement("button");

    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

  item.appendChild(delbtn); 
  ul.appendChild(item);

  // console.log(inp.value);
  inp.value ="";
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    console.log(listItem);
    listItem.remove();
    console.log("delete")
  } 
});

