// let arr = [1,2,3,4,5];

// arr.forEach((el) =>{
    // console.log(el)
// });

// arr.forEach(function(el){
    // console.log(el);
// })

//     let print = function (el){
//         console.log(el);
//     }
// arr.forEach(print)

// Map function.

let num =[1,2,3,4,5];

let double = num.map((el)=>{
     return el * el;
});
// console.log(double)

// Filter Function

let nums =[2,4,1,5,6,2,7,8,9];

let even = nums.filter((nums) =>(nums%2==0));
let odd = nums.filter((nums) =>(nums % 2 != 0));

// console.log(odd);
// console.log(even);

// every
[1,2,3,4].every((el) => (el%2==0));

// Reduce Methods

const isNum = [1, 2, 3, 4];
const sum = isNum.reduce((res, el) => {
    // console.log(res);
    return res + el ;

});
// console.log(sum); 


// [1,2,3,4].reduce((res,el) => (res+el));

let arr = [5, 10, 15, 20,40,50]

let max = arr.reduce((max,el) => {
    if(max <el){
        return el;
    }else{
        return max;
    }
});
// console.log(max);


// Default Parameters

function isSum(a,b =3){
    return a + b;
}

// console.log( isSum(5));

// 
// Spread

let isArr = [1, 2, 3, 4, 5, 6, 7,0];

let minVal = Math.min(...isArr);

// console.log(...isArr);
// console.log(minVal);


let data ={
    email:"ark@gmail.com",
    pass:"adcm",
    mob: 147596765663,
}

const datacopy ={...data ,id:125, color:"brown"};
// console.log(datacopy);

// Rest function


function isSsum(...args){{
    return args.reduce((isSsum,el) => isSsum + el);
}}
// console.log(isSsum(50,50,50,50,50));


// function isSums(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("You gave us: ", args[i]);
//     }
// }
// (isSums(1,5,6));

// Destructing 

let names = ["Tony","bruce", "steve","peter"];

let [winner, runnerup] = names;

console.log(winner, runnerup);


// Objects Destructing

const student ={
    name:"Awadhraj",
    age:23,
    course:"b.tech",
    subjects:['english','hindi','math','science'],
    username:"awadhraj",
    password:"adbc"
};

let {username: user, password: secret, city="Mumbai"} = student;
console.log(user);   
console.log(secret);  
console.log(city);    