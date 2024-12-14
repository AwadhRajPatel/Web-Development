/*
async function greet(){
    throw "404 page not found";
    return "Hello";
}

greet()
.then((result) =>{
    console.log("promise was resolved");
    console.log("promise was : ", result);
})

.catch((error) =>{
    console.log("promise was rejected with err : ", error);
});

let demo = async()=>{
    return 5;
};
*/


function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num)
            resolve();
        }, 1000);
    });
}

async function demo() {
   await getNum();
   await getNum();
   await getNum();
   getNum();
}
