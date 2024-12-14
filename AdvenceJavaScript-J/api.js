/*
let jsonRes =
   '{ "fact": "A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).", "length": 156 }';

console.log(jsonRes)

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let student = {
    name:"Awadhraj",
    marks:95,
};

console.log(student)
*/


let btn = document.querySelector("button");

/*
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async () =>{
    let fact = await getFact();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
*/

let url1 = "https://dog.ceo/api/breeds/image/random";

// ImageGet
btn.addEventListener("click", async ()=>{
    let link = await getImage();
    console.log(link)
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
}) 

async function getImage(){
    try {
        let res = await axios.get(url1);
        return res.data.message;
        // console.log(res.data.message)
    } catch (error) {
        console.log("Error - ", error);
        return "No Image found"
    }
}
// getImage();



/*
async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log("Error - ", error);
        return "No fact found"
    }
}
getFact();
*/

/*
async function getFact() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    // console.log(res);
}
*/
// getFact();

/*
fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();
})
.then((data) =>{
    console.log(data);
})

.catch((err)=>{
    console.log("Error - ", err)
});
*/