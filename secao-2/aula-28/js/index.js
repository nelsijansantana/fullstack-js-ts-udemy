const num1 = Number(prompt('Digite o seu número'));
const heading = document.querySelector('#heading');
const resp = document.querySelector('#resp');

const num1Sqrt = Math.sqrt(num1);
const num1Integer = Number.isInteger(num1);
const num1IsNaN = Number.isNaN(num1);
const num1Float = Math.floor(num1);
const num1Ceil = Math.ceil(num1);
const num1Fixed = num1.toFixed(2);

heading.innerHTML = `<p>Seu número é ${num1}</p>`;
resp.innerHTML += `<p>Raiz quadrada: ${num1Sqrt}</p>`;
resp.innerHTML += `<p>${num1} é inteiro: ${num1Integer}</p>`;
resp.innerHTML += `<p>É NaN: ${num1IsNaN}</p>`;
resp.innerHTML += `<p>Arredondando para baixo: ${num1Float}</p>`;
resp.innerHTML += `<p>Arredondando para cima: ${num1Ceil}</p>`;
resp.innerHTML += `<p>Com duas casas decimais: ${num1Fixed}</p>`;









