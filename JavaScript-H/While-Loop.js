// let i =1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

const favMovie ="avatar"

let guess = prompt("guess my favorite movie")

while(guess!=favMovie){
    if(guess=="quit"){
        console.log("You quit")
        break;
    }
    guess = prompt("Wrong guess please try agine")
}

if(guess == favMovie){
    console.log("Congrats!!");
}


let i =1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}