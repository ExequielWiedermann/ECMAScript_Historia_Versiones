const users = {
    exequiel: {
        pais: 'AR'
    },
    soledad: {
        pais: 'AR'
    }
}

console.log(users ? .exequiel);
//No anda
console.log(users.algo.pais);
//No anda
console.log(users.exequiel.edad);

//Para trabajar con optional
console.log(users ? .algo ? .exequiel);