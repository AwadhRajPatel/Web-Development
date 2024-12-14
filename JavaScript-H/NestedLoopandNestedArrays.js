let heroes =[['ironman','spiderman','thor'],['superman','wonder woman','flash']];

for(let i=0; i<heroes.length; i++){
    console.log(`Outer Loop Run time List # ${i}`);

    for(let j=0; j<heroes[i].length; j++){
        console.log(`Inner Loop Runing  ${heroes [i][j]}`)
    }
}

let fruits =['mango', 'banana','orange','litchi','pileapple'];

for(fruit of fruits){
    console.log(fruit);
}