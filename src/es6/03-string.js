let hello = 'Hello';
let wolrd = 'Wolrd';
let epicPhrase = hello + ' ' + wolrd + '!';

console.log(epicPhrase);

//Esto puede no estructurarse de buena forma
//Usar Template literals
// `` se llaman comillas francesas
//Sintaxis mucho mejor en ES6
let epicPhrase2 = `${hello} ${wolrd}!`;
console.log(epicPhrase2);

//Multi-line Strings
//esto no es amigable para programar
let lorem = 'Esto es un string \n ' + 'esto es otra línea';
console.log(lorem);

//Mejor forma en es6
let lorem2 = `Esto es una frase epica
la continuación de esa frase epica`;

console.log(lorem2);