const max = prompt("enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit")
        break;
    }
    if(guess == random){
        console.log("You are right! Congrats! random number was", random);
        break;
    }else if(guess < random){
       guess = prompt(" hints: Your guess was too small. please try again");
    }else{
        guess = prompt("hints: Your guess was too large. please try again");
    }
}