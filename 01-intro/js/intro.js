
function sum(a,b) {
  return a+b;
}

let res = sum (1,2);
console.log(res);

// Funcion primer orden
const fSum = sum;
res = fSum(4,3);
console.log(res);

// Funcion orden superior
function operation(fn, a, b) {
  console.log("se hace algo");
  console.log(fn(a,b));
}

res = operation(fSum, 14, 7);

// Arrow function
let fA = () => console.log('Arrow function');

fA();

operation ((aa,bb)=>aa*bb, 5, 5)