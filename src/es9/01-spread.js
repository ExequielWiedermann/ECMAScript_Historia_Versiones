const user = { username: 'Wity', age: 34, pais: 'AR' };
//Forma de propagar la información
const { username, ...values } = user;

console.table(username);
console.log(values);