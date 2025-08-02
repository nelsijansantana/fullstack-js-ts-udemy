let num1 = 2;
let num2 = 2.53456567788795;

console.log(num1.toString() + num2); //Transformando em string
console.log(num1 + num2);
console.log(num1.toString(2)); //Representação binária
console.log(num2.toFixed(2)); //Arredonda
console.log(Number.isInteger(num2));

let temp = num1 * 'ola';
console.log(temp);
console.log(Number.isNaN(temp));