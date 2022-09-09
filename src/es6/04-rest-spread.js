//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);
console.log(a, b);

//Como funciona con objetos
//Object destruturing
let user = { username: 'Exequiel', age: 34 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);