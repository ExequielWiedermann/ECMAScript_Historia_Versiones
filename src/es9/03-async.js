async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hola');

async function arrayDeNombres(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const nombres = arrayDeNombres(['Exequiel', 'Soledad', 'Tiziana', 'Laura']);
console.log('Después');