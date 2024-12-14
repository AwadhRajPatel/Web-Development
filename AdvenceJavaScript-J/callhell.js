let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color change to ${color}!`);
      resolve(changeColor);
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("blue", 2000);
  await changeColor("green", 3000);
  await changeColor("yellow", 4000);
  await changeColor("violet", 5000);
  await changeColor("indigo", 6000);
  await changeColor("purple", 7000);
} 
demo();

/*
changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange ", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
    return changeColor("yelllow", 1000);
  })
  .then(() => {
    console.log("yellow color was completed");
  });

  */

// changeColor("red", 1000, () => {
//   changeColor("blue", 2000, () => {
//     changeColor("green", 3000, () => {
//       changeColor("yellow", 4000, () => {
//         changeColor("purple", 5000);
//       });
//     });
//   });
// });
