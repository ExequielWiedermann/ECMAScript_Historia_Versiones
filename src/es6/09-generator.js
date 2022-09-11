//Así se crean los generator
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Exequiel', 'Soledad', 'Tiziana', 'Laura', 'Fernando']);
console.log(it.next().value);