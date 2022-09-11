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
    saludo() {
        return 'Hola'
    }
}

const exequiel = new user();

// trabajando con el this, hace referencia
// al elemento padre que lo contiene

class user {
    constructor(name) {
            this.name = name;
        }
        //métodos
    speak() {
        return 'Hola';
    }
    saludo() {
        return `${this.speak()} ${this.name}`;
    }
}

const alguien = new user('Tiziana');
console.log(alguien.saludo());