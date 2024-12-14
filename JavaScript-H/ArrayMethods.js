// push
let carBrand =['BMW','Toyat','Audi','Maruit'];
carBrand.push('Tesla');
// Pop
carBrand.pop();

// Unshift
carBrand.unshift('Tesla','ferrari');

// Shift
carBrand.shift();
console.log(carBrand);

let primary =['red','yellow','green'];
let secondary =['blue','orange','white']

primary.indexOf('yellow');
primary.includes('red');

let newcolor = primary.concat(secondary);
console.log(newcolor)

let modelColor = primary.concat(secondary).reverse();
// console.log(modelColor)

// console.log(primary);

// Arrays Slice Concept
let color =['red','yellow','green','blue','orange','white'];
let Color = color.slice(0,4);
// console.log(Color);

// Splice
let colors =['red','yellow','green','blue','orange','white'];

let newcolors = colors.splice(0,1);
console.log(newcolors);

// Sort Array
let days =['sunday','monday','wednesday','tuesday'];
days.sort();
console.log(days)






