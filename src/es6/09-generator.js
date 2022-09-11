//Así se crean los generator
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}