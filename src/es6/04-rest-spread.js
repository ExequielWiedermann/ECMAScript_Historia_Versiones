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

// spread operator

let person = { name: 'Exequiel', age: 34 };
let country = 'AR';

//De esta forma me entrega la forma que necesito
let data = {...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);