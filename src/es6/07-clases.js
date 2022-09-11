//declarando
class User {};

//Instancia de una clase
const newUser = new User();

class user {
    //métodos
    saludo() {
        return 'Hola';
    }
};

const persona = new user();
console.log(persona.saludo());

const otraCosa = new user();
console.log(persona.saludo());

//Constructor
class user {
    //Constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
}