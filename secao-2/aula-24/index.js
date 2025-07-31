// String são indexáveis. Cada caractere tem um indice que começa com 0.
let umaString = 'Um texto';

//Para obter o índice posso usar o [posição] com a posição ou o .charAt(posição)
console.log(umaString.charAt(6));

//Para saber qual indice começa uma palavra eu uso o indexOf()
console.log(umaString.indexOf('texto'));
//Também posso começar de trás para frente com lastIndexOf()
console.log(umaString.lastIndexOf('x', 5));
//Expressão regular
console.log(umaString.match(/[a-z]/g));
// replace
console.log(umaString.replace(/Um/, 'Outro'));
//Ver tamanho da string .length. 
console.log(umaString.length);
//Fatiar string
console.log(umaString.slice(3));
console.log(umaString.split(" ")); //Separa em array pelo index colocado no caso aqui o espaço
