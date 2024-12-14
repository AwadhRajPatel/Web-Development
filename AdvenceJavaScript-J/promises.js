// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "apna code",
//   () => {
//     console.log(" success: your data was saves");
//   },
//   () => {
//     console.log("failure: week connection. data not saved");
//   }
// );

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

savetoDB("Apna Code")
    .then((result) => {
        console.log(" data 1 : Promise was resolved");
        console.log(result);
        return savetoDB("helloworld");
    })
    .then((result) => {
        console.log("data 2 : saved");
        console.log(result);
        return savetoDB("AwadhRaj");
    })
    .then((result) => {
        console.log("data 3 : saved");
        console.log(result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(error);
    });
