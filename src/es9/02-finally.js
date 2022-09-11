//
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Estoy en la verdad');
        } else {
            reject('Estoy en lo falso');
        }
    })
}

//Palabras reservadas
//Entra primero al catch y después al then
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));