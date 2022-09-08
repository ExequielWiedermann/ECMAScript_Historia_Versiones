//Creando variable
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

//Trabajando con Let
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//Trabajando con const
const animal = 'Dog';
animal = 'Cat';
console.log(animal);
//Las const no se puede reasignar su valor, 
//porque es un const

//Trabajando Var, Let y Const por una función
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; //Function scope
        let fruit2 = 'Kiwi'; //No se puede acceder es con block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();